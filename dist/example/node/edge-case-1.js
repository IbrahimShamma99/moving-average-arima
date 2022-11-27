"use strict";
var arima = require('../../');
var ts = [0, 0, 0, 0, 11, 9.99, 14];
var _a = arima(ts, 2, {
    method: 0,
    optimizer: 6,
    p: 3,
    q: 0,
    d: 1,
    verbose: true
}), pred = _a[0], errors = _a[1];
console.log(pred, errors);
