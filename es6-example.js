// let 
let studentcount = 10;
studentcount =11;

console.log("student count:",studentcount);

//const
const collegename = "VETIAS";

console.log("college name:", collegename);

// template literals
let studentname = "DEEPIKA"

console.log(`welcome ${studentname} to ${collegename}`);

//object
const student = {
    Name: "DEEPIKA",
    Age: 19,
    Department: "IT"
}
console.log(student);

//destructuring
const { name,age, department } = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("Department:", department);

//Arrow Function
const displaystudent = () => {
    console.log(`student Name: ${name}`);
}
displaystudent ()

//Arrays
const studentArray= [
    "DEEPIKA",
    "KANI",
    "KAVYA"
];

console.log(studentArray);


//Spread Operator
const updatedstudents = [
    ...studentArray,
    "sree"
];

console.log(updatedstudents);


// // Rest Operator
function maximumMarks(...marks) {

    let max = Math.max(...marks);

    return max;

}

console.log("Maximum Marks:", maximumMarks(70,80,90));

