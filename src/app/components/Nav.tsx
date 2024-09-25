
"use client"

import "../styles/nav.css"
import Button from "./Button";
import Image from 'next/image';
import Hamburger from "../assets/Hamburger.svg"
import { useState } from "react";

export default function Nav(){
    const [isToggle, setToggle] = useState(false);

    const toggleHamburger = () => {
        setToggle(!isToggle);
        console.log(isToggle);
    }

    return(
        <>
            <nav className="container d-flex justify-content-between">
                <h1>Mayra</h1>

                <ul className="list">
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <Button name="LET'S CONNECT" type="primary"></Button>
                </ul>
                <ul className="hamburger">
                    <Image
                    onClick={toggleHamburger}
                    className="hamburger-icon row"
                    priority
                    src={Hamburger}
                    alt="Follow us on Twitter"
                    />
                </ul>

                {isToggle && (
                    <div className="nav-popup">
                        {/* <ul className="popup-list">
                            <li>HOME</li>
                            <li>ABOUT</li>
                            <Button name="LET'S CONNECT" type="primary" />
                        </ul> */}
                    </div>
                )}

            </nav>
        </>
    );
}