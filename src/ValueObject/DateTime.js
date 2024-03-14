import '../typedefs'
import { DateTimeInterval } from './DateTimeInterval'

export class DateTime {
    /**
     * @type {Date}
     */
    #date = null

    /**
     * @param {Date} date 
     */
    constructor(date = null) {
        this.#date = date || new Date()
    }

    /**
     * @param {TimeInterval} interval
     * @returns {DateTime}
     */
    static fromInterval(interval) {
        let timeInterval = new DateTimeInterval(interval)
        let now = new Date()

        return new DateTime(new Date(
            now.getTime() + timeInterval.getInMilliseconds()
        ))
    }

    /**
     * @returns {Date}
     */
    getDate() {
        return new Date(this.#date)
    }

    getUTC() {
        return this.#date.toISOString()
    }

    /**
     * @param {DateTime} target 
     * @returns {int}
     */
    diffInMilliseconds(target) {
        let date = target.getDate()
        let currentDate = this.getDate()

        return currentDate.getTime() - date.getTime()
    }


    /**
     * @param {DateTime} target 
     * @returns {float}
     */
    diffInSeconds(target) {
        return this.diffInMilliseconds(target) / 1000.0
    }
}