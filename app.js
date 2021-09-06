// task= ["task1", "task2", "task3"]

// const addTask = () =>{
//     var taskName = document.getElementById("taskName").value
//     console.log(taskName);
//     console.log({task})
// }

// task.push("task6", "task7", "task8");
// console.log(task);



// let vegetables = ['tometo', 'potato']
// let moreVegs = ['celery', 'beetroot']

// vegetables.push(...moreVegs)
// console.log(vegetables);


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