class bob{
	constructor(x,y,r)
	{
		var options={
		   // isStatic:true,
			restitution :0.3,
            friction :0.5,
			density : 1.2
			}
		this.x=x;
		this.y=y;
		this.r=r;
	//	this.image=loadImage("paper.png")
		this.body=Bodies.circle(x, y,r, options);
		World.add(world, this.body);
	}

	display()
	{
		var bobPos=this.body.position;	
		push()
		translate(bobPos.x, bobPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		//imageMode(CENTER);
		ellipseMode(CENTER);
		strokeWeight(2);
		stroke("black");
		fill("magenta");
		//image(this.image, 0,0,this.r*2, this.r*2)
		circle(0,0,this.x*0.2,this.y*0.2);
		pop();
 }
}