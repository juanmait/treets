"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
test('it works', () => {
    const final = _1.keepBranchesIncluding(['mundo', 'tan'], {
        hola: {
            hermoso: {
                planeta: 'tierra',
            },
            este: {
                es: {
                    un: {
                        mundo: {
                            super: 'hermoso',
                        },
                        tan: {
                            pero: {
                                tan: ['tan', 'hermoso'],
                            },
                        },
                        que: {
                            quiero: {
                                vivirlo: ['a', 'pleno'],
                            },
                        },
                    },
                },
            },
            mundo: {
                tan: 'mágico',
            },
        },
    });
    expect(final).toMatchInlineSnapshot(`
Object {
  "hola": Object {
    "este": Object {
      "es": Object {
        "un": Object {
          "mundo": Object {
            "super": "hermoso",
          },
          "tan": Object {
            "pero": Object {
              "tan": Array [
                "tan",
                "hermoso",
              ],
            },
          },
        },
      },
    },
    "mundo": Object {
      "tan": "mágico",
    },
  },
}
`);
});
//# sourceMappingURL=keepBranchesIncluding.test.js.map