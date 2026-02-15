'use client';

export default function Manifesto() {
    return (
        <section className="bg-carbon-black py-32 px-6 relative w-full">
            <div className="max-w-xl mx-auto space-y-24">
                {/* Card 1 */}
                <div className="border border-deep-graphite hover:border-burnished-bronze transition-colors duration-500 p-8 md:p-12 text-center group">
                    <h3 className="font-oswald text-xl text-vapor-white mb-4 uppercase tracking-0.1em group-hover:text-burnished-bronze transition-colors">
                        We Do Not Cheer.
                    </h3>
                    <p className="font-inter text-vapor-white/60 text-sm leading-relaxed">
                        Validation is internal. If you need applause, go elsewhere.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="border border-deep-graphite hover:border-burnished-bronze transition-colors duration-500 p-8 md:p-12 text-center group">
                    <h3 className="font-oswald text-xl text-vapor-white mb-4 uppercase tracking-0.1em group-hover:text-burnished-bronze transition-colors">
                        We Do Not Negotiate.
                    </h3>
                    <p className="font-inter text-vapor-white/60 text-sm leading-relaxed">
                        The standard is the standard. It is not lowered for comfort.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="border border-deep-graphite hover:border-burnished-bronze transition-colors duration-500 p-8 md:p-12 text-center group">
                    <h3 className="font-oswald text-xl text-vapor-white mb-4 uppercase tracking-0.1em group-hover:text-burnished-bronze transition-colors">
                        We Do Not Wait.
                    </h3>
                    <p className="font-inter text-vapor-white/60 text-sm leading-relaxed">
                        Indecision is a weakness. You are either ready, or you are not.
                    </p>
                </div>
            </div>
        </section>
    );
}
