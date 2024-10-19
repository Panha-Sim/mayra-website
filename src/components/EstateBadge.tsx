
import "@/styles/EstateBadge.css"
import BedIcon from "@/assets/estateBadgeIcon/bed 1.svg"
import BathIcon from "@/assets/estateBadgeIcon/bath 1.svg"
import RulerIcon from "@/assets/estateBadgeIcon/ruler-2 1.svg"
import Image from "next/image"

export default function EstateBade(props: any){

    if (props.type == "bed") {
        return(
            <div className="estate-badge">
                <Image
                src={BedIcon}
                alt="Bed Icon"
                />
                <p>{props.num}</p>
            </div>
        )
    } else if (props.type == "bath") {
        return (
            <div className="estate-badge">
                <Image
                src={BathIcon}
                alt="Bed Icon"
                />
                <p>{props.num}</p>
            </div>
        )
    } else if (props.type == "sqft") {
        return (
            <div className="estate-badge">
                <Image
                src={RulerIcon}
                alt="Bed Icon"
                />
                <p>{props.num}</p>
            </div>
        )
    }

}