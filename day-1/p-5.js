function eligibility(age){
    if(age >= 18){
        console.log("Congratulations! You are eligible for voting.");
    }
    else{
        console.log("You are not eligible for voting.")
    }
}

var age = prompt("Enter age: ");
eligibility(age);