'use client'
import Link from "next/link";

export default function Home() {
    return (
        <section className="section">
            {/* Desktop Version */}
            <div className="w-full h-screen inline-flex flex-row justify-evenly items-center">
                <div className="w-1/2 h-full px-6 flex items-center">
                    <img src="/images/Hero-img.png" alt="a dress" className="object-cover w-full h-full rounded-xl"/>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                 <div className="max-w-md flex flex-col p-8 text-center gap-2">
                    <p className="text-xl font-light uppercase">Now introducing</p>
                    <h1 className="text-5xl font-bold mb-4 uppercase">LNNO Coat®</h1>
                    <div className="flex flex-row justify-evenly items-center gap-4">
                        <button className="p-3 bg-neutral-800 text-neutral-100 font-light rounded-xl hover:shadow-xl hover:bg-neutral-100 hover:text-neutral-950 ease-in-out duration-200 cursor-pointer"><Link href="/trending">Reach out</Link></button>
                        <button className="p-3 text-neutral-800 font-light rounded-xl hover:shadow-xl hover:bg-neutral-100 hover:text-neutral-950 hover:border-neutral-800 ease-in-out duration-200 cursor-pointer"><Link href="/brands">Know more</Link></button>
                    </div>
                 </div>
                </div>
            </div>
        </section>
    );
}