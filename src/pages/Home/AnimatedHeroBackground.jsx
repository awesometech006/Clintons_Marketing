import React, { useState, useEffect } from "react";

// Simple SVG Icons
const UploadIcon = () => (
    <svg className="anim-bg-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
    </svg>
);
const MoneyIcon = () => (
    <svg className="anim-bg-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
    </svg>
);
const SearchIcon = () => (
    <svg className="anim-bg-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
);

const sceneIcons = [
    <UploadIcon key="upload" />,
    <MoneyIcon key="money" />,
    <SearchIcon key="search" />,
];

function AnimatedHeroBackground() {
    const [currentIcon, setCurrentIcon] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIcon((prevIcon) => (prevIcon + 1) % sceneIcons.length);
        }, 2000); // Same interval as before for visual changes

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="anim-bg">
            {/* --- Background Animated Grid/Particles --- */}
            <div className="anim-bg-grid">
                <div className="anim-bg-grid-inner"></div>
            </div>

            {/* --- Floating Abstract Shapes --- */}
            <div className="anim-bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4 anim-bg-icon"></div>
                <div className="shape shape-5 anim-bg-icon"></div>
            </div>

            {/* --- Cycling Scene Icons (NEW) --- */}
            <div className="anim-bg-scene-icons">
                {sceneIcons.map((IconComponent, index) => (
                    <div
                        key={index}
                        className={`anim-bg-scene-icon ${index === currentIcon ? "active" : ""
                            }`}
                    >
                        {IconComponent}
                    </div>
                ))}
            </div>

            {/* The CSS keyframes are now in HeroSection.css, so the <style> tag is removed from here */}
        </div>
    );
}

export default AnimatedHeroBackground;