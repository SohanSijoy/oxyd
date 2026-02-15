'use client';

import { useState } from 'react';

export default function ApplicationForm() {
    // Removed stage state - moving to vertical "single document" flow
    const [formData, setFormData] = useState({
        surname: '',
        givenName: '',
        email: '',
        phone: '',
        frequency: 3,
        objective: '',
        why: '',
        commitment: false,
        assessment: false
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulate API call / Animation
    };

    if (submitted) {
        return (
            <div className="h-[50vh] flex flex-col items-center justify-center text-vapor-white text-center px-6">
                <div className="font-oswald text-3xl md:text-4xl mb-6 text-burnished-bronze animate-pulse tracking-wide">DOSS RECEIVED</div>
                <div className="font-mono text-xs md:text-sm text-vapor-white/50 mb-2 uppercase tracking-widest">Reference ID: #882-Alpha</div>
                <div className="font-inter text-sm max-w-xs mx-auto text-vapor-white/70 leading-relaxed">
                    Our director will review your metrics within 48 hours. <br /> Stand by for transmission.
                </div>
                <div className="w-16 h-[1px] bg-burnished-bronze/50 mt-12 animate-[width_2s_ease-out]"></div>
            </div>
        );
    }

    return (
        <section className="bg-carbon-black py-16 md:py-24 px-6 w-full flex justify-center">
            <div className="w-full max-w-[640px]">
                <form onSubmit={handleSubmit} className="space-y-20 md:space-y-24">

                    {/* SECTION 01: IDENTITY */}
                    <div className="space-y-10">
                        <h3 className="font-mono text-[10px] md:text-xs text-vapor-white/40 tracking-[0.3em] uppercase mb-8">
                            01 // Identity
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            <div className="group relative">
                                <label className="block text-[10px] uppercase tracking-widest text-burnished-bronze/60 mb-2">Surname</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-transparent border-b border-deep-graphite/60 py-2 text-vapor-white font-oswald text-lg md:text-xl focus:border-burnished-bronze focus:outline-none transition-colors rounded-none placeholder:text-deep-graphite/30 uppercase tracking-widest"
                                    onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                                />
                            </div>
                            <div className="group relative">
                                <label className="block text-[10px] uppercase tracking-widest text-burnished-bronze/60 mb-2">Given Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-transparent border-b border-deep-graphite/60 py-2 text-vapor-white font-oswald text-lg md:text-xl focus:border-burnished-bronze focus:outline-none transition-colors rounded-none placeholder:text-deep-graphite/30 uppercase tracking-widest"
                                    onChange={(e) => setFormData({ ...formData, givenName: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-8 md:space-y-12">
                            <div className="group relative">
                                <label className="block text-[10px] uppercase tracking-widest text-burnished-bronze/60 mb-2">Secure Comms (Email)</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-transparent border-b border-deep-graphite/60 py-2 text-vapor-white font-inter text-base focus:border-burnished-bronze focus:outline-none transition-colors rounded-none"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="group relative">
                                <label className="block text-[10px] uppercase tracking-widest text-burnished-bronze/60 mb-2">Contact Signal (Phone)</label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full bg-transparent border-b border-deep-graphite/60 py-2 text-vapor-white font-inter text-base focus:border-burnished-bronze focus:outline-none transition-colors rounded-none"
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    {/* SECTION 02: PERFORMANCE */}
                    <div className="space-y-10">
                        <h3 className="font-mono text-[10px] md:text-xs text-vapor-white/40 tracking-[0.3em] uppercase mb-8">
                            02 // Performance Data
                        </h3>

                        <div>
                            <label className="block text-vapor-white/60 text-[10px] uppercase tracking-widest mb-6">Current Training Frequency: <span className="text-vapor-white">{formData.frequency} Sessions/Week</span></label>
                            <input
                                type="range"
                                min="0"
                                max="7"
                                value={formData.frequency}
                                onChange={(e) => setFormData({ ...formData, frequency: parseInt(e.target.value) })}
                                className="w-full h-[1px] bg-deep-graphite appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-burnished-bronze [&::-webkit-slider-thumb]:rounded-none [&::-webkit-slider-thumb]:rotate-45"
                            />
                        </div>

                        <div>
                            <label className="block text-vapor-white/60 text-[10px] uppercase tracking-widest mb-6">Primary Directive</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {['Hypertrophy', 'Strength / Power', 'Cognitive / Recovery', 'Event Preparation'].map((opt) => (
                                    <label key={opt} className="flex items-center gap-4 cursor-pointer group p-4 border border-deep-graphite/30 hover:border-burnished-bronze/30 transition-colors">
                                        <input
                                            type="radio"
                                            name="objective"
                                            value={opt}
                                            onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                                            className="appearance-none w-3 h-3 border border-deep-graphite rotate-45 checked:bg-burnished-bronze checked:border-burnished-bronze transition-all"
                                        />
                                        <span className="text-vapor-white/70 font-inter text-xs uppercase tracking-wider group-hover:text-vapor-white transition-colors">{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* SECTION 03: COMMITMENT */}
                    <div className="space-y-10">
                        <h3 className="font-mono text-[10px] md:text-xs text-vapor-white/40 tracking-[0.3em] uppercase mb-8">
                            03 // Commitment Protocol
                        </h3>

                        <div className="relative">
                            <label className="block text-burnished-bronze text-[10px] uppercase tracking-widest mb-4">Statement of Intent</label>
                            <textarea
                                rows={3}
                                required
                                className="w-full bg-deep-graphite/20 border-l border-deep-graphite p-4 text-vapor-white font-inter text-sm focus:border-burnished-bronze focus:outline-none transition-colors resize-none placeholder:text-deep-graphite/40"
                                placeholder="Why Oxyd? Be precise."
                                onChange={(e) => setFormData({ ...formData, why: e.target.value })}
                            ></textarea>
                        </div>

                        <div className="space-y-5 pt-4">
                            <label className="flex items-start gap-4 cursor-pointer group">
                                <input type="checkbox" required className="mt-1 appearance-none w-3 h-3 border border-deep-graphite rotate-45 checked:bg-burnished-bronze transition-colors flex-shrink-0" />
                                <span className="text-vapor-white/50 text-[11px] uppercase tracking-wide leading-relaxed group-hover:text-vapor-white/70 transition-colors">
                                    I acknowledge that membership is by selection only.
                                </span>
                            </label>
                            <label className="flex items-start gap-4 cursor-pointer group">
                                <input type="checkbox" required className="mt-1 appearance-none w-3 h-3 border border-deep-graphite rotate-45 checked:bg-burnished-bronze transition-colors flex-shrink-0" />
                                <span className="text-vapor-white/50 text-[11px] uppercase tracking-wide leading-relaxed group-hover:text-vapor-white/70 transition-colors">
                                    I am prepared to undergo a physical assessment.
                                </span>
                            </label>
                        </div>
                    </div>

                    {/* SUBMIT ACTION */}
                    <div className="pt-8">
                        <button
                            type="submit"
                            className="w-full py-6 border border-burnished-bronze/30 text-vapor-white font-oswald tracking-[0.2em] uppercase hover:bg-burnished-bronze hover:text-carbon-black hover:border-burnished-bronze transition-all duration-300 relative overflow-hidden group text-sm md:text-base"
                        >
                            <span className="relative z-10 group-hover:font-bold">Apply For Review</span>
                            <div className="absolute inset-0 bg-burnished-bronze translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></div>
                        </button>
                    </div>

                    {/* AUTHORITY STRIP */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-8 border-t border-deep-graphite/20 opacity-60">
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-vapor-white/40">Current Capacity: 94%</span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-burnished-bronze/60 hidden md:block">//</span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-vapor-white/40">Intake Restricted</span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-burnished-bronze/60 hidden md:block">//</span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-vapor-white/40">Response Time: 24-48 Hours</span>
                    </div>

                </form>
            </div>
        </section>
    );
}
