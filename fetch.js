// 1.json =stringify . parse


const student = {
    name : 'sakib khan',
    age : 32,
    Movies: ['king khan', 'dhaka']
}

const studentJSON =JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj

fetch('url')
.then(res => res.json)
.then(data => console.log(data));

// 2.keys, values

const keys = Object.keys(student);
const values =Object.values(student)
// for 
const numbers =[23,234,45,65,76,8768];
numbers.forEach(num => console.log(num));
numbers.map(num => num *2);

// for of on array like object
// loop on an object using for in

// add  or remove from an array 
const products =[
    {name: 'laptop', price: 32000, brand:'lenovo', color:'silver'},
    {name: 'phone', price: 7000, brand:'iphone', color:'golden'},
    {name: 'Watch', price: 3000, brand:'casio', color:'yeollow'},
    {name: 'sunglass', price: 320, brand:'renovo', color:'black'},
    {name: 'camera', price: 9000, brand:'canon', color:'gray'}
  
];


const newProduct = { name:'webcam', price: 700 , brand: 'lal'};

// copy products array and then add a newProduct
const newProducts = [...products,newProduct];

// create a new array without one specific item
// remove phone means create a new array  without the phone

const remaining = products.filter(p => p.name !=='phone')

