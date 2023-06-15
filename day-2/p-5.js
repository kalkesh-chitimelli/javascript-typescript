function outer() {
    var num = 0;
    var arr = [];
    function inner(b){
        if(typeof b === 'number'){
        num= num+b;
        console.log(num);
        }
        else{
            arr = [...arr,b];
            console.log(arr);
        }
    }
    return inner;
}
var myFunc = outer();
myFunc(10);
myFunc(25);
myFunc('x');
myFunc('y');
