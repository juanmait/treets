import _traverse from 'traverse';
export { TraverseContext, Traverse } from 'traverse';
export declare const traverse: typeof _traverse;
export * from './lib/keepBranchesIncluding';
export declare type Primitive = boolean | number | string | null | undefined;
export interface GenericObj {
    [key: string]: any;
}
export interface Hashed {
    [key: string]: Primitive;
}
//# sourceMappingURL=index.d.ts.map