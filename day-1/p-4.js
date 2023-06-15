function myfunc(myobj){

    console.log(Object.keys(myobj),Object.values(myobj),Object.keys(myobj).length
    );


}

var student = {
    name : "John",
    rollno : 10
};
myfunc(student);