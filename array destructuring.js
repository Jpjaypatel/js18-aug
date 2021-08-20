// JavaScript Array destructuring

// let user = ["Jay Patel", 22, "Ahmedabad"];

    function user() {
        return ["Jay Patel", 22, "Ahmedabdad"];
    }
        let[name,age,city] = user();
    console.log(city);
    console.log(name);
    console.log(age);
   

//2.

const myproglang = ['js', 'php', 'c', 'phython', 'java'];
//es5
// var top1 = myproglang[0];
// var top2 = myproglang[1];
// var top3 = myproglang[2];

// console.log(" My fav prog lang is " + top1);

//ES6

    let [top1,top2,top3,top4,top5] = myproglang;
    console.log("My fav pro lang is "+ top3);

//2
[top1, top2] = myproglang;
console.log(`My fav prog lang is ${top1} and my 2nd fav is ${top4}. `);
