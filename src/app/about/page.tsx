
import "@/styles/aboutPage.css"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import FindingPerfectHome from "@/components/FindingPerfectHome"
import ValueAndPhilosophy from "@/components/ValueAndPhilosophy"
import LetsWorkTogether from "@/components/LetsWorkTogether"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About Mayra Messer | Your Partner in Finding the Perfect Home',
    description: 'Discover Mayra Messer’s passion for helping families find their dream homes. A bilingual real estate agent, she values tenacity and honesty in every transaction, ensuring seamless communication in Phoenix and Goodyear.',
    keywords: 'real estate agent, Phoenix real estate, Goodyear real estate, bilingual real estate agent, home buying, tenacity in real estate, honest real estate agent, Mayra Messer',
}


export default function Home(){
    return (
         <>
            <div className="gradient-about">
                <Nav/>
                <FindingPerfectHome/>
            </div>
            <ValueAndPhilosophy/>
            <LetsWorkTogether/>
            <Footer/>
        </>
    )
}