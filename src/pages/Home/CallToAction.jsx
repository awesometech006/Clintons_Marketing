import React from "react";
import "./CallToAction.css";

function CallToAction() {
    return (
        <section className="cta-section">
            <div className="cta-container">
                <h2 className="cta-headline">Build your digital empire today.</h2>
                <div className="cta-buttons">
                    <button className="cta-btn cta-btn-primary">
                        Start Selling
                    </button>
                    <button className="cta-btn cta-btn-secondary">
                        Explore Marketplace
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;