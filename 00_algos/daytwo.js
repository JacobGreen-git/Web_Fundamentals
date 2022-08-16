var amazing_show1 = "The Office" //this is a variable that is equal to a string
var best_season = 5; //do not need quotes for number variable, 5 is a number

amazing_show1 = "SAO"; //this is reassigning amazing_show1 to SAO from The Office

var YourMomGay = true; //Boolean = true/false

//a data type is a simple piece of information (string, number, boolean)

//a data structure is something that can store multiple data types

var greatestArtists = ["Taylor Swift", "Beyonce", "Drake"]
//indexes (positions)       0              1         2

var randomNums = [3, 8, 9, 13, 53, 69];

var mixedArray = [3, "Taylor Swift", 93, true]
//Array             Elements

// console.log("Wazzzap")
// console.log(greatestArtists[0]) //print the index #0 for greatest artists


// console.log(1) //will print "1"

//a loop is used to do something reapetedly
//print all numbers from 1-100

//      Start       condition   
// for (var num = 1; num<=100; num++){
//     console.log(num)
//     //this is the body of the loop
// }

// for (var num = 10; num>=1; num--){
//     console.log(num)
// }
// console.log("blast off")

// //               used if indexes change
// for (var i = 0; i<greatestArtists.length; i++){
//     console.log(greatestArtists[i])
// }

// for(var i=0; i<10; i++) {
//     console.log(i);
//     i = i + 3; 
// }
    
// console.log("outside of the loop " + i);


//1, 5, 9, ootl 13

function getTotal(arrayOfNumbers) {
    var sum = arrayOfNumbers[0];

    for(var i=0; i<arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum); 
    }

    console.log("the total is: " + sum);

    }

getTotal([1, 3, 5]);

//2, 3 