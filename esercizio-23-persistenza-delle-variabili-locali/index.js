function outerFunction(x, initialValue) {
    let result = initialValue;

    function innerFunction(y) {
        result += y;

        return result;
    }
    return innerFunction;
}

const addToResult = outerFunction(6, 20);
console.log(addToResult(4));
console.log(addToResult(3));
