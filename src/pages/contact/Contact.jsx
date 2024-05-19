import React from "react";
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";

import {FiSend} from "react-icons/fi";
import "./contact.css"

const Contact =() => {
    return(
        <section className={"contact section"}>
            <h2 className={"section__title"}>
                Get In <span>Touch!</span>
            </h2>

            <div className={".contact__container container grid"}>
                <div className={"contact__data"}>
                    <h3 className={"contact__title"}> Let's have a quick chat!</h3>
                    <p className={"contact__description"}>
                        I'm eager to connect and explore internship and co-op opportunities.
                        As a Master's student in Computer Software Engineering, I am excited to contribute and grow professionally.
                        Please feel free to reach out to discuss potential opportunities.
                    </p>

                    <div className={"contact__info"}>
                        <div className={"info__item"}>
                            <FaEnvelopeOpen className={"info__icon"}/>
                            <div>
                                <span className={"info__title"}>Mail me </span>
                                <h4 className={"info__description"}>wadaskar.s@northeastern.edu</h4>
                            </div>
                        </div>

                        <div className={"info__item"}>
                            <FaPhoneSquareAlt className={"info__icon"}/>
                            <div>
                                <span className={"info__title"}>Call me </span>
                                <h4 className={"info__description"}>+1 857 800 4265</h4>
                            </div>
                        </div>
                    </div>

                    <div className={"contact__socials"}>
                        <a href={"https://github.com/sakshiwadaskar"} className={"contact__social-link"}>
                            <FaGithub/>
                        </a>
                        <a href={"https://www.linkedin.com/sakshiwadaskar"} className={"contact__social-link"}>
                            <FaLinkedin/>
                        </a>
                        <a href={"https://www.instagram.com/sakshiwadaskar"} className={"contact__social-link"}>
                            <FaInstagram/>
                        </a>
                    </div>

                </div>

                <form action={""} className={"contact_form"}>
                    <div className={"form__input-group"}>
                        <div className={"form__input-div"}>
                            <input type={"text"}
                                   placeholder={'Your Name'}
                                   className={"form__control"}
                            />
                        </div>

                        <div className={"form__input-div"}>
                            <input type={"email"}
                                   placeholder={'Your Email'}
                                   className={"form__control"}
                            />
                        </div>

                        <div className={"form__input-div"}>
                            <input type={"text"}
                                   placeholder={'Your Subject'}
                                   className={"form__control"}
                            />
                        </div>
                    </div>

                        <div className={"form__input-div"}>
                            <textarea placeholder={"Your Message"}
                                className={"form__control textarea"}>
                            </textarea>
                        </div>

                    <button className={"button"}>
                        Send Message
                        <span className={"button__icon contact__button-icon"}>
                            <FiSend/>
                        </span>
                    </button>
                </form>
            </div>
        </section>
    )
}
export default Contact;