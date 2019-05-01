"use strict";

var xsjs = require("@sap/xsjs");
var xsenv = require("@sap/xsenv");
var port = process.env.PORT || 3000;

var options = {
    anonymous : true, // remove to authenticate calls
    redirectUrl : "/index.xsjs"
};

// configure HANA
try {
    options = Object.assign(options, xsenv.getServices({ hana: {tag: "hana"} }));
} catch (err) {
    console.log("[WARN]", err.message);
}

//Конфигугрируем UAA
xsjs(options).listen(port);
console.log("Server listening on port %d", port);