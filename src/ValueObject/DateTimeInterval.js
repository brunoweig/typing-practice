/**
 * @typedef TimeInterval
 * @prop {number} milliseconds
 * @prop {number} seconds
 */

export class DateTimeInterval {
    /** @type {TimeInterval} #DEFAULT_INTERVAL */
    static #DEFAULT_INTERVAL = {
        milliseconds: 0,
        seconds: 0,
    }

    /**
     * @type {TimeInterval} #interval
     */
    #interval = {}

    /**
     * @type {TimeInterval} interval
     */
    constructor(interval) {
        this.#interval = {
            ...DateTimeInterval.#DEFAULT_INTERVAL,
            ...interval
        }
    }

    getInMilliseconds() {
        let result = this.#interval.milliseconds
        result += this.#interval.seconds * 1000

        return result
    }
}