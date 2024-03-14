import { Terms } from "../../src/Domain/Terms.js"
import { Random } from "../../src/ValueObject/Random.js"
import { jest } from "@jest/globals"

describe('Terms', () => {
    let random = new Random()

    jest
        .spyOn(random, 'integer')
        .mockImplementationOnce(() => 0)

    it('get new term', () => {
        let terms = new Terms(['a', 'b'], random)

        terms.next()

        expect(terms.current()).toBe('a')
    })
})


/**
 * [ ] Gerar um novo termo
 * [ ] Retorna histórico de palavras
 * [ ] Verifica se um termo é igual a palavra atual
 * [x] Conta quantidade de palavra
 */