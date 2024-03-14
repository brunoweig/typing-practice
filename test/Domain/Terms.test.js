import { Terms } from "../../src/Domain/Terms.js"
import { Random } from "../../src/ValueObject/Random.js"
import { jest } from "@jest/globals"

describe('Terms', () => {
    let random = new Random()

    jest
        .spyOn(random, 'integer')
        .mockImplementationOnce(() => 0)

    it('instance without random parameter', () => {
        let terms = new Terms(['a'])

        expect(terms.current()).toBe('a')
    })

    it('get new term', () => {
        let terms = new Terms(['a', 'b'], random)

        terms.next()

        expect(terms.current()).toBe('a')
    })

    it('wrong term not match', () => {
        let terms = new Terms(['abacate'], random)

        expect(terms.isMatch('ba')).toBeFalsy()
    })

    it('correct word is match', () => {
        let terms = new Terms(['abacate'], random)

        expect(terms.isMatch('abacate')).toBeTruthy()
    })

    it('partial match if  word is match', () => {
        let terms = new Terms(['abacate'], random)

        expect(terms.isPartialMatch('aba')).toBeTruthy()
    })
})