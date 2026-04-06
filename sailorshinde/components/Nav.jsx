'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={`${styles.wordmark} ${scrolled ? styles.dark : ''}`}>
        <span className={styles.wmSailor}>Sailor</span>
        <span className={styles.wmShinde}>Shinde</span>
      </Link>

      <ul className={styles.links}>
        <li><Link href="/#season">2026 Season</Link></li>
        <li><Link href="/the-voyage">The Voyage</Link></li>
        <li><Link href="/#about">About</Link></li>
        <li><Link href="/#content">Content</Link></li>
        <li><Link href="/speaking">Speaking</Link></li>
        <li><Link href="/#support" className={styles.cta}>Join the Crew</Link></li>
      </ul>
    </nav>
  )
}
