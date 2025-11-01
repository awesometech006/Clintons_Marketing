import React from "react";
import "./Testimonials.css";

const testimonials = [
    {
        quote: "I launched a digital business in 3 days using tools from 90caliber global academy.",
        name: "Samantha D.",
    },
    {
        quote: "Finally, a marketplace that treats creators like partners.",
        name: "Arjun R.",
    },
    {
        quote: "This isn’t just a platform. It’s the future of the digital economy.",
        name: "Leo M.",
    },
];

// We duplicate the array to create a seamless loop
const marqueeTestimonials = [...testimonials, ...testimonials];

function Testimonials() {
    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <h2 className="testimonials-headline">What People Are Saying</h2>

                <div className="testimonials-marquee">
                    <div className="testimonials-track">
                        {marqueeTestimonials.map((item, index) => (
                            <div key={index} className="testimonial-card">
                                <p className="testimonial-quote">“{item.quote}”</p>
                                <span className="testimonial-name">— {item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;