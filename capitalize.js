// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Two distinct solutions
// 1. concise, easy to read, need a good understanding of JS library 
// 2. more difficult to read, brute force - easier to picture hard to code


// OPTION #1

// .slice method 
// const word = "there"
// word.slice(1) => 'here'
// word[0].toUpperCase() => T

function capitalize(str) {
    const words = [];
    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1))
    }

 return words.join(' ')
 
}

// OPTION #2

// create 'result' which is the first letter of the string capitalized to start
// iterate thru the rest of the string 
// if the character to the left of the string is a space 
// capitalize it and add it to 'result' 
// else
// just add it to 'result
//if first char is punctuation this wouldn't work 

function capitalize(str) {
    let result = str[0].toUpperCase();

        for (let i = 1; i < str.length; i++ ) {
            if (str[i - 1] === " ") {
                result += str[i].toUpperCase();
            } else {
                result += str[i]
            }
        }

        return result
}


module.exports = capitalize;
