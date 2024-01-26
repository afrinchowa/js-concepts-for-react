// 'almas',8,true , {}, []
// '',0, false, null,undifined

let myVar =6;
// chq any truthy
if(myVar){
    myVar = myVar*100;    
}
else{
    myVar = 0;
}

let myMoney = 50;
// you check negetive or falsy anything
if(!myMoney){

}

const money =80;
let food ;
if(money > 100){
}else{
    food = 'cha biscuit'}
// ternary
let food1 =money>100? 'biriany' : 'chabiscuit';
console.log(food1);
let drink =(money >100 &myVar >100) 'coke' : 'filter pani';
console.log(drink);

// number to string conversion 
const num1= 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr)

// string to number conversion
const input ='560';
const inputNum =+input;
console.log(inputNum);
// 
let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

// isActive? showUser() : hideUser();
// use && if the left side is true then right side will e executed 

isActive && showUser();
// use || if the left side is false then right side will be executed

isActive || hideUser();

// toggle boolean
isActive =!isActive;


