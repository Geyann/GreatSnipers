'use client';

import { useState, useEffect } from 'react'
import darkimglog from '../assets/dark-mode-logo.png'
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isAtTop, setIsAtTop] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY < 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header 
            className={`
                fixed top-0 left-0 navbar right-0 z-50 bg-black transition-transform duration-300 transform
                ${isAtTop 
                    ? 'translate-y-0' 
                    : '-translate-y-[85%] hover:translate-y-0'
                }
            `}
        >
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <img
                            alt="Logo"
                            src={darkimglog} 
                            className="w-25"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                    >
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <a href="#Home" className="text-sm/6 font-semibold text-white hover:text-gray-300 transition">Home</a>
                    <a href="#Portfolio" className="text-sm/6 font-semibold text-white hover:text-gray-300 transition">Portfolio</a>
                    <a href="#About-Us" className="text-sm/6 font-semibold text-white hover:text-gray-300 transition">About Us</a>
                    <a href="#Skills" className="text-sm/6 font-semibold text-white hover:text-gray-300 transition">Skills</a>
                    <a href="#Contact-Us" className="text-sm/6 font-semibold text-white hover:text-gray-300 transition">Contact Us</a>
                </PopoverGroup>
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50 bg-black/50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black p-6 sm:max-w-sm">
                    <div className="flex items-center justify-between">
                        <img src={darkimglog} className="w-25" alt="Logo" />
                        <button onClick={() => setMobileMenuOpen(false)} className="text-gray-400">
                            <XMarkIcon className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 space-y-2">
                        {['Home', 'Portfolio', 'Skills', 'About Us', 'Contact Us'].map((item) => (
                            <a key={item} href={`#${item.replace(' ', '-')}`} className="block px-3 py-2 text-white font-semibold hover:bg-white/5 rounded-lg">
                                {item}
                            </a>
                        ))}
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}