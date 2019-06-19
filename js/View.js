class View {
    constructor(model) {
        this._firstPlayer = model.firstPlayer;
        this._secondPlayer = model.secondPlayer;
        this._field = document.querySelectorAll('.field__item');
        this.currentPlayer = this._firstPlayer;
    }

    showEndNotification() {
        alert('Кто-то win');
    }


    get elements() {
        this.bind();
    }

    bind() {
        this._field.forEach((currentValue, i) => {
            currentValue.addEventListener('click', ()=> {
                this.updateField(currentValue, this.currentPlayer);
                this.changePlayer();
                this.onPlayerMove({'id':i, 'player':this.currentPlayer});
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