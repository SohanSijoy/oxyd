'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { JSX } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Decision(): JSX.Element {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(lineRef.current,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            );

            gsap.fromTo(textRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full min-h-[85vh] bg-carbon-black flex flex-col items-center justify-center px-6 overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-deep-graphite/10 to-transparent pointer-events-none"></div>

            <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center text-center">

                {/* Headline */}
                <h2 className="font-oswald text-[10vw] md:text-[6vw] leading-[0.9] text-vapor-white uppercase tracking-tighter mb-12 mix-blend-difference">
                    Discipline Is <br /> A Decision.
                </h2>

                {/* Expanding Bronze Divider */}
                <div className="w-full max-w-xs md:max-w-md h-px bg-deep-graphite mb-16 relative overflow-hidden">
                    <div ref={lineRef} className="absolute inset-0 bg-burnished-bronze w-full h-full origin-center"></div>
                </div>

                {/* Institutional Copy */}
                <div ref={textRef} className="opacity-0">
                    <p className="font-inter text-sm md:text-base text-vapor-white/60 font-light leading-relaxed max-w-md mx-auto mb-16">
                        OXYD is not open enrollment. Performance is evaluated. <br className="hidden md:block" />
                        Capacity is intentionally restricted.
                    </p>

                    {/* CTA Button */}
                    <Link href="/apply" className="group relative inline-flex items-center justify-center px-10 py-5 bg-vapor-white text-carbon-black font-oswald text-xs tracking-[0.2em] font-bold uppercase transition-all duration-300 hover:bg-burnished-bronze hover:text-white">
                        <span className="relative z-10">Apply For Membership</span>
                    </Link>

                    {/* Authority Strip */}
                    <div className="mt-12 flex flex-col items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-burnished-bronze/50"></span>
                        <div className="font-mono text-[10px] text-vapor-white/30 uppercase tracking-[0.3em]">
                            Current Capacity: 94% <br /> Updated Weekly
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
