// console.log("sup");

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

function playVideo(vid){
    // console.log("Action", vid);
    vid.play();
}

function pauseVideo(vid){
    // console.log("Action", vid);
    vid.pause();
}

function switchImage(img){
    // console.log(img.src);
    if(img.src === "http://127.0.0.1:5500/03_JS/wk2_d1/puppyGram/puppyGram/resources/puppy.jpeg"){
    img.src = "./resources/anothaPuppy.jpeg"
    }else{
        img.src = "./resources/puppy.jpeg"
    }
}

function removeCookieBox(cookie){
    // console.log("YO,", cookie)
    let elementToRemove = document.querySelector("#"+cookie);
    // console.log(elementToRemove);
    elementToRemove.remove();
}

function like(increase){
    console.log("I like", increase);
    let spanElement = document.querySelector("#" + increase);
    console.log(spanElement.innerText);

    let currentCount = spanElement.innerText;

    currentCount++;

    spanElement.innerText = currentCount;
}

function searchPuppy(){
    // console.log("Searching for puppy")
    let element = document.querySelector("#name-search");
    // console.log(element.value)
    //Stores the data ^^^ entered in the element
    alert("You searched for " + element.value);
}


function chooseLocation(element){
    // console.log("Location selected", element.value)
    // alert("You selected: " + element.value)

    
    //another way to combine a string with a variable
}