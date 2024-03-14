import { DateTime } from "../ValueObject/DateTime.js"
import { DateTimeInterval } from "../ValueObject/DateTimeInterval.js"
import '../typedefs.js'

export class Countdown {
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
        let dateInterval = new DateTimeInterval(interval)

        if (dateInterval.getInMilliseconds() <= 0) {
            throw new Error('Interval time must be positive')
        }

        this.#finishTime = DateTime.fromDateTimeInterval(dateInterval)

        if (this.#onFinishFn) {
            this.#clearInterval()
            this.intervalId = setTimeout(this.#onFinishFn, dateInterval.getInMilliseconds())
        }
    }

    /**
     * @returns {number|null}
     */
    getElapsedTimeInMs() {
        return this.#finishTime?.diffInMilliseconds(new DateTime()) ?? 0
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