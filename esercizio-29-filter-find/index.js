const students = [
    {name: 'Nicol', grade: 75},
    {name: 'Veronica', grade: 50 },
    {name: 'Monica', grade: 90 },
    {name: 'Victor', grade: 65 },
    {name: 'Manuel', grade: 40 }
];

const passedStudents = students.filter(student => student.grade >= 60);

const failingStudent = students.find(student => student.grade < 60);

console.log('Passed Students:', passedStudents);
console.log('First student witch < 60:', failingStudent);
