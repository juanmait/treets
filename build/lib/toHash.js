"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToHash = void 0;

var _index = require("../index");

const convertToHash = obj => (0, _index.traverse)(obj).reduce(function (acc) {
  if (this.isLeaf) {
    const pathArr = this.path;
    const pathStr = pathArr.join(':');
    const leafValue = this.node;
    acc.push([pathStr, leafValue]);
  }

  return acc;
}, []);

exports.convertToHash = convertToHash;
//# sourceMappingURL=toHash.js.map