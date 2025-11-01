import React, { useState, useEffect } from "react";

// --- Icons (No changes) ---
const UploadIcon = () => (
    <svg className="w-10 h-10 text-[#c6ff3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
    </svg>
);
const MoneyIcon = () => (
    <svg className="w-10 h-10 text-[#c6ff3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
    </svg>
);
const SearchIcon = () => (
    <svg className="w-10 h-10 text-[#c6ff3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
);
// --- Scenes (No changes) ---
const scenes = [
    {
        icon: <UploadIcon />,
        title: "Unleash Your Creations",
        text: "Seamlessly upload and manage your digital products.",
    },
    {
        icon: <MoneyIcon />,
        title: "Monetize Your Assets",
        text: "Watch your digital work transform into revenue.",
    },
    {
        icon: <SearchIcon />,
        title: "Discover & Innovate",
        text: "Explore a marketplace of tools and inspiration.",
    },
];

function CreativeHeroVisual() {
    const [currentScene, setCurrentScene] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentScene((prevScene) => (prevScene + 1) % scenes.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    // CHANGED: Removed mt-20, max-w-4xl, etc. from this div.
    // Added h-full to make it fill its parent.
    return (
        <div className="w-full h-full overflow-hidden">
            {/* CHANGED: Removed aspect-video, rounded-xl, border, shadow, p-8.
        Added w-full h-full to make it fill its parent.
      */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">

                {/* --- Background Animated Grid/Particles (No changes) --- */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-950 to-gray-800 opacity-70">
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:30px_30px] animate-pan-background"></div>
                </div>

                {/* --- Floating Abstract Shapes (No changes) --- */}
                <div className="absolute inset-0 z-10 overflow-hidden">
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#c6ff3e] opacity-10 rounded-full mix-blend-screen animate-float-1"></div>
                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500 opacity-10 rounded-full mix-blend-screen animate-float-2"></div>
                    <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-purple-500 opacity-10 rounded-lg animate-float-3"></div>
                </div>

                {/* --- Scene Content (No changes) --- */}
                {scenes.map((scene, index) => (
                    <div
                        key={index}
                        className={`absolute z-20 flex flex-col items-center justify-center gap-4 text-center transition-all duration-1000 ease-in-out
              ${index === currentScene
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-95"
                            }
            `}
                    >
                        {scene.icon}
                        <h3 className="text-2xl font-bold text-white mt-2">
                            {scene.title}
                        </h3>
                        <p className="text-gray-300 max-w-sm">{scene.text}</p>
                    </div>
                ))}
            </div>

            {/* --- Keyframes CSS (No changes) --- */}
            <style>{`
        @keyframes pan-background {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, 30px) scale(1.05); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, -20px) scale(1.03); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(15px, -10px) rotate(5deg); }
        }
        .animate-pan-background {
          animation: pan-background 30s linear infinite alternate;
        }
        .animate-float-1 {
          animation: float-1 15s ease-in-out infinite alternate;
        }
        .animate-float-2 {
          animation: float-2 18s ease-in-out infinite alternate-reverse;
        }
        .animate-float-3 {
          animation: float-3 12s ease-in-out infinite alternate;
        }
      `}</style>
        </div>
    );
}

export default CreativeHeroVisual;