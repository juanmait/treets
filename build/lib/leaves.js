"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.leaves = void 0;

var _index = require("../index");

/**
 * return only the leaves of a tree. A leave can be of type:
 * `boolean`, `number`, `string`, `null`, `undefined`.
 *
 * @param obj a traversable object
 */
const leaves = obj => (0, _index.traverse)(obj).reduce(function (acc, node) {
  if (this.isLeaf) {
    acc.push(node);
  }

  return acc;
}, []);

exports.leaves = leaves;
//# sourceMappingURL=leaves.js.map