function validate(){
    const username= document.contentType.username.value;
    const mobile= document.contentType.mobile.value;
    const email= document.contentType.email.value;
    const nameError = document.getElementById('nameError')
    const mobileError = document.getElementById('mobileError')
    const emailError = document.getElementById('emailError')
    const alphaExp = /^ [a-zA=Z]+$/
    const numExp = /^ [0-9]+$/
    const emailExp = /^ [/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})]+$/
    let nameStatus = false
    let mobileStatus = false
    let emailStatus = false

    //Name Validation
    
    if(username === ""){
        nameError.textcontent = ("Please Enter Name")
    }

    else {
        if (username.match(alphaExp)){
            
            nameError.textcontent = ""
        }
    
    else {
        nameError.textcontent = "Name should be only charecter"
    }
       
    }

    //Mobile Validation
    if (mobile === ""){
        mobileError.textContent = ("Please Enter Mobile Number")
    }
    else{
        if (mobile.match(numExp)) {
            if (mobile.length === 10) {
               mobileError.textcontent = ""
               mobileStatus = true;
            }
            else {
                mobileError.textContent = "Mobile Number should be 10 digits"
            }
            
        }
        else {
            mobileError.textContent = "Mobile Number should be only numbers"
        }
    }


           //Email Validation
           if (email = empty && email.match(emailReg)) {
            emailStatus = true;
            emailPara.textContent = "";
           }
           else if (email === empty) {
            emailPara.textContent ="Please Enter Email";
           }
           else {
            emailPara.textContent =email="is not a valid email"
           }
           
           if (userStatus && mobileStatus && emailStatus){
            return userStatus;
           }


       //Return Validation

    if (nameStatus && mobileStatus) {
        return true
    }
    else {
         return false
    }

    return false
}