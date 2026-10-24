const removeFromArray = function(array, ...itemsRemove) {
    let updatedArray = array;

    for (itemRemove of itemsRemove) {
        updatedArray = updatedArray.filter(item => item !== itemRemove);
    }

    return updatedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
