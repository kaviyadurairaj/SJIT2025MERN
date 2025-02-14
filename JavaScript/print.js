console.log("hello")
 var a=10 
 const b=true
 let c="hello"
 console.log(typeof(a),b,c)
 a="good"
 console.log(a,b,c)
 c=false 
 //secondary datatypes
 array=[1,6,"abc",true]
 console.log(array[0]);
 console.log(array[1]);
 console.log(array)
 //objects
 //first type of object declaration
 object1={
    "firstname":"st.josephs",
    "lastname":"institute of technology",
    "dept":["cse","it","ads"],
    "training":"MERN"
 }
 console.log(object1)
 console.log(object1.dept)
 
 //second way
 object2={}
    object2["firstname"]="st.josephs"
    object2["lastname"]='institute of technology'
    object2["dept"]=["cse","it","ads"]
    object2["training"]="MERN"
 
 console.log(object2)
 //third way
 object3=new Object()
 console.log(object3);
 object3.training="mern"
 object3.depts=["cse","it"]
 console.log(object3);
 set=new Set();
 set.add("hello")
 console.log(set);
 set.add("hello")
 console.log(set)
 