import React from "react";
import Profile from "../../assets/photo.jpg"
import {Link} from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa";
import "./home.css"

const Home = () => {
    return (
        <section className='home section grid'>
            <img src={Profile} alt='' className='home__img'/>

            <div className='home__content'>
                <div className={'home__data'}>
                    <h1 className={'home__title'}>
                        <span>I'm Sakshi Wadaskar.</span>
                        Software Developer
                    </h1>
                    <p className={'home__description'}>
                        I'm a passionate full-stack software engineer with a knack for turning complex problems into
                        elegant solutions. With a strong foundation in both front-end and back-end technologies,
                        I thrive on crafting intuitive user interfaces and developing robust server-side logic.
                        Explore my work and see how I bring ideas to life through code.
                    </p>

                    <Link to='/about' className='button'>
                        More About Me
                        <span className={'button__icon'}><FaArrowRight/>
                        </span>
                    </Link>
                </div>
            </div>

            <div className={'color__block'}>

            </div>
        </section>
    )

}

export default Home