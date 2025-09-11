let students = {
    name: "sam",
    age: 21,
    grade: "O"
};
console.log(students.name);
console.log(students["grade"]);


let studen = {
    name: "sam",
    age: 21,
    yearOfBirth: function(){
        return 2025 - this.age
    }
};
console.log(students.yearOfBirth());


destructure
let stude = {
    name: "sam",
    age: 21,
    grade: "O"
};

let {name,age} = students;
console.log(name);



class student{
    constructor (name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}

let s2 = new student("sam", 21, "O");
console.log(s1);


class student{
    constructor (name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}

class stud extends student{
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;
    }
}

let s1 = new students("sam", 21, "O");
console.log(s1.name, s1.age);



let a = [20, 30 , 34, 50, 67]
console.log(a[1], a[4] );

let b = ["selva", "sam", "ganpath", "lambda"]
console.log(b[2], b[3]);

let c = [3.6, 50.8, 37.29, 49.0]
console.log(c[0]);

let mixed = [42, "Hello", true, null, { name: "Sam" }, [1, 2, 3]];

console.log(mixed[0]); 
console.log(mixed[1]); 
console.log(mixed[2]); 
console.log(mixed[3]); 
console.log(mixed[4]); 
console.log(mixed[5][0]); 

let sam = ["selva", 12, "delna", 21, "cossip"];
sam.push("serrg")
sam.push("aasap")
sam.push("logic")

console.log(sam);


let fruits = ["Apple", "Banana", "Mango"];
console.log("Original:", fruits);

fruits.push("Orange");
console.log("After push:", fruits);

fruits.pop();
console.log("After pop:", fruits);

fruits.unshift("Grapes");
console.log("After unshift:", fruits);

fruits.shift();
console.log("After shift:", fruits);

delete fruits[1];
console.log("After delete index 1:", fruits);
fruits[1] = "terla";

let moreFruits = ["Pineapple", "Papaya"];
let allFruits = fruits.concat(moreFruits);
console.log("After concat:", allFruits);

allFruits.sort();
console.log("After sort:", allFruits);

allFruits.reverse();
console.log("After reverse:", allFruits);