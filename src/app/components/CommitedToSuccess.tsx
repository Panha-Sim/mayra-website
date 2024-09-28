import "../styles/CommitedToSuccess.css"
import Button from "./Button"

export default function CommitedToSuccess(){
    return(
        <>
        <section className="gradient">
            <div className="container">
                <div className="row justify-content-between commited-to-success-container">
                    <div className="col-lg-12 col-xl-6 d-flex flex-column justify-content-center commited-to-success-text">
                        <h1>COMMITED TO YOUR SUCCESS</h1>
                        <p>I am dedicated to providing exceptional professionalism and expertise in guiding you through your real estate journey. My commitment is to support you in achieving your broader life goals with precision and care. Whether navigating the complexities of buying, selling, or relocating, my focus is on delivering a sophisticated and seamless experience tailored to your unique needs and aspirations.</p>
                        <Button slug="contact" name="VIEW LISTING" type="primary"/>
                    </div>
                    <div className="col-lg-12 col-xl-6 mayra-picture"></div>
                </div>
            </div>
        </section>
        </>
    )
}