import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: "Captain's Log — Sailor Shinde",
  description: 'Stories, guides, and lessons from refitting Good Hope and planning the solo Toronto to Mumbai voyage.',
}

// When you're ready to add real posts, add them here.
// Eventually this can pull from an MDX directory or a headless CMS.
const POSTS = [
  {
    slug: 'teak-varnish',
    cat: 'Refit',
    title: 'Stripping and Varnishing 40-Year-Old Teak',
    excerpt: 'How I brought the Baba 35\'s original teak back to life. Every product, every step, every mistake — documented.',
    date: 'March 2026',
    free: true,
  },
  {
    slug: 'pacific-route',
    cat: 'Route Planning',
    title: 'Why West? The Case for the Pacific Route',
    excerpt: 'Going through Panama instead of Suez — and why that decision changes everything about the voyage.',
    date: 'February 2026',
    free: true,
  },
  {
    slug: 'portlight-replacement',
    cat: 'DIY Guide',
    title: 'Portlight Replacement: Full Specs & Costs',
    excerpt: 'Every measurement, every product, every dollar. The complete guide for replacing bronze portlights on a Baba 35.',
    date: 'January 2026',
    free: false,
  },
]

const CATS = ['All', 'Refit', 'Route Planning', 'DIY Guide', 'Sailing Education', 'Voyage Updates']

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroBar} />
        <div className={styles.heroContent}>
          <div className={styles.kicker}>Written from the dock and the helm</div>
          <h1 className={styles.title}>Captain&rsquo;s<br /><span>Log</span></h1>
          <p className={styles.sub}>Stories, guides, and lessons from the refit and the voyage.</p>
        </div>
      </section>

      {/* Posts */}
      <section className="sec" style={{ background: 'var(--white)' }}>
        <div className="sec-inner">
          {/* Categories */}
          <div className={styles.cats}>
            {CATS.map(c => (
              <span key={c} className={c === 'All' ? `${styles.cat} ${styles.catActive}` : styles.cat}>{c}</span>
            ))}
          </div>

          <div className={styles.postGrid}>
            {POSTS.map(({ slug, cat, title, excerpt, date, free }) => (
              <Link key={slug} href={`/blog/${slug}`} className={styles.postCard}>
                {/* Placeholder image area */}
                <div className={styles.postImg} />
                <div className={styles.postBody}>
                  <span className={styles.postCat}>{cat}</span>
                  <h2>{title}</h2>
                  <p>{excerpt}</p>
                  <div className={styles.postFoot}>
                    <span className={styles.postDate}>{date}</span>
                    {free
                      ? <span className={styles.postFree}>Free Read</span>
                      : <span className={styles.postLock}>🔒 Patreon</span>
                    }
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.moreNote}>
            <p>More posts coming regularly throughout the 2026 season and 2027 voyage.</p>
            <a href="https://youtube.com/@sailorshinde" target="_blank" rel="noopener" className={styles.subLink}>
              Subscribe on YouTube for video updates →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
