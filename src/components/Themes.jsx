import React, {useEffect, useState} from "react";
import {themes} from "../data.jsx";
import ThemeItem from "./ThemeItem.jsx";
import {FaCog} from "react-icons/fa"
import {BsSun, BsMoon} from "react-icons/bs"
import "./themes.css"
import themeItem from "./ThemeItem.jsx";

const getStorageColor = () => {
    let color = 'hsl(252, 35%, 52%)';
    if (localStorage.getItem('color')) {
        color = localStorage.getItem('color');
    }
    return color;
}

const Themes = () => {
    const [showSwitcher, setShowSwitcher] = useState(false);
    const [color, setColor] = useState(getStorageColor());
    const [theme, setTheme] = useState('light-theme');


    const changeColor = (color) => {
        setColor(color);
    };

    const toggleTheme = () => {
        if (theme==='light-theme'){
            setTheme('dark-theme');
        }
        else {
            setTheme('light-theme');
        }
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color);
        localStorage.setItem('color', color);
    }, [color]);

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    return (
        <div>
            <div className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>
                <div className={"style__switcher-toggler"} onClick={() =>
                    setShowSwitcher(!showSwitcher)}
                >
                    <FaCog/>
                </div>
                <div className={"theme-toggler"} onClick={toggleTheme}>
                    {theme === 'light-theme' ?  <BsMoon/> : <BsSun/>}
                </div>

                <h3 className={"style__switcher-title"}>
                    Style Switcher
                    <div className={"style__switcher-items"}>
                        {themes.map((theme, index) => {
                            return (
                                <ThemeItem key={index} {...theme} changeColor={changeColor}/>
                            )
                        })}
                    </div>
                    <div className={"style__switcher-close"} onClick={() =>
                        setShowSwitcher(!showSwitcher)}>&times;</div>
                </h3>
            </div>
        </div>

    )
}

export default Themes;