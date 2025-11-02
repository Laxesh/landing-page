'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Image from 'next/image'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      <Header />
      
      <main className="grow">

        {/* Illustration */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
          <Image
            src={'/images/hero-illustration.svg'}
            className="max-w-none"
            width={1440}
            height={1265}
            priority
            alt="Hero Illustration"
          />
        </div>

        {children}

      </main>

      <Footer />
    </>
  )
}
