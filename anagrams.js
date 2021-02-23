// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// * word.replace(/[^\w/g], '').toLowerCase() will remove spaces and punctuation and make all characters lowercase
// * one way to do this is make character maps out of both strings and compare character: quantity
// * count keys in each character map and compare or compare length of strings
// * will be asked in most interviews

// OPTION #1

// *build a helper function to build a character map for a given string

function buildCharMap(str) {
    const charMap = {}
    
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

function anagrams(stringA, stringB) {
   const aCharMap = buildCharMap(stringA);
   const bCharMap = buildCharMap(stringB);

   // *pull out keys from objects and count then compare to be sure the strings are the same length
   // *Object.keys(obj) will return an array of the keys inside the Object

   if (Object.keys(aCharMap).length != Object.keys(bCharMap).length ) {
       return false;
   } 

   for (let char in aCharMap) {
       if (aCharMap[char] != bCharMap[char]) {
           return false
       }
   }

   return true

}

// OPTION #2

// *helper function

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;