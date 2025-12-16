import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { AboutUs } from "../../components/Sections/AboutUs";
import { Info } from "../../components/Sections/Info";
import { Instructors } from "../../components/Sections/Instructor";
import { MidSection } from "../../components/Sections/MidSection";
import { Newsletter } from "../../components/Sections/Newsletter";
import { Testimonials } from "../../components/Sections/Testimonials";
import { WhyUs } from "../../components/Sections/WhyUs";
import FooterBg from '../../assets/images/footer.jpg'

export default function Landing () {
    return(
        <div className="md:max-w-[1920px] mx-auto overflow-x-hidden">
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
                <Newsletter />
            </main>
            <footer style={{ backgroundImage: `url(${FooterBg})` }} className="bg-cover bg-center">
                <Footer />
            </footer>
        </div>
    )
}