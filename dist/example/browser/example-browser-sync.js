"use strict";
var ARIMA = require("../../dist/src/"); // Change '../../' to 'arima'
var ts = Array(10)
    .fill(0)
    .map(function (_, i) { return i + Math.random() / 5; });
var arima = new ARIMA({
    p: 2,
    d: 1,
    q: 2,
    P: 0,
    D: 0,
    Q: 0,
    S: 0,
    verbose: false,
}).train(ts);
var _a = arima.predict(10), pred = _a[0], errors = _a[1];
document.getElementById("output").innerText = "\nSync compilation\n\nData: \n" + ts.join("\n") + "\n\nPredictions: \n" + pred.join("\n") + "\n\nErrors: \n" + errors.join("\n") + "\n";
