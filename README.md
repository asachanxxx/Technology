# Profiles to Study
1. https://stackoverflow.com/users/4676340/trichetriche (trichetriche)


# How angular Works
Angular is a framework for Single Page Applications (SPAs). When using a SPA, parts of your DOM and added and deleted at runtime, without a page reload.

@cactusjack66's repro uses some bootstrap scripts:

            "scripts": [
              "node_modules/admin-lte/bower_components/jquery/dist/jquery.min.js",
              "node_modules/admin-lte/bower_components/bootstrap/dist/js/bootstrap.min.js",
              "node_modules/admin-lte/dist/js/adminlte.min.js"
            ]
The way these work is by looking up the DOM, finding elements with certain CSS or ids, and attaching behaviour to them. This happens only when on the initial load because that's how script tags work in HTML.

Let's think about the order of these things. First you load your app, then angular takes over and renders your initial components, and then bootstrap sees these components and attaches some behaviour to them. At this point bootstrap has finished running.

When you then go to another route, the original component is removed from the DOM and the new one added. Bootstrap doesn't run again, because scripts run only once. The newly rendered component do not get the bootstrap behaviour.

This is all intended and is how scripts work. You could re-add the bootstrap bindings on every DOM change but that's really slow and takes a lot of work. My best advice is to use something like https://ng-bootstrap.github.io/ instead, because it takes care of attaching that dynamic behavior for you.

# Excel in Angular 

https://sheetjs.com/demos/manifest.html


# Angular2 How to trigger (click) event without clicking


Give it a ViewChild reference :

<div #myDiv id="tutor-price" (click)="passCharge(r.value['charge'])"><span id="month">월 8회</span> <span id="price"> {{r.value['charge']}} </span></div>

In your component :

@ViewChild('myDiv') myDiv: ElementRef;

triggerFalseClick() {
    let el: HTMLElement = this.myDiv.nativeElement as HTMLElement;
    el.click();
}

#Arrays and objects

### [] is array litteral and {} is object litteral
###what ever insede []  treated  as javascript statements
   EX: console.log([1+1-89]);

## [] are always statement inside . so take this example
    
    var abc= [
      Make:"Volvo",
      Drive:"Right Hand"
    ]

    if we print

    console.log(abc[Make])
    -- this is systax error cus it cannot find variable name make. but we can say like this

    console.log("Make");
    --this time it will look for a method call Make and pass the value "Volvo"

    when you using array and trying to get values
      - "" always refres to a property inside an array
      - If not use "" then it looks for an variable that have a value in Window object

## take a look at this example
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

    so there we have main Engine variable and it contains Pistons Array. 
    so how to access Pistons first element 
    Like this:
      -console.log(Cartemplate["Engine"]["Pistons"][1]["Maker"]);
       - ["Pistons"][1] -- this refres to Pistons array's 1'st element

 ## gues what if we have property and it';s a function inside a object
      var shopinglist = ["Milk",
          100,
          "Suger",
          "Rice",
          ["EmbededArray", 200],
          {
            Car: "Mazda 1234"
          },
          function DriveMOde () {
            return "Volvo"
          }
        ];
    how do we access the function with out method?
      -console.log(Cartemplate["DriveMOde"]());

 ## You cann do this also
      -console.log(Cartemplate["Eng"+"ine"]);
      this will concatanate two string and found the variable name Engine so it pass that variable's value inside Cartemplate object

  ## Creating and updating exisitng properties and arrays
      
      Cartemplate.Color = "Light Yellow ";
      Cartemplate["Color"] += "Gray";

    -- adding new elements

      Cartemplate.Model = "V50"; -- when you assign a value only then a new property will be created

 ##  Remove properties from the objects and list. just assign them to null

        -Cartemplate.Color = null;  this will assign null to color 
        -- to temove it 

         delete Cartemplate.Color;

         use delete function this will return true if deleted or false if it wont

 ## you can assgin an array using [] of specific index
      shopinglist[1] = "Row of undefines";

      --and if want to create a new one just get the next index and assign a value

      shopinglist[5] = "New value";

      -- so the index now is 4 and i am going to create this
      
      shopinglist[21] = "Row of undefines";

      --so what will happen here is it will create empty container from 4 to 20 and then create my new value in index 21 . so have to be very carfully in here

      --any given point you can use index from 4 to 20 to store data

      -- also arrays are objects you you can do this 
        
        shopinglist["Test 1"] = "test 1" -- this line will add Test 1 non index value
        shopinglist.test2 = "Test2" - this will also add non index value test2

 ## when we create an array JS engine will create a __proto__ object 
      this is a prototyoe object attaches to the array. this one containes all the method of type Array.

        __Shift__
        Array.Shift() -- this will delete the first index of the array and return what it deletes
        
        --shopinglist.shift()

        __Pop__
        Array.pop() -- this will delete the last one from the array and returns it

        --shopinglist.pop()

        __unshift()__
         Array.unshift("New val" , 2763, 9838) -- this will add items to begining of the array

         __push()__
        Array.Push(122,83773,"New push") -- this will add items to end of the array

        __splice(startindex, no of items to delete) DELETE__

           shopinglist.splice(2,2) -- this will delete 2 items fromstarting off with index 2

         __splice(startindex, no of items to delete, items to add) ADD__

          this method also can add the rage of values from some point to start
          if you don't want to delete things Just put 0 to second parameter

          shopinglist.splice(1,0,2918 , 2019,"New Year", function(){console.log("Start of a new year")});

          this will add from eleent count 1 and no delete and after that it adds
          {2918 , 2019,"New Year", function(){console.log("Start of a new year")}
          to the array

           __splice(startindex, no of items to delete, items to add) REPLACE__

            shopinglist.splice(1,2,"Deleted","again");

            in here second argument is set to 2 so it means delete 2. and sirst argument is 1
            so froom point 1 and delete 2 . then after that there are 2 values to replace with

## Callable Objects (Functions)

    __Emobeded Objects__

    
        function name(){
            var fullname = "Asanga chandrakumara"

            function concat( name){
                    return "Mr. " + name;
            }

            return fullname;
        }

      Like state in here you can __add arrays inside of arraya__ and you can __addobjects inside of another objects__

      --call this by name().concat(12321)
      
      --if you cann name().concat() it will print only "Asanga chandrakumara"

      -- if you call name().concat(12321) only then it will call the nested function 

      -- name().concat() -- when you call this it will automatically call first function


## calling functions using parameters of arrays and objects

        function CallableConcat(arg){
          return arg[0] + arg[1]
      }

      console.log(CallableConcat(["Asanga " , " a Good man"])); // using arrays

      console.log(CallableConcat({firstName:"Asanga " , lastName:" a Good man"})); // using objects


## __Assign  functions to a variable__ 

        var funcadd = function (num1, num2) {
                return num1+num2;
        }

        console.log(funcadd(1233,234));

##  __nested Functions__

      function Avg(val1, count) {
        return val1 / count;
      }

      console.log(funcadd(1233, 234));
      console.log(Avg(funcadd(1233, 234), 2));

## __passing function as parameters__

        function foo(fname) {
          return fname;
        }

        console.log(foo(function(){return 12300}));

        output of this code segment is  "ƒ (){return 12300}". so basically it returns a function. not a value .cus 

         console.log(foo(function(){return 12300})); in this line it pass a function 
         and the foo method will return that function and not the value

         so to solve this we can put () end 

          function foo(fname) {
            return fname();
          }


##  __MEMORY HOISTING__

        this mean the lift up some thing. 
        __JIT compilers are Chefs__
        so they are lexcally read the code (JS parser )
        __js compilers are interpritted so it will first go through the code from top to bottom line by line and translate it to machine langular__

        console.log(myname)  --undefines
        var myname  = "Asanga" - on this point it create a memory pointer 

        LET me explain. take a look at this code

        Line1:  console.log(myname, printname());
        Line1:  var myname;
        Line1:  function printname() {
        Line1:      return "Jone Doe";
        Line1:  }

        in here out put is  "undefined "Jone Doe"" what the hell? how did it?

        this is where hoisting or lifting comes in. so the jit compiler will go through the code and excute it .```
        when Line1: myname is clearly not defined . so it will be undefined
        then Line2 : then myname is created but it is undesined
        then it will create Printname() 

        so after this that code will interprited to machine code 
        so 
        in line1 we have myname undefined and printname() returning "jone doe"
        
## Take tis out again

      console.log(myname, printname());
      var myname = "Asanga";
      function printname() {
          console.log(aaaa);

          var aaaa = 12093;
          
          return "Jone Doe";
      }

    this will print 
    undefined
    undefined "Jone Doe"

    what happened?

    simple i write this one

         console.log(aaaa);
         var aaaa = 12093;
         return "Jone Doe";

      equel to

        var aaaa; -- this is undefine
        console.log(aaaa);-- this is where undefine came
        return "Jone Doe";  

      this is what we cann Hoisting 

 ## BottomLine

  1. wheren it gets to variables they are hoisting means empty containers created for all variables in js file first

  2. functions also hoisted but they are calling the routines inside when it created 

  3. Each block has own memory hosisting inside on it that is why this happens

           console.log(aaaa);
           var aaaa = 12093;
           return "Jone Doe";

## Scope of objects

take a look at following code segment

function runexpresso() {
  var a = 10;
  function add() {
    console.log("Inside the nested function")
    var b = 90;
    return a + b;
  }

  return 100;
}

does it print out "Inside the nested function"? 
answer is no . cus unless you using it it never fires. also the variables
this is the cope of objects in js

in here we have a concept of excution stack . these functions are stacked for excution

runexpresso()
add()

after this add method invoced all the variables with in it will be garbaged and collected by GC

function runexpresso() {
  var a = 10;
  function add() {
    console.log("Inside the nested function")
    var b = 90;
    return a + b;
  }

  add();
  console.log( b )

  return 100;
}

in this case you logged be is a mistake . in this point b is undefined. cus when js excute it will put functions in to stack so in the stack first one it runexpresso() and then the add().
so add only runs after last } of runexpresso(); so that is why it logged b as undefined cus that point actually b is not existed. so after add() excuted it wil garbage b imidiately so we never can get the value of b in outside.

## Excution Stack  = Main thread that js runs

    function runexpresso() {
      function add() {
          console.log("Inside the nested function")
          var b = 90;
          return a + b;
      }
    }

so this add() function and all variables in it are temporary  to that is we call
Outer excution Enviroment 

##The Clobal scope

liek window object is the highest level of scope . all the things attach to this are available globally. so window = global scopes

    var myname = "Asanga"; **This will be added to global scope **

    function printname() {  **This will be added to global scope **
      console.log(myname);
  
        function add() {
          var myname = [];
          console.log(myname)
        }
  
      return "Jone Doe";
    }

so in here only 2 are added to global scope
so in this case inside add we have printed out myname. when it happen it will look up scope for the variable and it imidiately sees the myname initialize with array and printed out empty array. if myname is not defined in this scope it will look at  printname() scope . and it can't find it will go to global scope to search for that variable . this is the infar way to search objects in js

**if you use const in the myname inside add() it will create another object inside the add().
other wise it will always inferred to global myname object .**

   var myname = "Asanga"; **This will be added to global scope **

    function printname() {  **This will be added to global scope **
        function add() {
           myage = 28;
        }
      return "Jone Doe";
    }

**so what about myage property.  ok this is hard and harts me. when we declare a variable without any modifire inside a scope like myage it will added to the global scope. what the hell.**

**So don't ever create variables without var or let or const inside functions cus it will be added to global scope. and filling the global scope is not a good thing**


#This key word

In genaral this key word returns object that it resides on. 
it returns content imidiate {} 

  var objectx = {
      prop:this,
      method:function(){
        var val =1; 
        return this;  **this will return function method that is imidiate scope**
      }
  }

var arrargs = [
    this,
    100,
    function(){return this;} **this returns this,100 cus it return imidiate scope**
]


in global scope this refers to **window** object

in arrays or objects it also refers to  **window** object
take a look at following example

  var object = {
      prop:this,
      method:function(){return 100;}
  }


  var arrargs = [
      this,
      100,
      function(){return 100}
  ]
in both cases this refers to **window** object

## change scope of this in callable objects

  var objectx = {
      prop:this,
      method:function(){var val =1;  return this;}
  }

  function globathis(){
      return this;
  }

  globathis.call(objectx);

what this does id it pass the objectx to the  globathis function
so if you call globathis() alone it will return window object
but with this call(objectx) the scope change to 

  method: ƒ ()
  prop: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
  __proto__: Object

now this is the objectx object . so when we use call on some function and pass any object
the scope will be change and this = to passing object  

## Get new instance of this

you can use new keyword to get new this 

  new globathis();

in here we have separate window object a copy of original window object

#Classes and constructors 

you can define classes like this 

  function Apple(x, y, color, score){
      this.x = x; // pointer to the x parameter
      this.y = y;
      this.color = color;
      this.score = score;

      return this;
  }

  var xx = new Apple();

  __output is__

  color: "green"
  score: undefined
  x: undefined
  y: undefined

  var xx = new Apple(12,23,"Red" , 34);

  #JS Prototypes are like Extended properties in C# 

  get the message?

  when we create class like this
    function Apple(x, y, color, score){
        this.x = x; // pointer to the x parameter
        this.y = y;
        this.color = color;
        this.score = score;
        Eat();
        Peal();
    }

and make lots of objects with it
all of this methods and functions are going to copy to every objects and in a large scale application we don;t want that. so that is why prototypes comes in handy.

so we isolated  
        Eat();
        Peal();
methods and put it in a prototype so every object can have it but not copy by default.
yhis is using by jquery it self

  function Apple(x, y, color, score){
      this.x = x; // pointer to the x parameter
      this.y = y;
      this.color = color;
      this.score = score;
        //in here this resers to this object 
    
  }
  Apple.prototype= {
      Eat:function(){return "Eating apple"},
      Peal:function(){return "Pealing apple"},
  }

this is how you define a prototype and it will listed in __proto__ object in console


#comparison

let's get to the point 

if 
  10 == "10" = true 
  
why is this. it's cus when use == strings take over . cus strings can containg numbers
so first  == will convert int value 10 to string and make comparison and returns true
  null == undefined = true;

so to prevenbt this use  ===

    10 === "10" = false

this is false becouse === check the values and datataypes both. in here above data conversion will not take place. it only compires the values

this is how you prevent polymorpic operators in js. 

also you can put 
  10 != "10" = false cus != will converts the values and this case both are same

  10 !== "10" = true cus this case 10 will not be converted to string


  var x =20, y=30, z =27
  if (x ==10 && y == 20 || z = 27){
      //print somethg
  }

To ivaluate this we need the operator procedance 
here is the order of it
  
  * <
  * <=
  * >
  * >=
  * in
  * insteadof
  * ==
  * != 
  * ===
  * !==
  * &&
  * ||
  *  ?

so first of all == operator is the one witch excuted 
so result will be 

  if (false && false || true){
        //print somethg
  }

then the && operator take procedance
  
  if (false || true){
          //print somethg
  }

and finally || operator

  if (true){
          //print somethg
  }

**So procedance of operators is much more importance than you think**