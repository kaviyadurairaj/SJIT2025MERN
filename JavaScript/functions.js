function demoFunction(){
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