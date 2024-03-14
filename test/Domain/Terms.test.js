import { Terms } from "../../src/Domain/Terms.js"

describe('Terms', () => {
    it('count is 0 when no terms generated', () => {
        let terms = new Terms()

        expect(terms.count()).toBe(0)
    })

    it('count is 2 when generated twice', () => {
        let terms = new Terms()

        terms.next()
        terms.next()

        expect(terms.count()).toBe(2)
    })
})