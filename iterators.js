//Iterators

console.log("This is practise of Iterators:----");

let numbers = [100, 200, 300,400,500,600];

let iter = numbers[Symbol.iterator]();

let result = iter.next();

while(!result.done){

    console.log(result.value);
    result = iter.next();
}

//2 

    let str = "Jay Patel";
    let iter1 = str[Symbol.iterator]();
        let result1 = iter1.next();
    while(!result1.done) {
        console.log(result1.value);
        result1 = iter1.next();

   }


//3

function numberIterator(arr){

    var nextNum = 0;
    return{
        next(){
               if(nextNum < arr.length){
            return{
                    value: arr[nextNum++],
                done : false
            }
        }else{
            return{
                    done:true
            }
        }
        }
    }
}

    let numbrers = [100,200,300,400,500];

    let num = numberIterator(numbers);
    console.log(num.next().value);
    num.next();
    console.log(num.next().value);
    console.log(num.next().value);
    console.log(num.next().value);