import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Login from './Pages/Login'
import Signup from './Pages/Signup';


function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
