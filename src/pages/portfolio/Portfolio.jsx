import React from "react";
import {portfolio} from "../../data.jsx";
import PortfolioItem from "../../components/PortfolioItem.jsx"
import "./portfolio.css"

const Portfolio =() => {
    return(
        <section className={"portfolio section"}>
            <h2 className={"section__title"}> My <span>Projects</span></h2>

            <div className={"portfolio__container container grid"}>
                {portfolio.map((item) => {
                    return <PortfolioItem key={item.id} {...item}/>
                })}
            </div>
            <p className={"section__details"}>

                Click on a card to view detailed information about the project.
            </p>
        </section>
    )
}
export default Portfolio