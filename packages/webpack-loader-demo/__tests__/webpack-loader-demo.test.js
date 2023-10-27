"use strict";

const webpackLoaderDemo = require("..");
const assert = require("assert").strict;

assert.strictEqual(webpackLoaderDemo(), "Hello from webpackLoaderDemo");
console.info("webpackLoaderDemo tests passed");
