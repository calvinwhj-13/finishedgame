class Enemy{
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.sprite = createSprite(x,y,width,height);
        this.image = loadImage("sprites/enemyanimation/tiles/1/tile000.png");
        this.sprite.scale = 0.5;
        this.sprite.setCollider("circle",0,0,20);
        
    }
    movement(a,b) {
        this.sprite.velocityX = random(a,b);
        this.sprite.velocityY = random(a,b);
    }
    frenzy() {
        var randx = random(1,4);
        var randy = random(1,4)
        if(randx===1||randx===3) {
            this.sprite.velocityX = -5;
        }
        else{
            this.sprite.velocityX = 5;
        }
        if(randy===2||randy===4) {
            this.sprite.velocityY = 5;
        }
        else{
            this.sprite.velocityY = -5;
        }
    }
}