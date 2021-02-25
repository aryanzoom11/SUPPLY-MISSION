class package{

    constructor( x, y,width,height     ) {

       var package_options={

     isStatic:false
      


       }


        this.body = Bodies.rectangle(x, y, width, height,package_options);
        World.add(world, this.body);
        this.width=width;
        this.height=height;

    }

    //functions
;
    display() {
        var angle=this.body.angle;
        var pos=this.body.position;
        push()
       translate(pos.x,pos.y);
       rotate (angle)
        rectMode(CENTER)
        rect(0, 0, this.width,this.height);
        pop()
    }
}