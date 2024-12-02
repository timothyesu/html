const newEmp = ["surya", "sai"];

const oldEMP = ["Arun", "Raju"];

const emp = [...oldEMP, ...newEmp]

console.log(emp);

const [emp1, emp2, ...rest] =emp

console.log(rest);

const personalData = {
     name: "surya",
     age: 25,
}

const professionalData = {
    role: "React Developer",
    salary:89897,
}

const data = {
    ...personalData,
    ...personalData
}

console.log(data);


const {name , role , ...remaining} = data;

console.log(remaining);
