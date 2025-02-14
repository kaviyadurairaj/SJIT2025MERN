// conditional Statement
if(10>5){
    console.log(true)
}
else{
    console.log(false)
}
//looping statements
/*
1.while
2.do...while
3.for(; ;)
4.forin
5.forEach
*/
array=[10,20,30,"abc",true,"hello",[10,20,30]]
for(i in array){
    console.log(i)
}
//for of loop 
array=[10,20,30,"abc",true,"hello",[10,20,30]]
object1={
    "firstname":"st.josephs",
    "lastname":"institute of technology",
    "dept":["cse","it","ads"],
    "training":"MERN"
 }
 for(i of array){
    console.log(i);
 }
 for(let value of Object.values(object1)){
    console.log(value);
 }

