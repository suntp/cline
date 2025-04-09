// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               v6.30.0
// source: file.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientUnaryCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { Empty } from "./common";

export const protobufPackage = "cline";

export interface ReadFileRequest {
  path: string;
}

export interface WriteFileRequest {
  path: string;
  content: string;
}

export interface ListFilesRequest {
  path: string;
  recursive: boolean;
}

export interface ListFilesResponse {
  files: FileInfo[];
}

export interface ExtractTextRequest {
  path: string;
}

export interface StringResponse {
  value: string;
}

export interface FileInfo {
  path: string;
  isDirectory: boolean;
  size: number;
  modifiedTime: number;
}

function createBaseReadFileRequest(): ReadFileRequest {
  return { path: "" };
}

export const ReadFileRequest: MessageFns<ReadFileRequest> = {
  encode(message: ReadFileRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ReadFileRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadFileRequest {
    return { path: isSet(object.path) ? globalThis.String(object.path) : "" };
  },

  toJSON(message: ReadFileRequest): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadFileRequest>, I>>(base?: I): ReadFileRequest {
    return ReadFileRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadFileRequest>, I>>(object: I): ReadFileRequest {
    const message = createBaseReadFileRequest();
    message.path = object.path ?? "";
    return message;
  },
};

function createBaseWriteFileRequest(): WriteFileRequest {
  return { path: "", content: "" };
}

export const WriteFileRequest: MessageFns<WriteFileRequest> = {
  encode(message: WriteFileRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.content !== "") {
      writer.uint32(18).string(message.content);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): WriteFileRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.content = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WriteFileRequest {
    return {
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      content: isSet(object.content) ? globalThis.String(object.content) : "",
    };
  },

  toJSON(message: WriteFileRequest): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WriteFileRequest>, I>>(base?: I): WriteFileRequest {
    return WriteFileRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WriteFileRequest>, I>>(object: I): WriteFileRequest {
    const message = createBaseWriteFileRequest();
    message.path = object.path ?? "";
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseListFilesRequest(): ListFilesRequest {
  return { path: "", recursive: false };
}

export const ListFilesRequest: MessageFns<ListFilesRequest> = {
  encode(message: ListFilesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.recursive !== false) {
      writer.uint32(16).bool(message.recursive);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListFilesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFilesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.recursive = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListFilesRequest {
    return {
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      recursive: isSet(object.recursive) ? globalThis.Boolean(object.recursive) : false,
    };
  },

  toJSON(message: ListFilesRequest): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.recursive !== false) {
      obj.recursive = message.recursive;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFilesRequest>, I>>(base?: I): ListFilesRequest {
    return ListFilesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFilesRequest>, I>>(object: I): ListFilesRequest {
    const message = createBaseListFilesRequest();
    message.path = object.path ?? "";
    message.recursive = object.recursive ?? false;
    return message;
  },
};

function createBaseListFilesResponse(): ListFilesResponse {
  return { files: [] };
}

export const ListFilesResponse: MessageFns<ListFilesResponse> = {
  encode(message: ListFilesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.files) {
      FileInfo.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListFilesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFilesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.files.push(FileInfo.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListFilesResponse {
    return { files: globalThis.Array.isArray(object?.files) ? object.files.map((e: any) => FileInfo.fromJSON(e)) : [] };
  },

  toJSON(message: ListFilesResponse): unknown {
    const obj: any = {};
    if (message.files?.length) {
      obj.files = message.files.map((e) => FileInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFilesResponse>, I>>(base?: I): ListFilesResponse {
    return ListFilesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFilesResponse>, I>>(object: I): ListFilesResponse {
    const message = createBaseListFilesResponse();
    message.files = object.files?.map((e) => FileInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExtractTextRequest(): ExtractTextRequest {
  return { path: "" };
}

export const ExtractTextRequest: MessageFns<ExtractTextRequest> = {
  encode(message: ExtractTextRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExtractTextRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtractTextRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExtractTextRequest {
    return { path: isSet(object.path) ? globalThis.String(object.path) : "" };
  },

  toJSON(message: ExtractTextRequest): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExtractTextRequest>, I>>(base?: I): ExtractTextRequest {
    return ExtractTextRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExtractTextRequest>, I>>(object: I): ExtractTextRequest {
    const message = createBaseExtractTextRequest();
    message.path = object.path ?? "";
    return message;
  },
};

function createBaseStringResponse(): StringResponse {
  return { value: "" };
}

export const StringResponse: MessageFns<StringResponse> = {
  encode(message: StringResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StringResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.value = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StringResponse {
    return { value: isSet(object.value) ? globalThis.String(object.value) : "" };
  },

  toJSON(message: StringResponse): unknown {
    const obj: any = {};
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StringResponse>, I>>(base?: I): StringResponse {
    return StringResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StringResponse>, I>>(object: I): StringResponse {
    const message = createBaseStringResponse();
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseFileInfo(): FileInfo {
  return { path: "", isDirectory: false, size: 0, modifiedTime: 0 };
}

export const FileInfo: MessageFns<FileInfo> = {
  encode(message: FileInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.isDirectory !== false) {
      writer.uint32(16).bool(message.isDirectory);
    }
    if (message.size !== 0) {
      writer.uint32(24).int64(message.size);
    }
    if (message.modifiedTime !== 0) {
      writer.uint32(32).int64(message.modifiedTime);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FileInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.isDirectory = reader.bool();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.size = longToNumber(reader.int64());
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.modifiedTime = longToNumber(reader.int64());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileInfo {
    return {
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      isDirectory: isSet(object.isDirectory) ? globalThis.Boolean(object.isDirectory) : false,
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      modifiedTime: isSet(object.modifiedTime) ? globalThis.Number(object.modifiedTime) : 0,
    };
  },

  toJSON(message: FileInfo): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.isDirectory !== false) {
      obj.isDirectory = message.isDirectory;
    }
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    if (message.modifiedTime !== 0) {
      obj.modifiedTime = Math.round(message.modifiedTime);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileInfo>, I>>(base?: I): FileInfo {
    return FileInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileInfo>, I>>(object: I): FileInfo {
    const message = createBaseFileInfo();
    message.path = object.path ?? "";
    message.isDirectory = object.isDirectory ?? false;
    message.size = object.size ?? 0;
    message.modifiedTime = object.modifiedTime ?? 0;
    return message;
  },
};

export type FileServiceService = typeof FileServiceService;
export const FileServiceService = {
  /** ReadFile reads the content of a file at the specified path */
  readFile: {
    path: "/cline.FileService/ReadFile",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ReadFileRequest) => Buffer.from(ReadFileRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ReadFileRequest.decode(value),
    responseSerialize: (value: StringResponse) => Buffer.from(StringResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StringResponse.decode(value),
  },
  /** WriteFile writes content to a file at the specified path */
  writeFile: {
    path: "/cline.FileService/WriteFile",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: WriteFileRequest) => Buffer.from(WriteFileRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => WriteFileRequest.decode(value),
    responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  /** ListFiles lists files and directories at the specified path */
  listFiles: {
    path: "/cline.FileService/ListFiles",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFilesRequest) => Buffer.from(ListFilesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListFilesRequest.decode(value),
    responseSerialize: (value: ListFilesResponse) => Buffer.from(ListFilesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListFilesResponse.decode(value),
  },
  /** ExtractTextFromFile extracts text from a file (e.g., PDF, DOCX) */
  extractTextFromFile: {
    path: "/cline.FileService/ExtractTextFromFile",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ExtractTextRequest) => Buffer.from(ExtractTextRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ExtractTextRequest.decode(value),
    responseSerialize: (value: StringResponse) => Buffer.from(StringResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StringResponse.decode(value),
  },
} as const;

export interface FileServiceServer extends UntypedServiceImplementation {
  /** ReadFile reads the content of a file at the specified path */
  readFile: handleUnaryCall<ReadFileRequest, StringResponse>;
  /** WriteFile writes content to a file at the specified path */
  writeFile: handleUnaryCall<WriteFileRequest, Empty>;
  /** ListFiles lists files and directories at the specified path */
  listFiles: handleUnaryCall<ListFilesRequest, ListFilesResponse>;
  /** ExtractTextFromFile extracts text from a file (e.g., PDF, DOCX) */
  extractTextFromFile: handleUnaryCall<ExtractTextRequest, StringResponse>;
}

export interface FileServiceClient extends Client {
  /** ReadFile reads the content of a file at the specified path */
  readFile(
    request: ReadFileRequest,
    callback: (error: ServiceError | null, response: StringResponse) => void,
  ): ClientUnaryCall;
  readFile(
    request: ReadFileRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: StringResponse) => void,
  ): ClientUnaryCall;
  readFile(
    request: ReadFileRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: StringResponse) => void,
  ): ClientUnaryCall;
  /** WriteFile writes content to a file at the specified path */
  writeFile(
    request: WriteFileRequest,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  writeFile(
    request: WriteFileRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  writeFile(
    request: WriteFileRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  /** ListFiles lists files and directories at the specified path */
  listFiles(
    request: ListFilesRequest,
    callback: (error: ServiceError | null, response: ListFilesResponse) => void,
  ): ClientUnaryCall;
  listFiles(
    request: ListFilesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListFilesResponse) => void,
  ): ClientUnaryCall;
  listFiles(
    request: ListFilesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListFilesResponse) => void,
  ): ClientUnaryCall;
  /** ExtractTextFromFile extracts text from a file (e.g., PDF, DOCX) */
  extractTextFromFile(
    request: ExtractTextRequest,
    callback: (error: ServiceError | null, response: StringResponse) => void,
  ): ClientUnaryCall;
  extractTextFromFile(
    request: ExtractTextRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: StringResponse) => void,
  ): ClientUnaryCall;
  extractTextFromFile(
    request: ExtractTextRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: StringResponse) => void,
  ): ClientUnaryCall;
}

export const FileServiceClient = makeGenericClientConstructor(FileServiceService, "cline.FileService") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): FileServiceClient;
  service: typeof FileServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
