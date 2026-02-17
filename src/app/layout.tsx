import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "lucas losantos",
  description: "product. builder. obsessed.",
  metadataBase: new URL("https://lucaslosantos.com"),
  openGraph: {
    title: "lucas losantos",
    description: "product. builder. obsessed.",
    url: "https://lucaslosantos.com",
    siteName: "lucas losantos",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "lucas losantos",
    description: "product. builder. obsessed.",
  },
  icons: {
    icon: "/logo.svg",
  },
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
        <header className="fixed left-6 right-6 top-6 z-10 flex items-center justify-between sm:left-12 sm:right-12 md:left-16 md:right-16">
          <a href="/" aria-label="Home" className="flex items-center">
            <img src="/logo.svg" alt="logo" className="h-8 w-8" />
          </a>
          <ThemeToggle />
        </header>
        {children}
      </body>
    </html>
  );
}
