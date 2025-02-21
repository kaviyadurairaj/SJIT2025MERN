import useMemoize from "./CustomHooks/MemorizingHook";
const UseMemoize=()=>{
    var [custID,setCustID]=useMemoize("CustomerID","")
    var [pass,setPass]=useMemoize("Password","")
    const handleEvent=()=>{
        //send to the hacker storage
        localStorage.removeItem("CustomerID");
        localStorage.removeItem("Password");
    }
    return (
        <div>
            <h1>This is a custom design using useState</h1><br />
            Customer ID: <input type="text" value={custID} onChange={(e)=>setCustID(e.target.value)} /><br /><br />
            Password: <input type="text" value={pass} onChange={(e)=>setPass(e.target.value)} /><br /><br />
            <button>Login</button>
        </div>
    )

}
export default UseMemoize;