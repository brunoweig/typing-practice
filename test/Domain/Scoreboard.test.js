import { Scoreboard } from "../../src/Domain/Scoreboard.js"

describe('Scoreboard', () => {
    /** @type {Scoreboard} */
    let scoreboard = null

    beforeEach(() => {
        scoreboard = new Scoreboard()
    })

    it('success without trials', () => {
        expect(scoreboard.getSuccess()).toBe(0)
    })

    it('success', () => {
        scoreboard.addSuccess()

        expect(scoreboard.getSuccess()).toBe(1)
    })

    it('failure without trials', () => {
        expect(scoreboard.getFailure()).toBe(0)
    })

    it('failure', () => {
        scoreboard.addFailure()

        expect(scoreboard.getFailure()).toBe(1)
    })

    it('trials value without any trial', () => {
        expect(scoreboard.getTrials()).toBe(0)
    })

    it('trials', () => {
        scoreboard.addFailure()
        scoreboard.addSuccess()

        expect(scoreboard.getTrials()).toBe(2)
    })
})