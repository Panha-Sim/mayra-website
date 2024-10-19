'use client'

import "@/styles/PropertiesListing.css"
import SearchBar from "@/controls/SearchBar"
import Nav from "@/components/Nav"
import PropertyCard from "@/components/PropertyCard"
import houseList from "./HousingList.json";

export default function PropertiesListing() {
    // const house = require("@/assets/House.png")
    return (
        <>
        <section className="gradient-nav">
            <Nav/>
        </section>
        <section className="container nav-section">
            <SearchBar/>
        </section>
        <section className="container property-card-container">
            {
                houseList.houses.map((house, kedddy) => {
                    console.log(kedddy)
                    return(
                        <>
                        <i key={kedddy}>
                             <PropertyCard 
                                // image={houseImage}
                                price = {house.price}
                                community = {house.community}
                                address = {house.address}
                                beds = {house.beds} 
                                baths = {house.baths} 
                                sqft = {house.sqft}/>
                        </i>
                        </>
                    ) 
                }
                )
            }
            
           
        </section>
        </>
    )
}