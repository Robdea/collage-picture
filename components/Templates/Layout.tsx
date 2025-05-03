import { Outlet } from "react-router-dom";
import {Asidebar} from "../organims/Asidebar"
import SearchBar from "../molecules/SearchBar"


export default function Layout() {
    return(
        <div className="main-container">
            <Asidebar/>
            <SearchBar/>
            <div className="container">
                <Outlet/>
            </div>
        </div>
    )
}