// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj = {};
    let max = 0;
    let maxChar = '';

    for (let i of str) {
        if (!obj[i]) {
            obj[i] = 1;
        } else {
            obj[i]++;
        }
    }

    for (let i in obj) {
        if (obj[i] > max) {
            max = obj[i];
            maxChar = i;
        }
    }

    return maxChar;
}

module.exports = maxChar;

function maxChar(str) {
    const obj = {};
    let max = 0;
    let maxChar = '';

    for (let i of str) {
        if (obj[i]) {
            obj[i]++;
        } else {
            obj[i] = 1;
        }
    }

    for (let i in obj) {
        if (obj[i] > max) {
            max = obj[i];
            maxChar = i;
        }
    }
    return maxChar;
}











