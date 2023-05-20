import '../css/globals.css'
import '../css/app.css'

export const metadata = {
  title: 'Atlantic Valley Partners',
  description: 'Atlantic Valley Partners',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}
