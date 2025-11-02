import { Bolt, Factory, Car, FlaskConical, Gavel } from 'lucide-react';

const industries = [
  {
    name: 'Energy & Utilities',
    description:
      'Transition, decarbonization and grid resilience. Summits for power, renewables, and oil & gas leaders.',
    icon: Bolt,
    accent: 'from-amber-400/30 to-pink-500/20',
  },
  {
    name: 'Manufacturing',
    description:
      'Smart factories, automation, and supply chain of the future. Connect plant leadership with technology.',
    icon: Factory,
    accent: 'from-cyan-400/30 to-blue-500/20',
  },
  {
    name: 'Automotive & Mobility',
    description:
      'EV, software-defined vehicles and autonomous. Where OEMs meet tier-1s and innovators.',
    icon: Car,
    accent: 'from-violet-400/30 to-fuchsia-400/20',
  },
  {
    name: 'Pharma & Biotech',
    description:
      'R&D, clinical, and manufacturing excellence. Partnerships across the healthcare value chain.',
    icon: FlaskConical,
    accent: 'from-emerald-400/30 to-teal-400/20',
  },
  {
    name: 'Legal Technology',
    description:
      'eDiscovery, knowledge automation and AI for legal ops. Bridge law firms and tech providers.',
    icon: Gavel,
    accent: 'from-indigo-400/30 to-purple-400/20',
  },
];

export default function EventsGrid() {
  return (
    <section id="events" className="relative bg-black">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Industry spotlights
          </h2>
          <p className="mt-3 text-white/70">
            Curated agendas, senior audiences, and targeted networking for high-velocity outcomes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ name, description, icon: Icon, accent }) => (
            <article
              key={name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              <div className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${accent} blur-3xl`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 p-3 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{name}</h3>
                <p className="mt-2 text-sm text-white/70">{description}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="#"
                    className="text-sm font-medium text-white/90 underline-offset-4 hover:underline"
                  >
                    View agenda
                  </a>
                  <span className="text-white/30">•</span>
                  <a
                    href="#"
                    className="text-sm font-medium text-white/90 underline-offset-4 hover:underline"
                  >
                    Sponsor this
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
