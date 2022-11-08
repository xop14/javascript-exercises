const palindromes = function (string) {
    // trim and convert to lowercase
    string = string.trim().toLowerCase();
    // convert to array
    string = [...string];

    // remove all grammar
    const cleanString = [];
    string.forEach(char => {
        if ((/[a-z]/).test(char)) {
            cleanString.push(char);
        }
    });

    // create reversed array
    const reversed = [...cleanString];
    reversed.reverse();

    // compare if arrays are the same
    if (cleanString.length === reversed.length) {
        return reversed.every((char, index) => {
            if (char === cleanString[index]) {
                return true;
            }
            return false;
        });
    }

    return "cleanString";

};

// Do not edit below this line
module.exports = palindromes;
