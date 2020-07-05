class Garbage {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 1,
            density: 1,
        }
    
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("crumpledpaper.png");
        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0 , 0 , this.width , this.height);
        pop();
    }
}