// map
var arr = [10, 20, 30, 40, 50, 60];
var newArr = arr.map(function(value){
    value++;
    return value;
});
console.log(arr);
console.log(newArr);

//2
var arr = [ 
    { price : "100", product: "Mobile"},
    { price : "200", product: "Laptop"},
    { price : "300", product: "Mic"},
    { price : "400", product: "Pc"},
];
var newArr = arr.map((value,i) => value.product);
console.log(newArr);

//3
var arr = [
        {price : "100", product : "Laptop"},
        {price : "200", product : "Mobile"},
        {price : "300", product : "Mic"},
        {price : "400", product : "Pc"},
];
var newArr = arr.map((value) =>{
    return value.product;
});
console.log(newArr);

//3 
    console.log( "Map Program...!!");
const map1 = new Map();
map1.set ('a', 1);
map1.set ('b', 2);
map1.set ('c', 3);

console.log(map1.get('a'));
map1.set('a',97);

console.log(map1.size);
map1.delete ('b');
console.log(map1.size);


//4.
const oldarr = ['Jay', 'Mineshbhai', 'Patel'];
console.log(oldarr[0]);
console.log(oldarr[1]);
console.log(oldarr[2]); 

const newarr = oldarr.map(function (cvalue, i, arr) {
console.log(arr);
});

//5.
const studentdata = [   
    { id: 1, name: "Jay", degree: "BCA"},
    { id: 2, name: "Patel", degree: "MCA"},
    { id: 3, name: "Jackksphotography", degree: "Phtography"},
];
    const newdata = studentdata.map( (cvalue) =>{
        return `My name is ${cvalue.name}.My highest degree is ${cvalue.degree}`;
    });
    console.log(newdata);

//6.
const myMap = new Map()
    myMap.set(0, 'zero')
    myMap.set(1, 'one')

    for(const [key , value]of myMap) {
        console.log(key + '=' +value)
    }

    for (const key of myMap.keys()){
        console.log(key)
    }

    for (const value of myMap.values()) {
        console.log(value)
    }

    for(const [key, value] of myMap.entries()) {
        console.log(key + ' = ' + value)
    }

//7.
const first = new Map([
    [1, 'One'],
    [2, 'Two'],
    [3, 'Three'],
])

const second = new Map([
    [1, 'uno'],
    [2, 'dos'],
])

const merged = new Map([...first,...second])

console.log(merged.get(1))
console.log(merged.get(2))
console.log(merged.get(3))