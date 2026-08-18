import React from "react";
import Profile from "../../assets/photo.jpg"
import {Link} from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa";
import HomeChatPanel from "../../components/HomeChatPanel.jsx";
import "./home.css"

const Home = () => {
    return (
        <section className='home section container grid'>
            <div className={'home__data'}>
                <div className={'home__byline'}>
                    <img src={Profile} alt='' className='home__avatar'/>
                    <span className={'home__eyebrow'}>Software Engineer · AI Systems</span>
                </div>
                <h1 className={'home__title'}>
                    Hello, I'm <span>Sakshi Wadaskar</span>
                </h1>
                <p className={'home__description'}>
                    I build production AI systems and full-stack applications — from agentic LLM pipelines
                    to distributed backend infrastructure. Explore my work below, or ask my AI assistant
                    anything about my experience.
                </p>

                <Link to='/about' className='button'>
                    More About Me
                    <span className={'button__icon'}><FaArrowRight/>
                    </span>
                </Link>
            </div>

            <HomeChatPanel/>
        </section>
    )

}

export default Home
