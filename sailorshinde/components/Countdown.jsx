'use client'
import { useState, useEffect } from 'react'
import styles from './Countdown.module.css'

const DEPARTURE = new Date('2027-10-01T00:00:00')

export default function Countdown() {
  const [time, setTime] = useState({ d: '--', h: '--', m: '--', s: '--' })

  useEffect(() => {
    function tick() {
      const diff = DEPARTURE - new Date()
      if (diff <= 0) return
      setTime({
        d: String(Math.floor(diff / 86400000)).padStart(3, '0'),
        h: String(Math.floor(diff % 86400000 / 3600000)).padStart(2, '0'),
        m: String(Math.floor(diff % 3600000 / 60000)).padStart(2, '0'),
        s: String(Math.floor(diff % 60000 / 1000)).padStart(2, '0'),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className={styles.box}>
      <div className={styles.eye}>Departure Countdown · Fall 2027</div>
      <div className={styles.row}>
        {[['d', 'Days'], ['h', 'Hours'], ['m', 'Min'], ['s', 'Sec']].map(([key, label]) => (
          <div key={key} className={styles.block}>
            <span className={styles.num}>{time[key]}</span>
            <span className={styles.unit}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
