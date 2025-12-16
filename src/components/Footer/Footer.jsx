import { FooterInfo } from './FooterInfo'
import LocationIcon from '../../assets/icons/location.svg?react'
import PhoneIcon from '../../assets/icons/phone.svg?react'
import MailIcon from '../../assets/icons/mail.svg?react'
import FooterLogo from '../../assets/images/footer-logo.svg?react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faPinterestP, faTwitter} from '@fortawesome/free-brands-svg-icons'
import ArrowIcon from '../../assets/icons/arrowright.svg?react'
import Img1 from '../../assets/images/img1.svg?react'
import Img2 from '../../assets/images/img2.svg?react'
import Img3 from '../../assets/images/img3.svg?react'
import Img4 from '../../assets/images/img4.svg?react'
import Img5 from '../../assets/images/img5.svg?react'
import Img6 from '../../assets/images/img6.svg?react'
import { Button } from '../Button/Button'

export function Footer() {
    return(
        <>
            <div className="relative z-10 max-w-[1320px] mx-auto">
                {/* top footer info */}
                <div className="flex flex-col md:flex-row py-8 gap-6 md:gap-0">
                    <div className="flex-1 flex justify-center md:border-r border-white/40">
                        <FooterInfo
                        icon={<LocationIcon />}
                        text="Address"
                        info="1925 Boggess Street"
                        />
                    </div>

                    <div className="flex-1 flex justify-center md:border-r border-white/40">
                        <FooterInfo
                        icon={<PhoneIcon />}
                        text="Phone"
                        info="(00) 875 784 568"
                        />
                    </div>
                    <div className="flex-1 flex justify-center md:border-r border-white/40 last:border-none">
                        <FooterInfo
                        icon={<MailIcon />}
                        text="Email"
                        info="info@gmail.com"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full border-t border-white/40"></div>

            {/* bottom footer content */}
            <div className="max-w-[1320px] mx-auto lg:py-20 py-10 px-5 flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-10 lg:flex lg:flex-row lg:justify-evenly">
                <div className='flex flex-col gap-5'>
                    <FooterLogo className="h-auto w-40 lg:w-50"/>
                    <p className='text-white font-sora lg:text-[17px] leading-[28px] max-w-[350px]'>Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt tortor aliqua mfacilisi cras fermentum odio eu.</p>
                    <div className='flex gap-2'>
                        <a href='https://www.facebook.com' target="_blank" className='bg-text-accent h-11.25 w-11.25 flex items-center justify-center rounded-full'>
                            <FontAwesomeIcon icon={faFacebookF} size="lg" style={{color: "#00beae"}} />
                        </a>
                        <a href='https://www.instagram.com' target="_blank" className='bg-text-accent h-11.25 w-11.25 flex items-center justify-center rounded-full'>
                            <FontAwesomeIcon icon={faInstagram} size="lg" style={{color: "#00beae",}} />
                        </a>
                        <a href='https://www.pinterest.com' target="_blank" className='bg-text-accent h-11.25 w-11.25 flex items-center justify-center rounded-full'>
                            <FontAwesomeIcon icon={faPinterestP} size="lg" style={{color: "#00beae",}} />
                        </a>
                        <a href='https://www.x.com' target="_blank" className='bg-text-accent h-11.25 w-11.25 flex items-center justify-center rounded-full'>
                            <FontAwesomeIcon icon={faTwitter} size="lg" style={{color: "#00beae",}} />
                        </a>
                    </div>
                </div>
                <div className='text-white capitalize'>
                    <h4 className='font-epilogue lg:text-[22px] text-[20px] font-bold'>Our services:</h4>
                    <ul className='space-y-4 font-sora mt-3'>
                        <li className="flex items-center gap-5 lg:text-[17px] cursor-pointer">
                            <ArrowIcon />
                            <span>Web Development</span>
                        </li>
                        <li className="flex items-center gap-5 lg:text-[17px] cursor-pointer">
                            <ArrowIcon />
                            <span>UI/UX design</span>
                        </li>
                        <li className="flex items-center gap-5 lg:text-[17px] cursor-pointer">
                            <ArrowIcon />
                            <span>management</span>
                        </li>
                        <li className="flex items-center gap-5 lg:text-[17px] cursor-pointer">
                            <ArrowIcon />
                            <span>digital marketing</span>
                        </li>
                        <li className="flex items-center gap-5 lg:text-[17px] cursor-pointer">
                            <ArrowIcon />
                            <span>blog news</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-epilogue lg:text-[22px] text-[20px] font-bold text-white mb-3'>Gallery</h4>
                    <div className='grid grid-cols-3 gap-3 max-w-[260px]'>
                        <Img1 />
                        <Img2 />
                        <Img3 />
                        <Img4 />
                        <Img5 />
                        <Img6 />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h4 className='font-epilogue lg:text-[22px] text-[20px] font-bold text-white mb-3'>Subscribe</h4>
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-[50px] md:h-[58px] bg-white pl-3 mb-5 w-full md:w-auto"
                    />
                    <Button text="SUBSCRIBE NOW" style={{borderRadius: "5px", width: "fit-content"}} />
                </div>
            </div>
            <div className='bg-[#222222] font-sora text-white flex h-[70px] justify-center items-center text-[14px]'>
                <p>Copyright © 2025 <a href="https://www.linkedin.com/in/darlene-n/" target="_blank" rel="noopener noreferrer" className='text-primary'>Darlene</a> | All Rights Reserved.</p>
            </div>
        </>
    )
}