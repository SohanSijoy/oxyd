'use client';

import GatekeeperHero from '@/components/sections/apply/gatekeeper';
import Manifesto from '@/components/sections/apply/manifesto';
import ApplicationForm from '@/components/sections/apply/application-form';

export default function ApplyPage() {
    return (
        <main className="relative w-full min-h-screen bg-carbon-black text-vapor-white">
            <GatekeeperHero />
            <Manifesto />
            <ApplicationForm />

            {/* Footer minimal for this page */}
            <footer className="py-12 text-center text-deep-graphite text-xs font-mono uppercase tracking-widest border-t border-deep-graphite/30 mt-20">
                Protocol v2.4 // OXYD Elite Performance Lab
            </footer>
        </main>
    );
}
