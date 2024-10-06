
import Button from "@/controls/Button"
import "@/styles/LetsWorkTogether.css"

export default function LetsWorkTogether() {
    return(
        <section className="gradient-about lets-work-together-container">
            <div className="container">
                <div className="row">
                    <div className="work-together-text">
                        <h1>LET’S GET TO WORK TOGETHER</h1>
                        <p>Ready to turn your real estate dreams into reality? Partner with me, and together, I'll make every step of the journey seamless and successful. Let's make it happen!</p>
                        <Button name="GET IN TOUCH" slug="contact"/>
                    </div>
                </div>
            </div>
        </section>
    )
}