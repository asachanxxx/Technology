function makeCoffee(sugerqty, milkper) {
  var instructions = "Boil Water , ";
  instructions += " pour into cup ";
  instructions += " add " + sugerqty + " spoons of suger";
  instructions += " add " + milkper + "% milk";
  return instructions;
}
console.clear();
console.log(makeCoffee(20, 40));

function log(val) {
  console.log(val)
}

console.timeStamp("Start");
var Cartemplate = {
  Color: "Red",
  Speed: 165,
  Make: "Volvo",
  Drvie: function () {
    return "Driving now......."
  },
  Stop: function () {},
  Engine: {
    Size: 2.0,
    Maker: "VTX Man",
    FuelType: "Petrol",
    Pistons: [{
      Maker: "BMW"
    }, {
      Maker: "Bugati"
    }]
  }
};

var shopinglist = ["Milk",
  100,
  "Suger",
  "Rice",
  ["EmbededArray", 200],
  {
    Car: "Mazda 1234"
  },
  function () {
    return "Volvo"
  }
];

log(Cartemplate.Make);
log(Cartemplate.Engine.Pistons[0]);
log(Cartemplate.Engine.Pistons[0].Maker);
log(shopinglist[5].Car);

log(Cartemplate.Drvie());

log([1 + 1 - 89]);
var a = 10;
log(shopinglist[a - 5 - 2]); //will print rice

//log(Cartemplate[Color]); -- error in this line Uncaught ReferenceError: Color is not defined
log(Cartemplate["Color"]);

log(Cartemplate["Engine"]["Pistons"][1]["Maker"]);

log(Cartemplate["Eng" + "ine"]);

Cartemplate.Color = "Light Yellow ";
Cartemplate["Color"] += "Gray";

Cartemplate.Model = "V50";

Cartemplate.Break = function (amount) {
  return "Break : " + amount
}

Cartemplate.Color = null;

delete Cartemplate.Color;

//Cartemplate.unshift(23223);


function name() {
  var fullname = "Asanga chandrakumara"

  function concat(namex) {
    return "Mr. " + namex;
  }

  return concat(fullname);
}

function CallableConcat(arg) {
  console.log("Values: - ", arg[0], arg[1]);
  if (!arg[0]) {
    return arg.firstName + arg.lastName;
  } else {
    return arg[0] + arg[1];
  }
}

log(CallableConcat(["Asanga ", " a Good man"])); // using arrays

log(CallableConcat({
  firstName: "Asanga ",
  lastName: " Chan"
})); // using objects



var funcadd = function (num1, num2) {
  return num1 + num2;
}

function Avg(val1, count) {
  return val1 / count;
}

console.log(funcadd(1233, 234));
console.log(Avg(funcadd(1233, 234), 2));

function foo(fname) {
  return fname();
}
console.log(foo(function () {
  return 12300
}));



console.log(myname, printname());

var myname = "Asanga";

function printname() {
    console.log(aaaa);

    var aaaa = 12093;
    
    return "Jone Doe";
}
