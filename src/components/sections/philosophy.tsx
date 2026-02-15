'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const lines = textContainerRef.current?.querySelectorAll('.philosophy-line');

        if (lines && containerRef.current) {
            lines.forEach((line, index) => {
                gsap.to(line, {
                    color: '#F2F2F2', // vapor-white
                    opacity: 1,
                    filter: 'blur(0px)',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: `top+=${index * 100} center`, // Stagger start based on index
                        end: `top+=${(index + 1) * 200} center`,
                        scrub: true,
                        toggleActions: 'play reverse play reverse',
                    }
                });
            });
        }

        // Parallax for images
        const images = imagesRef.current?.querySelectorAll('.parallax-image');
        if (images) {
            images.forEach((img) => {
                gsap.to(img, {
                    yPercent: 20,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: img.parentElement,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    }
                });
            });
        }
    }, []);

    return (
        <section ref={containerRef} id="philosophy" className="relative w-full bg-carbon-black py-32 md:py-44 px-6 md:px-12 overflow-hidden">
            {/* Section Identity */}
            <div className="absolute top-12 left-6 md:left-12 z-20 font-mono text-xs text-burnished-bronze/50 uppercase tracking-widest mix-blend-difference">
                01 // Philosophy
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 relative">
                {/* Left Column: Manifesto Text */}
                <div className="col-span-1 md:col-span-6 flex flex-col justify-center relative z-10">
                    <div ref={textContainerRef} className="font-oswald text-5xl md:text-[6vw] leading-[0.9] uppercase font-bold text-vapor-white mix-blend-difference relative tracking-tighter">
                        <div className="mb-4">
                            We do not <br /> sell exercise.
                        </div>
                        <div className="mb-4 text-vapor-white/80">
                            We engineer <br /> outcomes.
                        </div>
                        <div className="mb-4 text-vapor-white/60">
                            OXYD is for the <br /> disciplined few.
                        </div>
                        <div className="text-burnished-bronze">
                            Refuse to <br /> compromise.
                        </div>
                    </div>
                </div>

                {/* Right Column: Imagery - Stacked & Controlled */}
                <div className="col-span-1 md:col-span-6 flex flex-col gap-12 relative z-0 mt-12 md:mt-0">
                    {/* Image 1 - Offset Top */}
                    <div ref={imagesRef} className="aspect-[3/4] w-full md:w-[80%] ml-auto relative overflow-hidden bg-deep-graphite border border-white/5">
                        <div className="absolute inset-0 bg-cover bg-center opacity-60 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop)' }}></div>
                    </div>
                    {/* Image 2 - Offset/Overlapping via Margin to break linearity safely */}
                    <div className="aspect-[4/3] w-full md:w-[90%] -mt-12 md:-mt-24 relative overflow-hidden bg-deep-graphite border border-white/5 shadow-2xl z-10 self-start">
                        <div className="absolute inset-0 bg-cover bg-center opacity-70 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop)' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
