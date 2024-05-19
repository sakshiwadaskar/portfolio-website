import React from "react";
import Profile from  "../../assets/photo.jpg"
import {Link} from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const Home =() => {
    return (
        <section className='home section grid'>
            <img src={Profile} alt='' className='home__img'/>

            <div className='home__content'>
                <div className={'home__data'}>
                    <h1></h1>
                </div>
            </div>
        </section>
    )

}

export default Home