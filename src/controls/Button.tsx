import "@/styles/button.css"
import { cookies } from "next/headers";
import Link from 'next/link'

export default function Button(props:any){

    const slug = props.slug;
    const name = props.name;
    const color = props.color;
    const border = props.border;
    const borderColor = props.borderColor;
    const bgColor = props.bgColor;

    const arguementStyle = {
        "color": props.color,
        "border": props.border,
        "background-color": props.bgColor,
        "border-color": props.borderColor,
    }
    if (props.type == "secondary") {
        return (
            <button style={arguementStyle} className="custom-secondary-button">
                <Link href={`/${slug}`}>{name}</Link>
            </button>
        )
    }else{
        return (
            <button style={arguementStyle} className="custom-primary-button">
                <Link href={`/${slug}`}>{name}</Link>
            </button>
        )
    }
}