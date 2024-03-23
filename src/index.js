import { Game } from "./Game.js"
import { GameUI } from "./UI/GameUI.js"

/**
 * @type {GameSelectors}
 */
const selectors = {
    reports_timer: document.getElementById('report-timer'),
    reports_success: document.getElementById('report-success'),
    reports_attemps: document.getElementById('report-attemps'),
    terms_display: document.getElementById('term-display'),
    terms_input: document.getElementById('term-input'),
}

const gameUI = new GameUI(selectors)
const game = new Game(gameUI)
game.run()