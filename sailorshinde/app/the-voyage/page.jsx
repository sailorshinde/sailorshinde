import Countdown from '../../components/Countdown'
import styles from './page.module.css'

export const metadata = {
  title: 'The Voyage — Sailor Shinde',
  description: 'Toronto to Mumbai solo sailing voyage. 15,000+ nautical miles westward through the Panama Canal, Pacific, and Indian Ocean. Departing Fall 2027.',
}

const LEGS = [
  { from: '🇨🇦 Toronto',    to: '🇺🇸 New York',    nm: '~350 nm',   desc: 'Lake Ontario to the Atlantic via the St. Lawrence or Erie Canal. First ocean miles on Good Hope.' },
  { from: '🇺🇸 New York',   to: '🇧🇲 Bermuda',     nm: '~650 nm',   desc: 'The classic offshore shakedown. First true bluewater passage — Gulf Stream crossing.' },
  { from: '🇧🇲 Bermuda',    to: '🇵🇦 Panama',      nm: '~1,900 nm', desc: 'South through the Caribbean to the Canal. Tradewind sailing at its finest.' },
  { from: '🇵🇦 Panama',     to: '🇵🇫 Marquesas',   nm: '~4,000 nm', desc: 'The longest leg — the Pacific passage. Trade winds, dolphins, and 3–4 weeks at sea.' },
  { from: '🇵🇫 Marquesas',  to: '🇹🇴 Tonga',       nm: '~2,000 nm', desc: 'Island hopping through French Polynesia, the Cook Islands, and into Tonga.' },
  { from: '🇹🇴 Tonga',      to: '🇫🇯 Fiji',        nm: '~500 nm',   desc: 'Short hop through the islands. Regroup, resupply, and rest before Southeast Asia.' },
  { from: '🇫🇯 Fiji',       to: '🇲🇾 Kota Kinabalu',nm: '~3,500 nm',desc: 'North through Micronesia into the Western Pacific and Borneo.' },
  { from: '🇲🇾 Kota Kinabalu',to:'🇲🇾 Langkawi',   nm: '~1,100 nm', desc: 'Through the South China Sea and Malacca Strait — one of the world\'s busiest waterways.' },
  { from: '🇲🇾 Langkawi',   to: '🇮🇳 Mumbai',      nm: '~1,600 nm', desc: 'The homecoming leg. Across the Bay of Bengal and up the Malabar Coast. Arriving Mumbai.' },
]

export default function TheVoyage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroBar} />
        <div className={styles.heroContent}>
          <div className={styles.kicker}>The Grand Voyage · Fall 2027</div>
          <h1 className={styles.title}>Toronto<br /><span>→ Mumbai</span></h1>
          <p className={styles.sub}>15,000+ nautical miles. Solo. Westward via the Pacific.<br />On a Baba 35 built in the 1980s.</p>
        </div>
      </section>

      {/* Countdown */}
      <div className={styles.countdownWrap}>
        <div className={styles.countdownInner}>
          <Countdown />
        </div>
      </div>

      {/* Route legs */}
      <section className="sec" style={{ background: 'var(--white)' }}>
        <div className="sec-inner">
          <div className="eyebrow">The Route</div>
          <h2 className="sec-title">Leg by <em>leg</em></h2>
          <p className="sec-body" style={{ marginBottom: '3rem' }}>
            9 legs. 9 countries. 15,000+ nautical miles westward around the world.
          </p>

          <div className={styles.legs}>
            {LEGS.map(({ from, to, nm, desc }, i) => (
              <div key={i} className={styles.leg}>
                <div className={styles.legNum}>{String(i + 1).padStart(2, '0')}</div>
                <div className={styles.legContent}>
                  <div className={styles.legRoute}>
                    <span>{from}</span>
                    <span className={styles.legArrow}>→</span>
                    <span>{to}</span>
                    <span className={styles.legNm}>{nm}</span>
                  </div>
                  <p className={styles.legDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracker placeholder */}
      <section className="sec" style={{ background: 'var(--off)' }}>
        <div className="sec-inner">
          <div className="eyebrow">Live Tracker</div>
          <h2 className="sec-title">Track <em>Good Hope</em></h2>
          <p className="sec-body">
            Live tracking launches when the voyage begins in Fall 2027.
            During 2026, you can follow Good Hope racing on Lake Ontario.
          </p>
          <div className={styles.mapPlaceholder}>
            <span>🗺️ Interactive map launches Fall 2027</span>
          </div>
        </div>
      </section>
    </>
  )
}
