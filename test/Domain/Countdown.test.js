import { Countdown } from "../../src/Domain/Countdown.js"
import { jest } from "@jest/globals"

describe('Countdown', () => {
    /** @type {Countdown} */
    let countdown = null

    jest.useFakeTimers()

    beforeEach(() => {
        countdown = new Countdown()
    })

    it('no current time until start', () => {
        expect(countdown.getCurrentTime()).toBeNull()
    })

    it('error when starting with past interval time', () => {
        expect(() => countdown.start({milliseconds: -20})).toThrow()
    })

    it('call finish function after end time', () => {
        const expectedCallback = jest.fn()

        countdown.onFinish(expectedCallback)
        countdown.start({milliseconds: 400})

        jest.runOnlyPendingTimers()

        expect(expectedCallback).toHaveBeenCalledTimes(1)
    })

    it('reset timer with multiple starts', () => {
        const expectedCallback = jest.fn()

        countdown.onFinish(expectedCallback)
        countdown.start({milliseconds: 400})
        countdown.start({milliseconds: 400})

        expect(jest.getTimerCount()).toBe(1)

        jest.runOnlyPendingTimers()
    })
})