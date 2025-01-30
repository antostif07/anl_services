import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ANL Services - Votre assistance voyage 24/7',
  description: 'Service d\'assistance voyage professionnel disponible 24/7 dans le monde entier. Assistance médicale, rapatriement, et support en cas d\'urgence.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="ANL Services"
                width={50}
                height={50}
                className="w-auto h-10"
              />
              <span className="font-bold text-xl text-primary">ANL Services</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              <Link href="/about" className="hover:text-primary transition-colors">À Propos</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
            <Link 
              href="/urgence"
              className="bg-destructive text-white px-4 py-2 rounded-full font-medium hover:bg-destructive/90 transition-colors"
            >
              Urgence 24/7
            </Link>
          </nav>
        </header>
        <main className="pt-20">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo-white.png"
                  alt="ANL Services"
                  width={50}
                  height={50}
                  className="w-auto h-10"
                />
                <span className="font-bold text-xl">ANL Services</span>
              </div>
              <p className="text-gray-400">
                Votre partenaire de confiance pour une assistance voyage professionnelle 24/7.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Assistance Médicale</li>
                <li>Rapatriement</li>
                <li>Assistance Administrative</li>
                <li>Support Voyage</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+243 823 064 789</li>
                <li>contact@anlservices.fr</li>
                <li>Kinshasa, RD Congo</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Légal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Mentions Légales</li>
                <li>Politique de Confidentialité</li>
                <li>CGV</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} ANL Services. Tous droits réservés.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}