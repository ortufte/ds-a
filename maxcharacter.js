// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// *there are many ways to iterate thru an object and find max value, this is a very direct, straight forward approach
// *iterate thru the object, if we ever find a char that has more uses than max, then we will set max equal to that new value and we will set maxChar equal to the character(key) that was responsible for that number of uses.
// *for of loop is used to iterate thru an array or a string
// *for in loop is used to iterate thru an object - object starts with "o" - we do not use of, we use in

function maxChar(str) {
    const charMap = {};
    let max = 0; 
    let charMax = ''

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            charMax = char
        }

        return charMax
    }
}

// COMMON STRING QUESTIONS
// *for any questions related to counting or verifying the number of char in a string, we are going to take string and essentially convert into an object, keys are chars, values are number of times that the char has been found
// *"Hello There!" - {H: 1, e: 3, l: 2, o: 1, "": 1, t: 1, h: 1, r: 1, !: 1} - notice capitalization separates characters, punctuation is considered a character

// *What is the most common char in the string?
// - walk thru object, find property with highest number assigned to it, and you'd immediately know which 
// *Does string A have the same char at same freq as string B (is it an anagram?)
// - build obj for both strings, compare obj and make sure they have same number of properties and same values
// *does the given string have any repeated characters in it?
// - if there's any value inside of the object that is greater than 1, yes

// How to build object (character map)=>

// const string  =  "Hello There!"
// *going to iterate thru the string and for every character, add that character to a new object
// const chars = {} (initialize object)
// - can either split string into an array and use a forEach helper
// - or can use a for of loop

// for (let char of string) {
// 	if (!chars[char] ) {
// 		chars [char] = 1;
// 	} else {
// 		chars[char]++;
// 	}
// }
// OR
// for (let char of string) {
// 	if (chars[char] ) {
// 		chars[char]++;
// 	} else {
// 		chars [char] = 1;
// 	}
// }
// OR
// for (let char of string) {
// 	chars[char] = chars[char] + 1 || 1 (if chars[char] is null, instead assign it the value of 1
// }

module.exports = maxChar;