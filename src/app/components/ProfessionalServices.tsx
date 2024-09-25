import "../styles/ProfessionalServices.css"

export default function ProfessionalServices() {
    return(
        <>
            <div className="container">
                <div className="professional-services-container">

                    <div className="professional-services-header">
                        <p className="top-subtitle">CRAFTING YOUR UNIQUE HOME JOURNEY</p>
                        <h1>PROFSSIONAL SERVICES</h1>
                        <p className="subtitle">Throughout my experience, I have been fortunate to reallocate families in Arizona, help first-time home buyers, or even help sell properties to families who are moving out of state.</p>
                    </div>

                    <div className=" professional-services-table">
                        <div className=" table-container">
                            <h1>RELOCATION ASSITANCES</h1>
                            <p>Simplify your move with expert guidance and seamless logistics. I ensure your transition to a new area is smooth and stress-free.</p>
                        </div>
                        <div className=" table-container">
                            <h1>FIRST TIME BUYER</h1>
                            <p>Navigate your first home purchase with confidence. I offer personalized support to help you find and secure your dream home.</p>
                        </div>
                        <div className=" table-container">
                            <h1>PROPERTY SALES</h1>
                            <p>Maximize your property’s value with our strategic sales services. I handle every detail to ensure a quick, successful sale.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}