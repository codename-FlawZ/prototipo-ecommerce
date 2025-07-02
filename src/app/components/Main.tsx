'use client'
import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";

export default function Home() {
    return (
        <>
        <section className="relative z-1 w-full min-h-screen section overflow-hidden">
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
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 pt-8 pb-30">
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/images/Logo.png"
                        alt="LNNO Logo"
                        width={350}
                        height={350}
                        className="object-contain rounded-2xl max-sm:w-[95px] max-sm:h-[95px] shadow-xl"
                    />
                </div>
                <div className="flex-1 max-sm:flex max-sm:flex-col max-sm:items-center">
                    <h2 className="text-4xl font-light uppercase mb-6 max-sm:text-2xl">About us</h2>
                    <p className="text-lg mb-4 max-sm:text-base">
                        LNNO is a premium fashion brand known for delivering unmatched design and quality,
                        blending modern trends with timeless elegance.
                    </p>
                    <p className="text-lg mb-6 max-sm:text-base">
                        Founded with the vision of elevating everyday style, LNNO focuses on creating pieces that
                        combine top-tier materials with refined craftsmanship, inspiring confidence and desire
                        in every detail.
                    </p>
                    <div className="flex flex-row items-center gap-5">
                        <button className="hero-btn-1"><Link href="/brands">Look Brands</Link></button>
                        <button className="hero-btn-2"><Link href="/contact">Contact us</Link></button>
                    </div>
                </div>
            </div>
            </div>
        </section>
        <Footer />
        </>
    );
}