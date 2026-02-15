'use client';

import Preloader from '@/components/layout/preloader';
import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Philosophy from '@/components/sections/philosophy';
import Facility from '@/components/sections/facility';
import Membership from '@/components/sections/membership';
import SocialProof from '@/components/sections/social-proof';
import DisruptiveTypography from '@/components/sections/intensified/disruptive-typography';
import PerformanceStat from '@/components/sections/intensified/performance-stat';
import Decision from '@/components/sections/decision';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <main className="relative w-full text-vapor-white bg-carbon-black min-h-screen">
      <Preloader />
      <Header />
      <Hero />
      <DisruptiveTypography />
      <Philosophy />
      <PerformanceStat />
      <Facility />
      <Membership />
      <SocialProof />
      <Decision />
      <Footer />
    </main>
  );
}
