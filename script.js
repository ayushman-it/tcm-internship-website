// alert("Hello")
// console.log("Hello");
// console.error("This is an error");


// document.write("Hello");
// confirm("Are you delete this data ?");
// prompt("Enter Your QTY ?");


// Var, let & const 

// Keyword, name(var) = (Operator), Ayushman (Value)
// var name = "Ayushman";


// Decleartion
// var name;

// // Assignment
// name = "Ayushman";

// // Re assign 
// name = "Raghav";

// // Re assign 
// name = "Sumit";

// Re Decleartion
// var name = "Amrit";

// console.log(name);

// -------------------------------

// Dcleartion
// let fname;

// Assignment
// fname = "Anirudh";

// Re Assignment
// fname = "Muskan";

// Re Assignment
// fname = "Sumit";

// let fname = "Jagdish";


// console.log(fname)


// -------------------------------

// const rollNumber = 293292;

// let city = "Bilaspur";
// let age = 67;
// let accepted = false;
// let unknown;
// let salary = null;
// let adhaar = BigInt(229382938293823899)
// console.log(adhaar)

// Key/Iterates/Position/Indexing

// let fruits = ["Apple", "Banana", "Grapes", "Orange"];
// console.log(fruits[3]);

// let name = "Ayushman";

// console.log(name);

// Position/Iterates/Indexing
// -------------0-----------1----------2---------3----------4----
// let array = ["Ayushman", "Ansh", "Priyanshu", "Khushi", "Harshit"];

// console.log("Hii i am ", array[0]);
// console.log("Hii i am ", array[1]);
// console.log("Hii i am ", array[2]);
// console.log("Hii i am ", array[3]);

// For Loop
// for(let agent = 0; agent < array.length; agent++){
//     console.log(agent)
// }

// // For In loop
// for(let agent in array){
//     console.log(agent)
// }

// // For of loop
// for(let agent of array){
//     console.log(agent)
// }

// // For each loop
// array.forEach((agent)=>{
//     console.log(agent)
// })

// // while loop
// let x = 80;
// while(x <= 10){
//     console.log(x)
//     x++;
// }
// // Website 50 Pages 
// // 40, 49, 50(Data unavaibale - ())

// // Do while loop

// let agent = 50;
// do{
//     console.log(agent)
//     agent++;
// }while(agent <= 10);

// Website 50 Pages 
// 40, 49, 50(Data unavaibale - (No Data/ Old Data Previews))


// Objects 

// Car = Name , Color , Price, Showroom, Type, Brand


// let carsmute =  {
//         // Prop - Value
//         Name: "Audi",
//         color: "Black",
//         price: 232323,
//         showroom: "Waraseoni",
//         type: "Petrol",
//         Brand: "Audi",
//         stock: true
//     }

// Object
// let carsNonMute = [
//     {
//         // Prop - Value
//         Name: "Audi",
//         color: "Black",
//         price: 232323,
//         showroom: "Waraseoni",
//         type: "Petrol",
//         Brand: "Audi",
//         stock: true
//     },
//     {
//         // Prop - Value
//         Name: "BMW",
//         color: "Blue",
//         price: 934839,
//         showroom: "Balaghat",
//         type: "Petrol",
//         Brand: "Audi",
//         stock: false
//     },
//     {
//         // Prop - Value
//         Name: "Swift",
//         color: "Black",
//         price: 9829,
//         showroom: "Seoni",
//         type: "Petrol",
//         Brand: "Dezire",
//         stock: false
//     },
//     {
//         // Prop - Value
//         Name: "Alto",
//         color: "White",
//         price: 989,
//         showroom: "Seoni",
//         type: "Petrol",
//         Brand: "SUZUKI",
//         stock: false
//     }
// ]

// x, i, y, a
// for(let i = 0; i < carsNonMute.length; i++){
//     document.write("Car Name : ", carsNonMute[i].Name, "<br>")
// }

// If else 

// let age = 180; // number

// if(age === "80"){ // string
//     console.log("Yes age is matched...");
// }
// else if(age >= 100){
//     console.log("This is not a human")
// }
// // else if(){}
// else{
//     console.log("Age is not matched..");
// }



// let array =u ["Ayshman", "Ansh", "Priyanshu", "Khushi", "Harshit"];

// for(let i = 0; i < array.length; i++){
//     console.log(i, typeof(i))
// }

// for(let i in array){
//     console.log(i, typeof(i))
// }

// let obj = [
//     {
//         name: "Ayushman",
//         age: 23,
//         city: "bilaspur",
//         phone: 68888787879
//     },
//     {
//         name: "Vaibhav",
//         age: 23,
//         city: "bilaspur",
//         phone: 68888787879
//     }, {
//         name: "Emon",
//         age: 23,
//         city: "bilaspur",
//         phone: 68888787879
//     }
// ]


// console.log(obj[1].name)

// DOM - Document Object Modal
// By Using DOM methods we can access, read, update and create html elements from javasscript.
// let heading;
// let para;

// // Access
// heading = document.getElementsByTagName('h1');
// para = document.getElementsByTagName('p');

// console.log(heading)
// console.log(para);

// // Read
// console.log(heading[2].innerText);

// // Update
// heading[0].innerText = "TCMOne";

// // Create
// let headingSec = document.createElement('h2');
// let body = document.getElementsByTagName('body')[0];

// let headingThird = document.createElement('h3');

// body.appendChild(headingSec);
// headingSec.innerText = "Heading made by js";

// body.appendChild(headingThird);
// headingThird.innerText = "Heading Third";

// // Decorate
// // headingSec.style.color = "red";
// headingSec.setAttribute("class", "text-red")



// Js Intragtion 
// JS Output
// 1. alert();
// alert("Hello");
// 2. console.log();
// console.log("2" + 2);
// 3. prompt();
// prompt("Enter Your name");
// 4. confirm();
// confirm("Are u want to delete this ?");
// 5. document.write();
// document.write("Hello");
// 6. console.error();
// console.error("something went wrong!");

// Variable = var, let, const 

// JS Variables, Data Types
// Primitive
// 1. number
// let num = 12;
// console.log(num);

// // 2. string
// let name = "Ayushmann";
// console.log(name);
// // 3. boolean
// let result = false;
// console.log(result)

// // 4. null
// let unfilledData = null;
// console.log(unfilledData)
// // 5. undefined
// let city;
// console.log(city);
// // 6. bigint
// let adhaar = BigInt(28932932939n);
// console.log(adhaar);
// console.log(typeof(adhaar));


// Non Primitive
// 1. Array 
let array = ["Anirudh", "Mohan", "Raj", "Shyam"];
// console.log(array[3]);


let obj = [
    {
    name: "Anirudh",
    age: 23,
    phone: 323232323,
    email: "ani@gmail.com",
    location: "Rajsthan"
},
{
    name: "Aman",
    age: 23,
    phone: 4343434,
    email: "aman@gmail.com",
    location: "Rajsthan"
},
{
    name: "Akash",
    age: 23,
    phone: 34334342,
    email: "akash@gmail.com",
    location: "Rajsthan"
}
]

// console.log(obj[2].email);



// Loops, If else, else if, switchcase

// Loops

// for loop
// for(let i = 0; i < obj.length; i++){
//     console.log(i)
// }

// // for in loop
// for(let i in obj){
//     console.log(i)
// }

// // for of loop
// for(let i of obj){
//     console.log("For of ", i)
// }

// for each loop

// obj.forEach(i =>{
//     console.log("for each", i)
// })


// while loop

// let i = 40;
// let x = 40;

// // while(i <= 10){
// //     console.log(i);
// //     i++;
// // }


// // do while loop
// do{
//     console.log(x);
//     x++;
// }while(x <= 10);

// Prtham - for of loop
//  class A - sabhi ko bacho ko task dena hai 
//  pratham ----> white board ---> task entry ---> 40 (task);

// Priyanshu - for each loop
//  class A - sabhi ko bacho ko task dena hai 
//  pratham ----> each student -----> each student notebook ----> entry task----40 (task) unique


// Second level
// DOM

// document.getElementsByTagName("h1")[2].innerText = "Change 1";

// console.log(document.getElementsByClassName("head")[2].innerText);

// console.log(document.getElementById('temp').innerText);

// console.log(
// document.querySelector('h1'));


// console.log(
// 

// document.querySelectorAll("[href='#']")[0].innerText = "About";


// let head = document.querySelector('h1');
// let anch = document.querySelector('a');

// head.style.color = "red";
// head.style.fontSize = "40px";
// head.style.backgroundColor = "yellow";

// head.setAttribute("class", "text-danger fs-4");

// anch.setAttribute('href', 'https://www.facebook.com');


// head.classList.add('testone');

// console.log(anch);

// let head = document.querySelector('h1');
// let img = document.querySelector('img');
// let body = document.querySelector('body');
// Styling

// head.style.color = "red";
// head.style.backgroundColor = "yellow";
// head.style.padding = "10px 20px";


// By Attribute

// head.setAttribute('id', 'testId');

// img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG5xgKErzgj8KWXChTf9RCRgrYqAz4ioAP04e6pw304So4G8fIARuylwE&s=10');
// img.setAttribute('alt', 'Tech Image');
// img.setAttribute('width', '200');

// ClassList

// head.setAttribute('class', 'text-danger bg-yellow');

// head.classList.add("TestClass");
// head.classList.remove("head");




// console.log(head)
// console.log(img)

// HTML ----> JS 

// JS ------> Update HTML

// JS ------> CSS / Styling HTML


// Access Main Parent
// let body, head, para, img, anch;
// body = document.querySelector('body');

// // Create
// head = document.createElement('h1');
// para = document.createElement('p');
// img = document.createElement('img');
// anch = document.createElement('a');

// // Append - Making Child in main Parent
// body.appendChild(head);
// body.appendChild(para);
// body.appendChild(img);
// body.appendChild(anch);

// // Init
// head.innerText = "Prgramming Ashram";
// para.innerText = "Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.";

// img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG5xgKErzgj8KWXChTf9RCRgrYqAz4ioAP04e6pw304So4G8fIARuylwE&s=10";

// anch.href = "https://facebook.com";
// anch.innerText = "Go to Facebook";

// // img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG5xgKErzgj8KWXChTf9RCRgrYqAz4ioAP04e6pw304So4G8fIARuylwE&s=10');

// // Styling
// head.setAttribute('class', 'text-danger');

// Section ----> Container ---> Row ----> Column - 1


let body, section, container, row, column;

// Access Main
body = document.querySelector('body');

// Create
section = document.createElement("section");
container = document.createElement("div");
row = document.createElement('div');
column = document.createElement("div");

// Append
// body ---> section ----> container ----> row ---> column

body.appendChild(section);
section.appendChild(container);
container.appendChild(row);
row.appendChild(column);

// Attribute Setup
section.setAttribute("class", 'py-5 bg-primary-subtle');
container.setAttribute('class', "container");
row.setAttribute('class', 'row');
column.setAttribute('class', 'col-md-12');



// Init
column.innerHTML = `
    <h1 class="display-2 fw-bold">TCM <span class="text-danger">One</spam></h1>
    <p>Compile Bootstrap with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling:</p>
`;


const courses = [
  {
    id: 'CRS-101',
    courseName: 'Full-Stack Web Development Bootcamp',
    price: 499.00,
    date: '2026-11-01',
    seats: 35
  },
  {
    id: 'CRS-102',
    courseName: 'Applied Machine Learning & Deep Learning',
    price: 599.00,
    date: '2026-11-05',
    seats: 25
  },
  {
    id: 'CRS-103',
    courseName: 'Data Analytics with Python & SQL',
    price: 349.00,
    date: '2026-11-10',
    seats: 40
  },
  {
    id: 'CRS-104',
    courseName: 'Cloud Architecture on AWS & Azure',
    price: 449.00,
    date: '2026-11-12',
    seats: 30
  },
  {
    id: 'CRS-105',
    courseName: 'UI/UX Design Systems & Prototyping',
    price: 299.00,
    date: '2026-11-15',
    seats: 20
  },
  {
    id: 'CRS-106',
    courseName: 'DevOps & Kubernetes Masterclass',
    price: 499.00,
    date: '2026-11-18',
    seats: 25
  },
  {
    id: 'CRS-107',
    courseName: 'Cybersecurity Fundamentals & Ethical Hacking',
    price: 549.00,
    date: '2026-11-20',
    seats: 18
  },
  {
    id: 'CRS-108',
    courseName: 'Product Management: Idea to Scale',
    price: 399.00,
    date: '2026-11-22',
    seats: 30
  },
  {
    id: 'CRS-109',
    courseName: 'iOS App Development with Swift',
    price: 429.00,
    date: '2026-11-25',
    seats: 22
  },
  {
    id: 'CRS-110',
    courseName: 'Modern Android Development with Kotlin',
    price: 429.00,
    date: '2026-11-28',
    seats: 22
  },
  {
    id: 'CRS-111',
    courseName: 'Prompt Engineering & Generative AI Systems',
    price: 279.00,
    date: '2026-12-01',
    seats: 50
  },
  {
    id: 'CRS-112',
    courseName: 'Microservices Architecture with Go',
    price: 479.00,
    date: '2026-12-03',
    seats: 20
  },
  {
    id: 'CRS-113',
    courseName: 'Blockchain & Smart Contract Development',
    price: 529.00,
    date: '2026-12-05',
    seats: 15
  },
  {
    id: 'CRS-114',
    courseName: 'Enterprise Database Administration & Tuning',
    price: 389.00,
    date: '2026-12-08',
    seats: 28
  },
  {
    id: 'CRS-115',
    courseName: 'Technical Writing & Developer Documentation',
    price: 199.00,
    date: '2026-12-10',
    seats: 40
  },
  {
    id: 'CRS-116',
    courseName: 'Automated Testing & QA with Playwright',
    price: 299.00,
    date: '2026-12-12',
    seats: 30
  },
  {
    id: 'CRS-117',
    courseName: 'Digital Marketing Analytics & SEO Strategy',
    price: 249.00,
    date: '2026-12-15',
    seats: 45
  },
  {
    id: 'CRS-118',
    courseName: 'Embedded Systems & IoT with Rust',
    price: 519.00,
    date: '2026-12-18',
    seats: 16
  },
  {
    id: 'CRS-119',
    courseName: 'Financial Modeling & Algorithmic Trading',
    price: 649.00,
    date: '2026-12-20',
    seats: 20
  },
  {
    id: 'CRS-120',
    courseName: 'Natural Language Processing with Transformers',
    price: 579.00,
    date: '2026-12-22',
    seats: 24
  }
];
    
let article, container1, row1;

// Create
article = document.createElement("article");
container1 = document.createElement("div");
row1 = document.createElement('div');

// Append
// body ---> section ----> container ----> row ---> column

body.appendChild(article);
article.appendChild(container1);
container1.appendChild(row1);

// Attribute Setup
article.setAttribute("class", 'py-5 bg-warning-subtle');
container1.setAttribute('class', "container");
row1.setAttribute('class', 'row');


for(let i = 0; i < courses.length; i++){
    row1.innerHTML +=`
        <div class="col-md-3">
            <div class='card my-2'>
                <div class='card-body'>
                    <span>${courses[i].id}</span>
                    <h4 class='fw-light'>${courses[i].courseName}</h4>
                    <h5 class='fs-6 text-secondary'>${courses[i].date}</h5>
                    <hr>
                    <div class='d-flex justify-content-between'>
                        <p>Seats : ${(courses[i].seats > 30) ? "Seats Available" : "Filling fast"}</p>
                        <p>₹ ${courses[i].price}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}