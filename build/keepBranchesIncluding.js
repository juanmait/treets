"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keepBranchesIncluding = void 0;

var _ = require(".");

const keepBranchesIncluding = (search, obj) => {
  const {
    value
  } = (0, _.traverse)(obj).reduce(function (acc) {
    // do not traverse any further if the current node is an array
    if (Array.isArray(this.node)) {
      this.block(); // ==> skip further traversing of this branch
    }

    if (!this.isRoot) {
      // if the current segment of the current branch (this.key) match
      // any of the given search words, then include this branch into our
      // collection but block any further traversing on it
      if (this.key && search.includes(this.key)) {
        this.block(); // ==> skip further traversing of this branch

        this.path.reduce((pathAcc, path, index) => {
          pathAcc.push(path);

          if (!acc.has(pathAcc)) {
            if (this.level === index + 1) {
              acc.set(pathAcc, this.node);
            } else {
              acc.set(pathAcc, {});
            }
          }

          return pathAcc;
        }, []);
      }
    }

    return acc;
  }, (0, _.traverse)({}));

  if (Object.keys(value).length) {
    return value;
  }

  return null;
};

exports.keepBranchesIncluding = keepBranchesIncluding;
//# sourceMappingURL=keepBranchesIncluding.js.map