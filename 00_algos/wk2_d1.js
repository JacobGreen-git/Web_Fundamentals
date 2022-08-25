// console.log(Math.floor(3.9)); //Will always round down
// console.log(Math.ceil(3.01)); //Will always round up

// console.log(Math.random()) //Gives a random number between 0-1 (Including decimals)

// console.log(Math.random()*20) //Gives a random number between 0-20

// console.log((Math.random()*20)+ 10) //gives a random number between 10-30


// console.log(Math.floor(Math.random()*2)) //will give you a whole number between 0-2 (but not 2) need to add 1 to whatever your desired top number is; if you want 1-10.. you need to do *11.

// console.log(Math.floor(Math.random()*21)) // broken


var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function magic8ball(){
    console.log("Thinking...")
    let randomIndex = Math.floor(Math.random() * lifesAnswers.length);//randomIndex = the length of the array, rounded down, radnomized
    console.log(lifesAnswers[randomIndex]);
}

magic8ball()