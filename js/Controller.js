class Controller {
    constructor () {
        //create model
        this.model = new Model();
        //create view
        this.view = new View(this.model);
        //subscribe on changing model - win player
        this.model.subscribe(() => this.view.showEndNotification());
        //update model, if smb make step
        this.view.onPlayerMove = (step) => this.model.movePlayer = step;
    }

    start() {
        this.view.elements;
    }
}

const ctrl = new Controller();

ctrl.start();