'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

const Header = () => {
    const [ isOpen, setIsOpen ] = useState( false )

    const toggleMenu = () => setIsOpen( !isOpen )

    return (
        <header className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

                <div className="flex-shrink-0 flex items-center">
                    <Link href="/">
                        <Image
                            src="/img/logo.png"
                            alt="Tourland Logo"
                            width={ 120 }
                            height={ 60 }
                            className="object-contain"
                        />
                    </Link>
                </div>

                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="text-sky-900 hover:text-sky-600 text-lg font-medium transition-colors">
                        Bosh sahifa
                    </Link>
                    <Link href="/about" className="text-sky-900 hover:text-sky-600 text-lg font-medium transition-colors">
                        Biz haqimizda
                    </Link>
                    <Link href="/tours" className="text-sky-900 hover:text-sky-600 text-lg font-medium transition-colors">
                        Turlar
                    </Link>
                    <Link href="/contact" className="text-sky-900 hover:text-sky-600 text-lg font-medium transition-colors">
                        Kontaktlar
                    </Link>
                    <Link href="/form" className="text-sky-900 hover:text-sky-600 text-lg font-medium transition-colors">
                        Forma
                    </Link>
                </nav>

                <div className="hidden md:flex items-center space-x-6">
                    <div className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                        <button className="hover:text-sky-600 transition-colors uppercase">ru</button>
                        <span className="text-gray-300">|</span>
                        <button className="hover:text-sky-600 transition-colors uppercase">eng</button>
                        <span className="text-gray-300">|</span>
                        <button className="text-sky-600 font-bold uppercase">uz</button>
                    </div>

                    <span className="text-gray-300 hidden sm:inline">|</span>

                    <div className="flex items-center space-x-3">
                        <a href="https://t.me/..." target="_blank" rel="noreferrer" className="text-sky-500 hover:opacity-80 transition-opacity">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.62.15-.15 2.7-2.46 2.75-2.67.01-.03.01-.15-.06-.21-.07-.06-.17-.04-.25-.02-.11.02-1.92 1.22-5.43 3.59-.51.35-.98.53-1.4.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.36-.49.99-.75 3.88-1.69 6.47-2.8 7.76-3.34 3.69-1.54 4.45-1.81 4.95-1.82.11 0 .36.03.52.16.13.1.17.24.19.34.02.07.03.22.01.3z" />
                            </svg>
                        </a>
                        <a href="https://instagram.com/..." target="_blank" rel="noreferrer" className="text-pink-500 hover:opacity-80 transition-opacity">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="https://facebook.com/..." target="_blank" rel="noreferrer" className="text-blue-600 hover:opacity-80 transition-opacity">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="flex md:hidden">
                    <button
                        onClick={ toggleMenu }
                        className="text-sky-900 hover:text-sky-600 p-2 focus:outline-none"
                        aria-label="Menyuni ochish"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

            </div>

            <div className={ `fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${ isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none' }` }>

                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={ toggleMenu } />

                <div className={ `absolute right-0 top-0 bottom-0 w-72 bg-white p-6 shadow-xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${ isOpen ? 'translate-x-0' : 'translate-x-full' }` }>

                    <div>
                        <div className="flex justify-end mb-6">
                            <button onClick={ toggleMenu } className="text-gray-500 hover:text-sky-600 p-1">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>

                        <nav className="flex flex-col space-y-4">
                            <Link href="/" onClick={ toggleMenu } className="text-sky-900 hover:text-sky-600 text-lg font-medium pb-2 border-b border-gray-50 transition-colors">
                                Bosh sahifa
                            </Link>
                            <Link href="/about" onClick={ toggleMenu } className="text-sky-900 hover:text-sky-600 text-lg font-medium pb-2 border-b border-gray-50 transition-colors">
                                Biz haqimizda
                            </Link>
                            <Link href="/tours" onClick={ toggleMenu } className="text-sky-900 hover:text-sky-600 text-lg font-medium pb-2 border-b border-gray-50 transition-colors">
                                Turlar
                            </Link>
                            <Link href="/contact" onClick={ toggleMenu } className="text-sky-900 hover:text-sky-600 text-lg font-medium pb-2 border-b border-gray-50 transition-colors">
                                Kontaktlar
                            </Link>
                            <Link href="/form" onClick={ toggleMenu } className="text-sky-900 hover:text-sky-600 text-lg font-medium pb-2 border-b border-gray-50 transition-colors">
                                Forma
                            </Link>
                        </nav>
                    </div>

                    <div className="space-y-6 pt-6 border-t border-gray-100">
                        <div className="flex items-center justify-center space-x-4 text-sm font-semibold text-gray-700">
                            <button className="hover:text-sky-600 uppercase">ru</button>
                            <span className="text-gray-300">|</span>
                            <button className="hover:text-sky-600 uppercase">eng</button>
                            <span className="text-gray-300">|</span>
                            <button className="text-sky-600 font-bold uppercase">uz</button>
                        </div>

                        <div className="flex items-center justify-center space-x-6">
                            <a href="https://t.me/..." target="_blank" rel="noreferrer" className="text-sky-500 text-2xl">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.62.15-.15 2.7-2.46 2.75-2.67.01-.03.01-.15-.06-.21-.07-.06-.17-.04-.25-.02-.11.02-1.92 1.22-5.43 3.59-.51.35-.98.53-1.4.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.36-.49.99-.75 3.88-1.69 6.47-2.8 7.76-3.34 3.69-1.54 4.45-1.81 4.95-1.82.11 0 .36.03.52.16.13.1.17.24.19.34.02.07.03.22.01.3z" />
                                </svg>
                            </a>
                            <a href="https://instagram.com/..." target="_blank" rel="noreferrer" className="text-pink-500">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="https://facebook.com/..." target="_blank" rel="noreferrer" className="text-blue-600">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header