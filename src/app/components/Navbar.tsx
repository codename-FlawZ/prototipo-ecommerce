import { RiSearchLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
    return (
        <>
        <header className="header">
            <nav className="navbar">
                <a href="#Logo">Logo</a>
                <ul className="navbar-links">
                    <li className="links">Home</li>
                    <li className="links">Trending</li>
                    <li className="links">Brands</li>
                    <li className="inline-flex flex-row px-5 gap-5">
                        <a href="#Search" className="hover:text-slate-500 transition-colors ease-in-out duration-200">
                            <RiSearchLine />
                        </a>
                        <a href="#User" className="hover:text-slate-500 transition-colors ease-in-out duration-200">
                            <FaUser />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
}