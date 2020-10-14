class Box{
 constructor(x,y,width,height){
    var box_options ={
        restitution: 1.0
    }
    this.body=Bodies.rectangle(x,y,width,height,box_options);
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    World.add(world,this.body);
 }
 display(){
     rectMode(CENTER);
     fill(255);
     rect(this.body.position.x,this.body.position.y,this.width,this.height);
 }
}