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
    return(
        <section className="relative bg-light-background py-25">
            <Bird className="absolute right-0 scale-x-[-1] top-2"/>
            <div className="max-w-[1320px] mx-auto">
                <div className="md:flex items-center justify-between">
                    <Title title="teachers">
                        Meet our instructors
                    </Title>
                    <div className="flex gap-5">
                        <PrevIcon />
                        <NextIcon />
                    </div>
                </div>
                <div className="md:grid grid-cols-4 mt-5 gap-10 justify-items-center">
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