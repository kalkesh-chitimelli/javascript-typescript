var arr = [18,28,3,24,50,17];
var diff = 0;
if (arr.length > 4){
    for (var i = 1;i<arr.length-1;i++){
        if (Math.abs(arr[i]-arr[i-1]) > Math.abs(arr[i]-arr[i+1])){
            var result = Math.abs(arr[i]-arr[i-1]);
        }
        else{
            result = Math.abs(arr[i]-arr[i+1]);
        }
        if (result > diff){
            diff = result;
        }
    }
    console.log(diff)
}
else{
    console.log("array length should be greater than four");
}
