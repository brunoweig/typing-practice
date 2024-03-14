import { DateTimeInterval } from "../../src/ValueObject/DateTimeInterval.js"

describe('DateTimeInterval', () => {
    it('no interval when empty constructor', () => {
        let interval = new DateTimeInterval()

        expect(interval.getInMilliseconds()).toBe(0)
    })

    /** @type {[TimeInterval, number]} millisecondsParams */
    const millisecondsParams = [
        [{milliseconds: 20}, 20],
        [{seconds: 1, milliseconds: 20}, 1020],
    ]

    it.each(millisecondsParams)('milliseconds of %s equals %d', (input, expected) => {
        let interval = new DateTimeInterval(input)

        expect(interval.getInMilliseconds()).toBe(expected)
    })
})