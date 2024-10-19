
import "@/styles/PropertyCard.css"
import Image from "next/image"
import EstateBade from "./EstateBadge"

export default function PropertiesCard(props: any) {
    return (
        <div className="property-card">
            <div className="property-image-container">
                <Image
                src = {props.image}
                height = {180}
                className = "house-image"
                alt = "house"
                />
            </div>

            <div className="property-info">
                <h2><strong> { props.price } </strong></h2>
                <h4 className="mt-3"><strong> { props.community } </strong></h4>
                <p className="address"> { props.address } </p>

                <div className="estate-badge-container">
                    <EstateBade type="bed" num ={`${props.beds} beds`}/>
                    <EstateBade type="bath" num ={`${props.baths} Baths`}/>
                    <EstateBade type="sqft" num ={`${props.sqft} sqft`}/>
                </div>
            </div>


        </div>
    )

}