class groundMake{
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            restitution: 1,
            friction: 1.5,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world, this.body);
    }
    display(){
        var groundpos = this.body.position;
        push();
        translate(groundpos.x,groundpos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill("red");
        rect(groundpos.x,groundpos.y-700,this.width,this.height);
        pop();
    }
  }