var arr = [1,2,3,4,5,6,7,8];
if (arr.length % 2 == 0){
    var mid = arr.length/2;
    var first = arr.slice(mid);
    var last = arr.slice(0,mid);
    var result = first.concat(last);
    console.log(result);

}
else{
    console.log('Error');
}
