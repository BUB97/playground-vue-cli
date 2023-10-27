"use strict";

const webpackPluginDemo = require("..");
const assert = require("assert").strict;

assert.strictEqual(webpackPluginDemo(), "Hello from webpackPluginDemo");
console.info("webpackPluginDemo tests passed");
