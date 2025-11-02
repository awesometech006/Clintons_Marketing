import React, { useState, useEffect, useRef } from "react";
import "./RoadmapAlt.css";

const phases = [
    {
        phase: "Phase 1",
        title: "Marketplace Launch",
        description: "Digital product store + creator onboarding.",
        orbColor: "orb-pink",
    },
    {
        phase: "Phase 2",
        title: "The Vault Expansion",
        description: "Exclusive bundles, automation tools, and AI product drops.",
        orbColor: "orb-yellow",
    },
    {
        phase: "Phase 3",
        title: "AI Creator Assistant",
        description: "Generate product descriptions, images, and names using built-in AI.",
        orbColor: "orb-orange",
    },
    {
        phase: "Phase 4",
        title: "Smart Licensing Blockchain",
        description: "NFT-style ownership certificates for verified digital assets.",
        orbColor: "orb-blue",
    },
    {
        phase: "Phase 5",
        title: "Global Growth",
        description: "Multi-language marketplace + international affiliate system.",
        orbColor: "orb-purple",
    },
];

function RoadmapAlt() {
    const [scrollX, setScrollX] = useState(0);
    const trackRef = useRef(null);
    const pageRef = useRef(null);

    useEffect(() => {
        const handleWheel = (e) => {
            // Stop the page from scrolling vertically
            e.preventDefault();

            const newScrollX = scrollX - e.deltaY * 1.5; // Multiply for faster scroll

            // Calculate boundaries
            const maxScroll = trackRef.current.offsetWidth - window.innerWidth;

            // Clamp the value (don't scroll past the start or end)
            const clampedScroll = Math.max(-maxScroll, Math.min(0, newScrollX));

            setScrollX(clampedScroll);
        };

        const currentPageRef = pageRef.current;
        if (currentPageRef) {
            currentPageRef.addEventListener("wheel", handleWheel, { passive: false });
        }

        // Cleanup
        return () => {
            if (currentPageRef) {
                currentPageRef.removeEventListener("wheel", handleWheel);
            }
        };
    }, [scrollX]); // Re-run when scrollX changes

    return (
        <div className="roadmap-alt-page" ref={pageRef}>
            {/* --- Scroll Hint --- */}
            <div className="scroll-hint">
                <div className="mouse-icon">
                    <div className="mouse-wheel"></div>
                </div>
                <span>Scroll to explore the future</span>
            </div>

            {/* --- Horizontal Track --- */}
            <div
                className="roadmap-track"
                ref={trackRef}
                style={{ transform: `translateX(${scrollX}px)` }}
            >
                {/* Intro Slide */}
                <section className="roadmap-slide intro-slide">
                    <div className="slide-content">
                        <h1 className="intro-headline">The Future Roadmap</h1>
                    </div>
                </section>

                {/* Phase Slides */}
                {phases.map((phase) => (
                    <section key={phase.phase} className="roadmap-slide">
                        {/* Background Orb */}
                        <div className={`slide-bg-orb ${phase.orbColor}`}></div>

                        {/* Parallax Content */}
                        <div
                            className="slide-content"
                            style={{ transform: `translateX(${scrollX * 0.15}px)` }} // Parallax
                        >
                            <span className="slide-phase">{phase.phase}</span>
                            <h2 className="slide-title">{phase.title}</h2>
                            <p className="slide-desc">{phase.description}</p>
                        </div>
                    </section>
                ))}

                {/* End Slide */}
                <section className="roadmap-slide end-slide">
                    <div className="slide-content">
                        <h1 className="intro-headline">The future is just getting started.</h1>
                        <p className="slide-desc">Join us.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default RoadmapAlt;