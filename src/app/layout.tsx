import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "lucas losantos",
  description: "product. builder. obsessed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d))document.documentElement.classList.add('dark')})();`,
          }}
        />
      </head>
      <body className={`${GeistSans.variable} font-sans antialiased`}>
        <header className="fixed right-6 top-6 z-10 sm:right-12 md:right-16">
          <ThemeToggle />
        </header>
        {children}
      </body>
    </html>
  );
}
