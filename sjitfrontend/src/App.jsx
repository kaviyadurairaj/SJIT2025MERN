import Home from './components/functionalComponents/Home.jsx';
import ClasscompEG from './components/ClassComponents/classcompEG.jsx';
import About from './components/functionalComponents/About.jsx';
import Contact from './components/functionalComponents/Contact.jsx';
import Gallery from './components/functionalComponents/Gallery.jsx';
import Login from './components/functionalComponents/login.jsx';
import SignUp from './components/functionalComponents/SignUp.jsx';
import Navbar from './components/functionalComponents/Navbar.jsx';

function App() {
  return (
    <main>
      <Navbar/><br/>
      <ClasscompEG /><br/>
      <hr/>
      <Home properties="hello" sjit="everyone" /><hr/>
      <About/><hr/>
      <Contact/><hr/>
      <Gallery/><hr/>
      <Login/><hr/>
      <SignUp/>
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


