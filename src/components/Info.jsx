import React from 'react'
import {personalInfo} from "../data.jsx";

const Info = () => {
    return (
        <>
            {personalInfo.map(({icon, title, description}, index) => {
                return (
                    <li className={"info__item"} key={index}>
                        <span className={"info__icon"}>{icon}</span>
                        <span className={"info__text"}>
                            <span className={"info__title"}>{title}</span>
                            <span className={"info__description"}>{description}</span>
                        </span>
                    </li>
                )
            })}
        </>
    )
}

export default Info
