// //Conditionals//

// var favFoods = ["Pho", "Sushi", "Pizza", "Tacos", "Philli", "Steak", "Pasta"] //elements are the values of the array
// //Indices         0       1         2       3         4         5       6   



// for (var i = 0; i<favFoods.length; i++){
//     if(favFoods[i] == "Sushi"){
//         console.log("Not inflation friendly option - " + favFoods[i])
//     }
//     else if(favFoods[i] == "Philli"){
//         console.log("Great deal - " + favFoods[i])
//     }
//     else{
//         console.log(favFoods[i]);
//     }
// }


// var isSunny = true;
// var temperature = 45; // let's assume degrees Fahrenheit
// var isRaining = false;
// var whatToBring = "I should bring: ";

// if(isSunny) {
//     //whatToBring = whatToBring + "sunglasses",; (This is the long form of the code below)
//     whatToBring += "sunglasses, ";
// }
// if(temperature < 50) {
//     whatToBring += "a coat, ";
// }
// if(isRaining) {
//     whatToBring += "an umbrella, ";
// }

// whatToBring += "and a smile!";
    
// console.log(whatToBring);


var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

for(var i = 0; i<numbers.length; i++){
    if(numbers[i] > 0){
        countPositives += 1; //indent this line under the "if"
    }
} //need culry braces for the "for"

console.log("there are " + countPositives + " positive values");
