/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import '../styles/globals.css';

export default function RootLayout({children}){
  return (
    <html>
      <body>
        <main className="container mx-auto">
          <nav>
            <Link href="/">
              Home
            </Link>
            <Link href="/form">
              Form
            </Link>
            <Link href="/news">
              News
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
