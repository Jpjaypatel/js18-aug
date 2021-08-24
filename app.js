// // //Filter:-------------------


// //Find all prime numbers in array :----

// const array  = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// function isPrime(num){
//         for(let i=2; num> i; i++) {
//             if(num % i==0) {
//                 return false;
//             }
//         }
//         return num > 1;
// }
// console.log(array.filter(isPrime));

// //2
// function isNegative(element, index, array) {
//     return element < 0;
//   }
  
//   const int8 = new Int8Array([-10, 20, -30, 40, -50]);
//   const negInt8 = int8.filter(isNegative);
  
//   console.log(negInt8);

//   //3 
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//   const newArr = arr.filter(a => a % 2 ===0);  
//   console.log(newArr);

  //4.

  let arr = [1,2,3,4,5,6];

  let arr2 = arr.map(x=>x+2).filter(y=> y>4).reverse();
  console.log(arr2)
  

  
 