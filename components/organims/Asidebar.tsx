import NavBar from "../molecules/NavBar"
import { Options } from "../molecules/Options"
import {useIsMobile} from "../atoms/MobileResize"

export const Asidebar = ()=> {
    const [isMobile] = useIsMobile();

    return(
        <section className="sidebar">
            <nav>
                <NavBar/>
            </nav>
            {isMobile === false && (
                <div>
                    <Options/>
                </div>
            )}
        </section>
    )
}

