import { DateTime } from "../../src/ValueObject/DateTime.js"
import { jest } from '@jest/globals'

describe('DateTime', () => {
    jest.useFakeTimers({
        now: new Date('2024-02-10T12:00:00.000Z')
    })

    it('get utc date', () => {
        const dateTime = new DateTime()

        expect(dateTime.getUTC()).toBe('2024-02-10T12:00:00.000Z')
    })

    it.each([
        ['2024-02-10T12:00:00.600Z', 600],
        ['2024-02-10T11:59:59.400Z', -600],
    ])('diff of %s with %d ms', (input, expected) => {
        const dateTime = new DateTime()
        const secondTime = new DateTime(new Date(input))

        expect(secondTime.diffInMilliseconds(dateTime)).toBe(expected)
    })

    it.each([
        ['2024-02-10T12:00:00.600Z', 0.6],
        ['2024-02-10T11:59:59.400Z', -0.6],
    ])('diff in seconds', (input, expected) => {
        const dateTime = new DateTime()
        const secondTime = new DateTime(new Date(input))

        expect(secondTime.diffInSeconds(dateTime)).toBe(expected)
    })
})