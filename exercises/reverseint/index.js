// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     reversed = n.toString().split('').reduce((rev, char) => {
//         return char + rev;
//     }, '')
//     return parseInt(reversed) * Math.sign(n);
// }

module.exports = reverseInt;

// function reverseInt(n) {
//     let num = n.toString().split('').reverse().join('');
//     return parseInt(num) * Math.sign(n);
// }






function reverse(n) {
    n.toString().split('').reduce((total, char) => {
        return char + total;
    }, '')
}