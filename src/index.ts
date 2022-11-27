// Sync compilation (default)

import Module from '../wasm/native-sync.js';
import bin from '../wrapper/native.bin.js';
import loadARIMA from './load.js';

const moduleObject = Module({ wasmBinary: bin })
export const arimaModule = loadARIMA(moduleObject);
