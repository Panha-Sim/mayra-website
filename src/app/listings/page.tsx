'use client'

import "@/styles/PropertiesListing.css"
import SearchBar from "@/controls/SearchBar"
import Nav from "@/components/Nav"

export default function PropertiesListing() {
    return (
        <>
        <div className="gradient-nav">
            <Nav/>
        </div>
        <SearchBar/>
        </>
    )
}