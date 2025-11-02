import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10 py-10">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-md bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-400" />
              <p className="text-sm text-white/70">
                © {new Date().getFullYear()} FutureBridge Events. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:hello@futurebridge.events"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
              >
                <Mail className="h-4 w-4" /> hello@futurebridge.events
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
