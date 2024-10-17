
'use client'

import "@/styles/SearchBar.css"
import { useState } from "react"
import Button from "./Button";

export default function SearchBar(props:any){

    const [query, setQuery] = useState("");

    const handleInputChange= (event:any) => {
        setQuery(event.target.value)
        console.log(event.target.value);
    }

    return(
        <>
        <div className="search-bar-container">
            <input
            type="text"
            className="search-input"
            placeholder={"Search Properties"}
            onChange={handleInputChange}
            />

            <Button type="primary"
            border="none"
            borderColor="var(--color-heading-light)" 
            color="var(--color-heading-light)" 
            bgColor="#132836"
            name="search"/>
        </div>
        </>
    )
}