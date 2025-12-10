import { Navbar } from "./Navbar";
import { Topbar } from "./Topbar";


export function Header () {
    return(
        <header>
            <Topbar />
            <Navbar />
        </header>
    )
}