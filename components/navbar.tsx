'use client'

import { useState, useEffect } from "react";
import { Zap } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4 ${scrolled
                ? "bg-tech-darkGray/90 backdrop-blur-md shadow-md"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <div className="flex items-center gap-2">
                            <Zap size={24} className="text-tech-red" />
                            <span className="text-xl font-bold">Red Horizon</span>
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/#solutions" className="text-tech-lightGray hover:text-white transition-colors">Solutions</Link>
                        <Link href="/#about" className="text-tech-lightGray hover:text-white transition-colors">About</Link>
                        <Link href="/#keypoints" className="text-tech-lightGray hover:text-white transition-colors">Key Focus</Link>
                        <Link href="/#contact" className="text-tech-lightGray hover:text-white transition-colors">Contact</Link>
                    </div>

                    {/* <Button className="bg-tech-red hover:bg-tech-red/90 text-white">
                        Get Started
                    </Button> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
