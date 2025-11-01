import React, { useState, useEffect } from "react";

// You can find simple icons from a library like 'react-icons'
// For this example, I'll use simple text placeholders for icons.
const UploadIcon = () => <span className="text-3xl">📤</span>;
const MoneyIcon = () => <span className="text-3xl">💸</span>;
const SearchIcon = () => <span className="text-3xl">🔍</span>;

const scenes = [
    {
        icon: <UploadIcon />,
        text: "Creators uploading files...",
    },
    {
        icon: <MoneyIcon />,
        text: "Digital assets transforming into money...",
    },
    {
        icon: <SearchIcon />,
        text: "Buyers discovering new tools...",
    },
];

function AnimatedHeroVisual() {
    const [currentScene, setCurrentScene] = useState(0);

    useEffect(() => {
        // Set an interval to change the scene every 3 seconds
        const interval = setInterval(() => {
            setCurrentScene((prevScene) => (prevScene + 1) % scenes.length);
        }, 3000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mt-20 w-full max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gray-900/50 rounded-xl border border-gray-800 flex items-center justify-center overflow-hidden">
                {scenes.map((scene, index) => (
                    <div
                        key={index}
                        className={`absolute flex flex-col items-center justify-center gap-4 transition-opacity duration-1000 ${index === currentScene ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {scene.icon}
                        <p className="text-gray-400">{scene.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AnimatedHeroVisual;