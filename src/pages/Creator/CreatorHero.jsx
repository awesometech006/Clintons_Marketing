import React from "react";
import "./CreatorHero.css";

function CreatorHero() {
    return (
        <section className="creator-hero-section">
            <div className="creator-hero-content">
                <h1 className="creator-hero-headline">Upload Once. Earn Forever.</h1>
                <h2 className="creator-hero-subheadline">
                    Your creativity deserves more than likes — it deserves income.
                </h2>
                <p className="creator-hero-intro">
                    Join thousands of creators turning their work into assets that
                    generate passive revenue every single day. Clinton’s Hub gives you
                    the platform, analytics, and audience to scale your success.
                </p>
            </div>

            {/* --- Digital Pipeline Animation --- */}
            <div className="pipeline-animation">
                <div className="pipeline-icon upload">📤</div>
                <div className="pipeline-stream">
                    <div className="pipeline-asset template">📄</div>
                    <div className="pipeline-asset course">🎬</div>
                    <div className="pipeline-asset tool">✨</div>
                </div>
                <div className="pipeline-icon vault">💰</div>
            </div>
        </section>
    );
}

export default CreatorHero;