console.log("sup");

function petDog(){
    alert("You just pet this pupp.")
}

function toggleLogin(element){
    console.log("You clicked on login button!", element);
    // element.innerText = "Logout";

    if(element.innerText === "Login"){
        element.innerText = "Logout";
    }else{
        element.innerText = "Login";
    }
    
}

function removeButton(btn){
    console.log("Fu", btn);
    btn.remove();
}