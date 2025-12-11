import { InfoCard } from "../../components/Card/InfoCard";
import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import InfoIcon1 from '../../assets/icons/info-icon1.svg?react'
import InfoIcon2 from '../../assets/icons/info-icon2.svg?react'
import InfoIcon3 from '../../assets/icons/info-icon3.svg?react'

export default function Landing () {
    return(
        <>
            <header>
                <Header />
            </header>
            <main>
                <Hero />
                <div className="max-w-[1320px] mx-auto my-25">
                    <div className="grid md:grid-cols-3 gap-8">
                        <InfoCard 
                        icon={<InfoIcon1 />}
                        title="Start course"
                        variant="secondary"
                        description="Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur" />

                        <InfoCard 
                        icon={<InfoIcon2 />}
                        title="Expert teachers"
                        description="Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur" />

                        <InfoCard 
                        icon={<InfoIcon3 />}
                        title="Strategic location"
                        variant="secondary"
                        description="Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur" />
                    </div>
                </div>
                
            </main>
        </>
    )
}