let string = 'Hello'
console.log(string)

//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
let diff_string = "Hello Buster, his name is Dog, and he has purple eyes!"
let diff_dogs = ["Walter", "Carl", "Spot", "Jebediah"]

function findWords(string, dogName){
    foundMatch = false 
    for (let i = 0; i < dogName.length; i++) {
        if (string.includes(dogName[i])) {
            console.log("Matched " + dogName[i]);
            foundMatch = true;
        }
    }

    if (!foundMatch) {
        console.log("No Match");
    }

    return foundMatch;

}

console.log(findWords(dog_string, dog_names))
console.log(findWords(diff_string, diff_dogs))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i += 2){
        arr.splice(i, 1, 'even index')
    }
    return arr
}
console.log(replaceEvens(givenArr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


/* Kata 1 - DESCRIPTION:
Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"

*/

function noSpace(x){
    str = x.replace(/\s/g, '');
    return str;
  }

/* Kata 2 - I'm new to coding and now I want to get the sum of two arrays... 
Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

function arrayPlusArray(arr1, arr2) {
    let sum1 = arr1.reduce((accumulator, current_value) => accumulator + current_value, 0);
    let sum2 = arr2.reduce((accumulator, current_value) => accumulator + current_value, 0);
    let totalSum = sum1 + sum2;
    return totalSum
  
}

/* Kata 3 - Jenny has written a function that returns a greeting for a user. 
However, she's in love with Johnny, and would like to greet him slightly different. 
She added a special case to her function, but she made a mistake.

Can you help her?
*/

function greet(name){
    if(name === "Johnny")
      return "Hello, my love!";
    else
      return "Hello, " + name + "!";
}


/* Kata 4 - Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(x){
    let new_x = x
      .replace(/[0-4]/g, '0')
      .replace(/[5-9]/g, '1')
    return new_x
  }