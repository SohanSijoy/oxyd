'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function GatekeeperHero() {
    const scanLineRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Vertical scanning line animation
        if (scanLineRef.current) {
            gsap.fromTo(scanLineRef.current,
                { top: '-10%' },
                {
                    top: '110%',
                    duration: 8,
                    ease: 'linear',
                    delay: 1
                }
            );
        }
    }, []);

    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center bg-carbon-black overflow-hidden pointer-events-none">
            {/* Scanning Line */}
            <div
                ref={scanLineRef}
                className="absolute left-0 w-full h-[1px] bg-burnished-bronze opacity-10 z-0 pointer-events-none"
                style={{ boxShadow: '0 0 10px rgba(197, 160, 89, 0.2)' }}
            />

            {/* Status Label - Removed for cleanliness/authority */}

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <h1 className="font-oswald text-[7vw] md:text-[5vw] leading-[0.9] tracking-[-0.03em] text-vapor-white uppercase mb-6">
                    Begin Your <br /> Application.
                </h1>

                {/* Bronze Divider */}
                <div className="w-16 h-[1px] bg-burnished-bronze mx-auto mb-6 opacity-60"></div>

                <p className="font-inter text-vapor-white/60 max-w-md mx-auto text-xs md:text-sm leading-relaxed tracking-wide uppercase">
                    All membership inquiries are reviewed individually. <br />
                    Capacity is intentionally limited.
                </p>
            </div>

            {/* Scroll Prompt */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-vapor-white to-transparent"></div>
            </div>
        </section>
    );
}
