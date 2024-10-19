'use client'

import "@/styles/PropertiesListing.css"
import SearchBar from "@/controls/SearchBar"
import Nav from "@/components/Nav"
import PropertyCard from "@/components/PropertyCard"
import house from "@/assets/House.png"

export default function PropertiesListing() {
    return (
        <>
        <section className="gradient-nav">
            <Nav/>
        </section>
        <section className="container nav-section">
            <SearchBar/>
        </section>
        <section className="container property-card-container">
            <PropertyCard 
            image={house}
            price="$736,500"
            community="Sunset Ranch Community"
            address="10236 W PATRICK LN PEORIA, AZ85383"
            beds="3" 
            baths="3.5" 
            sqft="2,145"/>
        </section>
        </>
    )
}