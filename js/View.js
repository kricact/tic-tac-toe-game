class View {
    constructor(model) {
        this.model = model;
        this._field = document.querySelectorAll('.field__item');
    }

    showEndNotification() {
        alert('Кто-то win');
        console.log(this._field);
    }


    get elements() {
        this.bind();
    }

    bind() {
        this._field.forEach((currentValue, i, array) => {
            currentValue.addEventListener('click', ()=> {
                this.onPlayerMove({'id':i, 'player':'playerX'});
            });
        });

    }

    onPlayerMove(step) {
    }
}