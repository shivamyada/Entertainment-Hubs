import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Headers from './header/Header'
import About from "./pages/About";
import Login from "./pages/Login";
import Home from "./pages/Home";

export default function Allpages(){
    return <BrowserRouter>
    <Headers/>
    <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/about' element ={<About/>} />
        <Route path='/Login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
}