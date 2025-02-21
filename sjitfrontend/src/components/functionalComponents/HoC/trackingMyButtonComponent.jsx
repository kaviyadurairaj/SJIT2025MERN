
const trackingMyButtonCom=(Component)=>{
    return(props)=>{
        const handleClick=()=>{
            alert("The tracking info on clicking this button",props.trackingInfo)
        };
        return(
            <form onClick={handleClick}>
                Email:<input type="text"/><br/><br/>
                Password:<input type="text"/><br/><br/>
                 <Component {...props}/>
            </form>

            )
    }
}
export default  trackingMyButtonCom;