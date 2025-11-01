import React from "react";
import "./TheVault.css"; // We will create this CSS file next

function TheVault() {
    return (
        <section className="vault-section">
            {/* The pulsing background glow element */}
            <div className="vault-background-glow"></div>

            <div className="vault-container">
                {/* Wrapper for the "float" animation */}
                <div className="vault-content-float">
                    <h2 className="vault-headline">The Vault – Unlimited Access</h2>
                    <h3 className="vault-subheadline">
                        “Welcome to the digital goldmine.”
                    </h3>
                    <p className="vault-description">
                        Unlock thousands of premium assets, exclusive bundles, and AI-powered
                        business tools inside The Vault — our members-only library for
                        entrepreneurs and creators who want unlimited downloads, product
                        drops, and early access to new assets.
                    </p>
                    <div className="vault-cta-container">
                        <button className="vault-cta-btn">Join The Vault &rarr;</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TheVault;