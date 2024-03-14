import { Random } from "../ValueObject/Random"

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
}