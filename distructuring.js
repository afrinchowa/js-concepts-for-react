// 1. array distructuring

// const numbers = [ 42, 65 ];
// const x = numbers [0];
// const y = numbers [1];


// const [x,y] =[42,56]
// const [x,y] =numbers;

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;


}


console.log(boxify(90, 34));
const student = {
    name: "sakib khan",
    age: 32,
    Movies: ["king khan", "dhaka"],
  };


const [ firstMovie, secondMovie] = student.movies;
// console.log(x, y);

// object distructuring
const { name, age } = { name: 'alu', age: 14 };
const { name, age, salary } = { salary: 34000, name: 'alu', age: 14 };

const employee = {
    ide: 'VS code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css ', 'js'],
    specification: {
        height: 66,
        weight: 56,
        address: 'Khulna',
        drink: 'water',
        watch: {
            color : 'black';
            brand : 'garmin';  
            price : 500         
        }
    }
}

const {machine ,ide } = employee;
const {weight, address} = employee.specification;
const {brand } =employee.specification.watch ;

