export class Scoreboard {
    #success = 0
    #failure = 0

    addSuccess() {
        this.#success++
    }

    addFailure() {
        this.#failure++
    }

    /**
     * @returns {number}
     */
    getSuccess = () => this.#success

    /**
     * @returns {number}
     */
    getFailure = () => this.#failure

    /**
     * @returns {number}
     */
    getTrials = () => this.getSuccess() + this.getFailure()
}