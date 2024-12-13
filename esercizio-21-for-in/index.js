let person = {
    name: "Leo",
    age: 18,
    city: "Mirano",
    job: "architetto"
};

for (let proprieta in person){
console.log(proprieta + ":" + person[proprieta]);
}