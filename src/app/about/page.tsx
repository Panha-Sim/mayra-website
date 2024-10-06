
import "@/styles/aboutPage.css"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import FindingPerfectHome from "@/components/FindingPerfectHome"
import ValueAndPhilosophy from "@/components/ValueAndPhilosophy"

export default function Home(){
    return (
         <>
            <div className="gradient-about">
                <Nav/>
                <FindingPerfectHome/>
            </div>
            <ValueAndPhilosophy/>
            <Footer/>
        </>
    )
}