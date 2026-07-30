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
// ------------------0-----------1-----------2----------3---(Leangth = 4)
// let allUser = ["Ansh", "Priya", "Pratham", "Aadarsh"]
// console.log(allUser[2])
// 2. Array Objects
// let allUsers = [
//     {
//         // Prop: Value
//         name: "Ansh",
//         city: "Raipur",
//         phone:82392893829
//     },{
//         name: "Priya",
//         city: "Bhilai",
//         phone:82392839238
//     },{
//         name: "Pratham",
//         city: "Udisa",
//         phone:98329382938
//     },{
//         name: "Aadarsh",
//         city: "Udisa",
//         phone:98329382938
//     }
// ]

// console.log(allUsers[0])
// console.log(allUsers[1])
// console.log(allUsers[2])
// console.log(allUsers[3])



// let deleteData = confirm("Are you want to delete this Data ?");

// console.log(deleteData)



const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 799,
        stock: 25,
        brand: "Logitech",
        rating: 4.5,
        discount: 10,
        image: "mouse.jpg"
    },
    {
        id: 2,
        name: "Bluetooth Headphones",
        category: "Electronics",
        price: 1999,
        stock: 15,
        brand: "Boat",
        rating: 4.3,
        discount: 20,
        image: "headphones.jpg"
    },
    {
        id: 3,
        name: "Running Shoes",
        category: "Footwear",
        price: 2499,
        stock: 30,
        brand: "Nike",
        rating: 4.7,
        discount: 15,
        image: "shoes.jpg"
    },
    {
        id: 4,
        name: "Cotton T-Shirt",
        category: "Fashion",
        price: 599,
        stock: 50,
        brand: "Puma",
        rating: 4.2,
        discount: 5,
        image: "tshirt.jpg"
    },
    {
        id: 5,
        name: "Smart Watch",
        category: "Electronics",
        price: 3499,
        stock: 12,
        brand: "Noise",
        rating: 4.6,
        discount: 18,
        image: "watch.jpg"
    },
    {
        id: 6,
        name: "Laptop Backpack",
        category: "Accessories",
        price: 1299,
        stock: 20,
        brand: "Skybags",
        rating: 4.4,
        discount: 12,
        image: "bag.jpg"
    },
    {
        id: 7,
        name: "Gaming Keyboard",
        category: "Electronics",
        price: 2499,
        stock: 18,
        brand: "Redragon",
        rating: 4.7,
        discount: 15,
        image: "keyboard.jpg"
    },
    {
        id: 8,
        name: "USB Pendrive 64GB",
        category: "Electronics",
        price: 699,
        stock: 40,
        brand: "SanDisk",
        rating: 4.5,
        discount: 8,
        image: "pendrive.jpg"
    },
    {
        id: 9,
        name: "Men's Jeans",
        category: "Fashion",
        price: 1499,
        stock: 35,
        brand: "Levis",
        rating: 4.4,
        discount: 20,
        image: "jeans.jpg"
    },
    {
        id: 10,
        name: "Women's Handbag",
        category: "Fashion",
        price: 1899,
        stock: 16,
        brand: "Lavie",
        rating: 4.6,
        discount: 10,
        image: "handbag.jpg"
    },
    {
        id: 11,
        name: "Sports Water Bottle",
        category: "Home",
        price: 499,
        stock: 60,
        brand: "Milton",
        rating: 4.3,
        discount: 5,
        image: "bottle.jpg"
    },
    {
        id: 12,
        name: "Office Chair",
        category: "Furniture",
        price: 6999,
        stock: 10,
        brand: "GreenSoul",
        rating: 4.8,
        discount: 25,
        image: "chair.jpg"
    },
    {
        id: 13,
        name: "Study Table",
        category: "Furniture",
        price: 4999,
        stock: 8,
        brand: "IKEA",
        rating: 4.5,
        discount: 15,
        image: "table.jpg"
    },
    {
        id: 14,
        name: "Mobile Charger",
        category: "Electronics",
        price: 899,
        stock: 45,
        brand: "Samsung",
        rating: 4.2,
        discount: 12,
        image: "charger.jpg"
    },
    {
        id: 15,
        name: "Power Bank 20000mAh",
        category: "Electronics",
        price: 2499,
        stock: 22,
        brand: "Mi",
        rating: 4.6,
        discount: 18,
        image: "powerbank.jpg"
    },
    {
        id: 16,
        name: "LED Desk Lamp",
        category: "Home",
        price: 999,
        stock: 28,
        brand: "Philips",
        rating: 4.4,
        discount: 10,
        image: "lamp.jpg"
    },
    {
        id: 17,
        name: "Cricket Bat",
        category: "Sports",
        price: 2199,
        stock: 14,
        brand: "SS",
        rating: 4.7,
        discount: 12,
        image: "bat.jpg"
    },
    {
        id: 18,
        name: "Football",
        category: "Sports",
        price: 899,
        stock: 32,
        brand: "Nivia",
        rating: 4.3,
        discount: 7,
        image: "football.jpg"
    },
    {
        id: 19,
        name: "Pressure Cooker",
        category: "Kitchen",
        price: 1999,
        stock: 19,
        brand: "Prestige",
        rating: 4.5,
        discount: 14,
        image: "cooker.jpg"
    },
    {
        id: 20,
        name: "Mixer Grinder",
        category: "Kitchen",
        price: 3299,
        stock: 11,
        brand: "Bajaj",
        rating: 4.4,
        discount: 20,
        image: "mixer.jpg"
    }
    ,
    {
        id: 21,
        name: "Test Test",
        category: "Test",
        price: 3299,
        stock: 11,
        brand: "Bajaj",
        rating: 4.4,
        discount: 20,
        image: "mixer.jpg"
    },
    {
        id: 22,
        name: "Laptop",
        category: "Test",
        price: 3299,
        stock: 11,
        brand: "Bajaj",
        rating: 4.4,
        discount: 20,
        image: "mixer.jpg"
    }
];

// For Loop

// for(let manager = 0; manager <  products.length; manager++){
//     console.log(products[manager].name)
// }


// console.log(products[0].name)
// console.log(products[1].name)
// console.log(products[2].name)
// console.log(products[3].name)
// console.log(products[4].name)
// console.log(products[5].name)
// console.log(products[6].name)
// console.log(products[7].name)
// console.log(products[8].name)
// console.log(products[9].name)
// console.log(products[10].name)


let array = ["Apple", "Banana", "Grapes", "Orange"]

// For Loop - Return indexing but as number
for(let i = 0; i < array.length; i++){
    console.log(i, typeof(i))
}

// for in loop - Return indexing but as string
for(let i in array){
    console.log(i, typeof(i))
}


// For of loop = Return indexing value
for(let i of array){
    console.log(i)
}

// For Each Loop  = Return indexing value
array.forEach(i =>{console.log(i)})

let x = 5;

while(x < 3){
    console.log(x)
    x++;
}

let x = 1;

do{
    console.log(x);
    x++;
}while(x <= 10)