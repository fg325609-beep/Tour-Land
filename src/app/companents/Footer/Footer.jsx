import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer id='footer' className='w-full bg-[#002B49] text-white pt-12 pb-6'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 pb-10'>
          
          <div className='flex flex-col space-y-6'>
            <div>
              <h2 className='text-2xl font-bold leading-tight mb-2'>
                Tourland sifatli va ishonchli xizmatni kafolatlaydi.
              </h2>
              <p className='text-gray-300 text-sm'>
                Vy dostoyny luchshego, Tourland - luchshiy vybor!
              </p>
            </div>
          </div>

          <div className='flex flex-col md:pl-12'>
            <h3 className='text-sm font-bold tracking-wider uppercase mb-4 text-white'>
              Foydali havolalar
            </h3>
            <nav className='flex flex-col space-y-2'>
              <Link href='/' className='text-gray-300 hover:text-white font-medium text-sm transition-colors'>
                Bosh Sahifa
              </Link>
              <Link href='/about' className='text-gray-300 hover:text-white font-medium text-sm transition-colors'>
                Biz Haqimizda
              </Link>
              <Link href='/form' className='text-gray-300 hover:text-white font-medium text-sm transition-colors'>
                Forma
              </Link>
            </nav>
          </div>

          <div className='flex flex-col'>
            <h3 className='text-sm font-bold tracking-wider uppercase mb-4 text-white'>
              Boshqa resurslar
            </h3>
            <nav className='flex flex-col space-y-2'>
              <Link href='/tours' className='text-gray-300 hover:text-white font-medium text-sm transition-colors'>
                Turlar
              </Link>
              <Link href='/contact' className='text-gray-300 hover:text-white font-medium text-sm transition-colors'>
                Kontaktlar
              </Link>
            </nav>
          </div>

        </div>

        <div className='border-t border-gray-600/40 pt-6 text-center'>
          <p className='text-sm font-medium text-gray-300'>
            Mualliflik huquqi © 2026 Limsa Creative Tim.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer