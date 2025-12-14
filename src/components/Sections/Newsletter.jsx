import Bird from '../../assets/images/hero-bird.svg?react'
import { Button } from '../Button/Button'
import { Title } from "../Heading/Title"
import CurveIll from '../../assets/icons/curve.svg?react'
import { ArticleCard } from '../Card/ArticleCard'
import Blog1 from '../../assets/images/blog1.svg?react' 
import Blog2 from '../../assets/images/blog2.svg?react' 
import Blog3 from '../../assets/images/blog3.svg?react' 

export function Newsletter() {
    return(
        <div className='relative'>
            <Bird />
            <CurveIll className="absolute right-200 top-5"/>
            <div className='max-w-[1320px] mx-auto mb-20'>
                <div className='flex items-center justify-between'>
                    <Title title="explore newsletter">
                        most popular posts
                    </Title>
                    <div>
                        <Button
                        text="All blog posts"
                        variant='secondary' />
                    </div>
                </div>
                <div className='md:grid grid-cols-3 gap-8 justify-items-center mt-8'>
                    <ArticleCard
                    img={<Blog1 />}
                    date="15 April 2024"
                    comments="Comments(06)"
                    text="velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat" />

                    <ArticleCard
                    img={<Blog2 />}
                    date="15 April 2024"
                    comments="Comments(06)"
                    text="velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat" />

                    <ArticleCard
                    img={<Blog3 />}
                    date="15 April 2024"
                    comments="Comments(06)"
                    text="velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat" />
                </div>
            </div>
            
        </div>
    )
}