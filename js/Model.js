'use strict';
class Model {
    constructor () {
        this._initialField = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.field = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this._amountStrep = 0;
        this.winPlayer = {
            'namePlayerInitial': 'unknown',
            'winCombinationInitial': -1,
            'namePlayer': 'unknown',
            'winCombination': -1
        };
        this._winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        this.listeners = new Set();
        this.firstPlayer = 'playerX';
        this.secondPlayer = 'playerO';
    }

    subscribe(listener) {
        this.listeners.add(listener);
    }

    notifyLictenrs() {
        for (const listener of this.listeners) {
            listener(this.winPlayer);
        }
    }

    checkWin (player) {
        if (this._amountStrep < 4) {
            return -1;
        }
        const filledFieldPlayer = this.field.reduce((previousVal, currentVal, index, array) =>
            (currentVal === player) ? previousVal.concat(index) : previousVal, []);
        if (filledFieldPlayer.length < 3) {
            return -1;
        }
        let playerWin = null;
        for (let [i, winCombo] of this._winCombos.entries()) {
            if (winCombo.every(elem => filledFieldPlayer.indexOf(elem) > -1)) {
                this.winPlayer['namePlayer'] = player;
                this.winPlayer['winCombination'] = i;
                this.notifyLictenrs();
                break;
            }
        }
        if (this._amountStrep === 9 && this.winPlayer['namePlayer'] === 'unknown') {
            this.winPlayer['namePlayer'] = 'nobody';
            this.notifyLictenrs();
        }
    }

    set movePlayer (step) {
        this.field[step['id']] = step['player'];
        this._amountStrep += 1;
        this.checkWin(step['player']);
    }

    reset() {
        this.field = [...this._initialField];
        this._amountStrep = 0;
        this.winPlayer.namePlayer = this.winPlayer.namePlayerInitial;
        this.winPlayer.winCombination = this.winPlayer.winCombinationInitial;
    }
}