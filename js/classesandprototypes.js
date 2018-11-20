function Apple(x, y, color, score){
    this.x = x; // pointer to the x parameter
    this.y = y;
    this.color = color;
    this.score = score;
       //in here this resers to this object 
   
}
Apple.prototype= {
    Eat:function(){return this },
    Peal:function(){return "Pealing apple"},
}


var xx = new Apple(12,23,"Red" , 34);
var xxy = new Apple(34,400,"Green Mix" , 75);
var xxz = new Apple(5,52,"Red Fade" , 85);

