import { useState } from "react"
import "../../src/assets/Icons.css"
import { useIsMobile } from "./MobileResize";

export const IconSpan = ({nameIcon, showMessage=false, title="title"}:{nameIcon:string, showMessage?:boolean, title?:string})=> {
    const [message, setMessage] = useState(false);

    const [isMobile] = useIsMobile();


    return (
        <>
            {showMessage === true ? (
                <>
                    <div className="icon-wrapper">
                    <span 
                    onMouseEnter={() => setMessage(true)} 
                    onMouseLeave={() => setMessage(false)}
                    className="material-symbols-outlined">
                        {nameIcon}
                    </span>
                    
                    {isMobile === false && (
                        message === true && <label className="title-icon">{title}</label>    
                    )}
                    </div>
                </>
            ) : (
                <span className="material-symbols-outlined">
                    {nameIcon}
                </span>
            )}
        </>
    )
}

