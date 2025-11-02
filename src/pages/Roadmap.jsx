import React, { useState } from "react";
import "./Roadmap.css"; // Main CSS for this page
import RoadmapStickyVisual from "../pages/RoadMap/RoadmapStickyVisual";
import RoadmapPhaseBlock from "../pages/RoadMap/RoadmapPhaseBlock";

const phases = [
    {
        phase: "Phase 1",
        title: "Marketplace Launch",
        description: "Digital product store + creator onboarding.",
    },
    {
        phase: "Phase 2",
        title: "The Vault Expansion",
        description: "Exclusive bundles, automation tools, and AI product drops.",
    },
    {
        phase: "Phase 3",
        title: "AI Creator Assistant",
        description: "Generate product descriptions, images, and names using built-in AI.",
    },
    {
        phase: "Phase 4",
        title: "Smart Licensing Blockchain",
        description: "NFT-style ownership certificates for verified digital assets.",
    },
    {
        phase: "Phase 5",
        title: "Global Growth",
        description: "Multi-language marketplace + international affiliate system.",
    },
];

function Roadmap() {
    const [activePhase, setActivePhase] = useState(phases[0].phase);

    return (
        <div className="roadmap-page">
            <div className="roadmap-header">
                <h1 className="roadmap-main-headline">The Future Roadmap</h1>
            </div>

            <div className="roadmap-container">
                {/* --- Left "Sticky" Column --- */}
                <div className="roadmap-sticky-side">
                    <RoadmapStickyVisual
                        allPhases={phases}
                        activePhaseId={activePhase}
                    />
                </div>

                {/* --- Right "Scrolling" Column --- */}
                <div className="roadmap-scroll-side">
                    {phases.map((phase) => (
                        <RoadmapPhaseBlock
                            key={phase.phase}
                            phase={phase.phase}
                            title={phase.title}
                            description={phase.description}
                            onVisible={setActivePhase} // This updates the sticky side
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Roadmap;