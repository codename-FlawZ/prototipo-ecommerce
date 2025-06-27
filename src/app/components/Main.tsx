'use client'
import Link from "next/link";

export default function Home() {
    return (
        <section className="relative z-1 w-full min-h-screen section overflow-hidden">
            {/* Desktop Version */}
            <div className="inline-flex flex-col items-center gap-10">
                <div className="hero-desktop-container hero-shocase-product-1" style={{ backgroundImage: "url('/images/Hero-img-2.png')"}}>
                <div className="hero-desktop-showcase-container">
                </div>
                <div className="w-1/2 flex items-center justify-center z-2">
                 <div className="hero-text-container">
                    <p className="hero-title">Now introducing</p>
                    <h1 className="hero-subtitle">LNNO Boots®</h1>
                    <div className="hero-btn-container">
                        <button className="hero-btn-1"><Link href="/trending">Reach out</Link></button>
                        <button className="hero-btn-2"><Link href="/brands">Know more</Link></button>
                    </div>
                 </div>
                </div>
            </div>
            <div className="hero-desktop-container">
                <div className="w-1/2 flex items-center justify-center">
                 <div className="hero-text-container">
                    <p className="hero-title">Now Trending</p>
                    <h1 className="hero-subtitle">LNNO Coat®</h1>
                    <div className="hero-btn-container">
                        <button className="hero-btn-1"><Link href="/trending">Reach out</Link></button>
                        <button className="hero-btn-2"><Link href="/brands">Know more</Link></button>
                    </div>
                 </div>
                </div>
                <div className="hero-desktop-showcase-container">
                    <img src="/images/Hero-img.png" alt="the new LNNO Coat" className="hero-img"/>
                </div>
            </div>
            </div>
        </section>
    );
}