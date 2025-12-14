import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { AboutUs } from "../../components/Sections/AboutUs";
import { Info } from "../../components/Sections/Info";
import { Instructors } from "../../components/Sections/Instructor";
import { MidSection } from "../../components/Sections/MidSection";
import { Testimonials } from "../../components/Sections/Testimonials";
import { WhyUs } from "../../components/Sections/WhyUs";

export default function Landing () {
    return(
        <div className="md:max-w-[1920px] mx-auto">
            <header>
                <Header />
            </header>
            <main>
                <Hero />
                <Info />
                <AboutUs />
                <MidSection />
                <WhyUs />
                <Testimonials />
                <Instructors />
            </main>
        </div>
    )
}