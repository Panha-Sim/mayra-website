
import "@/styles/PropertyCard.css"
import EstateBade from "./EstateBadge"

export default function PropertiesCard(props: any) {
    return (
        <div className="property-card">
            <div className="property-image-container">
                <img src={` ${props.image} `} className="house-image" alt="house"/>
            </div>

            <div className="property-info">
                <h2><strong> { props.price } </strong></h2>
                <div>
                    <h4><strong> { props.community } </strong></h4>
                    <p className="address"> { props.address } </p>
                </div>

                <div className="estate-badge-container">
                    <EstateBade type="bed" num ={` ${props.beds} beds `}/>
                    <EstateBade type="bath" num ={` ${props.baths} Baths `}/>
                    <EstateBade type="sqft" num ={` ${props.sqft} sqft `}/>
                </div>
            </div>


        </div>
    )

}