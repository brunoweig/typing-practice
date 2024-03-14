import { Random } from "../../src/ValueObject/Random.js"
import { jest } from "@jest/globals"

describe('Random', () => {
    let random = new Random()

    it('integer min', () => {
        jest.spyOn(Math, 'random').mockImplementation(() => 0)

        expect(random.integer(0, 2)).toBe(0)
    })

    it('integer max', () => {
        jest.spyOn(Math, 'random').mockImplementation(() => 1)

        expect(random.integer(0, 4)).toBe(4)
    })

    it('float min', () => {
        jest.spyOn(Math, 'random').mockImplementation(() => 0)

        expect(random.integer(0.4, 4)).toBe(0.4)
    })

    it('float max', () => {
        jest.spyOn(Math, 'random').mockImplementation(() => 1)

        expect(random.integer(0.4, 6.52)).toBe(6.52)
    })
})