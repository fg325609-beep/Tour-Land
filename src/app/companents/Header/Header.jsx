import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>

    <header>
        <nav>
<Link href="/">Bosh sahifa </Link>
<Link href="/about">Biz haqimizda</Link>
<Link href="/tours">Turlar</Link>
<Link href="/contact">Kontaktlar</Link>
<Link href="/form">Forma</Link>
        </nav>
    </header>
    </>
  )
}

export default Header