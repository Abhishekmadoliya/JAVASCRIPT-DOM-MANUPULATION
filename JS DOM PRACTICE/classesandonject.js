console.log("hello world");

const student ={
    fullname : "James",
    age : 20,
    rollno : 12,
    marks : 90,
    address : {
        city : "Delhi",
        state : "Delhi",
        pincode : 110001
    }
    printmarks: function(){
        console.log(this.marks);
    }
};

student.printmarks();