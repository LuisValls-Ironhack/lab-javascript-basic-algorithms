// Iteration 1: Names and Input
var hacker1 = "Jack"
console.log("The driver name is " + hacker1);
var hacker2 = "Joe"
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
console.log(
    "The driver has the longest name, it has " + hacker1.length + "characters." 
);

} else if(hacker1.length < hacker2.length) {
    console.log(
        "Yo navigator got the longest name, it has " + 
hacker2.length + " characters."
     );
}

// Iteration 3: Loops
function concat(word) {
for (var i = 0; i < word.length; i++) {
    result += word.charAt(i) + " ";
}
console.log(result.trim());
return result.trim();
}
concat(hacker1);

function upper(name) {
var

}

