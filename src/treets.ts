// import { traverse, Traverse } from './'

// import { ITraversable } from 'traverse';
export type Path = string
export type Primitive = string | boolean | number | undefined | null | symbol
export type Map = [Path, Primitive]

interface Traversable {
  [key: string]: any
  [key: number]: any
}

// @ts-ignore
export const getValuesOnKey = <T extends Traversable>(obj: T) => {
  return true
}
