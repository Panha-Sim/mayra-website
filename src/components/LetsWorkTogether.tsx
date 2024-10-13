
import Button from "@/controls/Button"
import "@/styles/LetsWorkTogether.css"

export default function LetsWorkTogether() {
    return(
        <section className="gradient-about lets-work-together-container">
            <div className="container">
                <div className="row">
                    <div className="work-together-text">
                        <h1>LET’S GET TO WORK TOGETHER</h1>
                        <p>Ready to turn your real estate dreams into reality? With years of experience volunteering in my children's school PTA and helping families with income taxes, I've learned the true value of communication and dedication. Partner with me, and I'll bring the same care and responsibility to make every step of your journey seamless and successful. Let's make it happen!</p>
                        <Button name="GET IN TOUCH" slug="contact"/>
                    </div>
                </div>
            </div>
        </section>
    )
}