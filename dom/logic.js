const btn = document.getElementById("btn")



function sayHello() {
    const username = document.getElementById("username").value;
    const status = document.getElementById("status")
    const msg = ("Welcome" + username)
    status.textContent =msg;
}


btn.addEventListener("click" , sayHello)