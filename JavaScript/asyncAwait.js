/*async function asAw(){
    var a=15
    setTimeout(function(){
        console.log("hello")
    },5000)

console.log(await a)
}
console.log(asAw().then((res)=>console.log(res)))
console.log(asAw())
asAw().then((res)=>{
console.log(res);
}).catch((res)=>{
    console.log(res);
})
*/

// Instagram console demo for post,like,comment,share
likeCode=async()=>{
    return new Promise((likePost)=>{
        likePost("Liked the created post successfully!")
    },5000);
}
commentCode=async()=>{
    return new Promise((commentPost)=>{
        commentPost("Commented on the created post successfully!")
    },5000);
}
shareCode=async()=>{
    return new Promise((sharePost)=>{
        sharePost("Shared the created post successfully!")
    },5000);
}
async function postCode()
{
    var post=new Promise(createPost=>{
        setTimeout(()=>{
            createPost("Post created successfully!")
        },5000);
    })
    console.log(await post)
    console.log(await likeCode());
    console.log(await commentCode());
    console.log(await shareCode());
}
postCode()
