import React from 'react'
import {stats} from "../data.jsx";
import parse from 'html-react-parser';

const Stats = () => {
    return (
        <>
            {stats.map(({icon, no, title},  index) => {
                return (
                    <div className={"stats__box"} key={index}>
                        <span className={"stats__icon"}>{icon}</span>
                        <h3 className={"stats__no"}>{no}</h3>
                        <p className={"stats__title"}>{parse(title)}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Stats
