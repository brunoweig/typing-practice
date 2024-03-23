import { Scoreboard } from "../Domain/Scoreboard.js"
import '../typedefs.js'

/**
 * @callback OnTypeCallback
 * @param {string}
 * @returns {void}
 */

export class GameUI {
    /** @type {GameSelectors} */
    #selectors = null

    /** @type {Function} */
    #onTypeFn = null

    /**
     * @param {GameSelectors} selectors 
     */
    constructor(selectors) {
        this.#selectors = selectors

        selectors.reports_timer.innerHTML = 0
        selectors.reports_attemps.innerHTML = 0
        selectors.reports_success.innerHTML = 0
    }

    /**
     * @param {OnTypeCallback} fn 
     */
    onType(fn) {
        if (this.#onTypeFn) return

        this.#selectors.terms_input
            .addEventListener('keyup', () => {
                fn(this.#selectors.terms_input.value)
            })
    }

    /**
     * @param {*} fn 
     * @param {*} ms 
     * @returns {Promise}
     */
    onTimerIsUp(fn, ms) {
        return new Promise((resolve, reject) => {
            setInterval(fn, ms)
        })
    }

    clearInput() {
        this.#selectors.terms_input.value = ''
    }

    /**
     * @param {number} success
     * @param {number} trials
     */
    updateReports(success, trials) {
        this.#selectors.reports_success.innerHTML = success
        this.#selectors.reports_attemps.innerHTML = trials
    }

    /**
     * @param {string} value
     */
    updateTerms(value) {
        this.#selectors.terms_display.innerHTML = value
        this.clearInput()
    }
}