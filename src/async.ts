// Async compilation ('arima/async')

import Module from '../wasm/native-async.js';
import bin from '../wrapper/native.bin.js';
import loadARIMA from './load.js';

const modulePromise = Module({ wasmBinary: bin })

export default modulePromise.then(loadARIMA);
