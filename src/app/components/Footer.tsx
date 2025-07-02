'use client'
import Link from 'next/link';

export default function Footer() {
    return(
        <footer className="py-5 sm:px-10 px-5 bg-neutral-900 text-neutral-300 shadow-xl">
      <div className="screen-max-width">
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs max-sm:text[0.6rem] cursor-default">Copyright @ 2025 LNNO Inc.</p>
          <div className="inline-flex justify-evenly gap-3 text-sm max-sm:hidden">
              <p className="footer-links">
                <Link href="/contact">Contact</Link>
              </p>
              <span>|</span>
              <p className="footer-links">
                <Link href="/men">Men</Link>
              </p>
              <span>|</span>
              <p className="footer-links">
                <Link href="/women">Women</Link>
              </p>
              <span>|</span>
              <p className="footer-links">
                <Link href="/trending">Trending</Link>
              </p>
              <span>|</span>
              <p className="footer-links">
                <Link href="/brands">Brands</Link>
              </p>
          </div>
        </div>
        <p className="font-semibold text-gray text-xs cursor-default max-sm:text-[0.6rem]">Project created by: Pedro H. Alexandre. All rights reserved.</p>
      </div>
    </footer>
    );
}