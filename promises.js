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

