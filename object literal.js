//7. Object literal syntax extensions :

    let Name = 'Computer',
        Status = 'On';


     let Machine = {

        Name,
        Status
     };
     console.log(Name);
     console.log(Status);


    //2 :- construct object literal from local variable

    function student(name, course){
        return{
            name: name,
            course: course,
        };
    }

    //ES6
    function student2(name, course){
        return{
            name,
            course,
        };
    }

    const stu1 = student("Jay", "MCA");
    const stu2 = student2("Neel","MSC");
    console.log(stu1);  
    console.log(stu2);

    //2

    let name = "Pawan",
     course = "Bcom";
    let Employee = {
            name,
            course,
        };
        console.log(Employee);

//Object literal syntax extensions:

//ES5

let coursename = "course";
console.log("ES5 Object literal syntax extensions:");
let student1 = {

    name: "Keyur",
    [coursename]: "B.Tech",
};
console.log(student1);

//ES6

let prefix = " student";
let studObj = {

    [prefix + " name"] : "Rooney",
    [prefix + " course"]: "MBA"
};
console.log(studObj["student name"]);
console.log(studObj["student course"]);


// Concise Method Syntax
 
//ES5

let vehicle = {

    name: " car ",
    speed: function (){
            console.log("Speed of the" + this.name + " is 100km/h");
    },
};

//ES6
let vehicle2 = {
    name : "car",
    speed() {
        console.log(`Speed of the ${this.name} 2 is 100 km/h`);
      },
};

console.log(vehicle.speed());
console.log(vehicle2.speed());