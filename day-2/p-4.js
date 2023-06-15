//object binding
function Car(regNum,brand){
    this.regNum=regNum,
    this.brand=brand;
}
Car.prototype.details = function() {
    console.log(this.regNum + " " + this.brand);
  };
const car1= new Car("Gj1234","TATA");
car1.details();

let car2={
    ownerName:"kalkesh",
    year:"2021",
}
let car3={
    ownerName:"shardul",
    year:"2022",
}

//call

let printCarDetails = function()
{
    console.log(this.ownerName+" "+this.year);
}
printCarDetails.call(car3);
printCarDetails.call(car2);

///Apply
let printCarDetailsApply = function(brand)
{
    console.log(this.ownerName+" "+this.year+" "+brand);
}

printCarDetailsApply.apply(car3,["Tesla"]);

//bind
let printCarDetailsBind = function(brand)
{
    console.log(this.ownerName+" "+this.year+" "+brand);
}


 let bindtest=printCarDetailsBind.bind(car3,["Maruti"]);
 bindtest();






