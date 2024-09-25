import "../styles/hero.css"
import Button from "./Button"

export default function Hero() {
    return(
        <>
            <div className="container">
                <div className="hero">

                    <h1>Where Your Home Journey Begins</h1>
                    <p>Expert Real Estate Guidance in Phoenix—Bilingual Support, Local Insight, and a Personal Touch to Every Journey</p>

                    <div className="button-wrapper">
                        <Button name="VIEW LISTINGS" type="primary"/> 
                        <Button name="LET'S CONNECT" type="secondary"/>
                    </div>

                </div>
            </div>
        </>
    )
}