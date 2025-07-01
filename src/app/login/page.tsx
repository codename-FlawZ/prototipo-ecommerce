'use client'
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";

export default function Login() {
    return(
        <section className="section flex justify-center items-center bg-neutral-800">
            {/* Desktop Version */}
            <div className="login-desktop-container">
                <div className="login-desktop-logo">
                    <Link href="/" className="login-logo">LNNO</Link>
                    <h1 className="font-light text-2xl capitalize">Your account</h1>
                </div>
                <div className="w-[60%] h-0.5 rounded-full bg-neutral-950"></div>
                <div className="flex flex-row items-center gap-2 py-6">
                    <div className="login-auth-socials">
                        <FcGoogle />
                    </div>
                    <div className="login-auth-socials text-neutral-600 hover:text-neutral-200">
                        <SiApple />
                    </div>
                    <div className="login-auth-socials text-blue-600">
                        <FaFacebookSquare />
                    </div>
                </div>
                <div className="w-full flex flex-col items-center py-4 mb-6 p-3 gap-6">
                    <input 
                     type="email" 
                     placeholder="Email"
                     className="login-input" />
                    <input 
                     type="password"
                     placeholder="Password"
                     className="login-input" />
                </div>
                <div className="flex flex-col items-center gap-6 pb-4">
                    <button className="bg-neutral-900 rounded-xl text-neutral-200 p-4 px-7 text-lg hover:border hover:border-neutral-950 hover:bg-transparent hover:text-neutral-950 transition-colors ease-in-out duration-200 hover:shadow-xl cursor-pointer"><Link href="/">Login now</Link></button>
                    <div className="">
                        <p className="cursor-default">Don't have an account? <Link href="/register" className="text-neutral-600 underline cursor-pointer">Register now</Link></p>
                    </div>
                </div>
            </div>
            {/* Mobile Vesion */}
            <div className="mobile-login-container">
                <div className="mobile-logo-container">
                    <Link href="/" className="mobile-logo">LNNO</Link>
                    <h1 className="font-light text-lg capitalize">Your Account</h1>
                </div>
                <div className="w-[60%] h-0.5 rounded-full bg-neutral-950"></div>
                 <div className="flex flex-row items-center gap-2 py-4">
                    <div className="mobile-auth-socials">
                        <FcGoogle />
                    </div>
                    <div className="mobile-auth-socials text-neutral-600">
                        <SiApple />
                    </div>
                    <div className="mobile-auth-socials text-blue-600">
                        <FaFacebookSquare />
                    </div>
                </div>
                <div className="w-full flex flex-col items-center py-1 mb-3 p-3 gap-6">
                    <input 
                     type="email" 
                     placeholder="Email"
                     className="mobile-login-input" />
                    <input 
                     type="password"
                     placeholder="Password"
                     className="mobile-login-input" />
                </div>
                <div className="flex flex-col items-center gap-4">
                    <button className="bg-neutral-900 rounded-xl text-neutral-200 p-3 px-5 text-base hover:border hover:border-neutral-950 hover:bg-transparent hover:text-neutral-950 transition-colors ease-in-out duration-200 hover:shadow-xl cursor-pointer"><Link href="/">Login now</Link></button>
                    <div className="text-sm pb-3">
                        <p className="cursor-default">Don't have an account? <Link href="/register" className="text-neutral-600 underline cursor-pointer">Register now</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
}