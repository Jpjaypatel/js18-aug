// reduce :--------------

console. log("Reduce 1 Prog :------------------");

let arr = [1,2,3,4,5,6,7,8,9,];
    let sum = arr.reduce ((accumlator , current) =>{
        
        return accumlator + current;        
    },5)
    console. log(sum);

//2

var x = [1,2,3,4,5];
var sums = x.reduce(function(total, value, index, array){
    return total + value;
},0);

console.log (sums);


//3 
var x = [1,2,3,4,5];
var sum1 = 0;
for(var n of x) {
        sum1 = sum1 + n ;
}
console.log("for loop : " + sum1);


//4
