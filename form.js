class Form {
    constructor(){
        this.greeting = createElement("h3");
        this.button = createButton("play");
    }
    hide() {
        this.button.hide();
        this.greeting.hide();
    }
    display() {
        this.button.position(displayWidth/2,displayHeight/2+80);

        this.greeting.hide();
        this.greeting.html("GAME OVER")
        this.greeting.position(displayWidth/2,displayHeight/2);
    }
}