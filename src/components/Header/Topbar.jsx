import ClockIcon from '../../assets/icons/clock.svg?react'
import EnglishIcon from '../../assets/icons/english.svg?react'
import ArrowDown from '../../assets/icons/arrowdown.svg?react'
import FbIcon from '../../assets/icons/fb.svg?react'
import TwitterIcon from '../../assets/icons/twitter.svg?react'
import SkypeIcon from '../../assets/icons/skype.svg?react'
import LinkedinIcon from '../../assets/icons/linkedIn.svg?react'

export function Topbar () {
    return(
        <div className="bg-primary text-white py-2 font-sora md:text-sm text-xs">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between">
                <div className="flex gap-5 flex-wrap md:justify-start justify-center">
                    <div className="flex gap-2 items-center">
                        <ClockIcon /> 
                        <p>Working: Monday - Friday: 9am - 5pm</p>
                    </div>
                    <div className="w-0.25 bg-white hidden md:block"></div>
                    <div className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4">
                            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                        </svg>
                        <p>Hudson, Wisconsin(WI), 54016</p>
                    </div>
                </div>
                <div className="bg-secondary md:-my-2 mt-2 px-5 py-2 flex items-center gap-10 flex-wrap d:justify-start justify-center">
                    <div className="flex items-center justify-center gap-2">
                        <EnglishIcon className="object-contain" />
                        <p>English</p>
                        <ArrowDown />
                    </div>
                    <ul className="flex gap-3">
                        <li>
                            <FbIcon />
                        </li>
                        <li>
                            <TwitterIcon />
                        </li>
                        <li>
                            <SkypeIcon />
                        </li>
                        <li>
                            <LinkedinIcon />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}