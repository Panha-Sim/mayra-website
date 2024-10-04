
import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import ProfessionalServices from "@/components/ProfessionalServices"
import CommitedToSuccess from "@/components/CommitedToSuccess"
import Footer from "@/components/Footer"
import "@/styles/home.css"

export default function Home(){
    return (
         <>
            <div className="hero-background">
                <Nav/>
                <Hero/>
            </div>
            <ProfessionalServices/>
            <CommitedToSuccess/>
            <Footer/>
        </>
    )
}