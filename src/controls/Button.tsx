import "@/styles/button.css"
import Link from 'next/link'

export default function Button(props:any){
    if (props.type == "secondary") {
        return (
            <button className="custom-secondary-button">
                <Link href={`/${props.slug}`}>{props.name}</Link>
            </button>
        )
    }else{
        return (
            <button className="custom-primary-button">
                <Link href={`/${props.slug}`}>{props.name}</Link>
            </button>
        )
    }
}