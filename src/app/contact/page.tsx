
'use client'

import Nav from "@/components/Nav"
import "@/styles/contact.css"
import Image from "next/image"
import equalHousing from "@/assets/Equal Housing Opportunity white.svg"
import MLSIcon from "@/assets/MLS white.svg"
import mapPin from "@/assets/map-pin 1.svg"
import phoneIcon from "@/assets/phone 1.svg"
import Button from "@/controls/Button"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';


export default function Contact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isAgree, setIsAgree] = useState(false);
    const form = useRef();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        if (!isAgree) {
            console.log("please checked the box")
            return;
        }

        emailjs
        .sendForm('service_tjrdx9h', 'template_sj0v3wp', form.current, {
          publicKey: '_jjptQar7EEc8CMNI',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );

    }

    return(
        <>
        <section className="gradient-nav">
            <Nav/>
        </section>
        <div className="contact-container">

            <div className="contact-info">
                <div className="info-container">
                    <div className="info-card">
                        <h4 className="text-heading-light">Call me</h4>
                        <p className="text-body-light">Call me Mon-Sun from 7am to 8pm.</p>
                        <div className="address-container">
                            <Image
                            src={phoneIcon}
                            alt="map pin icon"
                            />
                            <p className="address text-body-light">(623) 707-7957</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <h4 className="text-heading-light">Visit Me</h4>
                        <p className="text-body-light">Chat with me in person at Goodyear by appointment</p>
                        <div className="address-container">
                            <Image
                            src={mapPin}
                            alt="map pin icon"
                            />
                            <p className="address text-body-light">2920 N. Litchfield Road, Suite #100 Goodyear, AZ 85395</p>
                        </div>
                    </div>
                    <div className="brief-description">
                        <p className="text-body-light">I'm here to assist you directly with your real estate needs! Whether you're buying, selling, or relocating, I offer personalized guidance every step of the way. Fill out the form below, and I'll be in touch to help you achieve your goals. Let's get started!</p>
                    </div>
                    <div className="info-footer">
                        <div className="footer-image-container">
                            <Image
                            src={equalHousing}
                            alt="equal housing opportunity icon"
                            />
                            <Image
                            src={MLSIcon}
                            alt="MLS icon"
                            />
                        </div>
                        <div className="footer-text-container">
                            <p className="text-heading-light">Mayra Messer</p>
                            <p className="text-body-light">Real Estate Agent</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-form">
                <form ref={form} onSubmit={handleSubmit} className="form">
                    <h1>Let's Connect</h1>
                    <div className="form-input">
                        <div className="row-input">
                            <div className="input-name d-flex flex-column">
                                <label>FIRST NAME:</label>
                                <input type="firstName" name="firstName" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}></input>
                            </div>
                            <div className=" input-name d-flex flex-column">
                                <label>LAST NAME:</label>
                                <input type="lastName" name="lastName" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}></input>
                            </div>
                        </div>
                        
                        <div className="d-flex flex-column">
                            <label>EMAIL:</label>
                            <input type="text" name="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)}></input>
                        </div>

                        <div className="d-flex flex-column">
                            <label>PHONE NUMBER:</label>
                            <input type="number" name="phoneNumber" placeholder="+1 (555) 000-0000" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}></input>
                        </div>

                        <div className="d-flex flex-column">
                            <label>SUBJECT:</label>
                            <input type="text" name="subject" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)}></input>
                        </div>

                        <div className="d-flex flex-column">
                            <label>Message:</label>
                            <textarea className="message-input" name="message" placeholder="Leave me a message..." value={message} onChange={e => setMessage(e.target.value)}></textarea>
                        </div>

                        <div className="d-flex align-items-center">
                            <input type="checkbox" onChange={e => setIsAgree(e.target.checked)}/>
                            <label className="mx-2">You agree to my <a href="/privacy-policy">privacy policy</a></label>
                        </div>
                    </div>
                    <Button className="form-button" type="submit" bgColor="#132836" name="Send Message"/>
                </form>
                
            </div>

        </div>
        </>
    )
}