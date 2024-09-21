import "../styles/nav.css"
import Button from "./Button";

export default function Nav(){
    return(
        <>
            <nav className="container-xxl d-flex justify-content-between">
                <h1>Mayra</h1>

                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <Button name="LET'S CONNECT" type="primary"></Button>
                </ul>

            </nav>
        </>
    );
}