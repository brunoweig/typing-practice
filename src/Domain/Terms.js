export class Terms {
    /**
     * @type {String[]}
     */
    #terms = []

    next() {
        this.#terms.push([])
    }

    /**
     * @returns {number}
     */
    count() {
        return this.#terms.length
    }
}