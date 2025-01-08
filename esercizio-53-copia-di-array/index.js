const originalArray = [24, 15, 27, 11]

const copiaArray = [...originalArray] ;

originalArray.push(22)

console.log(originalArray);
console.log(copiaArray)