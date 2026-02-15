'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const isApplyPage = pathname === '/apply';

    if (isApplyPage) {
        return (
            <header className="fixed top-0 right-0 p-6 z-50 pointer-events-auto mix-blend-difference">
                <Link href="/" className="text-vapor-white hover:text-burnished-bronze transition-colors">
                    <span className="sr-only">Close</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </Link>
            </header>
        );
    }

    return (
        <header className="fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 md:py-8 flex items-center justify-between mix-blend-difference text-vapor-white pointer-events-auto">
            {/* Logo */}
            <Link href="/" className="font-oswald text-2xl md:text-3xl tracking-tighter font-bold uppercase hover:opacity-70 transition-opacity">
                OXYD
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8 font-inter text-sm tracking-wide uppercase">
                <Link href="#space" className="hover:text-burnished-bronze transition-colors">Space</Link>
                <Link href="#trainers" className="hover:text-burnished-bronze transition-colors">Trainers</Link>
                <Link href="#journal" className="hover:text-burnished-bronze transition-colors">Journal</Link>
            </nav>

            {/* CTA Button */}
            <Link
                href="/apply"
                className="hidden md:inline-block px-8 py-3 border border-vapor-white/30 text-[10px] tracking-[0.2em] uppercase hover:bg-vapor-white hover:text-carbon-black hover:shadow-[0_0_15px_rgba(242,242,242,0.3)] transition-all duration-500 pointer-events-auto font-bold"
            >
                Inquire
            </Link>

            {/* Mobile Menu Icon (Placeholder) */}
            <button className="md:hidden text-sm uppercase tracking-widest">
                Menu
            </button>
        </header>
    );
}
