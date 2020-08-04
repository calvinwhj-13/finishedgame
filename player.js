class Player {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.sprite = createSprite(x,y,width,height);
        this.image = loadImage("sprites/playercharacters/tile000.png");
        this.sprite.scale = 0.7;
    }
    display() {
        this.sprite.addImage(this.image);
        //this.sprite.x = mouseX;
        //this.sprite.y = mouseY;
        if(keyDown(LEFT_ARROW)) {
            this.sprite.x = this.sprite.x-2;
        }
        if(keyDown(RIGHT_ARROW)) {
            this.sprite.x = this.sprite.x+2;
        }
        if(keyDown(UP_ARROW)) {
            this.sprite.y = this.sprite.y-2;
        }
        if(keyDown(DOWN_ARROW)) {
            this.sprite.y = this.sprite.y+2;
        }
        if(keyDown("space")) {
            this.sprite.addAnimation(atani);
        }
    }
}