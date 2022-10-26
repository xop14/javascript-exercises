const sumAll = function(a, b) {
    let sum = 0;

    if (typeof a != "number" || typeof b != "number") return "ERROR";

    if (a < 0 || b < 0) return "ERROR";

    // switch parameters if larger first
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    for (let i = 0; i <= b - a; i++) {
        sum += b - i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
