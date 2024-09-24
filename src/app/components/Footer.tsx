import "../styles/footer.css"
import Image from 'next/image';
import WestUSA from "../assets/WestUSA.svg"
import MLS from "../assets/MLS.svg"
import EqualHousingOpportunity from "../assets/Equal Housing Opportunity.svg"

export default function Footer(){
    return(
        <> 
        <div className="container">
            <div className="footer-container">
                <Image
                className="row mb-5"
                priority
                src={WestUSA}
                alt="Follow us on Twitter"
                />

                <div className="row mb-5 footer-info">
                    <div className="col-sm-6 col-xl-3 word-block first-word-block">
                        <h3 className="text-heading-dark mb-2">MAYRA MESSER</h3>
                        <p className="text-body-dark">(623) 707-7957</p>
                        <p className="text-body-dark">maymesser@gmail.com</p>
                    </div>
                    <div className="col-sm-6 col-xl-3 word-block ">
                        <h3 className="text-heading-dark mb-2">MAYRA MESSER</h3>
                        <p className="text-body-dark">2920 N. Litchfield Road, Suite #100 Goodyear, AZ 85395</p>
                    </div>
                </div>

                <p className="text-body-dark">WestUSA Realty® and the WestUSA Realty Logo are service marks licensed to WestUSA Realty LLC and used with permission. WestUSA Realty fully supports the principles of the Fair Housing Act and the Equal Opportunity Act. Each office is independently owned and operated. Any services or products provided by independently owned and operated offices are not provided by, affiliated with, or related to WestUSA Realty LLC nor any of its affiliated companies.</p>
                <div className="row mb-5">
                    <Image
                    className="col-1 SVGsize"
                    priority
                    src={EqualHousingOpportunity}
                    alt="Follow us on Twitter"
                    />
                    <Image
                    className="col-1 SVGsize"
                    priority
                    src={MLS}
                    alt="Follow us on Twitter"
                    />
                </div>

                <hr></hr>

            </div>

        </div>
        </>
    )
}