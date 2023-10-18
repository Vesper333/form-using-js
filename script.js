

function seterror(id,error)
    {
        element=document.getElementById(id);
        element.getElementsByClassName('formerror')[0].innerHTML=error;
    }
    function clearerrors(){
        errors=document.getElementsByClassName('formerror');
        for(let item of errors )
            {
                item.innerHTML="";
            }
    }

function validateForm(){
    clearerrors();
    var returnval=true;
    var name=document.forms['myForm']["fname"].value;
    if(name.length<5)
        {
            seterror('name',"*length of name is too short");
            returnval=false;
        }

        var email=document.forms['myForm']["fename"].value;

    if(email.length>25)
        {
            seterror('email',"*length of email is too long");
            returnval=false;
        }

        var phone=document.forms['myForm']["fphone"].value;

    if(phone.length!=10)
        {
            seterror('phone',"*length of phone should be of ten digits");
            returnval=false;
        }
        var password = document.forms['myForm']["fpass"].value;
        if(password.length<6)
            {
                seterror('password',"*password should be at least 6 characters long");
                returnval=false;
            }

        var cpassword=document.forms['myForm']["fcpass"].value;
        if(cpassword != password){
            seterror('confirmpassword',"*password should be same as confirm password");
            returnval=false;
        }
        return returnval;  
}