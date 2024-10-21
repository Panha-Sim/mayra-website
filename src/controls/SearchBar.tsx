import "@/styles/SearchBar.css"
import Button from "./Button";

export default function SearchBar(props:any){

    return(
        <>
        <div className="search-bar-container">
            <input
            type="text"
            className="search-input"
            placeholder={"Search Properties"}
            onChange={props.onChange}
            />

            <Button type="primary"
            border="none"
            borderColor="var(--color-heading-light)" 
            color="var(--color-heading-light)" 
            bgColor="#132836"
            name="search"/>
        </div>
        </>
    )
}