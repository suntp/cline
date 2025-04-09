// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               v6.30.0
// source: browser.proto

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

export const protobufPackage = "cline";

/** Request to launch a browser */
export interface LaunchBrowserRequest {
  /** URL to navigate to */
  url: string;
  /** Browser window width (default: 900) */
  width: number;
  /** Browser window height (default: 600) */
  height: number;
}

/** Request to click in the browser */
export interface ClickBrowserRequest {
  /** Browser session ID */
  sessionId: string;
  /** X coordinate */
  x: number;
  /** Y coordinate */
  y: number;
}

/** Request to type text in the browser */
export interface TypeBrowserRequest {
  /** Browser session ID */
  sessionId: string;
  /** Text to type */
  text: string;
}

/** Request to scroll the browser */
export interface ScrollBrowserRequest {
  /** Browser session ID */
  sessionId: string;
  /** Direction to scroll (up, down) */
  direction: string;
  /** Amount to scroll in pixels */
  amount: number;
}

/** Request to close the browser */
export interface CloseBrowserRequest {
  /** Browser session ID */
  sessionId: string;
}

/** Response from a browser action */
export interface BrowserActionResponse {
  /** Browser session ID */
  sessionId: string;
  /** Screenshot as bytes */
  screenshot: Buffer;
  /** Console log entries */
  consoleLog: ConsoleLogEntry[];
  /** Whether the action was successful */
  success: boolean;
  /** Error message if any */
  error: string;
}

/** Console log entry */
export interface ConsoleLogEntry {
  /** Log level (info, warning, error) */
  level: string;
  /** Log text */
  text: string;
  /** Log timestamp */
  timestamp: number;
}

function createBaseLaunchBrowserRequest(): LaunchBrowserRequest {
  return { url: "", width: 0, height: 0 };
}

export const LaunchBrowserRequest: MessageFns<LaunchBrowserRequest> = {
  encode(message: LaunchBrowserRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.width !== 0) {
      writer.uint32(16).int32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(24).int32(message.height);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LaunchBrowserRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLaunchBrowserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.url = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.width = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.height = reader.int32();
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

  fromJSON(object: any): LaunchBrowserRequest {
    return {
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
    };
  },

  toJSON(message: LaunchBrowserRequest): unknown {
    const obj: any = {};
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.width !== 0) {
      obj.width = Math.round(message.width);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LaunchBrowserRequest>, I>>(base?: I): LaunchBrowserRequest {
    return LaunchBrowserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LaunchBrowserRequest>, I>>(object: I): LaunchBrowserRequest {
    const message = createBaseLaunchBrowserRequest();
    message.url = object.url ?? "";
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseClickBrowserRequest(): ClickBrowserRequest {
  return { sessionId: "", x: 0, y: 0 };
}

export const ClickBrowserRequest: MessageFns<ClickBrowserRequest> = {
  encode(message: ClickBrowserRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.x !== 0) {
      writer.uint32(16).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).int32(message.y);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ClickBrowserRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClickBrowserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.x = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.y = reader.int32();
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

  fromJSON(object: any): ClickBrowserRequest {
    return {
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      x: isSet(object.x) ? globalThis.Number(object.x) : 0,
      y: isSet(object.y) ? globalThis.Number(object.y) : 0,
    };
  },

  toJSON(message: ClickBrowserRequest): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.x !== 0) {
      obj.x = Math.round(message.x);
    }
    if (message.y !== 0) {
      obj.y = Math.round(message.y);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClickBrowserRequest>, I>>(base?: I): ClickBrowserRequest {
    return ClickBrowserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClickBrowserRequest>, I>>(object: I): ClickBrowserRequest {
    const message = createBaseClickBrowserRequest();
    message.sessionId = object.sessionId ?? "";
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseTypeBrowserRequest(): TypeBrowserRequest {
  return { sessionId: "", text: "" };
}

export const TypeBrowserRequest: MessageFns<TypeBrowserRequest> = {
  encode(message: TypeBrowserRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TypeBrowserRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTypeBrowserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.text = reader.string();
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

  fromJSON(object: any): TypeBrowserRequest {
    return {
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      text: isSet(object.text) ? globalThis.String(object.text) : "",
    };
  },

  toJSON(message: TypeBrowserRequest): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TypeBrowserRequest>, I>>(base?: I): TypeBrowserRequest {
    return TypeBrowserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TypeBrowserRequest>, I>>(object: I): TypeBrowserRequest {
    const message = createBaseTypeBrowserRequest();
    message.sessionId = object.sessionId ?? "";
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseScrollBrowserRequest(): ScrollBrowserRequest {
  return { sessionId: "", direction: "", amount: 0 };
}

export const ScrollBrowserRequest: MessageFns<ScrollBrowserRequest> = {
  encode(message: ScrollBrowserRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.direction !== "") {
      writer.uint32(18).string(message.direction);
    }
    if (message.amount !== 0) {
      writer.uint32(24).int32(message.amount);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ScrollBrowserRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScrollBrowserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.direction = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.amount = reader.int32();
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

  fromJSON(object: any): ScrollBrowserRequest {
    return {
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      direction: isSet(object.direction) ? globalThis.String(object.direction) : "",
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
    };
  },

  toJSON(message: ScrollBrowserRequest): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.direction !== "") {
      obj.direction = message.direction;
    }
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScrollBrowserRequest>, I>>(base?: I): ScrollBrowserRequest {
    return ScrollBrowserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScrollBrowserRequest>, I>>(object: I): ScrollBrowserRequest {
    const message = createBaseScrollBrowserRequest();
    message.sessionId = object.sessionId ?? "";
    message.direction = object.direction ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseCloseBrowserRequest(): CloseBrowserRequest {
  return { sessionId: "" };
}

export const CloseBrowserRequest: MessageFns<CloseBrowserRequest> = {
  encode(message: CloseBrowserRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CloseBrowserRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloseBrowserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
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

  fromJSON(object: any): CloseBrowserRequest {
    return { sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "" };
  },

  toJSON(message: CloseBrowserRequest): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CloseBrowserRequest>, I>>(base?: I): CloseBrowserRequest {
    return CloseBrowserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CloseBrowserRequest>, I>>(object: I): CloseBrowserRequest {
    const message = createBaseCloseBrowserRequest();
    message.sessionId = object.sessionId ?? "";
    return message;
  },
};

function createBaseBrowserActionResponse(): BrowserActionResponse {
  return { sessionId: "", screenshot: Buffer.alloc(0), consoleLog: [], success: false, error: "" };
}

export const BrowserActionResponse: MessageFns<BrowserActionResponse> = {
  encode(message: BrowserActionResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.screenshot.length !== 0) {
      writer.uint32(18).bytes(message.screenshot);
    }
    for (const v of message.consoleLog) {
      ConsoleLogEntry.encode(v!, writer.uint32(26).fork()).join();
    }
    if (message.success !== false) {
      writer.uint32(32).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(42).string(message.error);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BrowserActionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowserActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.screenshot = Buffer.from(reader.bytes());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.consoleLog.push(ConsoleLogEntry.decode(reader, reader.uint32()));
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.success = reader.bool();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.error = reader.string();
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

  fromJSON(object: any): BrowserActionResponse {
    return {
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      screenshot: isSet(object.screenshot) ? Buffer.from(bytesFromBase64(object.screenshot)) : Buffer.alloc(0),
      consoleLog: globalThis.Array.isArray(object?.consoleLog)
        ? object.consoleLog.map((e: any) => ConsoleLogEntry.fromJSON(e))
        : [],
      success: isSet(object.success) ? globalThis.Boolean(object.success) : false,
      error: isSet(object.error) ? globalThis.String(object.error) : "",
    };
  },

  toJSON(message: BrowserActionResponse): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.screenshot.length !== 0) {
      obj.screenshot = base64FromBytes(message.screenshot);
    }
    if (message.consoleLog?.length) {
      obj.consoleLog = message.consoleLog.map((e) => ConsoleLogEntry.toJSON(e));
    }
    if (message.success !== false) {
      obj.success = message.success;
    }
    if (message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BrowserActionResponse>, I>>(base?: I): BrowserActionResponse {
    return BrowserActionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BrowserActionResponse>, I>>(object: I): BrowserActionResponse {
    const message = createBaseBrowserActionResponse();
    message.sessionId = object.sessionId ?? "";
    message.screenshot = object.screenshot ?? Buffer.alloc(0);
    message.consoleLog = object.consoleLog?.map((e) => ConsoleLogEntry.fromPartial(e)) || [];
    message.success = object.success ?? false;
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseConsoleLogEntry(): ConsoleLogEntry {
  return { level: "", text: "", timestamp: 0 };
}

export const ConsoleLogEntry: MessageFns<ConsoleLogEntry> = {
  encode(message: ConsoleLogEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.level !== "") {
      writer.uint32(10).string(message.level);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConsoleLogEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsoleLogEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.level = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.text = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.timestamp = longToNumber(reader.int64());
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

  fromJSON(object: any): ConsoleLogEntry {
    return {
      level: isSet(object.level) ? globalThis.String(object.level) : "",
      text: isSet(object.text) ? globalThis.String(object.text) : "",
      timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
    };
  },

  toJSON(message: ConsoleLogEntry): unknown {
    const obj: any = {};
    if (message.level !== "") {
      obj.level = message.level;
    }
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConsoleLogEntry>, I>>(base?: I): ConsoleLogEntry {
    return ConsoleLogEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConsoleLogEntry>, I>>(object: I): ConsoleLogEntry {
    const message = createBaseConsoleLogEntry();
    message.level = object.level ?? "";
    message.text = object.text ?? "";
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

/** Browser service for browser automation */
export type BrowserServiceService = typeof BrowserServiceService;
export const BrowserServiceService = {
  /** Launch a browser and navigate to a URL */
  launchBrowser: {
    path: "/cline.BrowserService/LaunchBrowser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LaunchBrowserRequest) => Buffer.from(LaunchBrowserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LaunchBrowserRequest.decode(value),
    responseSerialize: (value: BrowserActionResponse) => Buffer.from(BrowserActionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BrowserActionResponse.decode(value),
  },
  /** Click at coordinates in the browser */
  clickBrowser: {
    path: "/cline.BrowserService/ClickBrowser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ClickBrowserRequest) => Buffer.from(ClickBrowserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ClickBrowserRequest.decode(value),
    responseSerialize: (value: BrowserActionResponse) => Buffer.from(BrowserActionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BrowserActionResponse.decode(value),
  },
  /** Type text in the browser */
  typeBrowser: {
    path: "/cline.BrowserService/TypeBrowser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: TypeBrowserRequest) => Buffer.from(TypeBrowserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => TypeBrowserRequest.decode(value),
    responseSerialize: (value: BrowserActionResponse) => Buffer.from(BrowserActionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BrowserActionResponse.decode(value),
  },
  /** Scroll the browser */
  scrollBrowser: {
    path: "/cline.BrowserService/ScrollBrowser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScrollBrowserRequest) => Buffer.from(ScrollBrowserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ScrollBrowserRequest.decode(value),
    responseSerialize: (value: BrowserActionResponse) => Buffer.from(BrowserActionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BrowserActionResponse.decode(value),
  },
  /** Close the browser */
  closeBrowser: {
    path: "/cline.BrowserService/CloseBrowser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CloseBrowserRequest) => Buffer.from(CloseBrowserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CloseBrowserRequest.decode(value),
    responseSerialize: (value: BrowserActionResponse) => Buffer.from(BrowserActionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BrowserActionResponse.decode(value),
  },
} as const;

export interface BrowserServiceServer extends UntypedServiceImplementation {
  /** Launch a browser and navigate to a URL */
  launchBrowser: handleUnaryCall<LaunchBrowserRequest, BrowserActionResponse>;
  /** Click at coordinates in the browser */
  clickBrowser: handleUnaryCall<ClickBrowserRequest, BrowserActionResponse>;
  /** Type text in the browser */
  typeBrowser: handleUnaryCall<TypeBrowserRequest, BrowserActionResponse>;
  /** Scroll the browser */
  scrollBrowser: handleUnaryCall<ScrollBrowserRequest, BrowserActionResponse>;
  /** Close the browser */
  closeBrowser: handleUnaryCall<CloseBrowserRequest, BrowserActionResponse>;
}

export interface BrowserServiceClient extends Client {
  /** Launch a browser and navigate to a URL */
  launchBrowser(
    request: LaunchBrowserRequest,
    callback: (error: ServiceError | null, response: BrowserActionResponse) => void,
  ): ClientUnaryCall;
  launchBrowser(
    request: LaunchBrowserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: BrowserActionResponse) => void,
  ): ClientUnaryCall;
  launchBrowser(
    request: LaunchBrowserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: BrowserActionResponse) => void,
  ): ClientUnaryCall;
  /** Click at coordinates in the browser */
  clickBrowser(
    request: ClickBrowserRequest,
    callback: (error: ServiceError | null, response: BrowserActionResponse) => void,
  ): ClientUnaryCall;
  clickBrowser(
    request: ClickBrowserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: BrowserActionResponse) => void,
  ): ClientUnaryCall;
  clickBrowser(
    request: ClickBrowserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: BrowserActionResponse) => void,
  ): ClientUnaryCall;
  /** Type text in the browser */
  typeBrowser(
    request: TypeBrowserRequest,
    callback: (error: ServiceError | null, response: BrowserActionResponse) => void,
  ): ClientUnaryCall;
  typeBrowser(
    request: TypeBrowserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: BrowserActionResponse) => void,
  ): ClientUnaryCall;
  typeBrowser(
    request: TypeBrowserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: BrowserActionResponse) => void,
  ): ClientUnaryCall;
  /** Scroll the browser */
  scrollBrowser(
    request: ScrollBrowserRequest,
    callback: (error: ServiceError | null, response: BrowserActionResponse) => void,
  ): ClientUnaryCall;
  scrollBrowser(
    request: ScrollBrowserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: BrowserActionResponse) => void,
  ): ClientUnaryCall;
  scrollBrowser(
    request: ScrollBrowserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: BrowserActionResponse) => void,
  ): ClientUnaryCall;
  /** Close the browser */
  closeBrowser(
    request: CloseBrowserRequest,
    callback: (error: ServiceError | null, response: BrowserActionResponse) => void,
  ): ClientUnaryCall;
  closeBrowser(
    request: CloseBrowserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: BrowserActionResponse) => void,
  ): ClientUnaryCall;
  closeBrowser(
    request: CloseBrowserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: BrowserActionResponse) => void,
  ): ClientUnaryCall;
}

export const BrowserServiceClient = makeGenericClientConstructor(
  BrowserServiceService,
  "cline.BrowserService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): BrowserServiceClient;
  service: typeof BrowserServiceService;
  serviceName: string;
};

function bytesFromBase64(b64: string): Uint8Array {
  return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
}

function base64FromBytes(arr: Uint8Array): string {
  return globalThis.Buffer.from(arr).toString("base64");
}

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
