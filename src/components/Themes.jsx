import React, {useEffect, useState} from "react";
import {themes} from "../data.jsx";
import ThemeItem from "./ThemeItem.jsx";
import {FaCog} from "react-icons/fa"
import {BsSun, BsMoon} from "react-icons/bs"
import "./themes.css"
import themeItem from "./ThemeItem.jsx";

const Themes = () => {
    const [showSwitcher, setShowSwitcher] = useState(false);
    const [color, setColor] = useState('red');

    const changeColor = (color) => {
        setColor(color);
    };

    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color);
    }, [color]);

    return (
        <div>
            <div className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>
                <div className={"style__switcher-toggler"} onClick={() =>
                    setShowSwitcher(!showSwitcher)}
                >
                    <FaCog/>
                </div>
                <div className={"theme-toggler"}>
                    <BsMoon/>
                </div>

                <h3 className={"style__switcher-title"}>
                    Style Switcher
                    <div className={"style__switcher-items"}>
                        {themes.map((theme, index) => {
                            return (
                                <ThemeItem key={index} {...theme} changeColor = {changeColor} />
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