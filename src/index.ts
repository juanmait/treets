import _traverse from 'traverse'
export { TraverseContext, Traverse } from 'traverse'
export const traverse = _traverse
export * from './lib/keepBranchesIncluding'

export type Primitive = boolean | number | string | null | undefined

export interface GenericObj {
  [key: string]: any
}

export interface Hashed {
  [key: string]: Primitive
}
