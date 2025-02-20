import Home from './components/functionalComponents/Home.jsx';
import About from './components/functionalComponents/About.jsx';
import Contact from './components/functionalComponents/Contact.jsx';
import Gallery from './components/functionalComponents/Gallery.jsx';
import Login from './components/functionalComponents/login.jsx';
import SignUp from './components/functionalComponents/SignUp.jsx';
import Navbar from './components/functionalComponents/Navbar.jsx';
import UseEffect from './components/functionalComponents/Hooks/useEffect.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UseEffectAPI from './components/functionalComponents/Hooks/UseEffectAPI.jsx';


function App() {
  return (
    <main>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home properties="hello" sjit="everyone" />}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Gallery' element={<Gallery/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/use-state' element={<useState/>}/>
        <Route path='/use-effect' element={<UseEffect/>} />
        <Route path='/use-effect-api'  element={<UseEffectAPI/>}/>
      </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;



/*function App() {
  return (
    <div>
      <h1>Welcome All</h1><br/>
      <hr className="custom-line" />
      <p>The topic is about REACT</p><hr/>

    </div>
  );
}

export default App;
*/


