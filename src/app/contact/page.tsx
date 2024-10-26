
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
    const [errors, setErrors] = useState<any>({});
    const [IsSubmitted, setIsSubmitted] = useState(false);
    const form = useRef();

    // Validate the input
    const validateForm = () => {
        const newErrors: any = {};
        if (!firstName) newErrors.firstName = "First name is required";
        if (!lastName) newErrors.lastName = "Last name is required";
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            newErrors.email = "Email is not valid";
        }
        if (!phoneNumber) newErrors.phoneNumber = "Phone number is required";
        if (!subject) newErrors.subject = "Subject is required";
        if (!message) newErrors.message = "Message is required";
        if (!isAgree) newErrors.isAgree = "You must agree to the privacy policy";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Form Submit Logic
    const handleSubmit = (e: any) => {
        e.preventDefault();

        // Check if form is valid 
        if (!validateForm()) {
            return; 
        }
        
        // Check if user checked the agree to the privacy policy or not.
        if (!isAgree) {
            console.log("please checked the box")
            return;
        }

        // Call email js api with the form input as a payload.
        emailjs
        .sendForm('service_u74k0r5', 'template_gkn9t6m', form.current, {
          publicKey: 'brOOp_amL-a2ZRdDn',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setIsSubmitted(true);

            // Clear the field
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhoneNumber("");
            setSubject("");
            setMessage("");
            setIsAgree(false);
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
        <div className="mt-5 d-flex justify-content-center container">
            {IsSubmitted && <div className="success-card">Thank you! Your message has been received. I will get back to you shortly.</div>}
        </div>
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
                {IsSubmitted && <div className="success-card-mobile">Thank you! Your message has been received. I will get back to you shortly.</div>}
                <form ref={form} onSubmit={handleSubmit} className="form">
                <h1>Let's Connect</h1>
                    <div className="form-input">
                        <div className="row-input">
                            <div className="input-name d-flex flex-column">
                                <label>FIRST NAME:</label>
                                <input className= {errors.firstName ? `border-red`: ""} type="firstName" name="firstName" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}></input>
                                {errors.firstName && <p className="error">{errors.firstName}</p>}
                            </div>
                            <div className=" input-name d-flex flex-column">
                                <label>LAST NAME:</label>
                                <input className= {errors.lastName ? `border-red`: ""} type="lastName" name="lastName" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}></input>
                                {errors.lastName && <p className="error">{errors.lastName}</p>}
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <label>EMAIL:</label>
                            <input className= {errors.email ? `border-red`: ""} type="text" name="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)}></input>
                            {errors.email && <p className="error"> {errors.email} </p>}
                        </div>

                        <div className="d-flex flex-column">
                            <label>PHONE NUMBER:</label>
                            <input className= {errors.phoneNumber ? `border-red`: ""} type="number" name="phoneNumber" placeholder="+1 (555) 000-0000" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}></input>
                            {errors.phoneNumber && <p className="error"> {errors.phoneNumber} </p>}
                        </div>

                        <div className=" d-flex flex-column">
                            <label>SUBJECT:</label>
                            <input className= {errors.subject ? `border-red`: ""} type="text" name="subject" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)}></input>
                            {errors.subject && <p className="error">{errors.subject}</p>}
                        </div>

                        <div className="d-flex flex-column">
                            <label>Message:</label>
                            <textarea className={`message-input ${errors.subject ? `border-red`: ""}`} name="message" placeholder="Leave me a message..." value={message} onChange={e => setMessage(e.target.value)}></textarea>
                            {errors.message && <p className="error"> {errors.message} </p>}
                        </div>

                        <div className="privacy-policy-checkbox">
                            <div className="d-flex align-items-center">
                                <input type="checkbox" onChange={e => setIsAgree(e.target.checked)} checked = {isAgree}/>
                                <label className="mx-2">You agree to my <a href="/privacy-policy">privacy policy</a></label>
                            </div>
                            {errors.isAgree && <p className="error"> {errors.isAgree} </p>}
                        </div>

                    </div>
                    <Button className="form-button" type="submit" bgColor="#132836" name="Send Message"/>
                </form>
                
            </div>

        </div>
        </>
    )
}