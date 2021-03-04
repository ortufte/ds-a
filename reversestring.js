// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    if (str.length === 0) {
        return ''
    }
    return str.substring(str.length, str.length - 1) + reverse(str.substring(0, str.length - 1))
}

function reverse(str) {
    	const arr  = str.split(' ')
    	arr.reverse();
    	return arr.join('  ');
}

function reverse(str) {
	    return str.split(' ').reverse().join(' ')
}

function reverse(str) {
    	let reversed = ' ';
        // new  for loop syntax in lieu of  for (let i = 0; i < str.length, i++) unless looping every multiple number of elements
    	for  (let character of str) {
    		reversed = character  +  reversed
    	}
	return reversed;
}

//ADVANCED REDUCE FUNCTION 

// using array helper: reduce - condenses all values of an array into one single value
// takes in two arguments, an arrow function and a starting initial value

// take starting argument pass into arrow function as first argument then whatever gets returned from that inner function will be then used as the starting arg for every successive run of the function 

// function runs one time for every element in the array 

function reverse(str) {
	return str.split(' ').reduce((reversed, character) => {
		return character + reversed
	}, ' ')
}

function reverse(str) {
	return str.split(' ').reduce((rev, char) => char + rev,  ' ');
}