//forEach:-----------

// const array1 = ['a', 'b', 'c'];

// array1.foreach(element => console.log(element));

let ratings = [5, 4, 5];
let sum = 0;

let sumFunction = async function (a, b) {
    return a + b
}

ratings.forEach(async function (rating) {
    sum = await sumFunction(sum, rating)
})

console.log(sum)

//3
var a = ['Jay', 'Neel', 'Rutvik', 'Chirag'];
a.forEach(function (value) {
    console.log(value);
});

//4 
console.log("forEach Program:------------------------");
const myProgram = ['Photography', 'Php', 'Java', 'Python', 'C'];
// for(let i = 0; i < myProgram.length; i++)
// {
//     console.log(myProgram[i]);
// }

myProgram.forEach(function (value, index) {
    console.log(index + "--" + value);
})

//5
const newArr = [10, 20, 30, 40, 50];

newArr.forEach(function (value, index, arr) {
    console.log(arr[index] + 100);
})

var a = ['Photography', 'Playing', 'Reading', 'Watching'];
a.forEach(function (value) {
    console.log(value)
});

//6

console.log("This is the example of hobbies:-----");
const Hobbies = ['Photography', 'Playing', 'Reading', 'Watching'];
Hobbies.forEach(function (value, index,) {
    console.log(value, index);
});

//7 

    const Number = [11,12,13,14,15,16];
    Number.forEach(function (value, index, arr){
        // console.log(arr[index] + 100 );
        // console.log(index + "--" + arr)
        console.log(index + "--" + value);
    });

//8
    var a = ['Jay', 'Patel', 'Mineshbhai'];
    a.forEach(function (value, index){
        console.log(index + "--" + value);
    })