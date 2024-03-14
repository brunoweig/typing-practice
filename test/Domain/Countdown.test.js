import { Countdown } from "../../src/Domain/Countdown.js"

describe('Countdown', () => {
    /** @type {Countdown} */
    let countdown = null

    beforeEach(() => {
        countdown = new Countdown()
    })

    it('no current time until start', () => {
        expect(countdown.getCurrentTime()).toBeNull()
    })

    it('error when starting with past interval time', () => {
        expect(() => countdown.start({milliseconds: -20})).toThrow()
    })
})