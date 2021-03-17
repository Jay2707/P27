class Rubber{
    constructor(x,y,w,h){
        var option={
            'restitution' : 0.3,
            'friction': 5,
            'density': 1
        }
        this.body=Bodies.circle(x,y,w,h,option);
        Matter.Bodies.circle(this.body,circle);
        World.add(world,this.body);
        
        this.width = 55;
        this.height = 55;
}

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y); 
        rotate(angle);
        rectMode(CENTER);
        fill("brown");            
        ellipse(56,46,55,55);
        pop();     
    } 
}