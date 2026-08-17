import React from "react";
import Profile from "../../assets/photo.jpg"
import {Link} from 'react-router-dom';
import {FaArrowRight, FaRegCommentDots} from "react-icons/fa";
import {useChatBot} from "../../context/ChatBotContext.jsx";
import "./home.css"

const Home = () => {
    const {openChat} = useChatBot();

    return (
        <section className='home section grid'>
            <img src={Profile} alt='' className='home__img'/>

            <div className='home__content'>
                <div className={'home__data'}>
                    <h1 className={'home__title'}>
                        <span>Hello, I'm Sakshi Wadaskar</span>
                        <h4>Software Engineer</h4>
                    </h1>
                    <p className={'home__description'}>
                        I build production AI systems and full-stack applications — from agentic LLM pipelines
                        to distributed backend infrastructure. Explore my work below, or ask my AI assistant
                        anything about my experience.
                    </p>

                    <div className={'home__cta-group'}>
                        <Link to='/about' className='button'>
                            More About Me
                            <span className={'button__icon'}><FaArrowRight/>
                            </span>
                        </Link>

                        <button onClick={openChat} className='button button--outline'>
                            Ask My AI Assistant
                            <span className={'button__icon'}><FaRegCommentDots/>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className={'color__block'}>

            </div>
        </section>
    )

}

export default Home