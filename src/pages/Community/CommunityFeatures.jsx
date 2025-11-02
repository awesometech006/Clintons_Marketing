import React from "react";
import "./CommunityFeatures.css";

// --- 1. Import your local images here ---
// (Adjust these paths to match your folder structure and file names)
import imgForum from "../../assets/Forum.png";
import imgContest from "../../assets/Contest.png";
import imgCaseStudy from "../../assets/CaseStudy.png";
import imgEvent from "../../assets/Event.png";
import imgPartner from "../../assets/Partner.png";

// --- 2. Use the imported images in your array ---
const features = [
    {
        title: "Forums & Networking",
        desc: "Engage in discussions and form new partnerships.",
        image: `url(${imgForum})` // Use the imported variable
    },
    {
        title: "Monthly Creator Contests",
        desc: "Win prizes and get featured.",
        image: `url(${imgContest})`
    },
    {
        title: "Case Studies",
        desc: "Learn from real success stories.",
        image: `url(${imgCaseStudy})`
    },
    {
        title: "Collaboration Events",
        desc: "Join exclusive online and offline meetups.",
        image: `url(${imgEvent})`
    },
    {
        title: "Partner Opportunities",
        desc: "Grow with our affiliate and partner programs.",
        image: `url(${imgPartner})`
    },
];

// Re-usable card component (This part is unchanged from my last code)
const FeatureCard = ({ title, desc, image }) => {
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x-glow", `${x}px`);
        card.style.setProperty("--mouse-y-glow", `${y}px`);
    };

    return (
        <div className="feature-card"
            onMouseMove={handleMouseMove}
            style={{ backgroundImage: image }}> {/* Image is applied here */}
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
                <h3 className="feature-card-title">{title}</h3>
                <p className="feature-card-desc">{desc}</p>
            </div>
        </div>
    );
};

// Main component (This part is also unchanged)
function CommunityFeatures() {
    return (
        <section className="features-section">
            <div className="features-container">
                <h2 className="features-headline">What's Inside the Movement</h2>
                <p className="features-subheadline">
                    This isn't a spectator sport. Get in and get involved.
                </p>
            </div>

            <div className="features-scroller-wrapper">
                <div className="features-scroller-inner">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            title={feature.title}
                            desc={feature.desc}
                            image={feature.image} // Passed to the card
                        />
                    ))}
                    <div className="feature-card-peek">
                        <p>And so much more...</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CommunityFeatures;