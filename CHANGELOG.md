# 2019-08-18

- upgrade dependencies
  ```
  @babel/cli                                  ^7.2.3  →    ^7.5.5
  @babel/core                                 ^7.3.3  →    ^7.5.5
  @babel/node                                 ^7.2.2  →    ^7.5.5
  @babel/plugin-proposal-class-properties     ^7.3.3  →    ^7.5.5
  @babel/plugin-proposal-object-rest-spread   ^7.3.2  →    ^7.5.5
  @babel/preset-env                           ^7.3.1  →    ^7.5.5
  @types/jest                                ^24.0.5  →  ^24.0.17
  @types/node                                ^11.9.4  →   ^12.7.2
  babel-eslint                               ^10.0.1  →   ^10.0.2
  babel-jest                                 ^24.1.0  →   ^24.9.0
  concurrently                                ^4.1.0  →    ^4.1.2
  eslint                                     ^5.14.0  →    ^6.1.0
  eslint-config-prettier                      ^4.0.0  →    ^6.0.0
  husky                                       ^1.3.1  →    ^3.0.4
  jest                                       ^24.1.0  →   ^24.9.0
  lint-staged                                 ^8.1.4  →    ^9.2.3
  prettier                                   ^1.16.4  →   ^1.18.2
  prettier-eslint-cli                         ^4.7.1  →    ^5.0.0
  tslint                                     ^5.12.1  →   ^5.18.0
  typescript                                  ^3.3.3  →    ^3.5.3
  ```

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
