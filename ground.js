class Ground{
    constructor(x,y,width,height){
        var ground_options ={
            isStatic: true
        }
        this.body= Bodies.rectangle(x,y,width,height,ground_options);
        this.x=x;
        this.y=y
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        
   
    }
    display(){
        rectMode(CENTER);
        fill(255);
        rect(this.body.position.x,this.body.position.y,400,20);
    }
}