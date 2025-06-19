'use client'
import Link from "next/link";

export default function Login() {
    return(
        <section className="section flex justify-center items-center bg-neutral-800">
            <div className="login-container">
                <div className="w-full m-3 p-3 px-10 flex flex-row justify-between items-center">
                    <Link href="/" className="login-logo">LOGO</Link>
                    <h1 className="font-light text-2xl capitalize">Your account</h1>
                </div>
                <div className="w-[60%] h-0.5 rounded-full bg-neutral-950"></div>
            </div>
        </section>
    );
}