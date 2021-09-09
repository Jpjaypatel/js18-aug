// // Basic:--

// // alert("Hello world")

// // console.log("Hello World")

// // var Name = 'Jay Patel';
// // console.log(Name);

// // var myAge = 22;
// // console.log(myAge);

// var $myName = "Jay"
// console.log($myName);

// var _myName = "Patel";
// console.log(_myName);

// var _1my__Name = "M";
// console.log(_1my__Name);


// // type of operator:--
//     var myName = "Jay Patel";
//     console.log(typeof(myName));
//     console.log(myName);

//     var myAge = 22;
//     console.log(typeof(myAge));
//     console.log(myAge);


//     var iAmPatel = true;
//     console.log(iAmPatel);
//     console.log(typeof(iAmPatel));


//     // DataType Practise :---


//     console.log("DataType Practise :-----------------------------------------------------------------------");
//     console.log( 10 + "20");
//     console.log(9 - "5");
//     console.log("Java " + "Script");
//     console.log(" " + " ");
//     console.log(" " + 0);
//     console.log("Jay" - "Patel"); //Not a number (NaN)
//     console.log(true + true);     //2
//     console.log(true + false);    //1
//     console.log(false + true);    //1
//     console.log(false - true);   //-1
    

//     //Null vs Undefined:-----------

//         console.log("Null Vs Undefined :------------------------------------");

//     var iAmPhotographer = null;
//     console.log(iAmPhotographer);
//     console.log(typeof(iAmPhotographer));
    
    
//     console.log("---------------------------------------------------------- ");
    
//     var iAmStandBy;
//     console.log(iAmStandBy);
//     console.log(typeof(iAmStandBy));



//     var myPhoneNumber = 9876543210;
//     var myName = "Patel";

//     console.log(myPhoneNumber);
//     console.log(myName);

//     console.log("To check the number is number or not :---------");
//     console.log(isNaN(myPhoneNumber));
//     console.log(isNaN(myName));

//     if(isNaN(myName)){
//             console.log("Please enter valid Phone number");
//     }

//     // Epressions and Operators:------------

//     console.log("Expresssions and Operators:----------------------------------")

//     console.log(5 + 20);
//     // console.log(`Is both the x and y are equal : ${x=y}`);

//     console.log(3+3);
//     console.log(10-5);
//     console.log(20/5)
//     console.log(5*6);
//     console.log("Reminder Operator " + 27%4);

//     // Increment and decrement :-------------------
     
//     // Increment Operator:-------

//     console.log("Incerement and decrement :------------------------------");
    
//     console.log("Increment Operator");
    
//     console.log("Postfix:-------");
//     var num = 15;
//     var newNum = num++ +5;
//     console.log(num);
//     console.log(newNum);

//         console.log("Prefix :------");

//         var num = 15;
//         var newNum = ++num + 5;
//         console.log(num);
//         console.log(newNum); 

    
//     // Decrement Operator:------- 

//     console.log("Decrement Operator:--------------------------");

//     console.log("Prefix :-----------");
//     var num = 15;
//     var newNum = num-- +5;
//     console.log(num);
//     console.log(newNum);


//     console.log("PostFix :-------------------");
//     var num1 = 15;
//     var newNum1 = --num1 +5;
//     console.log(num1);
//     console.log(newNum1); 


//     // Comparison Operator:-------

//     console.log("Comparison Operator:-------------------------------------------");

//     var a = 30;
//     var b = 10;
//     console.log( a != b);
//     console.log(a>b);
//     console.log(a >= b);
//     console.log(a<b);
//     console.log(a<=b);
 
//     // Logical Operators:-----------------------------------

//     console.log("Logical Operator :---------------------");

//     var a = 30;
//     var b = -20;
//     console.log(a,b);
//     console.log(a > b);

//     console.log("Logical AND (&&):------");
//     console.log(a > b && b > -20 && b < 0);

//     console.log("Logical OR(||) :----");
//     console.log((a < b) || (b > 0) || (b > 0));

//     console.log("Logical NOT (!):------");

//     console.log(!((a>0) || (b<0)));
//     console.log(!true);


//     // String Operators :----
    
//     console.log("String OperatorS :-------------");

//         console.log("Hello " + "wrold");


//         var myname = "Jay";
//         console.log(myname + " Patel");

    
//         // Challenge:---

//         // Exponentiation Operator :-------------

//         console.log("Exponention Operator:----------------------------")
//         // Sol 1:-
//         console.log(3**3); //(Exponentiation Operator:);

//         console.log(10** -1);

//         // 2

//         console.log(5 + "Patel");

//         // 3 swapping Number :-----

//         console.log("Swapping Number :------------");

//         var a = 5;
//         var b = 10;

//         var c = b;  // c = 10
//         b = a;      // b = 5
//         a = c;

//         console.log("The value of a is " + a);
//         console.log("The value of b is " + b);

//         // 4 Swapping Number wthout using 3rd number

//         console.log("Swapping number without using 3rd number")

//         var a1 = 5;
//         var b1 =10;
        
//         a1= a1+b1; //  a1 = 15
//         b1= a1-b1; // b1 = 5
//         a1 = a1-b1;  // a1 = 10
//         console.log("the value of a1 is " + a1);
//         console.log("the value of b1 is " + b1);


        // Difference between == or ===:--------------------

        // var num1 = 5;
        // var num2 = '5';
        // console.log(num1 == num2);
        // console.log(typeof(num1));
        // console.log(typeof(num2));



        // var Num1 = 5;
        // var Num2 = '5';
        // console.log(typeof(Num1));
        // console.log(typeof(Num2));
        // console.log(Num2);

        // console.log(Num1 === Num2);


//  Control Statement & Loop :-------------

    // If...Else

    // console.log("If...else Statement :----------------");
    // var tomr = 'rain';
    // if(tomr == 'rain'){
    //     console.log('Take a Raincoat');
    // }
    // else{
    //     console.log('No need to take raincoat');
    // }

    // // 2:----
    //     var year = 2020;
    //     if(year % 4 === 0){
    //         if(year % 100 ===0){
    //             if(year % 400 === 0){
    //         console.log("This year " + year + "is a leap year");
    //   }else{
    //     console.log("This year " + year + " is not a leap year");
    //     }
    //   }else{
    //     console.log("This year " + year + "is a leap year");
    //   }
    //   }else{
    //     console.log("This year " + year + " is not a leap year");
    //   }


    // if(score = 5){
    //     console.log("Omg, we loss the game");
    // }else{
    //         console.log("yeah, we won the game");
    // }



    // Ternary Operator:------------

    // console.log("Ternory Operator :----------------------------------");

    // var age = 17;
    // if(age >= 18){
    //     console.log("You are eligibe for vote ");
    // }else{
    //         console.log("You are not eligible for vote")
    // }


    // var age = 17;
    // console.log((age >= 18) ? "You can vote " : "You can not vote ");

    // Switch statement :--------
    // console.log("switch statement:--------");

    // Find the area of Circle , triangle and rectangle..??
    

//     var area = "Circle";
//     var PI = 3.142, l=5, b=4, r=3;

//     if(area = "circle"){
//             console.log("The area of circle is :" + PI*r**2);
//    }else if(area == "Triangle"){
//         console.log("The area of Triangle is : " + (l*b)/2);
//    }else if (area == "Rectangle"){
//        console.log("The are of Rectangle is " + (l*b));
//    } else{
//         console.log("Please enter valid data");
//    }

//    var area = "Circle";
//    var PI = 3.142, l=5, b=4, r=3;

//    switch(area) {
//         case 'Circle':
//         console.log("The aera of Circle is : " + PI*r**2);
//         break;
        
//         case 'triangle':
//         console.log("The area of Triangle is : " + (l*b)/2);   
//         break;
        
//         case 'rectangle' :
//         console.log("The area of Rectangle is " + (l*b));
//         break;
       
//         default:
//                 console.log("Please enter valid data");
//       }

  
// while loop:----------------
// console.log("while Loop :-------------------");

// var num = 0;

// while (num <=10){
//         console.log(num);
//         num ++;
//     }

// // do while loop :--------------------------

//     console.log("Do...while loop:---------------------");
//     var num = 20;
//     do{
//         console.log(num);
//         num ++;
// }while(num <= 10);


// For loop :--------------

    // console.log("For loop");

    // for(var num = 0; num <= 10; num++){
    //     console.log(num);
    // }

    // for(var num =1; num<= 10;num++){
    //     var tableOf = 8;
    //         console.log(tableOf + " * " + num + " = " + tableOf * num);
    // }


// FUnction in JavaScript:-----------------------------------------

// console.log("Function in JavaSCript :--------------------");

// var a =10;
// var b =20;
// var sum = a+b;
// console.log(sum);

    // Function Parameter:----------
    // console.log("function Parameter:-----")
    // function sum (){
    //     var a = 10, b = 20;
    //     var total = a + b;
    //     console.log(total);
    // }
    // sum();

    // // Funcion arguements:---------------
    // console.log("Function arguements :-------");

    // function sum (a,b){
    //         var total = a+b;
    //         console.log(total);
    // }
    // sum();
    // sum(20,30);
    // sum(50,50);


    // Function expression :-----------------
    // console.log("Function expression");


    // function sum (a,b){
    //         var total = a+b;
    //         console.log(total);
    // }   
    // var funExp = sum(5,15);
    

    // Return Keyword:----------------
    // console.log("Return Keyword:---------------------------");

        // function sum(a,b){
        //         return total = a+b;
        // }
        // var funExp = sum (5,25);
        // console.log('the sum of two number is ' + funExp); 


    // Anonymous function expression:---------------------
    // console.log("Anonymous function expression");

    // var funExp = function(a,b){
    //         return total = a+b;
    // }
    // var sum = funExp(15,15);
    // var sum1 = funExp(20,15);
    // console.log(sum > sum1);


    // Es 6 basic:---------------------------------------------------

    // var myName = "Jay Patel";
    // console.log(myName);

    // let myName = "Jp";
    // console.log(myName);

  
    // function biodata() {
    //     var myFirstName =  "Jay";
    //     console.log(myFirstName);
    
    //     if(true){
    //             var myLastName = "Patel";
    //             console.log('inner ' + myLastName);
    //             console.log('inner ' + myFirstName);
    //     }
    //     console.log('innerOuter ' + myLastName);
    //    }
    // biodata();

    

    // Template Literas:----------------------

    // for ( let num = 1; num<= 10; num++){
    //     let tableOf = 12;
    //     console.log(`${tableOf} * ${num} = ${tableOf * num}` );
    // }


    // Default Perameters :----------------------------------------

    // function mult (a,b=5){
    //     return a*b;
    //  }
    //  console.log(mult(3));

    

    // Fat Arrow function:--------------------------------------------

    // console.log("Fat arrow Function");

    // console.log(sum());

    // function sum(){
    //         let a = 5; b =6;
    //         let sum = a + b;
    //         return `the sum of the two number is ${sum}`;
    // }


    
    // const sum = () =>{
    //     let a = 5; b=6;
    //     let sum = a + b;
    //     return `the sum of the two number is ${sum}`;
    // }
    // console.log(sum());

    
    // const sum1 = () => `the sum of twp numbers is ${(a=6) + (b=6)}`;
    // console.log(sum1());


    // // Array :------

    // var myFriends = ['Suchit', 'Neel', 'Kaushal', 'Rutvik', 'Chirag']
    // // console.log(myFriends[1]);
    // // console.log(myFriends[myFriends.length-1]);
    
    // for (var i = 0; i<myFriends.length; i++){
    //     console.log(myFriends[i]);
    // }

    // // for in loop :-----
    // console.log("for in loop");

    // var myfriends = ['Suchit', 'Neel', 'Kaushal', 'Rutvik', 'Chirag']

    // for (let elements in myfriends){
    //         console.log(elements);
    // }



    // // for off loop :---------------------------


    // console.log("for off loop");

    // var myfriend = ['Suchit', 'Neel', 'Kaushal', 'Rutvik', 'Chirag']

    //     for(let elements of myfriend){
    //         console.log(elements);
    //     }


    //     // forEach :----------------


    // var myfriend1 = ['Suchit', 'Neel', 'Kaushal', 'Rutvik', 'Chirag'];

    // myfriend1.forEach(function(element, index, array) {
    //         console.log(element + " index :" + index + array);
            
    //     });

    // myfriend1.foreach((element,index,array) =>{
    //     console.log(element + "index :" + index + " " + array);
    // });

    
    // Searching And Filter in an Array:---------------










    // CRUD Operation:--------------------------------------------

    // const animals = ['pigs', 'goats', 'sheep'];

    // // const count = animals.push('chicken');
    // // console.log(animals);
    // // console.log(count);

    // animals.push('chicken', 'cats', 'cow');
    // // console.log(push);
    // console.log(animals); 

    // const animals = ['pigs', 'goats', 'sheep']
    // const count = animals.unshift('chicken');
    // // console.log(count);
    // console.log(animals);


    // const myNumbers = [1,2,3,4,5,6];
    // myNumbers.unshift(7,8,9,10);
    // console.log(myNumbers);



    // POP :------------------------
    // const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];

    // console.log(plants);
    // console.log(plants.pop());
    // console.log(plants.pop());
    // console.log(plants);


    // Shift:---------------------------


    const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];

    console.log(plants);
    console.log(plants.shift());
    console.log(plants.shift());
    console.log(plants);


    // Adds and /or removes elements from an array.

    // 1: Add dec at the end of an array?
    // 2: What is the return value of splice method?
    // 3: update march to March (update)?
    // 4: Delete June from an array?

    const months = ['Jan', 'march', 'April', 'June', 'July'];

    // sol1:

    const newMonths = months.splice(5, 0, "Dec");
    console.log(months);