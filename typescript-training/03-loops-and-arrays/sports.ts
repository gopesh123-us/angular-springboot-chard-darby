let sportsOne: string[] = ["Cricket", "Golf", "Tennis", "Swimming"];

for (let i = 0; i < sportsOne.length; i++){
    console.log(sportsOne[i]);
}
console.log("\n"); 

//simplified for loops
for (let sport of sportsOne) { 
    console.log(`II ${sport}`);
}
console.log("\n");
//conditionals
for (let tempSport of sportsOne) {
    if (tempSport == 'Golf') {
        console.log(`${tempSport} << My Favorite`)
    } else { 
        console.log(`${tempSport}`);
    }
}
console.log("\n");

//growble and dynamic
let sportsTwo: string[] = ["Football", "Cycling", "Running"];
sportsTwo.push("Cricket");
sportsTwo.push("Badminton");
for (let sport of sportsTwo) { 
    console.log(sport);
}


