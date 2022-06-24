// console.log("Hello world")

// let x = 22;
// console.log(x);
// console.log(typeof(x));
// x = "jjjjj"
// console.log(x);
// console.log(typeof(x));
// var y ;
// console.log(y);
// console.log(typeof(y));
// const k =22;

// console.log(y,x,k);
// console.log(k);

// let h= 88
// let z= 90
// console.log(h+z);
// //object

// // let object_name = {key : value}

// let names = {firstName:"poonam", lastName:"patil" ,color:"pink"}
// console.log(names.color);
// console.log(names);

// let p = null
// console.log(p);
// console.log(typeof(p));

    //let color = ["pink","yellow","blue",'brown'];
    // let fruits = ['mango','apple',"kiwi"];
    // let newArray= color.concat(fruits)
    // console.log(newArray);
    //color.splice(1,1,'maroon')
    // console.log(color[2]);
    // console.log(typeof(color));
    // console.log(color.length);
    // console.log(color.toString());
    //arrayName.toString()--ele comma sep
    // console.log(color.pop());
    //console.log(color);

    // console.log(delete color[2]) 
    // console.log(color);

function myFunction() {
let name = ['amol','jerry','nitesh','jerry','anu','jerry'];
console.log(name);
// let newName=name.slice(3);
// console.log(newName);
console.log('indexofelement',name.lastIndexOf('jerry'))

let text='poonampatil';
console.log('string index',text.indexOf('o'));
let x=-0;
console.log('boolean data type', typeof(x));
if(x=-0){
console.log('if block of boolean');
}
//arithmatic operators
let a= 10;
let b =20;
console.log(a-b);
// a=a+b;
a+=b
console.log('value of a for += opr',a);
// a=a-b;
a-=b
console.log('value of a -=opr',a);
let myName=10;
let mysName='patil'
//console.log(myName+=mysName);
let y=10;
// y='poo';
if(y>=10){
console.log('if');

//ternory operator:
//condtion ? block1 : block2;
}
y>=10?console.log('true'):console.log('false');

y==10 ? y = 11? y=20 : y=30 :y='patil';
console.log(y);

// cond=tru?st1 ? st3 :st4 :st2;
// condtion=true/false ? st1 =t/f ? st3 : st4 : st1 

}

function ternory(){
  // && and; || OR; ! Not;
let x=30;
let y=80;
let z= 50;

   if(!(x<y) ){
     console.log('x is greater');
   }
   else{
    console.log('y is greater');
   }

x<y ?  y<x ? console.log('y is greater for inner ternory'): console.log('y is not greater for inner ternory'): console.log('y is greater');
 //condion ? statment 1 : statment 2;

}

function looping(){
    let cars = ['BMW', 'volvo','ertica','jaguar','swift','minicup']
    let newCar = ['oo','kkk'] ;
    let i = 10;
   
    console.log(i);
    console.log(++i);
    console.log(i);
    //i++ == i=i+1 i=0+1; i= 1 ;i= 1 + 1 i=2; i= 2+1
    //  for(let i = 0 ;  i<=cars.length ; ++i)
    //  {
        //  if(i==2){
        // console.log(i);
        // continue;
        //  }
    // newCar[i] = cars[i];
     //arrayname.push(cars[i])
     //newCar.push(cars[i]);
    // var newCar1 = newCar.concat(cars);

     //console.log("newcar Array in loop",newCar);

  //   }
     console.log("i",i);
    // console.log("newcar Array",newCar1);
    
}

function arrayLoping(){
  let obj = {coffee:"cold coffee", drink:"maaza" , fruits:"apple"}
   for(let x in obj){
      //  console.log(x.coffee);
      console.log(`key is : ${x} and value is : ${obj[x]}`);
      console.log("key",x);
      console.log("value",obj[x]);
   }
let cars = ['BMW', 'volvo','ertica','jaguar','swift','minicup']
for( let x of cars){
   console.log("car array",x);
}
let newArray=[];
//forEach 
cars.forEach((value) => {
  newArray.push(value)
  //console.log(index);
});
console.log('newArray',newArray);





//while
let y=40;

while (y<80) {
  console.log(y);
  break;
 
}
  //do while
  do {
    
    console.log(y);
     break;
  }
  while (y < 80) {
    console.log(y);
   
  }
}

function switchLoop(value){
//switch (parameter){
//case parameter : ;
//break;
//defaul:;
//}
let a= 20;
let b =30;
let res;
switch(value){
  case '+' :
    res= a+b;
    console.log(res);
  
    case '-' :
    res= a-b;
   console.log(res);
 
   case '@' :
    res= a*b;
   console.log(res);
  
   case '/' :
    res= a/b;
   console.log(res);
   case '/' :
    res= a/b;
   console.log(res);
 
   default:
     console.log('no match available');

   
}

}

function calculator() {
  let a = prompt();
  console.log(a);
  let b = prompt();
  console.log(b);
  var res;
  let operator = prompt();
  console.log(operator);
  // if (operator == '+') {
  //   res = a + b;
  //   console.log(res);
  // }
  // else if (operator == '-') {
  //   res = a - b;
  //   console.log(res);

  // }
  // else if (operator == '*') {
  //   res = a * b;
  //   console.log(res);
  // }
  // else {
  //   console.log("no match available");
  // }
  switch (operator) {
    case '+':
      res = a + b;
      console.log(res);
      break;
      case '-':
      res = a - b;
      console.log(`  ${a} ${operator} ${b} =${res}  `);
      break;
      case '*':
        res = a * b;
        console.log(res);
        break;
        case '/':
      res = a / b;
      console.log(res.toFixed(3));
      break;
      default:
      console.log("no match available");
      break;
  }

}

var arrow =(x,y,t) =>  x+y+t;

console.log(arrow(30,20,50));

let addition = (a,b)=> a+b;

console.log(addition(50,30));



var cars =[{
  car:'swift',
  color:'white',
  price:'800000'
},{
  car:'volvo',
  color:'black',
  price:'800000'
},{
  car:'mini cup',
  color:'white',
  price:'700000'
}];
//filter [{},{},{}] let a= arrayName.filter((ele)=>{
  //return ele.color == 'white';
//})

 let carsPrice = cars.filter((ele)=>{
  return ele.price ==='800000';
})
console.log('carsPrice',carsPrice);

//callback fuction:
function substarction(){

}
     variable = 60 ;
console.log(variable);

function myDisplayer(some,a) {
  // document.getElementById("demo").innerHTML = some;
  console.log('in myDisplayerFunc',some);
  let result = some - a;
  
  console.log('in myDisplayerFunc variable',variable);
  variable= 80;
  return result;

}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  //return sum;
  let resOfThis = this.myDisplayer(sum)
  finalCall(resOfThis);

}
function finalCall (b){
console.log(b);
console.log(variable);

}

// let result = myCalculator(5, 5);
// myDisplayer(result);
//

let res =  myCalculator(10,10)
//  let outerRes = myDisplayer(res,20);
//  finalCall(outerRes)



function parent (){
  console.log('In parent function');
  this.variable = 0
  this.childOne();
}

function childOne (){
  console.log('In parent childOne');
  console.log(this.variable);
  this.childTwo();
}
function childTwo (){
  console.log('In parent childTwo');
}



//spread operator: ... 

let number = [1,2,3];
let alpha = ['a','b','c'];
let CombinationArray = [...number, ...alpha]
console.log('CombinationArray',CombinationArray);
let num = [4,5,6,7,8,9];
let [x,y, ...restnum] = num

console.log('x',x);
console.log('y',y);
console.log('restnum',restnum);
console.log('num',num);
//for objects

let fruit ={
  fruitName : 'WaterMelon',
  color:'red',
  price :'50',
  isSesionalFood:'No'
}

let fruitSecond = {
  fruitName : 'kiwi',
  color:'green',
  price :'60',
  size : 'big',
  fav :'yes'
}
let tiger = {...fruitSecond}

console.log('tiger',tiger);

//regular Expressions 

let text = 'visitM500 ourM MumbaiM 1203';
  let indexOfText = text.match(/\d3$/g);
console.log('indexOfText',indexOfText);

var student = { 
  name:'jay',
  age:'21',
  class:'12'
}
console.log('student-->',student);
let stringyfiedData= JSON.stringify(student);
console.log('stringyfiedData-->',stringyfiedData);

let parsedData= JSON.parse(stringyfiedData)
console.log('parsedData-->',parsedData);

localStorage.setItem('student',stringyfiedData)
let studentData=JSON.parse(localStorage.getItem('student'))
console.log(studentData.name);
//document.getElementById() id='para' name='gender'

function changeColor(value) {
  let data = document.getElementById("paraElem");
  data.style.backgroundColor = value;

  console.log("value-->", value);

  setInterval(() => {
    console.log('i am inside set timeout');

  }, 3000);

  console.log('aftersetTimeOut', value);


}

let para = 'poonam-patil';
let splitedArray = para.split('-')
console.log('splitedArray[1]',splitedArray[1]);
console.log('splitedArray',splitedArray);



let array=[8,10,12,5,1,6];
let array2 = array.map((ele)=>ele*2)
let array3 = array.forEach((ele)=>ele*2)
console.log(array3);
console.log(array2);

let chars = ['a','b','c','d','a','b', 'a','b','c']

let newArray= [...new Set(chars)]
console.log("newArray",newArray);
console.log(chars.indexOf(2));
 chars.forEach((ele,index)=> {
  console.log(ele +' '+ index +' '+ chars.indexOf(ele));
 })

 let newA = chars.filter((ele,ind)=>{
 return chars.indexOf(ele)==ind;
 })
 console.log(newA);

 let includeArray = []

chars.forEach((ele)=>{
  if(includeArray.includes(ele)){
    
  }
  else{
    includeArray.push(ele)
  }
})
console.log('includeArray',includeArray);


//\d :digit 
// ^[a-z]$


//i :case insensitive
// [0-7]
// ^[abcd]$
    // let x = 20;
    // let y = 30;
    // let z = 40;

    // if (x > y) {
    //     console.log('if');
    // }
    // else if (y < z) {
    //     console.log("else if");
    // }
    // else {
    //     console.log('else');
   // }


//  console.log(color);
// color.push('red')
// console.log(color);

// console.log(color.push('white'))
// console.log(color);

// color[1]='black';
// console.log(color);

// console.log(color.shift())
// console.log(color);

// console.log(color.unshift('orange'));
// console.log(color);






// let o = 20;
// let d = 22;
// let t =30;

// if(o<d || d<t  ){
// //20<22=true
// //20>22=false
// //o<d && d<t =
// 20<22 && 22<30  && 22>30
// true && true && false
// true && false
// false
// console.log('in if block');

// }
//  if(o<d && d>t){
// console.log('in if else block');
// }
//  if(o<d && d<t){
//     console.log('in if else block 2');
// }

// else{
//   console.log('in else block');
// }

// let p =10;
// const y =30;

// if (p>y && p<y ){
// var x =20;
// console.log(x);
// x =30;
// console.log(x);
// const y=60;
// console.log(y);
// }

// console.log(x);

// var a;
// a =['pooo','moxy'];

// let array =['pooja','poonam','jhon','jerry'
// ];

// console.log(array);
// console.log(array.length);


function focus(){
console.log('focus');
}

