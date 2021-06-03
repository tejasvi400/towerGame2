class Block extends BaseClass{
    constructor(x,y,width,height){
      super(x,y,width,height);
      this.Visiblity= 255;

    }
  display(){
    var pos = this.body.position;
        var angle = this.angle;
        push();
        if (this.body.speed < 3) {
            rectMode(CENTER);
            translate(pos.x, pos.y);
            rotate(angle);
            fill(255);
            strokeWeight(4);
            rect(0, 0, this.width, this.height);
            pop();
        } 
    if(this.body.speed < 3){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       pop();
     }
    }
  }