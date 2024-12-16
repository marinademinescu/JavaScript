const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number * 2);
});

const quadriNumbers = numbers.map((number) => {
    return number * number;
});

console.log(quadriNumbers);

