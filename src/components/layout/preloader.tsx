'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
    const containerRef = useRef<HTMLDivElement>(null);
    const topPanelRef = useRef<HTMLDivElement>(null);
    const bottomPanelRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLSpanElement>(null);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setIsActive(false);
            },
            defaults: { ease: 'power3.inOut' },
        });

        const counter = { value: 0 };

        // Initial state
        gsap.set(lineRef.current, { width: '0%' });
        gsap.set([topPanelRef.current, bottomPanelRef.current], { yPercent: 0 });

        // 1. Line draws across
        tl.to(lineRef.current, {
            width: '100%',
            duration: 1.5,
            ease: 'expo.out',
        });

        // 2. Counter counts up (overlapping with end of line draw)
        tl.to(
            counter,
            {
                value: 100,
                duration: 1.5,
                onUpdate: () => {
                    if (counterRef.current) {
                        counterRef.current.textContent = Math.round(counter.value)
                            .toString()
                            .padStart(2, '0');
                    }
                },
            },
            '-=0.5'
        );

        // 3. Split open (Curtain effect)
        tl.to(
            topPanelRef.current,
            {
                yPercent: -100,
                duration: 1.2,
            },
            'split'
        );

        tl.to(
            bottomPanelRef.current,
            {
                yPercent: 100,
                duration: 1.2,
            },
            'split'
        );

        // Fade out line and counter during split
        tl.to([lineRef.current, counterRef.current], {
            opacity: 0,
            duration: 0.5
        }, 'split');

        return () => {
            tl.kill();
        };
    }, []);

    if (!isActive) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 flex flex-col h-screen w-screen overflow-hidden pointer-events-none"
        >
            {/* Top Panel */}
            <div
                ref={topPanelRef}
                className="relative flex-1 w-full bg-carbon-black shadow-2xl z-20"
            />

            {/* Center Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] z-30 flex items-center justify-center">
                <div ref={lineRef} className="h-full bg-burnished-bronze w-0 shadow-[0_0_10px_rgba(197,160,89,0.5)]" />
            </div>

            {/* Bottom Panel */}
            <div
                ref={bottomPanelRef}
                className="relative flex-1 w-full bg-carbon-black z-20 flex items-end justify-end p-4 md:p-10"
            >
                <div className="text-vapor-white font-oswald text-[10vw] md:text-[8vw] leading-none tracking-tighter mix-blend-difference opacity-20 md:opacity-100">
                    <span ref={counterRef}>00</span>
                </div>
            </div>
        </div>
    );
}
