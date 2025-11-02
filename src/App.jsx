import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventsGrid from './components/EventsGrid';
import Footer from './components/Footer';

function About() {
  return (
    <section id="about" className="relative bg-black">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Curated to accelerate outcomes
            </h2>
            <p className="mt-4 text-white/70">
              We bring together senior decision‑makers, solution providers and innovators for focused, high‑value conversations. Our programs blend mainstage content, roundtables and 1:1 meetings to create real deal flow.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <dl className="grid grid-cols-2 gap-6 text-white">
              <div>
                <dt className="text-sm text-white/60">Attendee seniority</dt>
                <dd className="mt-1 text-2xl font-semibold">Director+</dd>
              </div>
              <div>
                <dt className="text-sm text-white/60">Meetings enabled</dt>
                <dd className="mt-1 text-2xl font-semibold">10,000+</dd>
              </div>
              <div>
                <dt className="text-sm text-white/60">Sponsors served</dt>
                <dd className="mt-1 text-2xl font-semibold">500+</dd>
              </div>
              <div>
                <dt className="text-sm text-white/60">Industries</dt>
                <dd className="mt-1 text-2xl font-semibold">5+ verticals</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <EventsGrid />
        <About />
      </main>
      <Footer />
    </div>
  );
}
