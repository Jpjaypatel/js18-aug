// Promises

function prom (a, b){
    return new Promise(function(resolve, reject){
        console.log("Fetching data, please wait.")
            var c = a / b;
            setTimeout(() => {
            if(a,b){
            resolve(`Your answer :${c}`);
        }else{
            reject("Failed to calculate.");
        }
        }, 2000)
    });
        
}
 
prom(9,2).then((result) =>{
    console.log(result);
}).catch((error) =>{
    console.log(error);
});

// Promise-2
  
    const pobj1 = new Promise ( ( resolve, reject) =>{
        setTimeout( () => {
            let roll_no = [1,2,3,4,5];
            resolve(roll_no); 
            // reject('Error while commicating');
        }, 2000);
    } );

        const getBiodata = (indexdata) => {
            return new Promise( (resolve, reject) => {
                setTimeout( (indexdata) => {
                    let biodata = {
                        name : 'Jay',
                        age : 22
                    }
                    resolve (`My roll no is ${indexdata}. My name is ${biodata.name} and I am ${biodata.age} years old. `);
                }, 2000, indexdata)
            });
        }

    pobj1.then((rollno) =>{
        console.log(rollno);
        return getBiodata(rollno[1]);
        }).then ((kuchbhi) => {
            console.log(kuchbhi);
        } )
        .catch((error) => {
        console.log(error);
    })

    //Promise chaining

    let p= new Promise ((resolve , reject) => {
        setTimeout(() =>{
                resolve(10);
        }, 3 *1000);
    });

    p.then ((result) => {
        console.log(result);
        return result *2;
    }).then ((result) => {
        console.log(result);
        return result *3;
    }).then ((result) => {
        console.log(result);
        return result *4;
    }); 