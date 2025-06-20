'use client'
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";

export default function Login() {
    return(
        <section className="section flex justify-center items-center bg-neutral-800">
            <div className="login-container">
                <div className="w-full m-3 p-3 px-10 flex flex-row justify-between items-center">
                    <Link href="/" className="login-logo">LOGO</Link>
                    <h1 className="font-light text-2xl capitalize">Your account</h1>
                </div>
                <div className="w-[60%] h-0.5 rounded-full bg-neutral-950"></div>
                <div className="flex flex-row items-center gap-2 py-6">
                    <div className="login-auth-socials">
                        <FcGoogle />
                    </div>
                    <div className="login-auth-socials text-neutral-600">
                        <SiApple />
                    </div>
                    <div className="login-auth-socials text-blue-600">
                        <FaFacebookSquare />
                    </div>
                </div>
                <div className="w-full flex flex-col items-center py-4 mb-6 p-3 gap-5">
                    <input 
                     type="email" 
                     placeholder="Email"
                     className="login-input" />
                    <input 
                     type="password"
                     placeholder="Password"
                     className="login-input" />
                    <input 
                     type="password"
                     placeholder="Confirm Password"
                     className="login-input" />
                </div>
                <div className="flex flex-col items-center gap-6">
                    <button className="bg-neutral-900 rounded-xl text-neutral-200 p-4 px-7 text-lg hover:border hover:border-neutral-950 hover:bg-transparent hover:text-neutral-950 transition-colors ease-in-out duration-200 hover:shadow-xl cursor-pointer"><Link href="/">Register now</Link></button>
                </div>
            </div>
        </section>
    );
}