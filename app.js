// alert("Welcome to TCM")
// console.log(574587548 * 4394394839)
// document.write("Hello i am from TCM")
// let deleteData = confirm("Are You want to delete this ?");
// console.log(deleteData)

// let qty = prompt("Enter your QTY...");
// document.write("Your Item QTY is: ", qty);

// console.error("Limit Exeed")

// var , let, const

// Declearation
// var name;

// // // Assign
// name = "Ansh";
// // // Assign
// name = "Ayushman";
// // // Assign
// name = "Rajesh";

// // // Declearation
// var name;
// name = "Amrit";

// console.log(name)


// Declearation
// let name;

// // // Assign
// name = "Rajesh";
// // // Assign
// name = "Raju";

// // // Declearation
// // let name;

// // // Assign
// name = "Ramesh";

// console.log(name)

// // const student_id = 599;
// // console.log(student_id)

// // Premitive 
// // 1. string = "Ayushman"; 
// let name = "45";
// console.log(typeof(name))
// 2. Number = 467
// let number = 48938938;
// console.log(typeof(number))
// 3. Boolean = true 
// let elegible = true;
// console.log(typeof(elegible))
// 4. Undefiend
// let name;
// console.log(typeof(name))
// 5. null = 
// let salary = null;
// console.log(typeof(salary))
// let bigint = BigInt(2308498398439839)
// console.log(typeof(bigint))



// non premotive

// Array 
// let users = ["Ayushman", "Harsh", "Rakesh", "Akram"];
// console.log(users[3])

// let fruits = ["Apple", "Banana", "Grapes"]
// console.log(typeof (fruits))

// let car = color, price, ratings, type, showroom
// let user = name, surname, city, age, phone, email

// let allUsers = [
//   {
//     name: "Ayushman",
//     age: 23,
//     city: "waraseoni"
//   },
//   {
//     name: "Akram",
//     age: 22,
//     city: "Katani"
//   },
//   {
//     name: "Shivam",
//     age: 24,
//     city: "Balaghat"
//   }
// ]
// console.log(allUsers[2].name);

// let emp  = [
//     {
//         name: "Ayushman",
//         age: 23,
//         city: "waraseoni"
//     },
//       {
//         name: "Akram",
//         age: 22,
//         city: "Katani"
//     },
//       {
//         name: "Shivam",
//         age: 24,
//         city: "Balaghat"
//     },
//       {
//         name: "Ayushman",
//         age: 23,
//         city: "waraseoni"
//     },
//       {
//         name: "Akram",
//         age: 22,
//         city: "Katani"
//     },
//       {
//         name: "Shivam",
//         age: 24,
//         city: "Balaghat"
//     }
//     ,  {
//         name: "Ayushman",
//         age: 23,
//         city: "waraseoni"
//     },
//       {
//         name: "Akram",
//         age: 22,
//         city: "Katani"
//     },
//       {
//         name: "Shivam",
//         age: 24,
//         city: "Balaghat"
//     },  {
//         name: "Ayushman",
//         age: 23,
//         city: "waraseoni"
//     },
//       {
//         name: "Akram",
//         age: 22,
//         city: "Katani"
//     },
//       {
//         name: "Shivam",
//         age: 24,
//         city: "Balaghat"
//     },  {
//         name: "Ayushman",
//         age: 23,
//         city: "waraseoni"
//     },
//       {
//         name: "Akram",
//         age: 22,
//         city: "Katani"
//     },
//       {
//         name: "Shivam",
//         age: 24,
//         city: "Balaghat"
//     },
//      {
//         name: "Rajesh",
//         age: 24,
//         city: "Balaghat"
//     },
//      {
//         name: "Mohan",
//         age: 24,
//         city: "Balaghat"
//     }
// ]

// for loop

// Returns Indexing = As a number
// for(let agent = 0; agent < emp.length; agent++){
//   console.log(agent, typeof(agent))
//   // console.log(emp[agent].name)
// }


// for in loop indexing as string
// for(let agent in emp){
//   console.log(emp[agent].name)
// }

// Value of index
// for of loop
// for(let agent of emp){
//   console.log(agent)
// }


// Value of index
// for each loop
// emp.forEach(agent => {console.log(agent)})


// Error Statment while does return anything
// while loop
// let x = 50;

// while(x <= 10){
//   console.log(x);
//   x++;
// }

// Error Statement we can get values
// do while loop
// let x = 50;

// do{
//   console.log(x);
//   x++;
// }
// while(x <= 10);


// console.log(emp)

// console.log("Hello I am ", emp[0].name, "and my age is ", emp[0].age, "city is ", emp[0].city)
// console.log("Hello I am ", emp[1].name, "and my age is ", emp[1].age, "city is ", emp[1].city)
// console.log("Hello I am ", emp[2].name, "and my age is ", emp[2].age, "city is ", emp[2].city)

// For loop

// for(let agent = 0; agent < emp.length; agent++){
//    console.log("Hello I am ", emp[agent].name, "and my age is ", emp[agent].age, "city is ", emp[agent].city)
// }


// let age = 12;

// if(age >= 18 ){
//   console.log("Eligible")
// }else{
//   console.log("Not eligible")
// }

// let color = "orange";

// if(color == "blue"){
//   console.log("Yes color is blue");
// }
// else if(color == "green"){
//   console.log("Yes Color is Green");
// }
// else if(color == "orange"){
//   console.log("Yes Color is Orange")
// }
// else{
//   console.log("Not Found")
// }

// let date = 10;

// switch (date) {
//   case 6:
//     console.log("Yes Today is birthday")
//     break;
//   case 7:
//     console.log("Yes Today is Holiday")
//     break;

//   default:
//     console.log("No Event Added in this date")
//     break;
// }

// Simple Function

// function pratham(){
//   console.log("Pratham");
// }
// function ayush(){
//   console.log("Ayushman");
// }
// function arman(){
//   console.log("Arman");
// }
// function mohit(){
//   console.log("Mohit");
// }

// mohit();

// Nested Function

// function students(){
//     function pratham(){
//       console.log("Pratham");

//       function jyoti(){
//         console.log("Jyoti");
//       }
//       jyoti();
//     }pratham();
//     function ayush(){
//       console.log("Ayushman");
//     }
//     ayush();
// }
// students();

// Function with parameters
// function fullName(fname, lname){
//   console.log(fname +" "+ lname);
// }

// fullName("Ayushman", "Chaurasiya");
// fullName("Pratham", "Soni");
// fullName("Mayur", "Agrawal");
// fullName("Asama", "Ahemad");
// fullName("Nil", "Soni");


// Arrow Function
// let fn = ()=> {console.log("Hii i am Arrow Function")}
// fn();

// variable Function
// let fn = function(){
//   console.log("hello i am variable function")
// }
// fn()

// Instant Invoke Function - Anonymuous Function
// (function(){
//   console.log("Happy Hacking...")
// })()

// Clouser Function

// function parent(){
//   // Parent
//   let x = 10;
//   function child1(){
//     // Child y
//     let y = 20;
//     function child2(){
//       // Parent = Parent add
//       let total = x + y;
//         console.log(total);
//       }child2();
//   }child1();
// }parent();


// DOM 
// Document Object Modal

// document.getElementsByTagName();
// document.getElementsByClassName();

// document.getElementById()

// document.querySelector('.head')
// document.querySelector('#head')
// document.querySelector('body > head')
// document.querySelector('body head')

// document.querySelectorAll()

// let heading = document.getElementById('head');
// heading.innerText = "TCM India";
// heading.innerText = "TCM <span>India</span>";
// heading.innerHTML = "TCM <span>India</span>";

// console.log(document.getElementById('head'));


// console.log(document.getElementsByClassName('head')[1]);

// console.log(document.getElementsByTagName('h1')[1])

// console.log(document.querySelector('.head'))

// console.log(document.querySelectorAll('body > h1')[1]);

// Accessing main tag for nested child
let htmlBody = document.querySelector('body');

// New element creation for my parent(Body)
let heading = document.createElement('h1');

// Chil inserted in parent
htmlBody.appendChild(heading)

// Content add
heading.innerText = "TCM India";

// Adding Styling
// heading.style.color = "blue";
// heading.style.fontSize = "60px";

// heading.setAttribute('class', 'text-primary display-1 fw-bold');

// heading.classList.add("")

let anch = document.createElement('a');
htmlBody.appendChild(anch);
anch.innerText = "Go To facebook";

anch.setAttribute('href', 'https://www.facebook.com');

// Access ---> Update ------> Create 