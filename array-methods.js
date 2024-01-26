const products =[
    {name: 'laptop', price: 32000, brand:'lenovo', color:'silver'},
    {name: 'phone', price: 7000, brand:'iphone', color:'golden'},
    {name: 'Watch', price: 3000, brand:'casio', color:'yeollow'},
    {name: 'sunglass', price: 320, brand:'renovo', color:'black'},
    {name: 'camera', price: 9000, brand:'canon', color:'gray'}
  
];

// map

const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);


// forEach
// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color))


products.forEach(product => {

})

// 3.filter

const cheap = products.filter(product => product.price <=5000);
// console.log(cheap);

const SpecificName = products.filter(p => p.name.includes('n'));
// console.log(SpecificName);



// 4.find
const special = products.find(p => p.name.includes
    ('n'));
    console.log(special);




