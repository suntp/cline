#!/usr/bin/env python3

"""
Release Notes Generator

This script generates release notes using OpenRouter's API with the Claude 3.5 Sonnet model.
It takes the changesets and git information as input and produces formatted release notes
suitable for both GitHub releases and VSCode marketplace.

Process:
1. Read changesets from input
2. Get git diff and commit information
3. Generate release notes using OpenRouter API
4. Format and output the notes

Command line arguments:
    --github-output: Path to GitHub Actions output file
    --changesets: JSON string of changesets
    --version: Version being released
    --release-type: Either 'release' or 'pre-release'
"""

import os
import sys
import json
import argparse
import subprocess
from typing import List, Dict, Optional
import requests

def parse_args():
    parser = argparse.ArgumentParser(description="Generate release notes using OpenRouter API")
    parser.add_argument(
        "--github-output",
        help="Path to GitHub Actions output file"
    )
    parser.add_argument(
        "--changesets",
        help="JSON string of changesets",
        required=True
    )
    parser.add_argument(
        "--version",
        help="Version being released",
        required=True
    )
    parser.add_argument(
        "--release-type",
        choices=["release", "pre-release"],
        default="release",
        help="Type of release"
    )
    return parser.parse_args()

def get_git_info(version: str) -> Dict[str, str]:
    """Get git diff and commit information since the last release."""
    try:
        # Get the last release tag
        tags = subprocess.check_output(
            ["git", "tag", "--sort=-v:refname"],
            text=True
        ).strip().split("\n")
        last_tag = next((tag for tag in tags if not tag.endswith("-pre")), "v0.0.0")
        
        # Get commit messages
        commit_log = subprocess.check_output(
            ["git", "log", f"{last_tag}...HEAD", "--pretty=format:%s"],
            text=True
        ).strip()
        
        # Get diff stats
        diff_stats = subprocess.check_output(
            ["git", "diff", "--stat", f"{last_tag}...HEAD"],
            text=True
        ).strip()
        
        return {
            "commit_log": commit_log,
            "diff_stats": diff_stats,
            "last_tag": last_tag
        }
    except subprocess.CalledProcessError as e:
        print(f"Error getting git info: {str(e)}")
        return {
            "commit_log": "",
            "diff_stats": "",
            "last_tag": "v0.0.0"
        }

def generate_prompt(changesets: List[Dict], git_info: Dict[str, str], version: str, is_prerelease: bool) -> str:
    """Generate the prompt for the OpenRouter API."""
    changes_by_type = {
        "major": [],
        "minor": [],
        "patch": []
    }
    
    for change in changesets:
        change_type = change["type"].lower()
        if "major" in change_type:
            changes_by_type["major"].append(change["content"])
        elif "minor" in change_type:
            changes_by_type["minor"].append(change["content"])
        elif "patch" in change_type:
            changes_by_type["patch"].append(change["content"])
    
    changes_text = "\n\n".join([
        f"Major Changes:\n{chr(10).join(changes_by_type['major'])}" if changes_by_type["major"] else "",
        f"Minor Changes:\n{chr(10).join(changes_by_type['minor'])}" if changes_by_type["minor"] else "",
        f"Patch Changes:\n{chr(10).join(changes_by_type['patch'])}" if changes_by_type["patch"] else ""
    ]).strip()
    
    return f"""Please generate release notes for version {version}{' (Pre-release)' if is_prerelease else ''} of the Cline VSCode extension.

Changesets:
{changes_text}

Git Information:
Commit Messages:
{git_info['commit_log']}

Changes Overview:
{git_info['diff_stats']}

Please format the release notes in markdown with:
1. A short, descriptive title (max 8 words) with heading level 2
2. A brief summary paragraph explaining the key changes and their impact
3. Optional sections (include only if relevant):
   - 🚀 New Features & Improvements (heading level 3)
   - 🐛 Bugs Fixed (heading level 3)
   - 🔧 Other Updates (heading level 3)

Focus on user-facing changes and their benefits. Ignore version bumps, dependency updates, and minor syntax changes.
Be concise but informative, highlighting the most important changes first."""

def generate_release_notes(prompt: str) -> Optional[str]:
    """Generate release notes using OpenRouter API with Claude 3.5 Sonnet."""
    OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
    if not OPENROUTER_API_KEY:
        print("Error: OPENROUTER_API_KEY environment variable not set")
        return None
        
    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "HTTP-Referer": "https://github.com/cline/cline",
        "Content-Type": "application/json"
    }
    
    data = {
        "model": "anthropic/claude-3.5-sonnet",
        "messages": [{
            "role": "user",
            "content": prompt
        }],
        "temperature": 0.7
    }
    
    try:
        response = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers=headers,
            json=data
        )
        response.raise_for_status()
        
        return response.json()["choices"][0]["message"]["content"]
    except Exception as e:
        print(f"Error calling OpenRouter API: {str(e)}")
        if hasattr(e, 'response'):
            print(f"Response: {e.response.text}")
        return None

def main():
    args = parse_args()
    
    # Parse changesets
    try:
        changesets = json.loads(args.changesets)
    except json.JSONDecodeError:
        print("Error: Invalid changesets JSON")
        sys.exit(1)
    
    # Get git information
    git_info = get_git_info(args.version)
    
    # Generate prompt
    prompt = generate_prompt(
        changesets,
        git_info,
        args.version,
        args.release_type == "pre-release"
    )
    
    # Generate release notes
    release_notes = generate_release_notes(prompt)
    if not release_notes:
        print("Error: Failed to generate release notes")
        sys.exit(1)
    
    print("Generated Release Notes:")
    print("-" * 80)
    print(release_notes)
    print("-" * 80)
    
    # Write outputs for GitHub Actions
    if args.github_output:
        with open(args.github_output, "a") as f:
            f.write(f"release_notes<<EOF\n{release_notes}\nEOF\n")

if __name__ == "__main__":
    main()
