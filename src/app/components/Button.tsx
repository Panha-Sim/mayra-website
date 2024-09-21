import "../styles/button.css"

export default function Button(props:any){
    if (props.type == "secondary") {
        return (
            <button className="custom-secondary-button">
                {props.name}
            </button>
        )
    }else{
        return (
            <button className="custom-primary-button">
                {props.name}
            </button>
        )
    }
}