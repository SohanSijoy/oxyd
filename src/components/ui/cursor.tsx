'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Only run on desktop/fine pointer devices
        const isTouch = window.matchMedia('(pointer: coarse)').matches;
        if (isTouch) return;

        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        // Center the cursor
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });
        gsap.set(follower, { xPercent: -50, yPercent: -50 });

        const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });

        // Follower has a slight delay for fluid feel
        const xToFollower = gsap.quickTo(follower, "x", { duration: 0.4, ease: "power3" });
        const yToFollower = gsap.quickTo(follower, "y", { duration: 0.4, ease: "power3" });

        const onMouseMove = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
            xToFollower(e.clientX);
            yToFollower(e.clientY);
        };

        window.addEventListener('mousemove', onMouseMove);

        // Hover effects logic
        const hoverables = document.querySelectorAll('a, button, .hover-trigger');

        const onMouseEnter = () => {
            gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.2 });
            gsap.to(follower, {
                scale: 1.2, // Reduced from 1.5
                backgroundColor: 'rgba(197, 160, 89, 0.05)', // Even more subtle tint
                borderColor: 'rgba(197, 160, 89, 0.6)',
                borderWidth: '1px',
                duration: 0.3
            });
        };

        const onMouseLeave = () => {
            gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.2 });
            gsap.to(follower, {
                scale: 1,
                backgroundColor: 'transparent',
                borderColor: 'rgba(197, 160, 89, 0.3)', // Lower default opacity
                borderWidth: '1px',
                duration: 0.3
            });
        };

        hoverables.forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            hoverables.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return (
        <>
            {/* Main dot - smaller */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-burnished-bronze z-[9999] pointer-events-none mix-blend-difference hidden md:block"
            />
            {/* Outer ring / follower - smaller and more transparent */}
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-6 h-6 rounded-full border border-burnished-bronze/30 z-[9998] pointer-events-none mix-blend-difference hidden md:block transition-colors"
            />
        </>
    );
}
