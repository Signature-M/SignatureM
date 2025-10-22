import './globals.css'

export const metadata = {
  title: 'Signature M — Digital Marketing & Website Optimisation',
  description: 'Local-first CRO, SEO, and digital marketing for SMEs in the East Midlands.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-sm-gradient text-sm-text">
        {/* NAV */}
        <header className="sticky top-0 z-50 border-b border-gray-700 shadow-md bg-sm-accent/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="#top" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl flex items-center justify-center font-bold bg-sm-primary text-sm-bg">S</div>
              <span className="font-semibold tracking-tight text-lg">Signature&nbsp;M</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="hover:opacity-80">Services</a>
              <a href="#casestudies" className="hover:opacity-80">Case Studies</a>
              <a href="#about" className="hover:opacity-80">About</a>
              <a href="#contact" className="hover:opacity-80">Contact</a>
              <a href="/pricing" className="hover:opacity-80">Pricing</a>
            </nav>
          </div>
        </header>

        {children}

        {/* FOOTER */}
        <footer className="py-10 bg-sm-accent">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg flex items-center justify-center font-bold bg-sm-primary text-sm-bg">S</div>
              <span className="font-semibold">Signature M</span>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} Signature M. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
