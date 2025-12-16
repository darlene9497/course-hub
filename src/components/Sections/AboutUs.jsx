import AboutCloud from '../../assets/icons/cloud.svg?react'
import AboutImg1 from '../../assets/images/about-us1.svg?react'
import AboutImg2 from '../../assets/images/about-us2.svg?react'
import { Title } from '../Heading/Title'
import { ItemCard } from '../Card/ItemCard'
import ItemIcon1 from '../../assets/icons/item-icon1.svg?react'
import { Button } from '../Button/Button'
import { InfoOverlay } from '../Overlay/InfoOverlay'
import InfoOverlayImg from '../../assets/images/info-overlay.svg?react'
import HeroBird from '../../assets/images/hero-bird.svg?react'

export function AboutUs() {
    return(
        <section className='relative'>
            <AboutCloud className='ml-20' />
            <div className='lg:flex max-w-[1320px] mx-auto gap-15 font-sora mb-20 relative px-5 lg:px-0'>
                <InfoOverlay 
                title="Happy"
                variant="secondary"
                description="Students" 
                icon={<InfoOverlayImg />}
                className='hidden lg:flex absolute top-15 left-5'
                />

                <div className='h-3 w-3 bg-orange rounded-full absolute left-10 top-50'></div>

                <div className='lg:flex gap-8'>
                    <div className='flex lg:items-end justify-center'>
                        <AboutImg1 className="border pl-1 rounded-[300px] border-t-0 border-r-0 border-orange" />
                    </div>
                    <div className='hidden lg:block my-8 border pl-1 rounded-[300px] border-t-0 border-r-0 border-orange'>
                        <AboutImg2 />
                    </div>
                </div>

                <div className='hidden lg:block h-6 w-6 bg-secondary rounded-full absolute left-135 top-10'></div>
                <div className='hidden lg:block h-3 w-3 bg-primary rounded-full absolute left-135 bottom-5'></div>

                <div className='md:flex flex-col justify-center lg:mt-0 mt-10' >
                    <Title title="About us" >
                        It's our passion to work with children at <span>kindergarten.</span>
                    </Title>
                    <p className='text-text-secondary leading-[32.3px] mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br /> veniam, quis nostrud..</p>
                    <div className='grid md:grid-cols-2 gap-4'>
                        <ItemCard
                        icon={<ItemIcon1 />}
                        text="Quality educators"
                        />
                        <ItemCard
                        icon={<ItemIcon1 />}
                        text="Play to learn"
                        />
                        <ItemCard
                        icon={<ItemIcon1 />}
                        text="Safety and security"
                        />
                        <ItemCard
                        icon={<ItemIcon1 />}
                        text="Homelike environment"
                        />
                    </div>
                    <Button
                    text="Admission open"
                    variant="secondary" 
                    className='mt-5 w-fit'/>
                </div>
            </div>
            <HeroBird className="absolute bottom-0 right-0 scale-x-[-1]" />
        </section>
    )
}