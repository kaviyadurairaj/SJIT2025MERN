import Home from './components/functionalComponents/Home.jsx';
import About from './components/functionalComponents/About.jsx';
import Contact from './components/functionalComponents/Contact.jsx';
import Gallery from './components/functionalComponents/Gallery.jsx';
import Login from './components/functionalComponents/Login.jsx';
import SignUp from './components/functionalComponents/SignUp.jsx';
import Navbar from './components/functionalComponents/Navbar.jsx';
import UseEffect from './components/functionalComponents/Hooks/UseEffect.jsx';
import UseState from './components/functionalComponents/Hooks/UseState.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UseEffectAPI from './components/functionalComponents/Hooks/UseEffectAPI.jsx';
import UseRef from './components/functionalComponents/Hooks/UseRef.jsx';
import UseMemo from './components/functionalComponents/Hooks/UseMemo.jsx'
import UseCallback from './components/functionalComponents/Hooks/UseCallback.jsx'
import UseMemoize from './components/functionalComponents/Hooks/UseMemoize.jsx';
import HoC from './components/functionalComponents/HoC/HoC.jsx';
import Memo from './components/functionalComponents/Memoization/Memo.jsx';
import LazyLoad from './components/functionalComponents/Memoization/LazyLoadingAndSuspense.jsx';
import NumberFile from './components/functionalComponents/Memoization/NumberFile.jsx';
import StudentResults from './components/functionalComponents/ContextAPI/StudentResults.jsx';
import Faculty from './components/functionalComponents/ContextAPI/Faculty.jsx';
import Exam from './components/functionalComponents/ContextAPI/Exam.jsx';
import CoE from './components/functionalComponents/ContextAPI/CoE.jsx';
import Student from './components/functionalComponents/ContextAPI/Student.jsx';


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
        <Route path='/use-state' element={<UseState/>}/>
        <Route path='/use-effect' element={<UseEffect/>} />
        <Route path='/use-effect-api'  element={<UseEffectAPI/>}/>
        <Route path='/use-ref' element={<UseRef/>}/>
        <Route path='/use-memo' element={<UseMemo/>}/>
        <Route path='/use-callback' element={<UseCallback/>}/>
        <Route path='/use-memoize' element={<UseMemoize/>}/>
        <Route path='/hoc' element={<HoC/>}/>
        <Route path='/memo' element={<Memo/>}/>
        <Route path='/lazyload' element={<LazyLoad/>}/>
        <Route path='/num' element={<NumberFile/>}/>
        <Route path='/student' element={<StudentResults/>}/>
        <Route path='/faculty' element={<Faculty/>}/>
        <Route path='/exam' element={<Exam/>}/>
        <Route path='/coe' element={<CoE/>}/>
        <Route path='/stud' element={<Student/>}/>
    
      </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;





