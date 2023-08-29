"use client"
import Contact from '@/components/Contact'
import Intro from '@/components/Intro'
import Menu from '@/components/Menu'
import Portfolio from '@/components/Portfolio'
// import Testimonials from '@/components/Testimonials' // Not used for now
import Topbar from '@/components/Topbar'
import Works from '@/components/Works'
import { useState } from 'react'
import styles from './page.module.scss'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(preState => !preState);
  }



  return (
    <main className={styles.main}>
      <Topbar menuOpen={menuOpen} onToggle={handleToggle}/>
      <Menu menuOpen={menuOpen} onToggle={handleToggle}/>
      <div className={styles.sections}>
        <Intro/>
        <Portfolio/>
        <Works/>
        {/* <Testimonials/> Not used for now */}
        <Contact/>
      </div>
    </main>
  )
}
