
import Nav from "@/components/Nav"
import "@/styles/policy.css"

export default function PrivacyPolicy() {
    return (
        <>
            <section className="gradient-nav">
                <Nav />
            </section>
            <div className="container mb-5 mt-5">

                <div className="privacy-policy-title-container">
                    <h1 className="privacy-policy-title">Privacy Policy</h1>
                    <p className="text-body-dark">Last Updated 10/26/2024</p>
                </div>

                <div className="introduction mt-5">
                    <h3 className="text-heading-dark">Introduction</h3>
                    <p className="text-body-dark">respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your information when you fill out our contact form on our website. By using our website and providing your information, you agree to the terms outlined in this policy.</p>
                </div>
                <div className="introduction mt-4">
                    <h3 className="text-heading-dark">Information Collection</h3>
                    <p className="text-body-dark">I collect personal information such as your name, email address, phone number, and any other details you voluntarily provide when you contact me or fill out forms on my website. This information is collected solely to communicate with you regarding your real estate needs.</p>
                </div>
                <div className="introduction mt-4">
                    <h3 className="text-heading-dark">Use of Information</h3>
                    <p className="text-body-dark">I may use the information you provide for the following purposes:</p>
                    <ul className="text-body-dark">
                        <li>To respond to your inquiries and provide the services you requested.</li>
                        <li>To contact you regarding properties, real estate opportunities, or other relevant services.</li>
                        <li>To send important updates and notifications related to real estate.</li>
                    </ul>
                </div>
                <div className="introduction mt-4">
                    <h3 className="text-heading-dark">Information Sharing</h3>
                    <p className="text-body-dark">I do not share, sell, or rent your personal information to third parties. The information you provide is used exclusively by me to better serve you.</p>
                </div>
                <div className="introduction mt-4">
                    <h3 className="text-heading-dark">Data Protection</h3>
                    <p className="text-body-dark">I take reasonable precautions to protect your personal information from unauthorized access or misuse. However, no method of transmission over the internet is completely secure, and I cannot guarantee absolute security.</p>
                    <p className="text-body-dark">You have the right to:</p>
                    <ul className="text-body-dark">
                        <li>Request access to the personal information I hold about you.</li>
                        <li>Request correction or updates to your personal information.</li>
                        <li>Request deletion of your personal information, unless I am required by law to retain it.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}