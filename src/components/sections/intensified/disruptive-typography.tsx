'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function DisruptiveTypography() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom center",
                toggleActions: "play reverse play reverse"
            }
        });

        tl.fromTo(textRef.current,
            { scale: 0.9, opacity: 0, filter: 'blur(10px)' },
            { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: "power4.out" }
        )
            .fromTo(lineRef.current,
                { width: 0 },
                { width: '100%', duration: 1.5, ease: "expo.out" },
                "-=0.8"
            );

    }, []);

    return (
        <section ref={containerRef} className="min-h-screen w-full bg-carbon-black flex flex-col items-center justify-center px-6 relative overflow-hidden z-30 py-20">
            <div className="w-full max-w-[90vw] md:max-w-7xl relative mx-auto">
                <h2 ref={textRef} className="font-oswald font-bold text-[12vw] md:text-[10vw] leading-[0.85] text-vapor-white text-center uppercase tracking-[-0.04em] mix-blend-difference break-words">
                    We Do Not <br /> Train Everyone.
                </h2>
                <div ref={lineRef} className="h-2 bg-burnished-bronze mt-8 mx-auto max-w-[200px]"></div>
                <p className="font-mono text-center text-burnished-bronze/60 text-xs md:text-sm uppercase tracking-[0.4em] mt-12 mb-0">
                    Selection precedes strength.
                </p>
            </div>

            {/* Subtle noise overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </section>
    );
}
