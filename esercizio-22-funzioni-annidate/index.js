function outerFunction(x) {
    function innerFunction(y){ 
        return x + y;
    }
    
    return innerFunction;
}

const addFive = outerFunction(5); 
console.log(addFive(3)); 
