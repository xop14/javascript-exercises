const fibonacci = function(number) {
    if (number < 1) return "OOPS";
    
    const sequence = [1, 1];

    for (let i = 2; i < number; i++) {
        let nextNumber = sequence[i-1] + sequence[i-2];
        sequence.push(nextNumber);
    }
    return sequence[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
