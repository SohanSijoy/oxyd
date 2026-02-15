'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function PerformanceStat() {
    const containerRef = useRef<HTMLDivElement>(null);
    const numberRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(numberRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            }
        );
    }, []);

    return (
        <section ref={containerRef} className="w-full py-32 md:py-48 bg-deep-graphite flex items-center justify-center relative border-y border-white/5 overflow-hidden">
            <div className="text-center relative z-10 px-6">
                <div className="font-mono text-burnished-bronze text-xs md:text-sm uppercase tracking-widest mb-4">
                    Elite Standard // Deadlift
                </div>
                <div ref={numberRef} className="font-oswald font-bold text-[22vw] md:text-[20vw] leading-none text-vapor-white tracking-tighter opacity-90 mix-blend-lighten">
                    495<span className="text-[5vw] align-top text-white/20 ml-4 font-normal">LBS</span>
                </div>
                <div className="font-inter text-vapor-white/40 text-xs md:text-base max-w-md mx-auto mt-8 font-light tracking-wide">
                    The minimum entry requirement is not participation. <br />It is capability.
                </div>
            </div>

            {/* Massive Background Watermark - Clipped */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-oswald text-[40vw] text-white/[0.02] pointer-events-none select-none whitespace-nowrap z-0">
                STRENGTH
            </div>
        </section>
    );
}
