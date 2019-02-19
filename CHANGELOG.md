# 2019-02-19

- export missing utils from lib folder
- add `main` key to package.json
- add new utils `branches`, `leaves`, `toHash`
- upgrade code-runner glob patters in .vscode/settings.json
- rebuild yarn.lock and regenerate dependency tree
- sync environment with latest features in [lib-node]

[lib-node]: https://github.com/juanmait/seedjs/tree/master/seed-lib-node

# 2019-02-04

- import all from `traverse` instead of the `default`
- add `keepBranchesIncluding` fn
- remove `.npmignore` (include `files` in package.json)
- config babel to add ts support in jest tests
- expose [traverse] and types from main file
- remove comments from `tsconfig.json`
- add `@babel/preset-typescript` and `@babel/preset-env`
- create a `.babelrc` config file

# 2019-02-03

- add some install and usage info to readme
- add `@types/traverse` as a _prod_ dependency
- add package name to `treets`
- add `.npmignore`
- add [traverse] dependency
- add declaration generation (`.d.ts`)
- add `dist/index.js` as "main" to package.json
- remove `./dist` from `.gitignore`

# 2019-02-03

- remove [ts-jest] & [jest-extended]
- upgrade all dependencies
- add CHANGELOG.md file

[ts-jest]: https://github.com/kulshekhar/ts-jest
[jest-extended]: https://github.com/jest-community/jest-extended
[traverse]: https://www.npmjs.com/package/traverse
