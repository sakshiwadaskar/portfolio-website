import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Portfolio from "./pages/portfolio/Portfolio.jsx";
import Contact from "./pages/contact/Contact.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='portfolio' element={<Portfolio/>}/>
                <Route path='contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
