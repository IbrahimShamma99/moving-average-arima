"use strict";
// Async compilation ('arima/async')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var native_async_js_1 = __importDefault(require("../wasm/native-async.js"));
var native_bin_js_1 = __importDefault(require("../wrapper/native.bin.js"));
var load_js_1 = __importDefault(require("./load.js"));
var modulePromise = native_async_js_1.default({ wasmBinary: native_bin_js_1.default });
exports.default = modulePromise.then(load_js_1.default);
