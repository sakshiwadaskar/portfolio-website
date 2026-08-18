import React from "react";
import {FiExternalLink} from "react-icons/fi";
import {recentBuilds} from "../../data.jsx";
import "./builds.css";

const Builds = () => {
    return (
        <section className={"builds section container"}>
            <span className={"section__eyebrow"}>03 — Latest Work</span>
            <h2 className={"section__title"}> Recent <span>Builds</span></h2>

            <div className={"builds__container container grid"}>
                {recentBuilds.map((build) => {
                    return (
                        <a
                            href={build.live}
                            target={"_blank"}
                            rel={"noreferrer"}
                            className={"build__card"}
                            key={build.id}
                        >
                            <div className={"build__media"}>
                                <img src={build.img} alt={build.title} className={"build__img"}/>
                            </div>
                            <div className={"build__body"}>
                                <h3 className={"build__title"}>{build.title}</h3>
                                <p className={"build__tagline"}>{build.tagline}</p>
                                <p className={"build__desc"}>{build.desc}</p>
                                <div className={"build__stack"}>
                                    {build.stack.map((tech) => (
                                        <span className={"build__tag"} key={tech}>{tech}</span>
                                    ))}
                                </div>
                                <span className={"build__live"}>
                                    <FiExternalLink/> View Live
                                </span>
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
};

export default Builds;
