'use client'

import "@/styles/PropertiesListing.css"
import SearchBar from "@/controls/SearchBar"
import Nav from "@/components/Nav"
import PropertyCard from "@/components/PropertyCard"
import houseList from "./HousingList.json";
import Footer from "@/components/Footer"
import { useState } from "react"

export default function PropertiesListing() {

    const [query, setQuery] = useState("");

    const handleInputChange= (event:any) => {
        setQuery(event.target.value)
    }

    const filteredHouses = houseList.houses.filter((house) => {
        const searchQuery = query.toLowerCase()
        return (
            house.community.toLowerCase().includes(searchQuery) ||
            house.address.toLowerCase().includes(searchQuery) ||
            house.price.toString().includes(searchQuery) ||
            house.beds.toString().includes(searchQuery) ||
            house.baths.toString().includes(searchQuery) ||
            house.sqft.toString().includes(searchQuery)
        )
    })

    return (
        <>
        <section className="gradient-nav">
            <Nav/>
        </section>
        <section className="container nav-section">
            <SearchBar onChange={handleInputChange}/>
        </section>
        <section className="mb-5 container property-card-container">

           {
            filteredHouses.map((house, key) => {
                console.log(key);
                return(
                    <PropertyCard
                    key = {key}
                    image = {house.image}
                    price = {house.price}
                    community = {house.community}
                    address = {house.address}
                    beds = {house.beds} 
                    baths = {house.baths} 
                    sqft = {house.sqft}/>
                )
            })
           }
       
        </section>
        <Footer/>
        </>
    )
}