import styles from './page.module.css'

export const metadata = {
  title: 'Speaking — Sailor Shinde',
  description: 'Book Gaurav Shinde for keynotes and talks on solo sailing, ocean racing, resilience, and the Toronto to Mumbai voyage.',
}

const TOPICS = [
  { title: 'Memories Are Greater Than Dreams', desc: 'The philosophy behind the voyage — why doing is always greater than planning, and how to stop waiting for the "right moment".' },
  { title: 'Lessons from the Golden Globe Race', desc: 'What a solo non-stop circumnavigation attempt teaches you about preparation, failure, and getting back up.' },
  { title: 'The Ocean as a Classroom', desc: 'Decision-making under pressure, risk management, and leadership — all learned at sea, all applicable on land.' },
  { title: 'The Diaspora Sailor', desc: 'Growing up between cultures, finding identity through adventure, and what it means to sail home across an ocean.' },
  { title: 'Boat Building & the Long Game', desc: 'Refitting a 40-year-old boat for an ocean crossing. A story about patience, craft, and long-term thinking.' },
  { title: 'Custom Talk', desc: 'Gaurav is open to working with your organisation on a bespoke talk tailored to your audience and goals.' },
]

const AUDIENCES = [
  'Corporate Teams', 'Universities & Colleges', 'Sailing Clubs',
  'Adventure & Outdoor Events', 'South Asian Community Events', 'Youth Programs',
]

export default function Speaking() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroBar} />
        <div className={styles.heroContent}>
          <div className={styles.kicker}>Book Gaurav · speaking@sailorshinde.com</div>
          <h1 className={styles.title}>Speaking<br /><span>&amp; Keynotes</span></h1>
          <p className={styles.sub}>
            Stories from 40,000 ocean miles. Lessons from the Golden Globe Race.
            The philosophy of making memories over chasing dreams.
          </p>
          <div className={styles.heroBtns}>
            <a href="mailto:speaking@sailorshinde.com" className="btn-gold">Book a Talk</a>
            <a href="#topics" className="btn-outline-w">See Topics →</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className={styles.statsBar}>
        {[
          { n: '40,000+', l: 'Nautical Miles' },
          { n: 'GGR 2022', l: 'Golden Globe Race' },
          { n: 'Clipper RTW', l: '2013–14' },
          { n: 'Only Civilian', l: 'Admiral Ramdas Trophy' },
        ].map(({ n, l }) => (
          <div key={n} className={styles.statItem}>
            <span className={styles.statN}>{n}</span>
            <span className={styles.statL}>{l}</span>
          </div>
        ))}
      </div>

      {/* Topics */}
      <section className="sec" style={{ background: 'var(--white)' }} id="topics">
        <div className="sec-inner">
          <div className="eyebrow">Talk Topics</div>
          <h2 className="sec-title">What Gaurav <em>speaks about</em></h2>
          <div className={styles.topicGrid}>
            {TOPICS.map(({ title, desc }) => (
              <div key={title} className={styles.topicCard}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="sec" style={{ background: 'var(--off)' }}>
        <div className="sec-inner">
          <div className="eyebrow">Audiences</div>
          <h2 className="sec-title">Who Gaurav <em>speaks to</em></h2>
          <div className={styles.audienceGrid}>
            {AUDIENCES.map(a => (
              <div key={a} className={styles.audienceTag}>{a}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section className="sec" style={{ background: 'var(--cobalt-deep)' }} id="book">
        <div className="sec-inner">
          <div className="eyebrow on-dark">Book a Talk</div>
          <h2 className="sec-title on-dark">Get in <em>touch</em></h2>
          <p className="sec-body on-dark" style={{ marginBottom: '2.5rem' }}>
            Send Gaurav a message about your event and he&rsquo;ll get back to you within 48 hours.
          </p>
          <form className={styles.form} action="mailto:speaking@sailorshinde.com" method="GET">
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Jane Smith" />
              </div>
              <div className={styles.formGroup}>
                <label>Organisation</label>
                <input type="text" name="org" placeholder="Company / Club / University" />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input type="email" name="email" placeholder="jane@example.com" />
              </div>
              <div className={styles.formGroup}>
                <label>Event Date</label>
                <input type="text" name="date" placeholder="Month / Year or TBD" />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>Tell Gaurav about your event</label>
              <textarea name="body" rows={5} placeholder="Audience size, location, topic interests, budget range..." />
            </div>
            <button type="submit" className="btn-gold">Send Enquiry →</button>
          </form>
        </div>
      </section>
    </>
  )
}
