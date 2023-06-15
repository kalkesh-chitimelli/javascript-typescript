// @ts-ignore
function validateForm(){
    // @ts-ignore
    let n = document.forms.form.name.value;
    //console.log(n);
    if( n === ""){
        alert("Please Enter Name");
        return false;
    }

    // @ts-ignore
    let e = document.forms.form.email.value;
    if( e === ""){
        alert("Please Enter Email");
        return false;
    }

    // @ts-ignore
    let m = document.forms.form.mobile.value;
    if( m === ""){
        alert("Please Enter Mobile Number ");
        return false;
    }

    // @ts-ignore
    let g = document.forms.form.gender;
    if( g.value === ""){
        alert("Please Select Your Gender");
        return false;
    }

    
    if(g[1].checked == true){
        // @ts-ignore
        var cbox = document.forms.form.hobby
        if(cbox[0].checked == false &&
            cbox[1].checked == false &&
            cbox[2].checked == false){
            alert("Please select atleast one hobby")
            return false;
        }
    }

    //@ts-ignore
    let eReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value);
    if(!eReg){
        alert("Email is not valid");
        return false;
    }

    // @ts-ignore
    let numReg = /^\d{10}$/.test(form.mobile.value);
    if(!numReg){
        alert("Mobile Number is not Valid")
        return false;
    }


}