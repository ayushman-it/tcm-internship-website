// console.log(2 + 5) R
// alert("Hello i am ayushman")
// document.write("Hello i am document object")
// prompt("Enter your name : ")
// confirm("Are you want to delete this ?")

// Keywords
// var, let, const

// keyword 
// name = Var
//  = = Operator
// "Ayushman" = Value

// ----------------

// Decleartion
var name;

// Assignment
name = "Ayushman";
name = "Rajesh";
name = "Anirudh";

// Re declearation
var name;

name = "Rakhi";

// console.log(name)
// ------------------

// Delcearation
let fname;

// Assign
fname = "Ayushman";
fname = "Yashvant";
fname = "Ramesh";

// Re declearation (x)

// console.log(fname)

// ------------------
const student_id = 878;
// student_id = 989;
// console.log(student_id)

// Premitive
// 1. String
// "", ''
let city = "Gondia";
// console.log(city,"-", typeof(city))
// 2. Number
let age = 34;
// console.log(age,"-", typeof(age))
// 3. Undefined
let surname;
// console.log(surname, typeof(surname))
// 4. boolean
let light = false;
// console.log(light, typeof(light))
// 5. null
let salary = null;
// console.log(salary, typeof(salary));
// 6. BigInt
let adhaar = BigInt(229640520397)
// console.log(adhaar, typeof(adhaar))


//  Non Premitive
// 1. Array
let allCities = ["Waraseoni", "Balaghat", "Raipur", "Gondia"]
// console.log(allCities[3])
// 2. Objects
let allUsers = [
    {
        name: "Ayushman",
        city: "Raipur",
        phone:82392893829
    },{
        name: "Rajesh",
        city: "Bhilai",
        phone:82392839238
    },{
        name: "Alok",
        city: "Udisa",
        phone:98329382938
    }
]

console.log(allUsers[0].name, allUsers[0].city, allUsers[0].phone);
console.log(allUsers[1].name, allUsers[1].city, allUsers[1].phone);
console.log(allUsers[2].name, allUsers[2].city, allUsers[2].phone);