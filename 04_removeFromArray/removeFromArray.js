const removeFromArray = function(someArray, ...valuesToRemove) {
    let newArray = [];

    for (let i = 0; i < someArray.length; i++) {
        let addToNewArray = true;
        for (let j = 0; j < valuesToRemove.length; j++) {
            if (someArray[i] === valuesToRemove[j]) {
                addToNewArray = false;
                break;
            }
        }
        if (addToNewArray == true) {
            newArray.push(someArray[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;