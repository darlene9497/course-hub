import HeroBird from '../../assets/images/hero-bird.svg?react'
import HeroSun from '../../assets/images/hero-sun.svg?react'
import { Button } from '../Button/Button'
import PlayIcon from '../../assets/icons/play.svg?react'
import Heroill1 from '../../assets/icons/hero-ill1.svg?react'
import Heroill2 from '../../assets/icons/hero-ill2.svg?react'
import Cloud from '../../assets/icons/cloud.svg?react'
import HeroChild1 from '../../assets/images/hero-child1.svg?react'
import HeroChild2 from '../../assets/images/hero-child2.svg?react'
import { InfoOverlay } from '../Overlay/InfoOverlay'
import InfoOverlayImg from '../../assets/images/info-overlay.svg?react'

export function Hero() {
    return(
        <section className="bg-light-background relative pb-10">
            <HeroBird />
            <InfoOverlay 
            title="5.8K"
            description="Success Courses" 
            className='absolute top-40 right-80'
            />
            <div className="max-w-[1320px] mx-auto flex">
                <div className='flex flex-col justify-center mb-35'>
                    <h1 className='font-epilogue font-bold text-6xl text-accent w-[648px] leading-[72px]'>
                        The Best Place <br /> To Learn and Play <br /> For Kids
                    </h1>
                    <p className='text-text-secondary font-sora font-base w-[620px] leading-[32px] my-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='flex gap-10 items-center'>
                        <Button
                        text='Browse Courses'
                        variant='secondary'
                        className='mt-2'/>

                        <div className='flex items-center gap-5 relative'>
                            <div className="bg-primary w-12 h-12 flex items-center justify-center rounded-full z-10">
                                <PlayIcon />
                            </div>
                            <div className='h-10 w-10 bg-primary/30 rounded-full absolute right-22 top-5'></div>
                            <a className="underline" href="http://www.youtube.com">Watch Now</a>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 relative">
                    <Heroill1 className="absolute -left-25" />
                    <Heroill2 className="absolute -top-20 left-15" />
                    <div>
                        <div className="bg-secondary rounded-b-[137px] rounded-tl-[137px] h-[386px] flex items-end">
                            <HeroChild1 />
                        </div>
                    </div>

                    <div className="mt-60">
                        <div className="bg-primary rounded-t-[137px] rounded-br-[137px] h-[386px] w-[303px] relative overflow-visible">
                            <HeroChild2 className="absolute right-[-50px] bottom-0" />
                        </div>
                    </div>
                </div>
            </div>
            <HeroSun className="absolute top-10 right-0"/>
            <Heroill1 className="absolute bottom-10 right-20"/>
            <Cloud className="absolute bottom-15 left-160"/>
            <InfoOverlay 
            title="10K+"
            variant="primary"
            description="Students" 
            icon={<InfoOverlayImg />}
            className='absolute bottom-20 left-220'
            />
        </section>
    )
}