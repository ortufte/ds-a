// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// *fantastic example of how understanding and succeeding at interview questions is all about practice
// *if you understand the tricks, this turns into a very straight forward question
// *both input and output need to be numbers, not strings


// *.toString
// *parseInt(myNumber.toSring()) - turns string back into a number

function reverseInt(n) {
	const reversed = n.toString().split('').reverse().join('');
	if (n < 0 ) {
		return parseInt(reversed) * -1;
	}
	return parseInt(reversed)
}

// *Math.sign() - can pass in a number, if number is positive it will return 1, if number is negative it will return -1
function reverseInt(n) {
	const reversed  = n.toString().split('').reverse().join('');
	return parseInt(reversed) * Math.sign(n);
}

