class Dustbin{
    constructor(x,y,width,height){
  var options={
      isStatic:true 
  }
  this.body=Bodies.rectangle(x,y,30,30,options);
  this.width=30;
  this.height=30;
  World.add(world,this.body);
 this.image=loadImage("dustbin.png");

    }
    display(){
      var pos=this.body.position;
    
     
     imageMode(CENTER);
     //fill("white") ;
     rect(pos.x,pos.y,this.width,this.height);
     image(this.image, 0, 0, this.width, this.height);
     
    }
}