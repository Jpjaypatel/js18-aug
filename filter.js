// Filter:------

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

// 2
    const numbers = [1, 2, -4, 6, 9];
    const filtered = numbers.filter(n => n >= 3);
    console.log(filtered);

// 3
    let arr = [1 ,2, 3, 4, 5, 6, 7, 8, 9];

    let arr2 = arr.filter(x => x>3);
    console.log(arr2);

//4 Map & filter 
    console.log("map & filter :-----");
    let arr3 = arr.map(x=>x+2).filter(y=> y>7).reverse();
    console.log(arr3); 