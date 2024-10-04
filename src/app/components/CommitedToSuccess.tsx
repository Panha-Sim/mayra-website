import "../styles/CommitedToSuccess.css"
import Image from 'next/image';
import MayraPortrait from "../assets/mayra.png"

import Button from "./Button"

export default function CommitedToSuccess(){
    return(
        <>
        <section className="gradient">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12 col-xl-6 commited-to-success-container">

                        <div className="commited-to-success-text">
                            <h1>COMMITED TO YOUR SUCCESS</h1>
                            <p>I am dedicated to providing exceptional professionalism and expertise in guiding you through your real estate journey. My commitment is to support you in achieving your broader life goals with precision and care. Whether navigating the complexities of buying, selling, or relocating, my focus is on delivering a sophisticated and seamless experience tailored to your unique needs and aspirations.</p>
                            <Button slug="contact" name="VIEW LISTING" type="primary"/>
                        </div>

                    </div>

                    <div className="col-lg-12 col-xl-6 mayra-portrait-container ">

                        <Image
                        className="mayra-picture"
                        priority
                        src={MayraPortrait}
                        alt="West USA LOGO"
                        />

                    </div>
                </div>

            </div>
        </section>
        </>
    )
}