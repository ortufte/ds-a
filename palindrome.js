// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// *most direct 
function palindrome(str) {
    const rev = str.split('').reverse().join('')
    return str === rev;
}

// *every array helper - does a boolean check on every element in the array 
// *is every value in the array greater than 5 - array.every((val) => val > 5);
// *checks return value of every function run, if any return false, entire function returns false
// * not ideal solution,  we are doing more work than we need to by checking every element do not need to iterate thru elements after middle element - "double comparison" easy to bring up in interview and makes you look good - if you can think of multiple solutions, provide multiple solutions - exhibits ability to compare/contrast many different ways to solve a problem
// *i = index - first iteration i will be 0 as it will be the first element in the array
// *to get access to the element on the opposite side you can look at the element at array.length - 1 
// *str.length - i (accounting for the index of the char) - 1 (accounting for zero index)
// HERE'S A SOLUTION, IT'S NOT THE BEST SOLUTION AND HERE'S WHY
// function palindrome(str) {
// 	return str.split('').every((char, i) => {
// 		return char ===  str[str.length - i - 1]
// 	}
// }

// Flatiron Ruby Solutions 

// def test_string = "A man, a plan, a canal: Panama"

// string.gsub(/\W/).downcase (this will remove any character that is not alphanumeric (incl spaces) and then turn all letters into lowercase)


// OPTION 1
// def cleanup(mess)
//     mess.gsub(/\W/).downcase
// end

// def flip(string)
//     flipped = ""
//     for i in 0..string.size - 1 do
//         flipped += string[string.size - 1] - i 
//     end
//     flipped
// end 

// def is_palin?(input) 
//     cleaned = cleanup(input)
//     cleaned == flip(cleaned)
// end

// OPTION 2 (without reversing string)

// def cleanup(mess)
//     mess.gsub(/\W/).downcase
// end

// def is_palin?(input)
//     cleaned = cleanup(input)

//     start_index = 0 
//     end_index = cleaned.length - 1

//     while start_index < end_index do 
//         if cleaned[start_index] != cleaned[end_index]
//             return false
//         else
//             start_index += 1
//             end_index -= 1
//         end
//     end 
//     return true
// end
