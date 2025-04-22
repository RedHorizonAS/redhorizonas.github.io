'use client'

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 p-3 bg-tech-red text-white rounded-full shadow-lg hover:bg-tech-red/90 transition-all duration-300 z-50"
                    aria-label="Back to top"
                >
                    <ArrowUp size={20} />
                </button>
            )}
        </>
    );
};

export default BackToTop;
