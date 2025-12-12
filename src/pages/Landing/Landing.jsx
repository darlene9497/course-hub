import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { AboutUs } from "../../components/Sections/AboutUs";
import { Info } from "../../components/Sections/Info";

export default function Landing () {
    return(
        <>
            <header>
                <Header />
            </header>
            <main>
                <Hero />
                <Info />
                <AboutUs />
            </main>
        </>
    )
}