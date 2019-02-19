interface GenericObj {
    [key: string]: any;
}
/**
 * given an object, keep only those branches containing the given segments. The
 * resulting object will maintain the structure of the original object but
 * excluding from it any branch that doesn't match with some of the given
 * segments
 * @param search string to search for
 * @param obj object to search in
 */
export declare const keepBranchesIncluding: (search: string[], obj: GenericObj) => GenericObj | null;
export {};
//# sourceMappingURL=keepBranchesIncluding.d.ts.map