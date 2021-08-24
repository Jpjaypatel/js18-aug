// arrow function

function add() {
    let a = 5;
    let b = 10;
    console.log(`The sum = function add()of ${a} and ${b} is ${a + b}`);
}

add();

const funadd = () => { let a = 5;
let b = 10;
console.log(`The sum = function add()of ${a} and ${b} is ${a + b}`);}

//Es6

const sum =() => {
    let a = 30;
    let b = 40;
    return a+b;
}
console.log(sum());


    

//2 

let a = 10;
let b = 80;
    const sum1 = () => a+b
    console.log(sum1());


//3
const sum2 = (a,b) => a+b
console.log(sum2(40,40));

//4
let a1 = 20;
const sum3 = (b) => a1+b
console.log(sum3(100));

//5
    const greet = () => {
        return "good morning";

    }
    console.log(greet())


//6
    let arr1 = [1,2,3,4,5];

    const arrmap = arr1.map((h)=>{return h*2});

    console.log(arrmap);