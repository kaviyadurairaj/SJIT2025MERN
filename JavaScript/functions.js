/*function demoFunction(){
    console.log("demo function")
}
function demoFunction1(){
    console.log("fuction without return type")
}
demoFunction()
demoFunction1()
function func(x){
    console.log("This is function with parameter without return type",x)
}
func(2)
function Func3(){
    return "This is function with return type"
}
console.log(Func3());
function testFunction4(x){
    return x+1
}
console.log("This is function with parameter with return type",testFunction4(5));
const add=function(a,b){
    return a+b;
}
console.log(add(2,4));
// Named function
const mul=function multiply(a,b){
    return a*b;
}
console.log(mul(5,5));
*/

//arrow function
var arrowfunction=()=>{
    console.log("arrow fucnction")
}
arrowfunction()
var testarrowfunction=()=>{
    console.log("this is arrow function");
}
testarrowfunction()

//Scoping
var a=10
console.log(a)
let c=10
{
     a=20;
    console.log(a)
    var b=30;
    console.log(b)
     letc=40; // if let is used it is just declared,it wont be printed as output.if c=40,it will print 40
    console.log(c);
     a=50;
     console.log(a);
}
console.log(a)
console.log(c)

/*let x=10
if(true){
    let x=20 //let declared inside a block can be accessed only inside the block
    console.log(x)
}
console.log(x)
*/
