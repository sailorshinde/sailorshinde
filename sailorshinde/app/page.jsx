import Image from 'next/image'
import Link from 'next/link'
import Countdown from '../components/Countdown'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        {/* Replace src with /images/Gaurav_S-9.jpg once uploaded */}
        <div className={styles.heroBg} style={{ backgroundImage: 'url(/images/Gaurav_S-9.jpg)' }} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroBar} />

        <div className={styles.heroContent}>
          <div className={styles.kicker}>Toronto · Lake Ontario · Mumbai 2027</div>

          <p className={styles.punchline}>
            Memories are<br />
            <strong>greater than dreams.</strong>
          </p>

          <div className={styles.rule} />

          <div className={styles.nameLine}>
            Sailor&nbsp;<span>Shinde</span>
          </div>

          <p className={styles.heroSub}>
            <strong>Gaurav Shinde</strong> — racing Lake Ontario regattas in 2026,
            sailing solo from Toronto to Mumbai in 2027.
            40,000+ ocean miles. Every passage documented.
          </p>

          <div className={styles.heroBtns}>
            <a href="https://youtube.com/@sailorshinde" target="_blank" rel="noopener" className="btn-gold">
              ▶ Subscribe on YouTube
            </a>
            <Link href="#season" className="btn-outline-w">2026 Season →</Link>
          </div>

          <div className={styles.socials}>
            <a href="https://instagram.com/sailorshinde_" target="_blank" rel="noopener" className={styles.sPill}>
              <span className={styles.sPip} style={{ background: '#E1306C' }} />
              @sailorshinde_
            </a>
            <a href="https://instagram.com/sailorshindemarathi" target="_blank" rel="noopener" className={styles.sPill}>
              <span className={styles.sPip} style={{ background: '#833AB4' }} />
              @sailorshindemarathi
            </a>
            <a href="https://youtube.com/@sailorshinde" target="_blank" rel="noopener" className={styles.sPill}>
              <span className={styles.sPip} style={{ background: '#FF0000' }} />
              YouTube
            </a>
          </div>
        </div>

        <div className={styles.scrollCue}>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <div className={styles.credBar}>
        {[
          { n: '40,000+',       l: 'Nautical Miles Raced' },
          { n: 'Clipper RTW',   l: 'Round the World Race · 2013–14' },
          { n: 'GGR 2022',      l: 'Golden Globe Race Entrant' },
          { n: 'Admiral Ramdas',l: 'Only Civilian · YAI Trophy' },
        ].map(({ n, l }) => (
          <div key={n} className={styles.credItem}>
            <span className={styles.credN}>{n}</span>
            <span className={styles.credL}>{l}</span>
          </div>
        ))}
      </div>

      {/* ── 2026 SEASON ── */}
      <section className={`sec ${styles.season}`} id="season">
        <div className="sec-inner">
          <div className="eyebrow">2026 Season</div>
          <h2 className="sec-title">On the water <em>now.</em></h2>
          <p className="sec-body">Racing regattas and cruising Lake Ontario this summer — every passage documented. This is the runway to Mumbai.</p>

          <div className={styles.calGrid}>
            {/* RACE CALENDAR */}
            <div className={styles.calCard}>
              <div className={styles.calHead}>
                <span>⛵</span><h3>Race Calendar</h3>
              </div>
              {[
                { date: 'May 29',     event: 'Susan Hood',       route: 'PCYC – Niagara – Island – PCYC', type: 'race' },
                { date: 'May 31',     event: 'Race 1',           route: 'PCYC – Island – PCYC',           type: 'race' },
                { date: 'June 6',     event: 'PCYC Sail Past',   route: '',                               type: 'race' },
                { date: 'Jun 27–28',  event: 'Mystery Race',     route: '',                               type: 'race' },
                { date: 'July 11',    event: 'Lake Ontario 300', route: 'PCYC – Scotch Bonnet – Niagara – PCYC', type: 'major' },
                { date: 'Aug 15',     event: '100 Mile Race',    route: 'PCYC – Niagara – Island – PCYC', type: 'major' },
                { date: 'Sept 19–20', event: 'DYC Weekend',      route: 'PCYC – Dalhousie – PCYC',        type: 'race' },
              ].map(({ date, event, route, type }) => (
                <div key={date + event} className={styles.calRow}>
                  <div className={styles.calDate}>{date}</div>
                  <div className={styles.calDetail}>
                    <div className={styles.calEvent}>{event}</div>
                    {route && <div className={styles.calRoute}>{route}</div>}
                    <span className={type === 'major' ? styles.badgeMajor : styles.badgeRace}>
                      {type === 'major' ? '🏆 Major Race' : 'Offshore'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CRUISE CALENDAR */}
            <div className={styles.calCard}>
              <div className={`${styles.calHead} ${styles.calHeadCruise}`}>
                <span>⚓</span><h3>Cruising Calendar</h3>
              </div>
              {[
                { date: 'May 15–18',    event: 'Toronto Islands',     note: 'Opening weekend' },
                { date: 'Jun 20–21',    event: 'Ashridges Bay',        note: '' },
                { date: 'Civic LW',     event: 'Long Weekend Sail',    note: 'Late July' },
                { date: 'Jul 31–Aug 3', event: 'Sandbanks',            note: 'Prince Edward County' },
                { date: 'Labour Day LW',event: 'Long Weekend Sail',    note: '' },
                { date: 'Sept 4–7',     event: 'Cathedral Bluffs',     note: '' },
                { date: 'Sept 18–20',   event: 'Toronto Island',       note: 'Season close' },
              ].map(({ date, event, note }) => (
                <div key={date + event} className={styles.calRow}>
                  <div className={styles.calDate}>{date}</div>
                  <div className={styles.calDetail}>
                    <div className={styles.calEvent}>{event}</div>
                    {note && <div className={styles.calRoute}>{note}</div>}
                    <span className={styles.badgeCruise}>Content</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      {/* Replace the style backgroundImage values with real photo paths once uploaded */}
      <div className="photo-strip">
        {[
          { bg: '/images/Gaurav_S-9.jpg',           label: 'Good Hope · Toronto Skyline',  fallback: '#0e2a50' },
          { bg: '/images/DSC07663_DxO.jpeg',         label: 'At Helm · Golden Hour',        fallback: '#1a2535' },
          { bg: '/images/DSC07451_DxO.jpeg',         label: 'Red Foul Weather Gear',        fallback: '#2d1508' },
          { bg: '/images/Gaurav_S-6.jpg',            label: 'Good Hope · Under Sail',       fallback: '#0a1f3a' },
        ].map(({ bg, label, fallback }) => (
          <div key={label} className="ps">
            <div className="ps-bg" style={{ backgroundImage: `url(${bg})`, backgroundColor: fallback }} />
            <div className="ps-ov" />
            <div className="ps-lbl">{label}</div>
          </div>
        ))}
      </div>

      {/* ── MISSION / 2027 ── */}
      <section className={`sec ${styles.mission}`} id="mission">
        <div className="sec-inner">
          <div className="eyebrow on-dark">The Grand Voyage</div>
          <h2 className="sec-title on-dark">Toronto → <em>Mumbai.</em> Fall 2027.</h2>

          <div className={styles.missionGrid}>
            <div className={styles.missionBody}>
              <p>In Fall 2027, Gaurav departs Toronto solo — westward through the Panama Canal, across the Pacific, through Southeast Asia, into the Indian Ocean. <strong>Destination: Mumbai. 15,000+ nautical miles</strong> on a Baba 35 built in the 1980s.</p>
              <p>A man of Indian origin, sailing home the long way. Every mile an act of memory, not just ambition.</p>
              <Link href="/the-voyage" className={styles.missionLink}>Full route &amp; interactive map →</Link>
            </div>

            <div>
              <div className={styles.routeWrap}>
                <div className={styles.routeTrack}>
                  <div className={styles.rtLine} />
                  {[
                    { flag: '🇨🇦', name: 'Toronto',   end: true  },
                    { flag: '🇺🇸', name: 'NYC',        end: false },
                    { flag: '🇧🇲', name: 'Bermuda',    end: false },
                    { flag: '🇵🇦', name: 'Panama',     end: false },
                    { flag: '🇵🇫', name: 'Marquesas',  end: false },
                    { flag: '🇹🇴', name: 'Tonga',      end: false },
                    { flag: '🇫🇯', name: 'Fiji',       end: false },
                    { flag: '🇲🇾', name: 'Langkawi',   end: false },
                    { flag: '🇮🇳', name: 'Mumbai',     end: true  },
                  ].map(({ flag, name, end }) => (
                    <div key={name} className={styles.rtStop}>
                      <div className={styles.rtFlag}>{flag}</div>
                      <div className={`${styles.rtDot} ${end ? styles.rtDotEnd : ''}`} />
                      <div className={`${styles.rtName} ${end ? styles.rtNameEnd : ''}`}>{name}</div>
                    </div>
                  ))}
                </div>
              </div>
              <Countdown />
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className={`sec ${styles.about}`} id="about">
        <div className="sec-inner">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImgWrap}>
              {/* Replace with real photo */}
              <div className={styles.aboutImg}>
                <Image
                  src="/images/DSC07663_DxO.jpeg"
                  alt="Gaurav Shinde at the helm"
                  fill
                  style={{ objectFit: 'cover' }}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIRAAAQQCAgMAAAAAAAAAAAAAAQIDBBEhMQUSUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AqtvYqaCq7NrLlEXqCr7a9QoNRW/cWqbMM7GHRuIJwSQMdMYoiA//2Q=="
                />
              </div>
            </div>

            <div>
              <div className="eyebrow">About Gaurav</div>
              <h2 className="sec-title">40,000 miles.<br /><em>One more to go.</em></h2>
              <blockquote className={styles.aboutQuote}>&ldquo;Memories are greater than dreams.&rdquo;</blockquote>
              <div className={styles.aboutBody}>
                <p>Two decades on the ocean. <strong>40,000+ nautical miles</strong> of racing. Gaurav completed the <strong>Clipper Round the World Race (2013–14)</strong>, entered the <strong>2022 Golden Globe Race</strong> — a solo non-stop circumnavigation — and is the <strong>only civilian ever awarded the Yachting Association of India&rsquo;s Admiral Ramdas Trophy</strong>.</p>
                <p>Now based in Toronto, refitting his Baba 35 <em>Good Hope</em>, racing the Lake Ontario circuit, and building a channel in English and Marathi documenting every step of the journey home.</p>
              </div>
              <a href="https://youtube.com/@sailorshinde" target="_blank" rel="noopener" className={styles.tLink}>Watch on YouTube →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className={`sec ${styles.contentSec}`} id="content">
        <div className="sec-inner">
          <div className="eyebrow">Latest Content</div>
          <h2 className="sec-title">Follow the <em>journey</em></h2>

          {/* YouTube */}
          <div className={styles.platRow}>
            <span className={styles.ptagYt}>▶ YouTube</span>
            <h3>Latest Videos</h3>
          </div>
          <div className={styles.vidGrid}>
            {[
              'Lake Ontario Racing — On Board Good Hope',
              'Baba 35 Full Refit — Everything So Far',
              'Golden Globe Race 2022: My Story',
            ].map((title) => (
              <a key={title} href="https://youtube.com/@sailorshinde" target="_blank" rel="noopener" className={styles.vidCard}>
                <div className={`${styles.vThumb} ${styles.vThumbBl}`}>
                  <div className={styles.playRing}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#900"><polygon points="5,3 19,12 5,21"/></svg>
                  </div>
                </div>
                <div className={styles.vi}><h4>{title}</h4><span>Coming 2026</span></div>
              </a>
            ))}
          </div>

          {/* Instagram */}
          <div className={styles.platRow}>
            <span className={styles.ptagIg}>📷 Instagram</span>
            <h3>Latest Reels</h3>
          </div>
          <div className={styles.vidGrid}>
            {[
              { title: 'Viral Marathi reel — Lake Ontario sailing', handle: '@sailorshindemarathi', views: '4.5M views', href: 'https://instagram.com/sailorshindemarathi' },
              { title: 'Summer sailing — English reels',            handle: '@sailorshinde_',       views: '1M+ views', href: 'https://instagram.com/sailorshinde_' },
              { title: 'Good Hope refit — latest update',          handle: '@sailorshinde_',       views: null,        href: 'https://instagram.com/sailorshinde_' },
            ].map(({ title, handle, views, href }) => (
              <a key={title} href={href} target="_blank" rel="noopener" className={styles.vidCard}>
                <div className={`${styles.vThumb} ${styles.vThumbIg}`}>
                  <div className={styles.playRing}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#6010B0"><polygon points="5,3 19,12 5,21"/></svg>
                  </div>
                  {views && <span className={styles.vBadge}>{views}</span>}
                </div>
                <div className={styles.vi}><h4>{title}</h4><span>{handle}</span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className={`sec ${styles.blog}`} id="blog">
        <div className="sec-inner">
          <div className="eyebrow">Captain&rsquo;s Log</div>
          <h2 className="sec-title">Stories &amp; lessons<br /><em>from the water</em></h2>
          <div className={styles.blogGrid}>
            <Link href="/blog/teak-varnish" className={`${styles.bc} ${styles.bcFeatured}`}>
              <span className={styles.bcCat}>Refit</span>
              <h3>Stripping and Varnishing 40-Year-Old Teak</h3>
              <p>How I brought the Baba 35&rsquo;s original teak back to life. Every product, every step, every mistake — documented.</p>
              <div className={styles.bcFoot}><span className={styles.bcFree}>Free Read</span></div>
            </Link>
            <Link href="/blog/pacific-route" className={styles.bc}>
              <span className={styles.bcCat}>Route Planning</span>
              <h3>Why West? The Case for the Pacific Route</h3>
              <p>Going through Panama instead of Suez — and why that changes everything.</p>
              <div className={styles.bcFoot}><span className={styles.bcFree}>Free Read</span></div>
            </Link>
            <a href="#" className={styles.bc}>
              <span className={styles.bcCat}>DIY Guide</span>
              <h3>Portlight Replacement: Full Specs &amp; Costs</h3>
              <p>Every measurement, every product, every dollar. Complete Baba 35 guide.</p>
              <div className={styles.bcFoot}><span className={styles.bcLock}>🔒 Patreon</span></div>
            </a>
          </div>
          <Link href="/blog" className={styles.blogAll}>Read all posts →</Link>
        </div>
      </section>

      {/* ── SUPPORT ── */}
      <section className={`sec ${styles.support}`} id="support">
        <div className="sec-inner">
          <div className="eyebrow">Support the Voyage</div>
          <h2 className="sec-title">Join the <em>crew</em></h2>
          <p className="sec-body">Your support goes directly toward boat prep, safety gear, and keeping the content free and independent.</p>

          <div className={styles.tierGrid}>
            {[
              {
                name: 'Crew Member', price: '$3', perks: ['Early access to all videos','Patron-only posts','Exclusive DIY guides'],
                featured: false,
              },
              {
                name: 'First Mate', price: '$8', perks: ['Everything in Crew Member','Monthly live Q&A','Technical deep dives & gear','Name in video credits'],
                featured: true, popular: 'Most Popular',
              },
              {
                name: 'Voyage Partner', price: '$25', perks: ["Everything in First Mate","Name on the boat's patron board","Direct message access","Input on voyage decisions"],
                featured: false,
              },
            ].map(({ name, price, perks, featured, popular }) => (
              <div key={name} className={`${styles.tier} ${featured ? styles.tierFeat : ''}`}>
                {popular && <div className={styles.tierPop}>{popular}</div>}
                <div className={styles.tierName}>{name}</div>
                <div className={styles.tierPrice}>{price} <span>/ mo</span></div>
                <ul className={styles.tierPerks}>
                  {perks.map(p => <li key={p}>{p}</li>)}
                </ul>
                <a href="#" className={`${styles.tBtn} ${featured ? styles.tBtnS : styles.tBtnO}`}>
                  {featured ? `Become ${name}` : 'Get Started'}
                </a>
              </div>
            ))}
          </div>

          <div className={styles.otherRow}>
            {[
              { label: '🛒 Amazon CA',        href: '#' },
              { label: '🛒 Amazon US',        href: '#' },
              { label: '🛒 Amazon India',     href: '#' },
              { label: '☕ Buy Me a Coffee',  href: '#' },
              { label: '💛 PayPal',           href: '#' },
            ].map(({ label, href }) => (
              <a key={label} href={href} className={styles.oPill}>{label}</a>
            ))}
          </div>

          <div className={styles.spBlock}>
            <p><strong>Brand &amp; sponsor partnerships welcome.</strong><br />Marine, outdoor, and adventure brands — open to partnerships for the 2026 season and 2027 voyage.</p>
            <a href="mailto:hello@sailorshinde.com" className={styles.spLink}>hello@sailorshinde.com →</a>
          </div>
        </div>
      </section>
    </>
  )
}
