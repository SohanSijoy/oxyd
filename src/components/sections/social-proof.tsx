export default function SocialProof() {
    return (
        <section className="bg-carbon-black py-32 md:py-40 px-6 md:px-12 w-full relative">
            {/* Section Identity */}
            <div className="absolute top-10 left-6 md:left-12 z-20 font-mono text-xs text-burnished-bronze/50 uppercase tracking-widest">
                04 // Proof
            </div>

            <div className="max-w-7xl mx-auto pt-10">
                <h2 className="font-oswald text-[6vw] md:text-[4vw] leading-none text-vapor-white uppercase mb-20">
                    The Standard <br /> Is Set.
                </h2>

                {/* Case Studies */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                    {/* Case 1 */}
                    <div className="relative aspect-[3/4] md:aspect-[4/5] bg-deep-graphite group overflow-hidden border border-white/5">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50 grayscale contrast-125 group-hover:grayscale-0"
                            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop)' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-transparent to-transparent opacity-90" />

                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                            <p className="font-oswald text-3xl md:text-4xl text-vapor-white mb-4 leading-tight">
                                &quot;OXYD MATCHES MY WORK ETHIC.&quot;
                            </p>
                            <div className="border-t border-burnished-bronze/50 pt-4 flex justify-between items-end">
                                <div>
                                    <div className="font-inter font-bold text-vapor-white uppercase tracking-wider text-sm">Marcus Sterling</div>
                                    <div className="font-inter text-xs text-vapor-white/60 uppercase">CEO, Sterling Ventures</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-inter text-[10px] text-burnished-bronze uppercase tracking-widest">Deadlift</div>
                                    <div className="font-oswald text-2xl text-vapor-white">495 LBS</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Case 2 */}
                    <div className="relative aspect-[3/4] md:aspect-[4/5] bg-deep-graphite group overflow-hidden border border-white/5">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50 grayscale contrast-125 group-hover:grayscale-0"
                            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop)' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-transparent to-transparent opacity-90" />

                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                            <p className="font-oswald text-3xl md:text-4xl text-vapor-white mb-4 leading-tight">
                                &quot;ZERO GUESSWORK. PURE ROI.&quot;
                            </p>
                            <div className="border-t border-burnished-bronze/50 pt-4 flex justify-between items-end">
                                <div>
                                    <div className="font-inter font-bold text-vapor-white uppercase tracking-wider text-sm">Elena Corves</div>
                                    <div className="font-inter text-xs text-vapor-white/60 uppercase">Partner, Apex Law</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-inter text-[10px] text-burnished-bronze uppercase tracking-widest">Hyrox Time</div>
                                    <div className="font-oswald text-2xl text-vapor-white">1:04:00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Anchors */}
                <div className="border-t border-deep-graphite pt-16 mt-32 flex flex-col md:flex-row justify-center items-center gap-12 opacity-30 grayscale mix-blend-difference pb-20">
                    <span className="font-inter font-bold text-xl tracking-widest">ELEIKO</span>
                    <span className="font-inter font-bold text-xl tracking-widest">HAMMER STRENGTH</span>
                    <span className="font-inter font-bold text-xl tracking-widest">HYROX</span>
                </div>
            </div>
        </section>
    );
}
