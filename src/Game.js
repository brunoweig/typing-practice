import { Scoreboard } from './Domain/Scoreboard.js'
import { Terms } from './Domain/Terms.js'
import { GameUI } from './UI/GameUI.js'
import './typedefs.js'

export class Game {
    /** @type {Scoreboard} */
    #scoreboard = null

    /** @type {GameUI} */
    #ui = null

    /** @type {Terms} */
    #terms = null

    /**
     * @param {GameUI} ui 
     */
    constructor(ui) {
        this.#ui = ui
        this.#scoreboard = new Scoreboard()
        this.#terms = new Terms([
            'accustom',
            'acorn',
            'acquaint',
            'acquaintance',
            'acquainted',
            'acquit',
            'acres',
            'act',
            'action',
            'actions',
            'actor',
            'acts',
            'adam',
            'address',
            'adieu',
            'admired',
            'adopted',
            'adoration',
            'advancing',
            'adventure',
            'adversity',
            'affairs',
            'affection',
            'affections',
            'afflict',
        ])
    }

    run() {
        this.#ui.updateTerms(this.#terms.current())

        this.#ui.onType(value => {
            if (this.#terms.isMatch(value)) {
                this.#scoreboard.addSuccess()
                this.#terms.next()
                this.#ui.updateTerms(this.#terms.current())
            } else if (this.#terms.isError(value)) {
                this.#scoreboard.addFailure()
                this.#ui.clearInput()
            }

            this.#ui.updateReports(this.#scoreboard.getSuccess(), this.#scoreboard.getTrials())
        })
    }
}