import { traverse, GenericObj, Primitive } from '../index'

/**
 * return only the leaves of a tree. A leave can be of type:
 * `boolean`, `number`, `string`, `null`, `undefined`.
 *
 * @param obj a traversable object
 */
export const leaves = (obj: GenericObj): Primitive[] =>
  traverse(obj).reduce(function(acc, node) {
    if (this.isLeaf) {
      acc.push(node)
    }

    return acc
  }, [])
