import { LuUserRound } from "react-icons/lu";
import { IoBagHandleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Navbar() {
    return (
        <>
        <header className="header">
            <nav>
                <div className="desktop-navbar">
                    <div className="flex justify-evenly py-5 items-center">
                        <a href="#Home" className="font-black text-3xl uppercase">Logo</a>
                    </div>
                    <ul className="navbar-links">
                        <li className="links">Contact</li>
                        <li className="links">Trending</li>
                        <li className="links">Male</li>
                        <li className="links">Women</li>
                        <li className="links">Brands</li>
                        <li className="inline-flex flex-row px-5 gap-5">
                            <a href="#User" className="navbar-icons">
                                <LuUserRound />
                            </a>
                            <a href="#Cart" className="navbar-icons">
                                <IoBagHandleOutline />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mobile-navbar">
                    <div className="flex items-center py-5">
                        <a href="#Home" className="font-black text-3xl uppercase">Logo</a>
                    </div>
                    <div className="flex rounded-full m-5 p-5 active:bg-neutral-800 active:text-neutral-100 transition-all ease-in duration-200 items-end py-5">
                        <a href="" className=" text-xl">
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
        </>
    );
}