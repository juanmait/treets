import { traverse, Traverse } from '.'

interface GenericObj {
  [key: string]: any
}

export const keepBranchesIncluding = (
  search: string[],
  obj: GenericObj,
): GenericObj | null => {
  const { value } = traverse(obj).reduce(function(acc: Traverse<{}>) {
    if (Array.isArray(this.node)) {
      this.block()
    }

    if (!this.isRoot) {
      if (this.key && search.includes(this.key)) {
        this.block()
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
  }, traverse({}))

  if (Object.keys(value).length) {
    return value
  }

  return null
}
