import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/components/providers/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Josiah Praise | Full-Stack Developer',
  description:
    'Full-Stack Developer specializing in React, TypeScript, and modern web technologies.',
  icons: {
    icon: '/terminal.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Gradient Background */}
          <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 animate-gradient -z-10" />
          <div className="fixed inset-0 bg-grid-pattern opacity-5 -z-10" />

          <Header />
          <main className="flex-1 relative">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
