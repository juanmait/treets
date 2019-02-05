"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
exports.keepBranchesIncluding = (search, obj) => {
    const { value } = _1.traverse(obj).reduce(function (acc) {
        if (Array.isArray(this.node)) {
            this.block();
        }
        if (!this.isRoot) {
            if (this.key && search.includes(this.key)) {
                this.block();
                this.path.reduce((pathAcc, path, index) => {
                    pathAcc.push(path);
                    if (!acc.has(pathAcc)) {
                        if (this.level === index + 1) {
                            acc.set(pathAcc, this.node);
                        }
                        else {
                            acc.set(pathAcc, {});
                        }
                    }
                    return pathAcc;
                }, []);
            }
        }
        return acc;
    }, _1.traverse({}));
    if (Object.keys(value).length) {
        return value;
    }
    return null;
};
//# sourceMappingURL=keepBranchesIncluding.js.map