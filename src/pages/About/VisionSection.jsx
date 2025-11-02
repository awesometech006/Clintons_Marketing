import React, { useEffect, useRef, useState } from "react";
import "./VisionSection.css";

function VisionSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target); // Only observe once
                    }
                });
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className="about-vision-section" ref={sectionRef}>
            <div className="about-vision-container">
                <p className={`about-vision-paragraph fade-in-animation ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0s' }}>
                    90caliber global academy was founded with one vision: to empower creators and entrepreneurs to own their digital future.
                </p>
                <p className={`about-vision-paragraph fade-in-animation ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
                    We’re not another store — we’re a movement. A place where digital assets meet innovation,
                    where every product is built with purpose, and every creator gets the recognition and revenue they deserve.
                </p>
                <p className={`about-vision-paragraph fade-in-animation ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
                    Our mission is simple — to make digital business accessible, scalable, and profitable for everyone.
                </p>
            </div>
        </section>
    );
}

export default VisionSection;