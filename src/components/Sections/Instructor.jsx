import { useRef } from "react";
import { Title } from "../Heading/Title";
import PrevIcon from '../../assets/icons/prev.svg?react'
import NextIcon from '../../assets/icons/next.svg?react'
import Bird from '../../assets/images/hero-bird.svg?react'
import { InstructorCard } from "../Card/InstructorCard";
import Team1 from '../../assets/images/team1.svg?react'
import Team2 from '../../assets/images/team2.svg?react'
import Team3 from '../../assets/images/team3.svg?react'
import Team4 from '../../assets/images/team4.svg?react'

export function Instructors() {
    const scrollRef = useRef(null)

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }

    return(
        <section className="relative bg-light-background py-15 lg:py-25 ">
            <Bird className="absolute right-0 scale-x-[-1] top-2 hidden lg:block"/>
            <div className="max-w-[1320px] mx-auto">
                <div className="md:flex items-center justify-between px-5 lg:px-0">
                    <Title title="teachers">
                        Meet our instructors
                    </Title>
                    <div className="flex gap-5">
                        <button onClick={scrollLeft}>
                            <PrevIcon className="lg:h-auto lg:w-auto h-10 w-10" />
                        </button>
                        <button onClick={scrollRight}>
                            <NextIcon className="lg:h-auto lg:w-auto h-10 w-10" />
                        </button>
                    </div>
                </div>
                <div
                ref={scrollRef}
                className="mt-5 gap-5 flex overflow-x-auto scroll-smooth lg:grid lg:grid-cols-4 lg:gap-10 lg:overflow-visible justify-items-center">
                    <InstructorCard
                    image={<Team1 />}
                    name="cheryl curry"
                    role="Teacher"/>

                    <InstructorCard
                    image={<Team2 />}
                    name="willie diaz"
                    role="Teacher"/>

                    <InstructorCard
                    image={<Team3 />}
                    name="jane sifuentes"
                    role="Teacher"/>

                    <InstructorCard
                    image={<Team4 />}
                    name="michael hammond"
                    role="Teacher"/>
                </div>
            </div>
        </section>
    )
}