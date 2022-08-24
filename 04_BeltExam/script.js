function cartAlert(){
    alert("Your cart is empty!")
}

function removeCookieBox(btn){
    console.log("Accepted Cookies")
    let elementToRemove = document.querySelector("#" + btn)
    elementToRemove.remove();
}

function succulentPicChange(img){
    console.log(img.src);
    if(img.src === "http://127.0.0.1:5500/04_BeltExam/images/assets/succulents-1.jpg"){
        img.src = "./images/assets/succulents-2.jpg"
    }else{
        img.src = "./images/assets/succulents-1.jpg"
    }
}