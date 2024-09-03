function capitalize(s) {
    const firstLetter = s.slice(0, 1);
    const remainLetter = s.slice(1);
    return firstLetter.toUpperCase().concat(remainLetter.toLowerCase()); 
}

function reverseString(s) {
    const stringArray = s.split("");
    const reversedStringArray = stringArray.reverse();
    const reversedString = reversedStringArray.join("");
    return reversedString;
}

const calculator = function() {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    return {
        add,
        subtract,
        multiply,
        divide
    }
}();
function isCharacterALetter(char) {
    return char.toLowerCase() != char.toUpperCase()
}

function caesarCipher(s, shiftFactor) {
    const stringArray = s.split("");
    const shiftedStringArray = stringArray.map(char => {
        if (char >= "a" && char <= "z") {
            const charIndex = char.charCodeAt(0) - "a".charCodeAt(0);
            const shiftedCharIndex = (charIndex + shiftFactor) % 26 + "a".charCodeAt(0);
            const shiftedChar = String.fromCharCode(shiftedCharIndex);
            return shiftedChar;
        }
        else if (char >= "A" && char <= "Z") {
            const charIndex = char.charCodeAt(0) - "A".charCodeAt(0);
            const shiftedCharIndex = (charIndex + shiftFactor) % 26 + "A".charCodeAt(0);
            const shiftedChar = String.fromCharCode(shiftedCharIndex);
            return shiftedChar;
        }
        else {
            return char;
        }
    });
    return shiftedStringArray.join("");
}

function analyzeArray(array) {
    const sum = array.reduce((pre, cur) => pre + cur, 0);
    const length = array.length;

    const average = sum / length;
    const min = array.reduce((MIN, cur) => (cur < MIN) ? cur : MIN);
    const max = array.reduce((MAX, cur) => (cur > MAX) ? cur : MAX);
    return {
        average,
        min,
        max,
        length
    }
}

export {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
}