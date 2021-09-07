// //task of push:-

// // const arr = document.getElementsByName(array[])
// task= ["task1", "task2", "task3"]
// console.log(`this is array ${task}`);


// var taskName = document.getElementById("taskname")
//  var t = ""
// const addTask = () =>{
//     console.log("before push");
//     for(let i=0; i<taskName.length;i++){
       
//         var temp = taskName[i]
//         t = t+temp.value
//         // task.push(
//         //     {
//         //         text:temp
//         //     }
//         // )
        
//     }
//     console.log(`this is new arry ${t}`);
//         // var show = document.getElementById('show').innerHTML = task
    

// }
   

//     console.log(task);
    
  



var t = ["task1", "task2", "task3", "task4"]
// console.log(t);
function addTask()
{

    let input = document.getElementById('taskname').value
        console.log(input);
    t.push(input)

    // console.log("jsbfkjbwg");
    console.log(t);
    // for(let i=0; i<t.length;i++)
    // {
    //     // let temp = input[i]

    // }
}




// var t1 = ["task1", "task2", "task3", "task4"]

// function delTask()
// {
        
//     let input = document.getElementById('taskname').value
//         console.log(input);
//         t1.pop(input);
//         console.log(t1);
// }


var task = ["task1", "task2", "task3", "task4"]

function delTask()
{
    let input = document.getElementById('taskname').value
    console.log(input);
    task.pop(input);
    console.log(task);

//     for (let i=0; i>task.length; i--)
//     {
//         let temp = input[i]
//     }
}






// example:----
const fruits = ["Mango", "Banana", "Apple", "Grapes"]
console.log(fruits.pop());
console.log(fruits);
fruits.pop();
console.log(fruits);