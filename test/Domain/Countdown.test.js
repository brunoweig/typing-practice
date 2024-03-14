import { Countdown } from "../../src/Domain/Countdown.js"
import { jest } from "@jest/globals"

describe('Countdown', () => {
    /** @type {Countdown} */
    let countdown = null

    const DEFAULT_DATE = '2024-02-10T12:00:00.000Z'

    jest.useFakeTimers({now: new Date(DEFAULT_DATE)})

    beforeEach(() => {
        countdown = new Countdown()
    })

    it('elapsed time 0 until start', () => {
        expect(countdown.getElapsedTimeInMs()).toBe(0)
    })

    it('error when starting with past interval time', () => {
        expect(() => countdown.start({milliseconds: -20})).toThrow()
    })

    it('call finish function after end time', () => {
        const expectedCallback = jest.fn()

        countdown.onFinish(expectedCallback)
        countdown.start({milliseconds: 400})

        jest.advanceTimersByTime(450)

        expect(expectedCallback).toHaveBeenCalledTimes(1)
    })

    it('tick freezes the elapsed time', () => {
        countdown.start({milliseconds: 400})

        jest.advanceTimersByTime(150)

        countdown.tick()

        jest.advanceTimersByTime(300)

        expect(countdown.getElapsedTimeInMs()).toBe(150)
    })
})