import "../styles/hero.css"
import Button from "../controls/Button"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Mayra Messer Hero Section',
    description: 'Expert Real Estate Guidance in Phoenix—Bilingual Support, Local Insight, and a Personal Touch to Every Journey', 
    keywords: 'Phoenix real estate, buy home in Phoenix, real estate guidance, bilingual real estate, local real estate insight',
}


export default function Hero() {
    return(
        <>
            <section className="container">
                <div className="hero">

                    <h1>Where Your Home Journey Begins</h1>
                    <p>Expert Real Estate Guidance in Phoenix—Bilingual Support, Local Insight, and a Personal Touch to Every Journey</p>

                    <div className="button-wrapper">
                        <Button slug="listings" name="VIEW LISTINGS" type="primary"/> 
                        <Button slug="contact" name="LET'S CONNECT" type="secondary"/>
                    </div>

                </div>
            </section>
        </>
    )
}