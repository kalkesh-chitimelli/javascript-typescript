function calci (num1,num2,operator){
    switch(operator){
        case '+' : console.log("Addition of num1 & num2:", num1 + num2);
                    break;
        case '-' : console.log("Subtraction of num1 & num2:",num1 - num2);
                    break;
        case '*' : console.log("Multiplication of num1 & num2:",num1 * num2);
                    break;
        case '/' : console.log("Division of num1 & num2:",num1 / num2);
                    break;
        default : console.log("Enter a correct Operator");

    }
}

calci(10,4,'+');

