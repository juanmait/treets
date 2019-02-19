import { traverse, GenericObj, Primitive, Hashed } from '../index'

export const convertToHash = (obj: GenericObj): Hashed =>
  traverse(obj).reduce(function(acc) {
    if (this.isLeaf) {
      const pathArr = this.path
      const pathStr = pathArr.join(':')

      const leafValue: Primitive = this.node

      acc.push([pathStr, leafValue])
    }

    return acc
  }, [])
