

function calculator(a, b, sumcallback) {
    sumcallback(a, b); //sumcallback is callback function (name can be any name). we crate a function whichis passed
    // as a parameter to calculator function

}

function sum(a, b) { //sum is a fuction passed as a parameter to caculator 
    console.log(a + b);
}

calculator(2, 4, sum);  // calculator called 1st time

//instead of making a funcion (callback wala) we can pass a complete arrow function in calcultor as callback paameter.

calculator(5,8, (a,b)=>{
    console.log(a+b);

})


// ................................callback hell//......................................................

//nested callback stacked below one another forming a pyramid structure.
//this style of programming becomes difficult to understand and manage


function getdata(dataid,getnextdata){
    setTimeout(()=>{
        console.log("data",dataid);
        
        if(getnextdata){
            getnextdata();
        }

    },2000);
}

getdata(1,()=>{
    console.log("getting data2............");
    getdata(2,()=>{
        console.log("getting data2..............");
        getdata(3,()=>{
            console.log("getting data2...............");
            getdata(4);
        })
    });
});