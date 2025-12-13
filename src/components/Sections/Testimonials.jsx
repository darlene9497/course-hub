import Cloud from '../../assets/icons/cloud.svg?react'
import { TestimonialCard } from '../Card/TestimonialCard'
import { Title } from '../Heading/Title'
import User1 from '../../assets/images/user1.svg?react'
import Sun from '../../assets/images/hero-sun.svg?react'

export function Testimonials() {
    return(
        <div className="relative py-30">
            <Cloud
            className="absolute bottom-35 left-10"
            />
            <div className='max-w-[1320px] mx-auto'>
                <div>
                    <Title title="Testimonial" align='center'>
                        What parents say
                    </Title>
                    <div className='md:grid grid-cols-3 gap-10 mt-10'>
                        <TestimonialCard
                        image={<User1 />}
                        name="Kathy Sullivan"
                        title="CEO at ordian IT"/>

                        <TestimonialCard
                        image={<User1 />}
                        name="Elsie Stroud"
                        title="CEO in Edwards"/>

                        <TestimonialCard
                        image={<User1 />}
                        name="John Doe"
                        title="CEO at ordian IT"/>
                    </div>
                </div>
            </div>
            <Sun
            className="absolute top-5 right-10 h-55"
            />
        </div>
    )
}