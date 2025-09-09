//for loop
for (let i = 5; i > 0; i--) {
  console.log("Countdown:", i);
}

//while loop
let sum = 0;
let k = 1;

while(k <= 5 ){
    sum += k;
    k++;
}

console.log("sum of the value:", sum);


//do-while
let j = 1;
do {
  console.log("j=", j);
  j++;
} while (j <= 5);


let password = "";
let tryy = 0;

do{
    password = "1234";
    tryy++;

}while(password !== "1234");

console.log("no of tries:", tryy);

// for...of
let word = "SELVA";

for (let char of word) {
  console.log("Character:", char);
}


// for...in
let person = { name: "Sam", age: 22 };

for (let key in person) {
  console.log(key, "=", person[key]);
}
