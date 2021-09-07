 2

    console.log("Push1 Program1:---");

let vegetables = ['tometo', 'potato']
let moreVegs = ['celery', 'beetroot']

vegetables.push(...moreVegs)
console.log(vegetables);


var k = " ";
        function add() {
            var input = document.getElementsByName('arr');
            for (var i = 0; i < input.length; i++)
            {
                var a = input[i];
                k = k + a.value;
            }
            document.getElementById("par").innerHTML = k;
            console.log(k)
        }

// 3

console.log("Push Profram2:----");

const animals = ['pigs', ' goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
console.log(animals);

animals.push ('chickens', 'cats', 'dogs');
console.log(animals);

//4
console.log("Push Program 3 :----");

let sports = ['soccer', 'baseball']
let total = sports.push('football', 'hockey')

console.log(sports)
console.log(total)