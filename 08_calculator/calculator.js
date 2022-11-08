const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  const total = arr.reduce((runningTotal, num) => {
    runningTotal += num;
    return runningTotal;
  }, 0);
  return total;
};

const multiply = function(arr) {
  const total = arr.reduce((runningTotal, num) => {
    runningTotal *= num;
    return runningTotal;
  }, arr[0]);
  return total / arr[0];
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  let total = 1;
  if (a > 0) {
    for (let i = 1; i <= a; i++) {
      total *= i;
    }
    return total;
  }
  else if (a == 0) {
    return 1;
  }
  else {
    return 'error!';
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
