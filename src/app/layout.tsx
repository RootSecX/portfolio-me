import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import ParticleNetwork from '@/components/animations/ParticleNetwork';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RootSecX - Cybersecurity Engineer Portfolio',
  description: 'Enterprise-grade cybersecurity portfolio | IAM specialist | Cloud security architect',
  keywords: ['cybersecurity', 'IAM', 'cloud security', 'portfolio'],
  openGraph: {
    type: 'website',
    url: 'https://portfolio.example.com',
    title: 'RootSecX - Cybersecurity Engineer',
    description: 'Premium enterprise-grade cybersecurity portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme-store');
                if (theme) {
                  const { state } = JSON.parse(theme);
                  if (state?.theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-cyber-dark text-white dark`}>
        <ParticleNetwork />
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
