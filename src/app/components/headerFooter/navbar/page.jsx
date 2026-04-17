"use client";
import { Activity, Home, Watch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const links = (
        <>
            <li><Link className="flex font-bold gap-1" href="/"><Home />Home</Link></li>
            <li><Link className="flex font-bold gap-1" href="/timeline"><Watch />Timeline</Link></li>
            <li><Link className="flex font-bold gap-1" href="/stats"><Activity /> Stats</Link></li>
        </>
    );

    return (
        <div className="shadow-sm">
            <div className="w-full max-w-7xl mx-auto flex justify-between items-center p-5">
                <div className="">
                    <Link href="/" className="text-xl">
                        <Image src="/images/logo.png" alt="keen-Keeper"
                            width={150}
                            height={150}
                            style={{ width: "auto" }}
                        ></Image>
                    </Link>
                </div>
                <div className="hidden sm:flex justify-end">
                    <ul className="px-1 flex gap-4">
                        {links}
                    </ul>
                </div>
                <button
                    className="sm:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-red-500 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-red-500 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-red-500 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
                {menuOpen && (
                    <ul className="sm:hidden flex flex-col gap-2 pt-4 pb-2 absolute bg-gray-200 right-0 top-19 w-50 px-4 h-50">
                        {links}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Navbar;