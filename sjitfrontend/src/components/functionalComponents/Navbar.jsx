
import "../../css/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar=()=>{
   return(
    <header>
    <nav>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
        <li><Link to='/Login'>Login</Link></li>
        <li><Link to='/Gallery'>Gallery</Link></li>
        <div>
        <span style={{color:"white"}}>Hooks</span>
        <ol>
        <li><Link to='/use-state'>useState</Link></li>
        <li><Link to='/use-effect'>useEffect</Link></li>
        </ol>
        </div>
    </nav>
    </header>
   );
};
export default Navbar;