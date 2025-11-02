import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="size-8 rounded-md bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-400" />
              <span className="text-white font-semibold tracking-tight">FutureBridge Events</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              <a href="#events" className="hover:text-white transition">Industries</a>
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
              <a href="#" className="rounded-full bg-white text-black px-4 py-2 font-medium hover:bg-white/90 transition">Sponsor</a>
            </nav>

            <button aria-label="Open menu" className="md:hidden text-white" onClick={() => setOpen(true)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mt-4 rounded-2xl border border-white/10 bg-black">
              <div className="flex items-center justify-between px-6 py-4">
                <span className="text-white font-semibold">Menu</span>
                <button aria-label="Close menu" className="text-white" onClick={() => setOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="px-6 pb-6 flex flex-col gap-4 text-white/90">
                <a href="#events" onClick={() => setOpen(false)} className="hover:text-white transition">Industries</a>
                <a href="#about" onClick={() => setOpen(false)} className="hover:text-white transition">About</a>
                <a href="#contact" onClick={() => setOpen(false)} className="hover:text-white transition">Contact</a>
                <a href="#" onClick={() => setOpen(false)} className="rounded-full bg-white text-black px-4 py-2 font-medium text-center mt-2 hover:bg-white/90 transition">Sponsor</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
