// how to declare a variable using let ad const
cost fatherName = 'Munir';
let season = 'rainy';
season = 'winter';


// 2.conditions
// condition 6 basic condition >, < , ===, !== , <= , >=
// multiple conditions : && || 

if(fatherName === 'Munir' || season ==='rainy'){


}else if(fatherName === 'Munir'){

}
else{

}

// 3.array
// index 
// length, push , pop
const numbers = [ 89, 35, 98, 12];
numbers[0] = 56 ;

// 4.for loop
for(let i = 0 , i < numbers.length, i++){
    const number = numbers[i]
    console.log(number);
}
    // 5. function 
    function multiply(num1 , num2){
        const result = num1 * num2 ;
        return result;
    }
    const output =multiply(35, 78);

    //6. OBJECT
    // 3 ways to  access
    const student = {
        name : 'sakib khan',
        age : 32,
        Movies: ['king khan', 'dhaka']
    }

    const myVariable = 'age';

   console.log(student.age);  //direct by property 
   console.log(student['age']);  // access via property name string

   console.log(student[myVariable]); //access via property name in variable




