// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "Markdown blog app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <div className="max-w-6xl m-auto p-4">{children}</div>
      </body>
    </html>
  );
}
