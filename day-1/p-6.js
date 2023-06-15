function display(result){
    console.log(result);
}

function mul(num1,num2,callback){
    var result = num1 * num2;
    callback(result);

}


mul(5,6,display);

