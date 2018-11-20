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
