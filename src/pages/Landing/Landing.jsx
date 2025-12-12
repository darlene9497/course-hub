import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { AboutUs } from "../../components/Sections/AboutUs";
import { Info } from "../../components/Sections/Info";
import { MidSection } from "../../components/Sections/MidSection";

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
                <MidSection />
            </main>
        </>
    )
}