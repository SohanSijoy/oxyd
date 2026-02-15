import Link from 'next/link';
import { JSX } from "react";

export default function Footer(): JSX.Element {
    return (
        <footer className="bg-carbon-black py-20 px-6 md:px-12 w-full border-t border-deep-graphite/50 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end">
                {/* Brand Mark */}
                <div className="flex flex-col gap-4">
                    <div className="font-oswald text-[12vw] md:text-[8vw] leading-none text-deep-graphite/20 uppercase select-none mix-blend-difference pointer-events-none">
                        OXYD
                    </div>
                </div>

                {/* Info & Links */}
                <div className="flex flex-col md:flex-row justify-between w-full md:w-auto md:gap-24 text-vapor-white/30 text-xs font-mono uppercase tracking-widest mt-10 md:mt-0">
                    <div className="flex flex-col gap-2 mb-8 md:mb-0">
                        <div>1200 Industrial Ave, District 4</div>
                        <div>Los Angeles, CA</div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 md:items-center">
                        <Link href="#" className="hover:text-vapor-white transition-colors">Instagram</Link>
                        <Link href="#" className="hover:text-vapor-white transition-colors">Legal</Link>
                        <Link href="#" className="hover:text-vapor-white transition-colors">Privacy</Link>
                        <span className="hidden md:inline-block w-px h-3 bg-vapor-white/20 mx-2"></span>
                        <a href="https://webomancy.com" target="_blank" rel="noopener noreferrer" className="text-burnished-bronze/60 hover:text-burnished-bronze transition-colors flex items-center gap-2">
                            <span>Developed by Webomancy</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
