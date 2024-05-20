import React, {useState} from "react";
import emailjs from "emailjs-com";
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

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form dataaa:-------------------------------------------------" , formData.name, formData.message, formData.email)

        emailjs.send(
            'service_0n5tmjd',
            'template_nkx4o88',
            formData,
            '98UXAKgVig_6mnA8S'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }).catch((err) => {
            console.log('FAILED...', err);
        });

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    };

    return (
        <section className={"contact section"}>
            <h2 className={"section__title"}>
                Get In <span>Touch!</span>
            </h2>

            <div className={".contact__container container grid"}>
                <div className={"contact__data"}>
                    <h3 className={"contact__title"}> Let's have a quick chat!</h3>
                    <p className={"contact__description"}>
                        I'm eager to connect and explore internship and co-op opportunities.
                        As a Master's student in Computer Software Engineering, I am excited to contribute and grow
                        professionally.
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
                        <a href={"https://www.instagram.com/heyimsakshi"} className={"contact__social-link"}>
                            <FaInstagram/>
                        </a>
                    </div>

                </div>

                <form action={""} className={"contact_form"} onSubmit={handleSubmit}>
                    <div className={"form__input-group"}>
                        <div className={"form__input-div"}>
                            <input type={"text"}
                                   placeholder={'Your Name'}
                                   className={"form__control"}

                                   value={formData.name}
                                   onChange={handleChange}
                                   required
                                   name="name"
                            />
                        </div>

                        <div className={"form__input-div"}>
                            <input type={"email"}
                                   name="email"
                                   placeholder={'Your Email'}
                                   className={"form__control"}
                                   value={formData.email}
                                   onChange={handleChange}
                                   required
                            />
                        </div>

                        <div className={"form__input-div"}>
                            <input type={"text"}
                                   placeholder={'Your Subject'}
                                   className={"form__control"}

                                   name="subject"
                                   value={formData.subject}
                                   onChange={handleChange}
                                   required
                            />
                        </div>
                    </div>

                    <div className={"form__input-div"}>
                            <textarea placeholder={"Your Message"}
                                      className={"form__control textarea"}

                                      name="message"
                                      value={formData.message}
                                      onChange={handleChange}
                                      required
                            >
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