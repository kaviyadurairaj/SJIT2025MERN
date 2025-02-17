/*function sjit(){
    console.log("welcome")

}
function callbackeg(){
    console.log("wlecome back")
}
sjit("welcome to sjit",callbackeg())
*/
function formsubmission(message,cbfunc){
    if(cbfunc()){
    console.log(message)
    }
    else{
        console.log("form submission unsuccessful")
    }
}
function formvalidation(){
    console.log("form validaton successful")
    return false
}
formsubmission("form submitted succesfully",formvalidation)