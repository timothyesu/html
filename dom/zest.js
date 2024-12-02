function zestjs() {
    alert("Welcome")

    const username =document.getAnimations("username").value;
    const salary = document.getElementById("salary").value;
    const cibil = document.getElementById("cibil").value;
    let msg = "";

    if (cibil>850 && salary>100000) {
            msg =  "congrats" + username+"You are eligible 20lakhs Loan";
    }
    else if (cibil>800 && salary>85000) {
        msg ="congrats"+ username + "You are eligible for 15Lakhs Loan"
    }
    else if (cibil>750 && salary>75000) {
        msg = "congrats"+ username + "You are eligible for 10Lakhs Loan"
    }
    else if (cibil>700 && salary>70000) {
        msg = "congrats"+ username + "You are eligible for 8Lakhs Loan"
    }
    else if (cibil>650 && salary>50000) {
        msg = "congrats"+ username + "You are eligible for 5Lakhs Loan"
    }
    else {
        msg = "Better luck next time"
    }
    document.getElementById("status").innerHTML= msg;
}