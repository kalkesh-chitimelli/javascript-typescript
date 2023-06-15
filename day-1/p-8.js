function decToBin(num){
    var res = "";
    while(num>0){
        
        var rem = parseInt(num % 2);
        var num = parseInt(num/2);
        res = res + rem;
    }
    console.log(res.split("").reverse().join(""));
}

num = 8;

console.log(decToBin(num));