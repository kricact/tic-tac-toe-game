class View {
    constructor(model) {
        this._firstPlayer = model.firstPlayer;
        this._secondPlayer = model.secondPlayer;
        this._field = document.querySelectorAll('.field__item');
        this.currentPlayer = this._firstPlayer;
    }

    showEndNotification(winPlayer) {
        let textEnd = document.querySelector('.end-game__words');
        switch (winPlayer) {
            case 'nobody':
                textEnd.textContent = 'Ничья';
                break;
            case this._firstPlayer:
                textEnd.textContent = `Победа игрока - X`;
                break;
            case this._secondPlayer:
                textEnd.textContent = `Победа игрока - O`;
                break;
        }
        let popupEnd = document.querySelector('.end-game');
        popupEnd.classList.add('end-game-show');
    }


    get elements() {
        this.bind();
    }

    bind() {
        this._field.forEach((currentValue, i) => {
            currentValue.addEventListener('click', ()=> {
                this.updateField(currentValue, this.currentPlayer);
                this.onPlayerMove({'id':i, 'player':this.currentPlayer});
                this.changePlayer();
            });
        });
        let restart = document.querySelectorAll('.game__restart');
        restart.forEach((currentValue) => {
            currentValue.addEventListener('click', ()=> {
                this.reset();
            });
        });
    }

    updateField (el, player) {
        el.classList.add(player);
        el.disabled = true;
    }

    changePlayer () {
        this.currentPlayer = (this.currentPlayer === this._firstPlayer) ? this._secondPlayer: this._firstPlayer;
    }

    onPlayerMove(step) {
    }

    toInitialState() {

    }

    reset() {
        //remove added class
        this._field.forEach((currentValue, i) => {
            currentValue.classList.remove(this._firstPlayer, this._secondPlayer);
            currentValue.disabled = false;
        });
        //remove popup
        let popupEnd = document.querySelector('.end-game');
        popupEnd.classList.remove('end-game-show');
        this.currentPlayer = this._firstPlayer;
        this.toInitialState();
    }
}