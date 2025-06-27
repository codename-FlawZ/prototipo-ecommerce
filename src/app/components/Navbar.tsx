'use client'
import { LuUserRound } from "react-icons/lu";
import { IoBagHandleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    };

    return (
        <>
        <header className="header">
            <nav className="relative z-[999]">
                {/* Desktop version from the navbar */}
                <div className="desktop-navbar">
                    <div className="flex justify-evenly py-5 items-center">
                        <Link href="/" className="logo">LNNO</Link>
                    </div>
                    <ul className="navbar-links">
                        <li className="links">
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li className="links">
                            <Link href="/men">Men</Link>
                        </li>
                        <li className="links">
                            <Link href="/women">Women</Link>
                        </li>
                        <li className="links">
                            <Link href="/trending">Trending</Link>
                        </li>
                        <li className="links">
                            <Link href="/brands">Brands</Link>
                        </li>
                        <li className="inline-flex flex-row px-5 gap-5">
                            <Link href="/login" className="links">
                                <LuUserRound />
                            </Link>
                            <Link href="/shopping" className="links">
                                <IoBagHandleOutline />
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Mobile version from the navbar */}
                <div className="mobile-navbar">
                    <div className="flex items-center">
                        <Link href="/" className="logo">LNNO</Link>
                    </div>
                    <button 
                     className="p-5 rounded-full active:text-neutral-100 transition-colors ease-in duration-200"
                     onClick={toggleMobileMenu}
                     aria-label="Open Menu"
                     >
                        <GiHamburgerMenu />
                    </button>
                </div>
                {/* Overlay to close the menu when click outside */}
                {isMobileMenuOpen && (
                    <div 
                     className="fixed inset-0 bg-neutral-800/50 z-[1000] cursor pointer animate-fadeIn"
                     onClick={toggleMobileMenu}
                     ></div>
                )}
                {/* Sidebar from mobile menu */}
                <nav 
                className={`fixed top-0 w-64 h-fulll bg-gray-100 shadow-lg z-[1002] pt-16 transition-all duration-200 ease-in-out
                    ${isMobileMenuOpen ? 'right-0' : '-right-64'}
                    `}
                >
                    <ul className="list-none p-0 m-0">
                        <li className="mobile-navbar-links">
                            <Link href="/contact" onClick={toggleMobileMenu} className="links block">Contact</Link>
                        </li>
                        <li className="mobile-navbar-links">
                            <Link href="/men" onClick={toggleMobileMenu} className="links block">Men</Link>
                        </li>
                        <li className="mobile-navbar-links">
                            <Link href="/women" onClick={toggleMobileMenu} className="links block">Women</Link>
                        </li>
                        <li className="mobile-navbar-links">
                            <Link href="/trending" onClick={toggleMobileMenu} className="links block">Trending</Link>
                        </li>
                        <li className="mobile-navbar-links">
                            <Link href="/brands" onClick={toggleMobileMenu} className="links block">Brands</Link>
                        </li>
                        <li className="py-4 px-5 border-t border-neutral-200 mt-4 flex justify-around">
                            <Link href="/login" onClick={toggleMobileMenu} className="links">
                                <LuUserRound />
                            </Link>
                            <Link href="/shopping" onClick={toggleMobileMenu} className="links">
                                <IoBagHandleOutline />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </nav>
        </header>
        </>
    );
}