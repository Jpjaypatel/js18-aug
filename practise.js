// 1 let:
let array = [1, 2, 3, 4];
console.log(array);

//2.let vs var:

for(var i =0; i < array.length; i++){
    console.log(array[i]) ;
}
console.log("this is sparta!");
console.log("hey there!");
console.log(array);

//3 const:

const array1=[1,2,36,40];

//4. Default Function Parameters:
function multiply(a, b = 5) {
        return a * b;
   }

    console. log(multiply(25, 5));
    console. log(multiply(5));

//5. Rest Parameter:

function sum(...inputs){
    console.log("Rest Parameter");
    console.log(...inputs);  
     let total = 0;    
    for(let i of inputs){
        total +=  i;
    }
    console.log(total);
 }
sum(1,2,3,4,5,6,7);

//6. Spread Operator:

function sum(x, y, z) {

    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));
console.log(sum.apply(null, numbers));

//7. Object literal syntax extensions :

    let Name = 'Computer',
        Status = 'On';


     let Machine = {

        Name,
        Status
     };
     console.log(Name);
     console.log(Status);


    //abcd


    let prefix = 'machine';
    let machine = {
    [prefix + ' name']: 'server',
    [prefix + ' hours']: 10000
};

console.log(machine['server']); // server
console.log(machine['10000']); // 10000

//global object
var a = 10;
var b = 30;
console.log(a);
console.log(b); 



// let keyword
// let xx=10;
// if(xx==10){
//     let xx=20;
//     console.log(xx);
// }
//     console.log(xx);

// let x= 30;
// console.log(x);

// var vehicle = ["swift", "creta", "seltos"];
// for( let i=0;i<vehicle.length;i++)
//     {
//          console.log(`${vehicle[i]}`);
//     }

//     for (var i = 0; i < 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, 1000);
//     }
   
   
//     for(var i =0; i <5; i++){
//     (function (j) {
//         setTimeout(function(){
//             console.log(j);
//         }, 1000);
//     })(i);
// }