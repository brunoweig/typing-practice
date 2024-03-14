import { DateTime } from "../ValueObject/DateTime.js"
import { DateTimeInterval } from "../ValueObject/DateTimeInterval.js"
import '../typedefs.js'

export class Countdown {
    /** @type {DateTime} */
    #startTime = null

    /** @type {DateTime} */
    #tickTime = null

    /** @type {DateTime} */
    #finishTime = null

    /** @type {Function} */
    #onFinishFn = null

    /** @type {number} */
    intervalId = null

    /**
     * @param {TimeInterval} interval 
     */
    start(interval) {
        this.#tickTime = null
        let dateInterval = new DateTimeInterval(interval)

        if (dateInterval.getInMilliseconds() <= 0) {
            throw new Error('Interval time must be positive')
        }

        this.#startTime = new DateTime()
        this.#finishTime = DateTime.fromDateTimeInterval(dateInterval)

        if (this.#onFinishFn) {
            this.#clearInterval()
            this.intervalId = setTimeout(this.#onFinishFn, dateInterval.getInMilliseconds())
        }
    }

    /**
     * @returns {number}
     */
    getElapsedTimeInMs() {
        if (!this.#startTime) {
            return 0
        }

        if (this.#tickTime) {
            return this.#tickTime.diffInMilliseconds(this.#startTime)
        }

        return (new DateTime()).diffInMilliseconds(this.#startTime) ?? 0
    }

    tick() {
        this.#tickTime = new DateTime()

        this.#clearInterval()
    }

    /**
     * @param {Function} callback 
     */
    onFinish(callback) {
        this.#onFinishFn = callback
    }

    #clearInterval() {
        if (this.intervalId) {
            clearTimeout(this.intervalId)
            this.intervalId = null
        }
    }
}