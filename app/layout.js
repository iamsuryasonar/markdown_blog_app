import "./globals.css";
import NavBar from './components/NavBar';

export const metadata = {
  title: "Web Snippets",
  description: "blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <div className="">
          <NavBar />
          <div className="max-w-7xl relative flex min-h-[calc(100vh-40px)] m-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
