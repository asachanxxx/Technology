// in here this reres to windows object
this.console.log("asanga");

/**
 * in here this refers to windows object
 */
var objectx = {
  prop: this,
  method: function () {
    var val = 1;
    return this;
  }
}


var arrargs = [
  this,
  100,
  function () {
    return this;
  }
]


function globathis() {
  console.log("From global", this);

  function sub() {
    console.log("From sub ", this)
  }

  sub();
}

globathis.call(objectx);

new globathis();


//constructor
function Apple(x, y, color, score){
     this.x = x; // pointer to the x parameter
     this.y = y;
     this.color = color;
     this.score = score;

     return this;
}

var xx = new Apple(12,23,"Red" , 34);
var xxy = new Apple(34,400,"Green Mix" , 75);
var xxz = new Apple(5,52,"Red Fade" , 85);


