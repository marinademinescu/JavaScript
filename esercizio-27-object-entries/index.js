const student = {
    name: "Nicholas",
    age: 12,
    grade: "F",
    school: "Medie"
    
     };
    
     const entries = Object.entries(student);
    
     console.log(entries);

     entries.forEach(([key, value]) => {
        console.log('${key}: ${value}');
     });

