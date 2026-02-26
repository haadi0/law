import type {Metadata} from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: "G'Adroit Attorneys | International Business & Dispute Resolution Specialists",
  description: 'Tanzania-based, East Africa-focused elite law firm specializing in international business, investment law, and complex disputes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ProjectNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-body antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
