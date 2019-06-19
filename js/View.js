class View {
    constructor(model) {
        this._firstPlayer = model.firstPlayer;
        this._secondPlayer = model.secondPlayer;
        this._field = document.querySelectorAll('.field__item');
        this.currentPlayer = this._firstPlayer;
    }

    showEndNotification(winPlayer) {
        console.log(winPlayer);
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
}