// console.log("wassap")

function addLike(add){
    // console.log("Added 1 like", add)
    let spanElement = document.querySelector("#" + add);

    console.log(spanElement.innerText);
    let currentCount = spanElement.innerText;

    currentCount++;

    spanElement.innerText = currentCount;
}