function capitalize(str) {
    if (str.length === 0) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const lowerCase = (code >= 97 && code <= 122) ? 97 : 65;
            return String.fromCharCode(((code - lowerCase + shift) % 26) + lowerCase);
        }
        return char; // Non-alphabetical characters remain unchanged
    }).join('');
}

function analyzeArray(arr) {
    const average = arr.reduce((a, b) => a + b, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
        average,
        min,
        max,
        length: arr.length
    };
}

module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray };