import Spline from '@splinetool/react-spline';
import { ArrowRight, CalendarDays } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[84vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-40 pb-24 md:pt-48 md:pb-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <CalendarDays className="h-4 w-4" />
            <span className="text-xs">B2B Conferences • Networking • Deal Flow</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Where industries connect, ideas ignite, and deals get done
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            FutureBridge curates industry-specific events across energy, manufacturing, automotive, pharma, and legal tech — connecting decision-makers with innovators and solution providers.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#events"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Explore industries
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition"
            >
              Become a sponsor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
