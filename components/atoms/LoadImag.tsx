import { Link } from "react-router-dom"
import { useEffect } from "react"
import {IconSpan} from "../atoms/IconSpan"
import {Photo} from "../../src/types"

export default function LoadImag({list, setPage, removeImgId}:{list:Photo[], setPage: (prev:number)=> number, removeImgId?:number}) {
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const windowHeight = window.innerHeight
            const fullHeight = document.body.scrollHeight

            if (scrollTop + windowHeight >= fullHeight - 10) {
                setPage(prev => prev + 1)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return(
        <ul className="images">
        {list
        .filter((photo) => photo.id !== removeImgId)
        .map((photo) =>(
            <li key={photo.id}>
                <Link to={`/image/${photo.id}`} >
                    <img
                        src={photo.src.medium}
                        alt={photo.alt}
                        loading="lazy"
                    />
                </Link>
                <div className="container-icon">
                    <IconSpan nameIcon="more_horiz"/>
                </div>
            </li>
        ))}
    </ul>
    )
}