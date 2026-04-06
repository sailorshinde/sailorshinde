import '../styles/globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Sailor Shinde — Memories Are Greater Than Dreams',
  description: 'Gaurav Shinde — racing Lake Ontario in 2026, sailing solo from Toronto to Mumbai in 2027. 40,000+ ocean miles. Clipper RTW. Golden Globe Race. Admiral Ramdas Trophy.',
  keywords: 'Sailor Shinde, Gaurav Shinde, solo sailing Toronto Mumbai, Baba 35 refit, Lake Ontario racing, Golden Globe Race, Clipper Round the World',
  openGraph: {
    title: 'Sailor Shinde — Memories Are Greater Than Dreams',
    description: 'Racing Lake Ontario in 2026. Sailing solo to Mumbai in 2027.',
    url: 'https://sailorshinde.com',
    siteName: 'Sailor Shinde',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sailor Shinde',
    description: 'Racing Lake Ontario in 2026. Sailing solo to Mumbai in 2027.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
