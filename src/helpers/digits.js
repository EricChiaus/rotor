const digitNames = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
];

// One or two digits number only
export const numberToDigits = num => ({
    high: Math.floor(num / 10),
    low: num % 10,
});

export const digitToName = digit => {
    if (digit < 0 || digit > 9) {
        return null;
    }
    return digitNames[digit];
};
