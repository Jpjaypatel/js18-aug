// sorting :-----------------

const months = ['March', 'Jan' , 'Feb' , 'Dec'];
months.sort();
console.log(months);

const arr = [1, 30, 4, 21, 100000];
arr.sort();
console.log(arr);


//2
    console.log("Sorting Program2 :-------------------");
var a = ["Sanjay", "Aman", "Jay", "Rehman", "Karan"];
console.log(a);
a.sort();
console.log(a);

//3 Reverse

    console.log("Sorting + Reverse :-------");

    var a = ["Jay", "Smit", "Ronak", "Mehul", "Rutvik", "Neel", "Chirag", "Kaushal"];
    console.log(a);
    a.sort();
    console.log(a);
    a.reverse();
    console.log(a);


//4
console.log("Moths-----");

const month = ["dec", "march", "feb", "november", "jan", "oct"];
console.log(month);
month.sort();
console.log(month);

//5 sorting numbers :-------------

console.log("Sorting Numbers and Names :-------");
let b = [74, 18,20,22,10,19,99];
let c = ["Jay", "Abhishek", "Banna", "Sahil", "Mehul", "Rutvik"];
console.log(c);
console.log(b);
b.sort();
c.sort();
console.log(c);
console.log(b);


//6 sorting months :-------

console.log("Sorting Months");
const array = [
    {
            Year : 2018,
            Month : 'Dec'
    },
    {
            Year : 2017,
            Month : 'Apr'
    },
    {
            Year : 2018,
            Month : 'March'
    },
    {
            Year : 2017,
            Month : 'Oct'
    },
    {
            Year : 2018,
            Month : 'Jan'
    },
    {
            Year : 2017,
            Month : 'Apr'
    },
]
const Month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
Month.sort ((a,b) => {
        if(a.Year !== b.Year) return a. Year - b. year;
        return Month.indexOf(a.Month) - Month.indexOf(b.Month)
});
console.log(Month);