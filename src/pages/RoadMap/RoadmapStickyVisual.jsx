import React from "react";
import "./RoadmapStickyVisual.css";

function RoadmapStickyVisual({ allPhases, activePhaseId }) {
    return (
        <div className="sticky-visual-container">
            {/* This animated bar shows progress */}
            <div className="progress-bar">
                {allPhases.map((phase, index) => {
                    // Find index of active phase
                    const activeIndex = allPhases.findIndex(p => p.phase === activePhaseId);
                    // This phase is "completed" if its index is less than the active one
                    const isCompleted = index < activeIndex;
                    const isActive = phase.phase === activePhaseId;

                    return (
                        <div
                            key={phase.phase}
                            className={`progress-segment ${isActive || isCompleted ? 'completed' : ''}`}
                        ></div>
                    );
                })}
            </div>

            <div className="phase-content-wrapper">
                {allPhases.map((phase) => (
                    <div
                        key={phase.phase}
                        className={`phase-content ${phase.phase === activePhaseId ? 'is-active' : ''}`}
                    >
                        <span className="phase-number">{phase.phase}</span>
                        <h2 className="phase-title">{phase.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RoadmapStickyVisual;