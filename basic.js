// Basic:--

// alert("Hello world")

// console.log("Hello World")

// var Name = 'Jay Patel';
// console.log(Name);

// var myAge = 22;
// console.log(myAge);

var $myName = "Jay"
console.log($myName);

var _myName = "Patel";
console.log(_myName);

var _1my__Name = "M";
console.log(_1my__Name);


// type of operator:--
    var myName = "Jay Patel";
    console.log(typeof(myName));
    console.log(myName);

    var myAge = 22;
    console.log(typeof(myAge));
    console.log(myAge);


    var iAmPatel = true;
    console.log(iAmPatel);
    console.log(typeof(iAmPatel));


    // DataType Practise :---


    console.log("DataType Practise :-----------------------------------------------------------------------");
    console.log( 10 + "20");
    console.log(9 - "5");
    console.log("Java " + "Script");
    console.log(" " + " ");
    console.log(" " + 0);
    console.log("Jay" - "Patel"); //Not a number (NaN)
    console.log(true + true);     //2
    console.log(true + false);    //1
    console.log(false + true);    //1
    console.log(false - true);   //-1
    

    //Null vs Undefined:-----------

        console.log("Null Vs Undefined :------------------------------------");

    var iAmPhotographer = null;
    console.log(iAmPhotographer);
    console.log(typeof(iAmPhotographer));
    
    
    console.log("---------------------------------------------------------- ");
    
    var iAmStandBy;
    console.log(iAmStandBy);
    console.log(typeof(iAmStandBy));



    var myPhoneNumber = 9876543210;
    var myName = "Patel";

    console.log(myPhoneNumber);
    console.log(myName);

    console.log("To check the number is number or not :---------");
    console.log(isNaN(myPhoneNumber));
    console.log(isNaN(myName));

    if(isNaN(myName)){
            console.log("Please enter valid Phone number");
    }

    // Epressions and Operators:------------

    console.log("Expresssions and Operators:----------------------------------")

    console.log(5 + 20);
    // console.log(`Is both the x and y are equal : ${x=y}`);

    console.log(3+3);
    console.log(10-5);
    console.log(20/5)
    console.log(5*6);
    console.log("Reminder Operator " + 27%4);

    // Increment and decrement :-------------------
     
    // Increment Operator:-------

    console.log("Incerement and decrement :------------------------------");
    
    console.log("Increment Operator");
    
    console.log("Postfix:-------");
    var num = 15;
    var newNum = num++ +5;
    console.log(num);
    console.log(newNum);

        console.log("Prefix :------");

        var num = 15;
        var newNum = ++num + 5;
        console.log(num);
        console.log(newNum); 

    
    // Decrement Operator:------- 

    console.log("Decrement Operator:--------------------------");

    console.log("Prefix :-----------");
    var num = 15;
    var newNum = num-- +5;
    console.log(num);
    console.log(newNum);


    console.log("PostFix :-------------------");
    var num1 = 15;
    var newNum1 = --num1 +5;
    console.log(num1);
    console.log(newNum1); 


    // Comparison Operator:-------

    console.log("Comparison Operator:-------------------------------------------");

    var a = 30;
    var b = 10;
    console.log( a != b);
    console.log(a>b);
    console.log(a >= b);
    console.log(a<b);
    console.log(a<=b);
 
    // Logical Operators:-----------------------------------

    console.log("Logical Operator :---------------------");

    var a = 30;
    var b = -20;
    console.log(a,b);
    console.log(a > b);

    console.log("Logical AND (&&):------");
    console.log(a > b && b > -20 && b < 0);

    console.log("Logical OR(||) :----");
    console.log((a < b) || (b > 0) || (b > 0));

    console.log("Logical NOT (!):------");

    console.log(!((a>0) || (b<0)));
    console.log(!true);


    // String Operators :----
    
    console.log("String OperatorS :-------------");

    