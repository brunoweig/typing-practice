import { Random } from "../ValueObject/Random.js"

export class Terms {
    /** @type {Random} */
    #random = null

    /** @type {String[]} */
    #terms = []

    /** @type {number} */
    #currentIndex = 0

    /**
     * @param {String[]} terms
     * @param {Random[]} terms
     */
    constructor(terms = [], random = null) {
        this.#terms = terms
        this.#random = random || new Random()
    }

    next() {
        this.#currentIndex = this.#random.integer(0, this.#terms.length-1)
    }

    /**
     * @returns {String}
     */
    current() {
        return this.#terms[this.#currentIndex]
    }

    /**
     * @param {String} value
     * @returns {Boolean}
     */
    isMatch(value) {
        return this.current() === value
    }

    /**
     * @param {String} value
     * @returns {Boolean}
     */
    isPartialMatch(value) {
        return this.current().substring(0, value.length) === value
    }

    /**
     * @param {String} value
     * @returns {Boolean}
     */
    isError(value) {
        return !this.isPartialMatch(value)
    }
}