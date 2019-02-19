import { traverse, Traverse, TraverseContext } from '..'

interface GenericObj {
  [key: string]: any
}

/**
 * given an object, keep only those branches containing the given segments. The
 * resulting object will maintain the structure of the original object but
 * excluding from it any branch that doesn't match with some of the given
 * segments
 * @param search string to search for
 * @param obj object to search in
 */
export const keepBranchesIncluding = (
  search: string[],
  obj: GenericObj
): GenericObj | null => {
  const { value } = traverse(obj).reduce(function(
    this: TraverseContext,
    acc: Traverse<{}>
  ) {
    // do not traverse any further if the current node is an array
    if (Array.isArray(this.node)) {
      this.block() // ==> skip further traversing of this branch
    }

    if (!this.isRoot) {
      // if the current segment of the current branch (this.key) match
      // any of the given search words, then include this branch into our
      // collection but block any further traversing on it
      if (this.key && search.includes(this.key)) {
        this.block() // ==> skip further traversing of this branch
        this.path.reduce<string[]>((pathAcc, path, index) => {
          pathAcc.push(path)
          if (!acc.has(pathAcc)) {
            if (this.level === index + 1) {
              acc.set(pathAcc, this.node)
            } else {
              acc.set(pathAcc, {})
            }
          }
          return pathAcc
        }, [])
      }
    }

    return acc
  },
  traverse({}))

  if (Object.keys(value).length) {
    return value
  }

  return null
}
