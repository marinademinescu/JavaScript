const expenses = [250, 30, 50, 300, 25];

const totalExpenses = expenses.reduce((total, expense) => total + expense, 0);

const words = ['banana', 'apple', 'cherry', 'date'];

const sortedWords = words.sort();

console.log('Total expenses:', totalExpenses);
console.log('Sorted words:', sortedWords);