import { DateTime } from "../ValueObject/DateTime.js"
import { DateTimeInterval } from "../ValueObject/DateTimeInterval.js"
import '../typedefs.js'

export class Countdown {
    /** @type {DateTime} */
    #finishTime = null

    /**
     * @param {TimeInterval} interval 
     */
    start(interval) {
        let dateInterval = new DateTimeInterval(interval)

        if (dateInterval.getInMilliseconds() <= 0) {
            throw new Error('Interval time must be positive')
        }

        this.#finishTime = DateTime.fromDateTimeInterval(dateInterval)

        // setTimeout()
    }

    getCurrentTime() {
        return null
    }
}