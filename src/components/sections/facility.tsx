'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const facilities = [
    {
        title: 'Biomechanics Lab',
        desc: 'Precision movement analysis.',
        img: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=2670&auto=format&fit=crop',
    },
    {
        title: 'Recovery Suite',
        desc: 'Cryotherapy & Infrared Sauna.',
        img: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=2670&auto=format&fit=crop',
    },
    {
        title: 'The Arena',
        desc: 'Olympic platforms & Turf.',
        img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop',
    },
    {
        title: 'Cognitive Zone',
        desc: 'Mental performance tracking.',
        img: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=2670&auto=format&fit=crop',
    },
];

export default function Facility() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: '-300vw',
                ease: 'none',
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: 'top top',
                    end: '2000 top',
                    scrub: 0.6,
                    pin: true,
                },
            }
        );

        return () => {
            pin.kill();
        };
    }, []);

    return (
        <section className="overflow-hidden bg-carbon-black relative py-32 md:py-48">
            <div ref={triggerRef}>
                <div
                    ref={sectionRef}
                    className="h-screen w-[400vw] flex flex-row relative"
                >
                    {/* Section Identity - Fixed Position relative to viewport when pinned */}
                    <div className="absolute top-10 left-6 md:left-12 z-20 font-mono text-xs text-burnished-bronze/50 uppercase tracking-widest mix-blend-difference">
                        02 // Facility
                    </div>

                    {facilities.map((item, index) => (
                        <div
                            key={index}
                            className="w-[100vw] h-full relative flex items-center justify-center border-r border-deep-graphite/50 group"
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 grayscale group-hover:grayscale-0"
                                    style={{ backgroundImage: `url(${item.img})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-transparent to-transparent opacity-90" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 text-center max-w-4xl p-6">
                                <h2 className="font-oswald text-[10vw] uppercase leading-none text-vapor-white mix-blend-difference mb-4">
                                    {item.title}
                                </h2>
                                <p className="font-inter text-xl md:text-2xl text-burnished-bronze font-light tracking-wide">
                                    {item.desc}
                                </p>
                                <div className="mt-8 transition-opacity opacity-0 group-hover:opacity-100 duration-500">
                                    <span className="text-vapor-white border border-vapor-white px-8 py-3 text-[10px] tracking-[0.2em] uppercase hover:bg-vapor-white hover:text-carbon-black transition-colors font-bold">
                                        View Sector
                                    </span>
                                </div>
                            </div>

                            <div className="absolute bottom-10 right-10 font-oswald text-[15vw] leading-none text-deep-graphite opacity-10 pointer-events-none select-none">
                                0{index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
