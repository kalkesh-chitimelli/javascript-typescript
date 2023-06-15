function practiceEH(para1,para2){
    try{
        if (Number.isInteger(para1) && Number.isInteger(para2)){

            if(para2 === 0){
                throw "Divisor should not be Zero."
            }
            else{
                console.log(para1/para2);
            }
        }
        else if(typeof(para1) === 'string' || typeof(para2) === 'string'){
            throw "You have entered String,Kindly enter two integer numbers.";
        }
        else{
            throw "Kindly enter two integer numbers.";
        }
    }
    catch(err){
        console.log(err);
    }
    
}

practiceEH(10,5);
practiceEH(5,0);
practiceEH(10,"abcd")
practiceEH(10,5.6)
