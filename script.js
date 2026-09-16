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
let array = ["Ayushman", "Ansh", "Priyanshu", "Khushi", "Harshit"];

// console.log("Hii i am ", array[0]);
// console.log("Hii i am ", array[1]);
// console.log("Hii i am ", array[2]);
// console.log("Hii i am ", array[3]);

// For Loop
for(let agent = 0; agent < array.length; agent++){
    console.log(agent)
}

// For In loop
for(let agent in array){
    console.log(agent)
}

// For of loop
for(let agent of array){
    console.log(agent)
}

// For each loop
array.forEach((agent)=>{
    console.log(agent)
})

// while loop
let x = 80;
while(x <= 10){
    console.log(x)
    x++;
}
// Website 50 Pages 
// 40, 49, 50(Data unavaibale - ())

// Do while loop

let agent = 50;
do{
    console.log(agent)
    agent++;
}while(agent <= 10);

// Website 50 Pages 
// 40, 49, 50(Data unavaibale - (No Data/ Old Data Previews))

