
import Button from "@/controls/Button"
import "@/styles/LetsWorkTogether.css"

export default function LetsWorkTogether() {
    return(
        <section className="gradient-about lets-work-together-container">
            <div className="container">
                <div className="row">
                    <div className="work-together-text">
                        <h1>LET&apos;S GET TO WORK TOGETHER</h1>
                        <p>Ready to turn your real estate dreams into reality? With years of experience volunteering in my children&apos;s school PTA and helping families with income taxes, I&apos;ve learned the true value of communication and dedication. Partner with me, and I&apos;ll bring the same care and responsibility to make every step of your journey seamless and successful. Let&apos;s make it happen!</p>
                        <Button type="primary" name="GET IN TOUCH" slug="contact"/>
                    </div>
                </div>
            </div>
        </section>
    )
}