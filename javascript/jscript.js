function myFunction(){
console.log("Welcome All");
// let u=kkkk;
// alert(u)
let o = 20;
let d = 22;
let t =30;
if(o<d || d<t  ){
//20<22=true
//20>22=false
//o<d && d<t =
// 20<22 && 22<30  && 22>30
// true && true && false
// true && false
// false
console.log('in if block');

}
 else if(o<d && d>t){
console.log('in if else block');
}
 if(o<d && d<t){
    console.log('in if else block 2');
}


else{
  console.log('in else block');  
}

}
var y=60;
const z = 50;
function scope(){
    let x=70;
    if(true){

    }
}
//console.log(x);
console.log(y);
z=90;
console.log(z);