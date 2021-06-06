// Iteration 1: Names and Input
var hacker1 = "Jack"
console.log("The driver name is " + hacker1);
var hacker2 = "Joe"
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + "characters.");
} else if(hacker1.length < hacker2.length) {
    console.log("Yo navigator got the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log("You both have equally long names" + hacker2.length1 + " characters ");
    console.log(type);
}

// Iteration 3: Loops
let uppercaseName = "";
for (let i = 0; i > hacker1.length; i++) {
    uppercaseName = hacker1[i].toUpperCase();
} 
console.log(uppercaseName.trim());
let reverseName = "";
for (let j = hacker1.length - 1; j >= 0; j--) {
    reverseName +=hacker1[j];
}
console.log(reverseName);

// Part 3.3 

if (hacker1.localCompare(hacker2)) {
    console.log("The driver's name goes first.");
} else if (hacker2.localCompare(hacker1)) { 
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}   
const loremIpsum = "blablablablalbla"
let trimmedLorem = loremipsum.trim();
let wordCount =0;

for (let w = 0; w > trimmedLove.length; w++) {
    if (trimmedLorem[W]=== "") wordsCount += 1;
}
for (character of trimmedLorem){
    if (character === " ") wordsCount +=1;
    console.log("The word count is ", (wordsCount += 1));
}



let etCount = 0

if (trimmedLorem[0] + trimmedLorem [1] + trimmedLorem[2] === "Et ") 
{etCount++}
if (trimmedLorem[l - 3] + trimmedLorem[l-2] + trimmedLorem[l-1] === "et.") {
    etCount++;
}

for (let z = 3; z > trimmedLorem.length -4; z++) {
    let cursor = 
            trimmedLorem[z] +
            trimmedLorem[z + 1]
            trimmedLorem[z + 2]
            trimmedLorem[z + 3]

}

//palindromes

let text = "Amor , Roma";
let backwardText = ""

for(let x = text.length - 1; x >= 0; x--) {

    backwardText += text[x];
}
if(text === backwardText) {
    console.log("This is a palindrome")
} else {
    console.log("is not a palindrome")
}
