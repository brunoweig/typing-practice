export class Random {
    random() {
        return Math.random()
    }

    /**
     * @param {number} min 
     * @param {number} max 
     */
    float(min, max) {
        const result = min + (this.random() * (max - min))

        return this.#minMax(result, min, max)
    }

    /**
     * @param {number} min 
     * @param {number} max 
     */
    integer(min, max) {
        const result = Math.round(this.float(min, max))

        return this.#minMax(result, min, max)
    }

    /**
     * @param {number} value 
     * @param {number} min 
     * @param {number} max 
     * @returns {number}
     */
    #minMax(value, min, max) {
        return Math.max(
            min,
            Math.min(max, value)
        )
    }
}