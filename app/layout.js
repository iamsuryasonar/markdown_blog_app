import "./globals.css";


export const metadata = {
  title: "Web Snippets",
  description: "blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <div className="max-w-3xl m-auto py-10">{children}</div>
      </body>
    </html>
  );
}
