
import "@/styles/FindingPerfectHome.css"
import Button from "@/controls/Button";
import Image from "next/image";
import MayraPortrait from "@/assets/MayraPortrait2.png"

export default function FindingPerfectHome(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-xl-6 find-perfect-home-container">

                    <div className="find-perfect-home-text">
                        <h1>Your Partner in Finding the Perfect Home.</h1>
                        <p>Passionate about real estate and deeply committed to helping families find their dream homes, I'm here to guide you through every step of your residential journey. As a bilingual agent fluent in English and Spanish, I ensure clear communication throughout our partnership to achieve your goals.</p>
                        <Button slug="listings" name="VIEW LISTING"/>
                    </div>

                </div>
                <div className="col-lg-12 col-xl-6 image-container">

                    <Image
                    className="maryraPortrait"
                    priority
                    src={MayraPortrait}
                    alt="Mayra Portrait"
                    />

                </div>
            </div>
        </div>
        </>
    )
}