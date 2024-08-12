//is a solution to callback hell

//promise is an object in javascript which has three state ;
//pending,fullfill,rejected


let promise = new Promise((resolve,reject)=>{
    console.log("new promise created");

    resolve("sucess"); //sucess state
    //in result value passed in function is take place. 
    // reject("some error"); //rejected state
})