"use strict";
var ARIMA = require('../../src');
var ts = [41, 71, 0, 40, 40, 40, 0, 40, 20, 1, 10, 1, 90, 0, 0, 0, 0, 0];
for (var i = 0; i < 100; i++) {
    var _a = new ARIMA({
        method: 0,
        optimizer: 6,
        p: 1,
        d: 1,
        q: 2,
        s: 11,
        P: 1,
        D: 1,
        Q: 1,
        verbose: false // Output model analysis to console
    }).fit(ts).predict(4), pred = _a[0], errors = _a[1];
    console.log(pred, errors);
}
