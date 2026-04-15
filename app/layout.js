import "./globals.css";
import NavBar from './components/NavBar';
import Script from 'next/script';

export const metadata = {
  title: "Web Snippets",
  description: "blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-08N82TZSW7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-08N82TZSW7');
          `}
        </Script>

        <div>
          <NavBar />
          <div className="max-w-7xl relative flex min-h-[calc(100vh-40px)] m-auto">
            {children}
          </div>
        </div>

      </body>
    </html>
  );
}