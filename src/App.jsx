import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Themes from "./components/Themes.jsx"
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Portfolio from "./pages/portfolio/Portfolio.jsx";
import Contact from "./pages/contact/Contact.jsx";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Themes/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='portfolio' element={<Portfolio/>}/>
                <Route path='contact' element={<Contact/>}/>
            </Routes>
            <div>
                <footer>
                    <p>&copy; 2024 Sakshi Wadaskar</p>
                    <div className={"contact__socials"}>
                        <a href={"https://github.com/sakshiwadaskar"} className={"contact__social-link"}>
                            <FaGithub/>
                        </a>
                        <a href={"https://www.linkedin.com/sakshiwadaskar"} className={"contact__social-link"}>
                            <FaLinkedin/>
                        </a>
                        <a href={"https://www.instagram.com/heyimsakshi"} className={"contact__social-link"}>
                            <FaInstagram/>
                        </a>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    )
}

export default App
