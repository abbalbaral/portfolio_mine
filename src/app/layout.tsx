import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar'; // Import the new Navbar
import Footer from '@/components/Footer'; // Import the new Footer

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abbal Baral | Portfolio',
  description: 'Personal Portfolio & Projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 flex flex-col min-h-screen`}>
        
        {/* The Navbar Component */}
        <Navbar />
        
        {/* Main Content */}
        <div className="flex-grow">
          {children}
        </div>
        
        {/* The Footer Component */}
        <Footer />
        
      </body>
    </html>
  );
}