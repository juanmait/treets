import { traverse, GenericObj } from '../index'

/**
 * return only the leaves of a tree. A leave can be of type:
 * `boolean`, `number`, `string`, `null`, `undefined`.
 *
 * @param obj a traversable object
 */
export const branches = (obj: GenericObj): string[] =>
  traverse(obj).reduce(function(acc) {
    if (this.isLeaf) {
      acc.push(this.path.join('.'))
    }

    return acc
  }, [])
