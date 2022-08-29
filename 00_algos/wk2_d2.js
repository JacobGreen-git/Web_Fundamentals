//objects are also called hashmaps, or dictionaries -> they will have key value pairs

// let lMessi = {
//     firstname: "Lionel",
//     lastName: "Messi",
//     gpG: 2.3,
//     assistsPerGame: 3,
//     isGOAT: true,
//     teamsPlayed: ["Portugal", "Barcelona", "World's Team", "Man U"],
// } // this is an object/hashmap/dictionary

// console.log(lMessi.gpG)

//////////////////


var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];


// for(var i=0; i<pokemon.length; i++) {
//     if(pokemon[i].id < 115)
//     //     ^object @ "i" "only print the name if it is less than 115"
//         {console.log(pokemon[i].name);
//         //             ^ print the name at [i]
//         }
// }



// for(var i=0; i<pokemon.length; i++) {
//     if(pokemon[i].id % 2 === 1)
//     //     ^object @ "i" "only print the name if its ID is odd number" if it is divided by 2, remainder should be 1
//         {console.log(pokemon[i].name);
//         //             ^ print the name at [i]
//         }
// }

// for(var i=0; i<pokemon.length; i++) {
//     if(pokemon[i].types.length === 1)
//     //     ^object @ "i" "only print the name if it has 1 type"
//         {console.log(pokemon[i].name);
//         //             ^ print the name at [i]
//         }
// }

// for(var i=0; i<pokemon.length; i++) {
//     if(pokemon[i].types.length === 1 && pokemon[i].types[0] === "fire")
//     //     ^"only print the name if it has 1 type AND  ^only fire type"
//         {console.log(pokemon[i].name);
//         }
// }

for(var i=0; i<pokemon.length; i++) {
    if(pokemon[i].types.length === 2 && pokemon[i].types[1] === "flying")
    //     ^"only print the name if it has 1 type AND  ^only fire type"
        {console.log(pokemon[i].types[0]);
        }
}