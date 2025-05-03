import { Link } from "react-router-dom"
import { IconSpan } from "../atoms/IconSpan"

export default function NavBar() {
    return(
        <>
            <Link to={"/"}>
                <IconSpan 
                title="Inicio"
                showMessage={true} 
                nameIcon="home"/>
            </Link>
            <a>
                <IconSpan 
                title="Explorar"
                showMessage={true} 
                nameIcon="explore"/>
            </a>
            <a>
                <IconSpan 
                title="Crear"
                showMessage={true} 
                nameIcon="add_box"/>
            </a>
        </>
    )    
}