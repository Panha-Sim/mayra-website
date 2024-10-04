
"use client"

import "../styles/nav.css"
import Button from "../controls/Button";
import Image from 'next/image';
import HamburgerSVG from "../assets/Hamburger.svg"
import { useState } from "react";
import Link from 'next/link'
import Hamburger from 'hamburger-react'


export default function Nav(){
    const [isToggle, setToggle] = useState(false);
    const toggleHamburger = () => {
        setToggle(!isToggle);
        if(!isToggle){
            document.documentElement.style.setProperty('--allow-scroll', 'hidden');
        } else {
            document.documentElement.style.setProperty('--allow-scroll', 'auto');
        }
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

                <ul className="hamburger hamburger-icon">
                    <Hamburger
                    onToggle={toggleHamburger}
                    size={24}
                    toggled={isToggle}
                    />
                </ul>

                <nav className={`nav-popup ${isToggle?"active":""}`}>
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
                </nav>

            </nav>
        </>
    );
}