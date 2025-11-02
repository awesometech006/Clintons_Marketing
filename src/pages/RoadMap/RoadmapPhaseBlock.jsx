import React, { useEffect, useRef } from "react";
import "./RoadmapPhaseBlock.css";

function RoadmapPhaseBlock({ phase, title, description, onVisible }) {
    const blockRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                // We only care when it *enters* the trigger zone
                if (entry.isIntersecting) {
                    onVisible(phase);
                }
            },
            {
                // This creates a "hot zone" in the middle of the viewport
                // (Starts 40% from top, ends 40% from bottom)
                rootMargin: "-40% 0px -40% 0px",

                // Fire as soon as any part enters this zone
                threshold: 0.01
            }
        );

        if (blockRef.current) {
            observer.observe(blockRef.current);
        }

        return () => {
            if (blockRef.current) {
                observer.unobserve(blockRef.current);
            }
        };
    }, [phase, onVisible]);

    return (
        <div className="phase-block" ref={blockRef}>
            <h3 className="phase-block-title">{title}</h3>
            <p className="phase-block-description">{description}</p>
        </div>
    );
}

export default RoadmapPhaseBlock;