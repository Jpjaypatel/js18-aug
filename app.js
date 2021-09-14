//  Name Print:---------------------------------------------------------------------
// let Fname = "jay";
// let Lname = "patel";
// let fullName = Fname + ' ' + Lname 

// console.log(fullName);




// Country Name Print:--------------------------------------------------------------

// let city = "ahmedabad";
// let country = "India";
// let location = city + ', ' + country;
// console.log(location);


 

// Numbers :------------------------------------------------------------------------

// let num = 5.5 /2
//  console.log(num)


//  let x = 11;
//  let num = (x +1)*2;
//  console.log(num);


//  let age = 22;
//  let dogYears = (age +1) /7;
//  console.log(dogYears);


// let studentScore =41;
// let maxScore = 100;
// let percentage = studentScore / maxScore * 100;
// console.log(percentage);







// Variables :------------------------------------------------------------------------


// 1 You can't define a variable more than once


// let petName = 'Rio';
// petName = 'Yudi';
// console.log(petName); 


// // 2 There are rules related to variable names


// let test_ = 2;
// let result = 3 + 4;


// // 3. Variable names cannot be reserved keywords 

// let let = 12;




// Build a temperatur Converter:-------------------------------------------------------


// let fahrenheit = 32
// let celsius = (fahrenheit - 35) * 5/9;
// let kelvin = (fahrenheit + 459.67) *5/9;
// console.log(celsius);
// console.log(kelvin); 




// Boolean And Comparison Operators:--------------------------------------------------------


//  === -eueality Operator
// !== - no equal Operator
// <   - less than operator
//  >  - greater than operator
//  <= - les than or equal to Operator
//  >= - greater than or equal to Operator


// let temp = 12
// let isFreezing = temp !== 32 
// console.log(isFreezing);



// let temp = 31
// let isFreezing = temp === 32 
// console.log(isFreezing);


// let temp = 32
// let isFreezing = temp <= 32 
// console.log(isFreezing);



// Challenge :--------------------------


// let age = 1;

// let isChild = age <= 7;
// let isSenior = age >= 65;

// console.log("You are Child", isChild);
// console.log("You are Senior",isSenior);





// If Statements:---------------------------------------------------------------------------------

// let temp = 180;
// if(temp <= 32){
// console.log('It is Freezing outside')
// }

// if(temp >= 110){
//     console.log('It is way to hot Outside');
//     console.log(('Testing123"'))
// }





// If-else Statement :---------------------------------------------------------------------------------


// let isAccountLocked = false;
// let userRole = 'user'

// if(isAccountLocked){
//     console.log('Is Account Locked')
// }else if(userRole === 'admin'){
//     console.log('Welcome admin')
// }else{
//     console.log('Welcome')
// }



// Challenge :---------------------

// let temp = 12

// if(temp<= 32) {
//         console.log('It is Freezing Outside!')
// }else if(temp >+ 110){
//     console.log('It is Hot Outside!')
// }else{  
//     console.log('Go for it. It is pretty nice out')
// }






// Logical AND OR Operators :--------------------------------------------------------------

// Logical And Operator:----



// let temp = 55;
// if (temp >= 60 && temp <= 90){
//     console.log('It is pretty nice out')

// }else if (temp <=0 || temp >= 120){
//     console.log('Do not go outside')
// }else{
//         console.log('Ehh. Do what you want')
// }






// let isGUestOneVegan = false
// let isGuestTwoVegan = false


// if(isGUestOneVegan && isGuestTwoVegan){
//         console.log('Only offer up vegan dishes')
// }else if(isGUestOneVegan || isGuestTwoVegan){
//         console.log('Make sure to offer up some Vegan Options ')
// }else{
//     console.log('Else, Offer up anything on the menue')
// }




// Variable Scope : PArt-1 :-----------------------------------------------------------
// Global Scope - Define the outside of all code blocks
// local Scope - Define inside a code block

//  In a scope you can access variabe defined in the scope, or in any parent/anscestor scope

// Global Scope (varOne)
// Local Scope (varTwo)
    // Local Scope (varFour)
// Local Scope (varThree)
// let varOne = 'varOne'

// if(true){
//     console.log(varOne)
//     let varTwo = 'varTwo'
//     console.log(varTwo)

//     if(true){
//         let varFour = 'varFour'
//     }
// }


// if(true){
//     let varThree = 'varThree'
// }

// console.log(varTwo)





// Scope -2 :-------------------------------------------------------------------

// Global
    // local
        // local
    // local

// let name = 'Jay'

// if(true){
//         // let name = 'Mike'
        
//     if(true){
//        let name = 'James'
//         console.log(name);
//     }
// }

// if(true){
//     console.log(name)
// }







// Function Basic :---------------------------------------------------------------


// function - input(argument), code, output 

// let greetUser = function(){
//         console.log('Welcome User! ')
// }

// greetUser()
// greetUser()


// let square = function(num){
//     let result = num *num
//     return result
// }
// let value = square(3)
// let otherValue =square(10)
// console.log(value)
// console.log(otherValue)

// Challenge:-----------------


// convert fahrenheit to celsius:---


// let convertFahrenheitToCelsius = function(fahrenheit){
//     let celsius = (fahrenheit - 32) *5/9;
//     return celsius
// }

// let tempOne = convertFahrenheitToCelsius(32)
// let tempTwo = convertFahrenheitToCelsius(68)

// console.log(tempOne)
// console.log(tempTwo)




// Undefined - Null :-------------------------------------------

// let name 
// name = 'Jay'
// if(name === undefined){
//     console.log("Please Provide a name")
// }else {

// }
// console.log(name)


// // Undefined for function arguments:-------------------------

// let square = function(num){
//         console.log(num)
// }
// let result = square()
// console.log(result)
    
    
// // 

// let age = 22

// age = null
// console.log(age)






// Challenge :-


    // const sum = () =>{
    //     let a = 5; b=6;
    //     let sum = a + b;
    //     return `the sum of the two number is ${sum}`
    // }
    // console.log(sum());

    
    // const sum1 = () => `the sum of two numbers is ${(a=6) + (b=6)}`;
    // console.log(sum1());



// let add = function (a, b,c){
//     return a+b+c
// }
// let result = add(10,1,5)
// console.log(result)



// Default arguments :-------------------------------------


    // let getScoreText = function (name = 'Jp ', score = 0){
    //     console.log(name)
    //     console.log(score)
    //     return ' Name: ' + name + ' Score: ' + score
    // }
    // let scoreText = getScoreText(undefined, 99)
    // console.log(scoreText)



    // Challenge:-----------

    // total, tipPercent .2 


    // let getTip = function(total, tipPercent = .2){
    //     return total * tipPercent
    // }

    // let tip = getTip(40, .25)
    // console.log(tip)






    // Functio Scope :-------------------------------------------------------------------------------

    // Global Scope (convertFahrenheitToCalsius, tempOne, tempTwo)
    // Local Scope(fahrenhiet, celsius)
        // Local Scope (isFreezing)

        // let convertFahrenheitToCalsius = function(fahrenhit){
        //         let celsius = (fahrenhit - 32) *  5/9
        //         if(celsius <= 0){
        //                 let isFreezing = true
        //         }
        //         return celsius
        // }
        // let tempOne = convertFahrenheitToCalsius(32);
        // let tempTwo = convertFahrenheitToCalsius(68);

        // console.log(tempOne)
        // console.log(tempTwo)






        // Templet String :----------------------------


        // Defult Arguments:---

        // let getScoreText = function(name = 'Jp', score = 0){
        //     return `Name : ${name} - Score ${score}`
            
        // }
              
        // let scoreText = getScoreText(undefined, 99)
        // console.log(scoreText)
               
        // // Challenge ---------
        // //  A 25% tip on$40 would be $10

        // let getTip = function (total, tipPercent = .2){
        //     let percent = tipPercent * 100
        //     let tip = total *tipPercent    
        //     return `A ${tipPercent * 100}% tip on $${total} would be &${total *tipPercent}`
        // }

        // let tip = getTip(60);
        // console.log(tip)

        





        // Grade - calc :---------------------------------------------------------------------------


    // Students score, total possible score
    // 15/20 -> You got a C (75%)!
    // A 90-100, B 80-8, C 70-79, D 60-69, F 0-59


    // let gradCalc = function (score, totalScore){
    //     let percent = (score / totalScore) * 100
    //     let letterGrade = ''

    //     if(percent >= 90){
    //         letterGrade = 'A'
    //     }else if(percent >=80){
    //         letterGrade='B'
    //     }else if(percent>=70){
    //         letterGrade = 'C'
    //     }else if(percent >=60){
    //         letterGrade = "D"
    //     }else{
    //         letterGrade ='F'
    //     }
        
    //     return `You got a ${letterGrade} (${percent}%)!`
    // }

    // let result = gradCalc(10, 20)
    // console.log(result)







    // Objects :---------------------------------------------------------------------------------------



    // let myBook = {
    //     title: '1984', 
    //     author: 'George Orwell',
    //     pagecount: 326
    // }

    // console.log(`${myBook.title} by ${myBook.author}`)

    // myBook.title = 'Animal Farm'
    // console.log(`${myBook.title} by ${myBook.author}`)

    

    // Challenge:--------------------------


    // name, age, location


    // let me = {
    //     name : 'Jay',
    //     age : 22,
    //     location : 'Ahmedabad'
        
    // }
    // console.log(`${me.name} is ${me.age} and lives in ${me.location}.`)
    // me.age = me.age + 1
    // console.log(`${me.name} is ${me.age} and lives in ${me.location}.`)




    // Object-Function:---------------------------------------
    
    
    
    // let myBook = {
    //     title: '1984', 
    //     author: 'George Orwell',
    //     pageCount: 326
    // }


    // let otherBook = {
    //     title: 'A Peoples History', 
    //     author: 'Howard Zinn',
    //     pageCount: 723
    // }

    // let getSummary = function(book){
    //     return {
    //         summary: `${book.title} by ${book.author}`,
    //         pageCountSummary: `${book.title} is ${book.pagecount} pages long`
    //     }

    // }
    // let bookSummary = getSummary(myBook)
    // let otherBookSummary = getSummary(otherBook)

    // console.log(bookSummary.pageCountSummary)



    // challenge:----------------------

    //  let convertFahrenheit = function (fahrenheit){
    //      return{
    //          fahrenheit : fahrenheit,
    //          kelvin : (fahrenheit + 459.67) *(5 / 9),
    //          calsius : (fahrenheit - 32 ) * (5/9) 
    //      }
    //  }
    //  let temps = convertFahrenheit(74)
    //  console.log(temps)







    // Object Reference:-------------------------------------------------------------------


    let myAccount = {
        name : 'Jay',
        expenses : 0,
        income : 0
    }

    let otherAccount = myAccount
    otherAccount.income = 1000

    let addExpense = function(account, amount){
         account.expenses = account.expenses + amount
        
    } 

    addExpense(myAccount, 2.50)
    console.log(myAccount)