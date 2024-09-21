import "../styles/CommitedToSuccess.css"
import Button from "./Button"

export default function CommitedToSuccess(){
    return(
        <>
        <div className="gradient">
            <div className="container-xxl">
                <div className="commited-to-success-container">

                    <div className="commited-to-success-text">
                        <h1>COMMITED TO YOUR SUCCESS</h1>
                        <p>I am dedicated to providing exceptional professionalism and expertise in guiding you through your real estate journey. My commitment is to support you in achieving your broader life goals with precision and care. Whether navigating the complexities of buying, selling, or relocating, my focus is on delivering a sophisticated and seamless experience tailored to your unique needs and aspirations.</p>
                        <Button name="VIEW LISTING" type="primary"/>
                    </div>

                    <div className="mayra-picture"></div>
                </div>
            </div>
        </div>
        </>
    )
}