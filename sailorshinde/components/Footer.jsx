import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <p className={styles.quote}>&ldquo;Memories are greater than dreams.&rdquo;</p>
            <p className={styles.sub}>Gaurav Shinde · Toronto, Canada<br />Racing 2026 · Mumbai 2027</p>
          </div>

          <div className={styles.col}>
            <h4>Navigate</h4>
            <Link href="/#season">2026 Season</Link>
            <Link href="/the-voyage">The Voyage</Link>
            <Link href="/#about">About Gaurav</Link>
            <Link href="/blog">Captain&rsquo;s Log</Link>
            <Link href="/speaking">Speaking</Link>
          </div>

          <div className={styles.col}>
            <h4>Follow</h4>
            <a href="https://youtube.com/@sailorshinde" target="_blank" rel="noopener">YouTube</a>
            <a href="https://instagram.com/sailorshinde_" target="_blank" rel="noopener">Instagram (EN)</a>
            <a href="https://instagram.com/sailorshindemarathi" target="_blank" rel="noopener">Instagram (Marathi)</a>
            <a href="#" target="_blank" rel="noopener">Patreon</a>
          </div>

          <div className={styles.col}>
            <h4>Contact</h4>
            <a href="mailto:hello@sailorshinde.com">hello@sailorshinde.com</a>
            <a href="mailto:speaking@sailorshinde.com">speaking@sailorshinde.com</a>
            <Link href="/#support">Support the voyage</Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Sailor Shinde · Toronto, Canada</p>
          <p>Good Hope · Baba 35 · Homeward bound ⚓</p>
        </div>
      </div>
    </footer>
  )
}
