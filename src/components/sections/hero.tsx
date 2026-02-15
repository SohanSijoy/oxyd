'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const line1Ref = useRef<HTMLSpanElement>(null);
    const line2Ref = useRef<HTMLSpanElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // GSAP Animation Context
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Intro Animation - Targets inner spans to avoid conflict with scroll trigger
            const tl = gsap.timeline();

            tl.fromTo([line1Ref.current, line2Ref.current],
                { y: 100, opacity: 0, scale: 1.1 },
                { y: 0, opacity: 1, scale: 1, duration: 1.8, ease: "power3.out", stagger: 0.2 }
            )
                .fromTo(subRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
                    "-=1.2"
                );

            // Scroll Parallax & Scale - Targets the container (titleRef)
            // ensuring it starts from "natural" state (opacity 1)
            if (containerRef.current && titleRef.current) {
                gsap.to(titleRef.current, {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true
                    },
                    y: 100, // Slight upward parallax relative to scroll
                    scale: 0.95, // Subtle scale down
                    opacity: 0.8 // Fades to 0.8, but returns to 1 when scrolling back up
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Lens Effect Logic
    const lensRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!lensRef.current || !containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Use requestAnimationFrame for performance if needed, but direct style update is usually fast enough for simple CSS vars
            requestAnimationFrame(() => {
                if (lensRef.current) {
                    lensRef.current.style.setProperty('--x', `${x}px`);
                    lensRef.current.style.setProperty('--y', `${y}px`);
                }
            });
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
        }
        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden flex items-center bg-carbon-black z-20 cursor-crosshair">
            {/* Background Video Placeholder - Deepened & Cinematic */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                {/* 1. Base Video Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-carbon-black via-carbon-black/60 to-transparent z-10"></div>

                {/* 2. Simulated Video Texture */}
                <div className="absolute inset-0 bg-cover bg-center opacity-80"
                    style={{ backgroundImage: 'url(/hero.jpeg)' }}>
                </div>

                {/* 2b. OPTICAL INSPECTION LAYER (Lens Effect - Desktop Only) */}
                <div ref={lensRef}
                    className="absolute inset-0 bg-cover bg-center opacity-0 md:opacity-100 mix-blend-overlay pointer-events-none z-20 transition-opacity duration-500"
                    style={{
                        backgroundImage: 'url(/hero.jpeg)',
                        filter: 'brightness(1.3) contrast(1.2) saturate(0)',
                        maskImage: 'radial-gradient(circle 120px at var(--x, 50%) var(--y, 50%), black, transparent)',
                        WebkitMaskImage: 'radial-gradient(circle 120px at var(--x, 50%) var(--y, 50%), black, transparent)',
                    }}>
                </div>

                {/* 3. Cinematic Depth Layers */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0)_0%,rgba(5,5,5,0.8)_100%)] z-10 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay z-20"></div>

                {/* 4. Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,1)_120%)] z-20"></div>
            </div>

            {/* Content Container - Constrained Width & Architectural */}
            <div className="relative z-30 w-full md:max-w-[70%] px-4 md:pl-24 md:pr-6 flex flex-col justify-center h-full">

                {/* Vertical Bronze Anchor */}
                <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-burnished-bronze to-transparent opacity-60 hidden md:block"></div>

                {/* Micro Authority Strip */}
                <div ref={subRef} className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 pl-1 md:pl-0">
                    <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-burnished-bronze/80 shadow-[0_0_10px_rgba(197,160,89,0.5)]"></span>
                    <span className="font-mono text-[10px] md:text-xs text-vapor-white/60 tracking-[0.2em] uppercase">
                        Capacity: 94% <span className="text-burnished-bronze/40 mx-2">//</span> Intake Restricted
                    </span>
                </div>

                {/* Cinematic Headline - Stacked & Rhythmic */}
                <h1 ref={titleRef} className="font-oswald font-bold leading-[0.85] tracking-[-0.03em] uppercase text-vapor-white mix-blend-difference drop-shadow-2xl">
                    <span ref={line1Ref} className="block text-[clamp(40px,12vw,120px)] md:text-[8vw] text-vapor-white/90 mb-2 md:mb-4">Construct</span>
                    <span ref={line2Ref} className="block text-[clamp(45px,13vw,140px)] md:text-[9vw] text-vapor-white">Your Legacy</span>
                </h1>

                {/* Subtext & CTA */}
                <div className="mt-8 md:mt-12 pl-1 border-l border-vapor-white/10 md:border-none">
                    <p className="font-inter font-light text-sm md:text-lg text-vapor-white/70 max-w-xs md:max-w-md leading-relaxed tracking-wide">
                        The city’s only hyper-performance facility for the disciplined few. <br className="hidden md:block" />
                        <span className="text-burnished-bronze/80 mt-2 block md:inline md:mt-0">Obsession is a requirement.</span>
                    </p>
                </div>
            </div>

            {/* Scroll Indicator - Minimal */}
            <div className="absolute bottom-8 md:bottom-12 left-6 md:left-24 z-30 flex items-center gap-4 opacity-40">
                <div className="h-px w-8 md:w-12 bg-vapor-white"></div>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-vapor-white">Scroll</span>
            </div>
        </section>
    );
}
