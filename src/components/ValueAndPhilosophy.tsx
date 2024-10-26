import "@/styles/ValueAndPhilosophy.css"

export default function ValueAndPhilosophy(){
    return(
        <section className="container value-and-philosophy-container">

            <div className="row justify-content-center">
                <div className="values-philosophy-text">
                    <h1>VALUES AND PHILOSOPHY</h1>
                    <p>My main objective in life is to acquire as much knowledge as possible to help my family and the community live a better life. Tenacity and honesty are the virtues that I uphold in myself to achieve my goals.</p>
                </div>
            </div>

            <div className="row">
                <div className="tenacity-honesty-container">

                    <div className="tenacity-honesty-card">
                        <h1>TENACITY</h1>
                        <p>Real estate transactions can be complex and challenging, but I approach each one with determination and resilience. I am committed to overcoming obstacles and finding solutions that work for my clients. My tenacity ensures that even in difficult markets or situations, my clients can achieve their goals with confidence.</p>
                    </div>

                    <div className="tenacity-honesty-card">
                        <h1>HONESTY</h1>
                        <p>In every transaction and interaction, I prioritize honesty and transparency. Real estate decisions are among the most significant in a person&apos;s life, and I am dedicated to ensuring that my clients feel fully informed and confident in their choices. I strive to build lasting relationships based on mutual trust.</p>
                    </div>

                </div>
            </div>

        </section>
    )
}