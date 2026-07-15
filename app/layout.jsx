import '../src/index.css'
import Script from 'next/script'
import ThemeToggle from '../src/modules/themeToggle/themeToggle'

export const metadata = {
  title: 'Portfolio — Romain POISSON | Développeur Full Stack',
  description: 'Portfolio de Romain POISSON, développeur Full Stack & Data / IA',
  icons: {
    icon: [
      { url: '/logo-rp.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light')}catch(e){}`}
        </Script>
        <div id="root">
          {children}
        </div>
        <ThemeToggle />
      </body>
    </html>
  )
}
