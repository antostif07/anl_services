'use client'; // Indique à Next.js que ce composant est un composant client

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // Import des icônes Lucide
import { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMobileServicesSubmenuOpen, setIsMobileServicesSubmenuOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleServicesMouseEnter = () => {
    setIsServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    setIsServicesDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileServicesSubmenu = () => {
    setIsMobileServicesSubmenuOpen(!isMobileServicesSubmenuOpen);
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Empêche la navigation immédiate
    router.push('/services'); // Navigue vers la page /services
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && !isMobileMenuOpen) {
        setIsServicesDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside as any);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside as any);
    };
  }, [dropdownRef, mobileMenuRef, isMobileMenuOpen]);

  return (
    <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between relative">
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

      {/* Menu Desktop (caché sur mobile) */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
        <div
          className="relative"
          onMouseEnter={handleServicesMouseEnter}
          onMouseLeave={handleServicesMouseLeave}
          ref={dropdownRef}
        >
          <Link href="/services" className="hover:text-primary transition-colors flex items-center gap-1" onClick={handleServicesClick}>Services</Link>
          {isServicesDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <Link href="/services/assistance-voyage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Assistance Voyage</Link>
              <Link href="/services/service-traiteur" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Service Traiteur</Link>
              <Link href="/services/commerce-generale" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Commerce Generale</Link>
            </div>
          )}
        </div>
        <Link href="/about" className="hover:text-primary transition-colors">À Propos</Link>
        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
      </div>

      {/* Bouton Hamburger (visible sur mobile) */}
      <button onClick={toggleMobileMenu} className="md:hidden text-2xl text-gray-600 hover:text-gray-800 transition-colors">
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>

      <Link
        href="/urgence"
        className="bg-destructive text-white px-4 py-2 rounded-full font-medium hover:bg-destructive/90 transition-colors hidden md:block" // Caché sur mobile initialement
      >
        Urgence 24/7
      </Link>

      {/* Menu Mobile (caché par défaut) */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-md z-20 overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-4 p-4">
          <Link href="/" className="hover:text-primary transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>Accueil</Link>
          <div className="relative">
            <button onClick={toggleMobileServicesSubmenu} className="hover:text-primary transition-colors block py-3 w-full text-left flex items-center justify-between" >
              Services {isMobileServicesSubmenuOpen ? <X size={16}/> : <Menu size={16}/>}
            </button>
            {/* Sous-menu mobile (conditionnellement affiché) */}
            {isMobileServicesSubmenuOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-2">
                <Link href="/services/assistance-voyage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Assistance Voyage</Link>
                <Link href="/services/service-traiteur" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Service Traiteur</Link>
                <Link href="/services/commerce-generale" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Commerce Generale</Link>
              </div>
            )}
          </div>
          <Link href="/about" className="hover:text-primary transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>À Propos</Link>
          <Link href="/contact" className="hover:text-primary transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link
            href="/urgence"
            className="bg-destructive text-white px-4 py-2 rounded-full font-medium hover:bg-destructive/90 transition-colors block" // Visible sur mobile
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Urgence 24/7
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;