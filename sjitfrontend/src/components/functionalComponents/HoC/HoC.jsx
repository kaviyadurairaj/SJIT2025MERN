import Button from "./Button"
import trackingMyButtonCom from "./trackingMyButtonComponent";
const HoC=()=>{
    const ButtonTrack=trackingMyButtonCom(Button)
    return(
        <div>
            <h1>Welcome to higher order components(HoC)</h1>
                       <ButtonTrack value={"Login"} trackingInfo={{"CustID":"hello","password":"password"}}/>
        </div>
    )

}
export default HoC;
