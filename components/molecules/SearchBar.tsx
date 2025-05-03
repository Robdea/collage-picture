import { useState, useEffect } from "react";
import { IconSpan } from "../atoms/IconSpan"
import { useLocation, useNavigate } from "react-router-dom"

export default function SearchBar() {
    const navigate = useNavigate();
    const location = useLocation();


    const [inputValue, setInputValue] = useState("");

    useEffect(()=>{
        if(location.pathname !== "/search"){
            setInputValue("");
        }

    },[location])

    function changeText(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value)
    }

    const handlerSearch =(event:React.KeyboardEvent<HTMLInputElement>)=>{
        if(event.key === "Enter"){
            navigate(`/search?name=${inputValue}`);
        }
    }

    return(
        <section className="container-search">
            <div>
                <IconSpan nameIcon="search"/>
                <input 
                value={inputValue}
                onChange={changeText}
                onKeyDown={handlerSearch}  
                type="text" 
                placeholder="Buscar"/>
            </div>
        </section>
    )
}