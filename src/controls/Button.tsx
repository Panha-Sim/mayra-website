import "@/styles/button.css"
import Link from 'next/link'

export default function Button(props:any){

    const slug = props.slug;
    const name = props.name;

    const arguementStyle = {
        "color": props.color,
        "border": props.border,
        "backgroundColor": props.bgColor,
        "borderColor": props.borderColor,
    }
    if (props.type == "secondary") {
        return (
            <button style={arguementStyle} className={`${props.className} custom-secondary-button`}>
                <Link href={`/${slug}`}>{name}</Link>
            </button>
        )
    }else if(props.type == "primary"){
        return (
            <button style={arguementStyle} className={`${props.className} custom-primary-button`}>
                <Link href={`/${slug}`}>{name}</Link>
            </button>
        )
    } else {
        return (
            <button type="submit" style={arguementStyle} className={`${props.className} custom-primary-button`}>
                {name}
            </button>
        )
    }
}