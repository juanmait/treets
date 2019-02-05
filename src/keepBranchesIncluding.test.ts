import { keepBranchesIncluding } from '.'

test('it works', () => {
  const final = keepBranchesIncluding(['mundo', 'tan'], {
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
  })

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
`)
})
