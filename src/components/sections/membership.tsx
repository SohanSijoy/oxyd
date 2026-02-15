'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

export default function Membership() {
    const highlightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Pulse effect for the "Current Capacity" blip
        gsap.to('.capacity-blip', {
            opacity: 0.2,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });

        // Highlight card glow on hover or default
        if (highlightRef.current) {
            // Optional GSAP for entrance
        }
    }, []);

    return (
        <section id="inquire" className="relative w-full min-h-[80vh] bg-carbon-black flex flex-col items-center justify-center py-32 md:py-48 px-6 overflow-hidden">
            {/* Section Identity */}
            <div className="absolute top-12 left-6 md:left-12 z-20 font-mono text-xs text-burnished-bronze/50 uppercase tracking-widest">
                03 // Protocol
            </div>

            <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-center">
                {/* Headline: Access Is Earned */}
                <h2 className="font-oswald text-[12vw] md:text-[8vw] leading-[0.85] text-vapor-white text-center uppercase tracking-tighter mb-12 mix-blend-difference">
                    Access <br /> Is Earned.
                </h2>

                {/* Expanding Bronze Divider */}
                <div className="w-full h-px bg-deep-graphite mb-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-burnished-bronze/60 w-full h-full animate-slide-right origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out" style={{ transform: 'scaleX(1)' }}></div>
                </div>

                {/* Split Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 w-full items-start">
                    {/* Left: Institutional Paragraph */}
                    <div className="md:text-right border-r border-white/5 pr-0 md:pr-12">
                        <p className="font-inter text-lg md:text-xl text-vapor-white/80 font-light leading-relaxed max-w-md ml-auto">
                            OXYD operates on a structured intake basis. Performance capability is evaluated before membership protocol is granted.
                        </p>
                        <div className="mt-8">
                            <span className="font-mono text-xs text-burnished-bronze tracking-widest uppercase border border-burnished-bronze/30 px-4 py-2 inline-block">
                                Current Capacity: 94%
                            </span>
                        </div>
                    </div>

                    {/* Right: 3-Step Protocol */}
                    <div className="flex flex-col gap-8">
                        <div className="group cursor-default">
                            <div className="font-mono text-[10px] text-vapor-white/40 uppercase tracking-widest mb-1">Step 01</div>
                            <div className="font-oswald text-3xl text-vapor-white/60 group-hover:text-vapor-white transition-colors duration-300">Application Review</div>
                        </div>
                        <div className="group cursor-default">
                            <div className="font-mono text-[10px] text-vapor-white/40 uppercase tracking-widest mb-1">Step 02</div>
                            <div className="font-oswald text-3xl text-vapor-white/60 group-hover:text-vapor-white transition-colors duration-300">Performance Consultation</div>
                        </div>
                        <div className="group cursor-default">
                            <div className="font-mono text-[10px] text-vapor-white/40 uppercase tracking-widest mb-1">Step 03</div>
                            <div className="font-oswald text-3xl text-vapor-white/60 group-hover:text-vapor-white transition-colors duration-300">Capacity Confirmation</div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-24">
                    <Link href="/apply" className="block text-center border-b border-vapor-white/30 pb-1 text-vapor-white text-xs tracking-[0.3em] uppercase hover:text-burnished-bronze hover:border-burnished-bronze transition-all duration-300 hover:tracking-[0.4em]">
                        Initiate Application Protocol
                    </Link>
                </div>
            </div>

            {/* Background Depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-deep-graphite/20 to-transparent pointer-events-none"></div>
        </section>
    );
}
