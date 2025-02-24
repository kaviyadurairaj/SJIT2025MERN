
import "../../css/Navbar.css";
import { Link } from 'react-router-dom';
import { useState } from "react";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const [dropdownVisible2, setDropdownVisible2] = useState(false);


  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
          <li><Link to='/Login'>Login</Link></li>
          <li><Link to='/SignUp'>SignUp</Link></li>
          <li><Link to='/Gallery'>Gallery</Link></li>
          <li><Link to='/HoC'>HoC</Link></li>
          <li className="hooks-container">
            <span 
              style={{ color: "white", cursor: "pointer" }} 
              onClick={() => setDropdownVisible(!dropdownVisible)}//event handling
            >
              Hooks 
            </span>

            {dropdownVisible && (
              <ol>
                <li><Link to='/use-state'>useState</Link></li>
                <li><Link to='/use-effect'>useEffect</Link></li>
                <li><Link to='/use-effect-api'>useEffectAPI</Link></li>
                <li><Link to='/use-ref'>UseRef</Link></li>
                <li><Link to='/use-memo'>UseMemo</Link></li>
                <li><Link to='/use-callback'>UseCallback</Link></li>
                <li><Link to='/use-memoize'>UseMemoize</Link></li>
              </ol>
            )}
          </li>
          <li className="Memo-container">
            <span 
              style={{ color: "white", cursor: "pointer" }} 
              onClick={() => setDropdownVisible1(!dropdownVisible1)}//event handling
            >
              Memoization 
            </span>

            {dropdownVisible1 && (
              <ol>
                <li><Link to='memo'>Memo</Link></li>
                <li><Link to='lazyload'>LazyLoading</Link></li>
                <li><Link to='num'>NumFile</Link></li>
              </ol>
            )}
          </li>
          <li className="Context-container">
            <span 
              style={{ color: "white", cursor: "pointer" }} 
              onClick={() => setDropdownVisible2(!dropdownVisible2)}
            >
              PropsDrilling
            </span>

            {dropdownVisible2 && (
              <ol>
                <li><Link to='coe'>CoE</Link></li>
                <li><Link to='exam'>Exam</Link></li>
                <li><Link to='faculty'>Faculty</Link></li>
                <li><Link to="student">StudentResults</Link></li>
                <li><Link to="stud">Student</Link></li>
              </ol>
            )}
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;



