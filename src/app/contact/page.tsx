import Nav from "@/components/Nav"
import "@/styles/contact.css"
import Image from "next/image"
import equalHousing from "@/assets/Equal Housing Opportunity white.svg"
import MLSIcon from "@/assets/MLS white.svg"
import mapPin from "@/assets/map-pin 1.svg"
import phoneIcon from "@/assets/phone 1.svg"
import Button from "@/controls/Button"

export default function Contact() {
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
                <form className="form">
                    <h1>Let's Connect</h1>
                    <div className="form-input">
                        <div className="row-input">
                            <div className="input-name d-flex flex-column">
                                <label>FIRST NAME:</label>
                                <input type="firstName" placeholder="First Name"></input>
                            </div>
                            <div className=" input-name d-flex flex-column">
                                <label>LAST NAME:</label>
                                <input type="lastName" placeholder="Last Name"></input>
                            </div>
                        </div>
                        
                        <div className="d-flex flex-column">
                            <label>EMAIL:</label>
                            <input type="text" placeholder="you@email.com"></input>
                        </div>

                        <div className="d-flex flex-column">
                            <label>PHONE NUMBER:</label>
                            <input type="number" placeholder="+1 (555) 000-0000"></input>
                        </div>

                        <div className="d-flex flex-column">
                            <label>SUBJECT:</label>
                            <input type="text" placeholder="Subject"></input>
                        </div>

                        <div className="d-flex flex-column">
                            <label>Message:</label>
                            <textarea className="message-input" placeholder="Leave me a message..."></textarea>
                        </div>
                    </div>
                    <Button className="form-button" type="primary" bgColor="#132836" name="Send Message"/>
                </form>
                
            </div>

        </div>
        </>
    )
}