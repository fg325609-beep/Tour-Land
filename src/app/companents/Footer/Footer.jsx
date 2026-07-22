import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#002B49] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">

          <div className="flex flex-col space-y-6">
            <div>
              <h2 className="text-2xl font-bold leading-tight mb-2">
                Tourland sifatli va ishonchli xizmatni kafolatlaydi.
              </h2>
              <p className="text-gray-300 text-sm">
                Vy dostoyny luchshego, Tourland — luchshiy vybor!
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <a href="https://t.me/..." target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#002B49] hover:bg-sky-100 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.62.15-.15 2.7-2.46 2.75-2.67.01-.03.01-.15-.06-.21-.07-.06-.17-.04-.25-.02-.11.02-1.92 1.22-5.43 3.59-.51.35-.98.53-1.4.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.36-.49.99-.75 3.88-1.69 6.47-2.8 7.76-3.34 3.69-1.54 4.45-1.81 4.95-1.82.11 0 .36.03.52.16.13.1.17.24.19.34.02.07.03.22.01.3z" />
                </svg>
              </a>
              <a href="https://instagram.com/..." target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#002B49] hover:bg-sky-100 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://facebook.com/..." target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#002B49] hover:bg-sky-100 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col md:pl-12">
            <h3 className="text-sm font-bold tracking-wider uppercase mb-4 text-white">
              Foydali havolalar
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-300 hover:text-white font-medium text-sm transition-colors">
                Bosh Sahifa
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white font-medium text-sm transition-colors">
                Biz Haqimizda
              </Link>
              <Link href="/form" className="text-gray-300 hover:text-white font-medium text-sm transition-colors">
                Forma
              </Link>
            </nav>
          </div>

          <div className="flex flex-col">
            <h3 className="text-sm font-bold tracking-wider uppercase mb-4 text-white">
              Boshqa resurslar
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/tours" className="text-gray-300 hover:text-white font-medium text-sm transition-colors">
                Turlar
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white font-medium text-sm transition-colors">
                Kontaktlar
              </Link>
            </nav>
          </div>

        </div>

        <div className="border-t border-gray-600/40 pt-6 text-center">
          <p className="text-sm font-medium text-gray-300">
            Mualliflik huquqi &copy; 2026 Limsa Creative Tim .
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer