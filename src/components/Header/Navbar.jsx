import { useState } from 'react'
import logoImg from '../../assets/images/logo.png'
import searchIcon from '../../assets/icons/search.png'
import userIcon from '../../assets/icons/user.png'
import { Button } from '../Button/Button'

export function Navbar () {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return(
        <nav className='max-w-[1200px] mx-auto py-2 font-sora text-sm px-2 md:px-0'>
            <div className="flex items-center justify-between">
                <div className="">
                    <img
                    src={logoImg}
                    alt="edunity logo"
                    className="md:h-10 h-8"/>
                </div>

                {/* desktop menu */}
                <ul className='hidden lg:flex text-text-primary gap-10'>
                    <li className='flex items-center gap-1'>
                        Home 
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="size-3 stroke-[3]"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25 12 15.75 4.5 8.25"
                            />
                        </svg>
                    </li>
                    <li>
                        About Us
                    </li>
                    <li className='flex items-center gap-1'>
                        Courses 
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="size-3 stroke-[3]"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25 12 15.75 4.5 8.25"
                            />
                        </svg>
                    </li>
                    <li className='flex items-center gap-1'>
                        Pages 
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="size-3 stroke-[3]"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25 12 15.75 4.5 8.25"
                            />
                        </svg>
                    </li>
                    <li className='flex items-center gap-1'>
                        Blog 
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="size-3 stroke-[3]"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25 12 15.75 4.5 8.25"
                            />
                        </svg>
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>

                {/* desktop icons */}
                <ul className='hidden lg:flex items-center gap-5'>
                    <li>
                        <img src={searchIcon} alt="search icon" width={20} className='cursor-pointer'/>
                    </li>
                    <li>
                        <img src={userIcon} alt="user icon" width={20} className='cursor-pointer' />
                    </li>
                    <li>
                        <Button
                        text="Contact"
                        variant="secondary" />
                    </li>
                </ul>

                {/* mobile menu button */}
                <button 
                    className='lg:hidden text-text-primary'
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                    )}
                </button>
            </div>

            {/* mobile menu */}
            {isMobileMenuOpen && (
                <div className='lg:hidden mt-4 pt-4 border-t border-gray-200'>
                    <ul className='flex flex-col text-text-primary gap-4'>
                        <li className='flex items-center justify-between'>
                            Home 
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="size-3 stroke-[3]"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25 12 15.75 4.5 8.25"
                            />
                        </svg>
                        </li>
                        <li>
                            About Us
                        </li>
                        <li className='flex items-center justify-between'>
                            Courses 
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="size-3 stroke-[3]"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25 12 15.75 4.5 8.25"
                            />
                        </svg>
                        </li>
                        <li className='flex items-center justify-between'>
                            Pages 
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="size-3 stroke-[3]"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25 12 15.75 4.5 8.25"
                            />
                        </svg>
                        </li>
                        <li className='flex items-center justify-between'>
                            Blog 
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="size-3 stroke-[3]"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25 12 15.75 4.5 8.25"
                            />
                        </svg>
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>

                    <ul className='flex items-center justify-center gap-5 mt-6 pt-4 border-t border-gray-200'>
                        <li>
                            <img src={searchIcon} alt="search icon" width={20} className='cursor-pointer'/>
                        </li>
                        <li>
                            <img src={userIcon} alt="user icon" width={20} className='cursor-pointer' />
                        </li>
                    </ul>

                    <div className="mt-4 flex justify-center">
                        <Button
                        text="Contact"
                        variant="secondary" />
                    </div>
                </div>
            )}
        </nav>
    )
}