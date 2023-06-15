function Sortfunc(arr) {
  
    for (var i = 0; i < arr.length; i++) {
  
        for (var j = 0; j < (arr.length - i - 1); j++) {
  
            if (arr[j] > arr[j + 1]) {

                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return(arr);
}
  

arr1 = [1,2,3,4,5,6];
arr2 = [6,5,4,3,2,1];

if (arr1.length === arr2.length){

var sorted1 = Sortfunc(arr1);
var sorted2 = Sortfunc(arr2);

var point = 1;
for(var a=0;a<arr1.length;a++){
    if (sorted1[a] !== sorted2[a]){
        point = 0;
    }
}
if (point === 0){
    console.log("Not Equal");
}
else{
    console.log("Equal");
}
}
else{
    console.log("Not Equal");
}
