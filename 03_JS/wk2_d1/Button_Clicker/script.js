// console.log("Yo yo");


function removeAdd(btn){
    btn.remove();
}


function likedAlert(){
// ^function        ^ parameter
    alert("Ninja was liked")
}


function loginToggle(btn){
    if (btn.innerText === "Login"){
        btn.innerText = "Log Out"
    }else{
        btn.innerText = "Login"
    }
}