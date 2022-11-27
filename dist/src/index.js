"use strict";
// Sync compilation (default)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.arimaModule = void 0;
var native_sync_js_1 = __importDefault(require("../wasm/native-sync.js"));
var native_bin_js_1 = __importDefault(require("../wrapper/native.bin.js"));
var load_js_1 = __importDefault(require("./load.js"));
var moduleObject = native_sync_js_1.default({ wasmBinary: native_bin_js_1.default });
exports.arimaModule = load_js_1.default(moduleObject);
