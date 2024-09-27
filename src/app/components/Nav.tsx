
"use client"

import "../styles/nav.css"
import Button from "./Button";
import Image from 'next/image';
import Hamburger from "../assets/Hamburger.svg"
import { useState } from "react";
import Link from 'next/link'

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
                    <li role="none">
                        <Link href="/" role="menuitem">HOME</Link>
                    </li>
                    <li role="none">
                        <Link href="/about" role="menuitem">ABOUT</Link>
                    </li>
                    <li role="none">
                        <Button slug="contact" aria-expanded={isToggle ? "true" : "false"} aria-controls="nav-popup" name="LET'S CONNECT" type="primary" aria-label="Contact Us"></Button>
                    </li>
                </ul>

                <ul className="hamburger">
                    <Image
                    onClick={toggleHamburger}
                    className="hamburger-icon row"
                    priority
                    src={Hamburger}
                    alt="Open navigation menu"
                    />
                </ul>

                {isToggle && (
                    <div className="nav-popup">
                        <ul className="popup-list">
                            <li role="none">
                                <Link href="/" role="menuitem">HOME</Link>
                            </li>
                            <li role="none">
                                <Link href="/about" role="menuitem">ABOUT</Link>
                            </li>
                            <li role="none">
                                <Link href="/contact" role="menuitem">LET'S CONNECT</Link>
                            </li>
                        </ul>
                    </div>
                )}

            </nav>
        </>
    );
}