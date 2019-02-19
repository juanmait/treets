import _traverse from 'traverse'
export { TraverseContext, Traverse } from 'traverse'
export const traverse = _traverse
export * from './lib/keepBranchesIncluding'
export * from './lib/toHash'
export * from './lib/leaves'
export * from './lib/branches'

export type Primitive = boolean | number | string | null | undefined

export interface GenericObj {
  [key: string]: any
}

export interface Hashed {
  [key: string]: Primitive
}
