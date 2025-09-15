console.log("%cJS Lab Connected — Start completing the TODOs!", "font-weight:bold; font-size:14px");
// Task 2.1 — declare & reassign
let course = "CIS101";
console.log("course1:", course);
course = "CIS102";
console.log("course2:", course);

// Task 2.2 — const safety
const SCHOOL = "MyCollege";
//SCHOOL = "OtherCollege"; // <-- Uncomment to see the error, then re-comment after testing

// Task 3.1 — arithmetic basics
let x = 8, y = 3;
console.log("x+y= ", x+y);
console.log("x-y= ", x-y);
console.log("x*y= ", x*y);
console.log("x/y= ", x/y);
console.log("x%y= ", x%y);

// Task 3.2 — number vs string
console.log('"2"+3=', "2"+3);
console.log('2+"3"=', 2+"3");
console.log("2+3=", 2+3);

// Task 4.1 — else-if ladder
const ageInput = prompt("age: ");
const age = Number(ageInput);

if(age < 13){
    console.log("Child");
}
else if(age >= 13 && age <= 35){
    console.log("Young");
}
else if(age > 35){
    console.log("Aged");
}

// Task 4.2 — Switch statement
let day = "Mon";
switch (day){
    case "Mon":
    case "Tue":
    case "Wed":
    case "Thu":
    case "Fri":
        console.log("weekday");
        break;
    case "Sat":
    case "Sun":
        console.log("weekend");
        break;
    default:
        console.log("unknown");
        break;
}

// Task 5.1 — for loop sum
let total = 0;
for(let i = 1; i <= 10; i++){
    total += i;
}
console.log("Sum= ", total);


// Task 5.2 — while loop
let t = 3;
while (t > 0){
    console.log("t =", t);
    t--;
}

// Do-While Loop
t = 0;
do{
    console.log("do-while count:", t);
    t++;
} while(t < 3);

// Task 6.1 — pure function + return
function add(a, b){
    return a + b;
}
console.log("add(2,5)=", add(2, 5));

// Task 6.2 — Arrow functions
const cube = n => n * n * n;
console.log("cube(3)=", cube(3));

// Task 7.1 — var vs let scope
{   var a = 1;
    let b = 2;
    console.log("inside block:", a, "b:", b);
}
console.log("outside block a:", a);
//console.log("outside block b:", b);

// Task 8.1 — create & mutate
let nums = [3, 1, 4];
nums.push(1);
nums.unshift(9);
nums.pop();
console.log("nums:", nums, "length:", nums.length);
