import React, { useState, useEffect } from 'react';
import { Menu, X, Cloud } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Cloud className="h-8 w-8 text-blue-700" />
          <span className={`font-bold text-xl ${isScrolled ? 'text-blue-700' : 'text-white'}`}>
            Ti Kloud Réunion
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="#features" isScrolled={isScrolled}>Features</NavLink>
          <NavLink href="#education" isScrolled={isScrolled}>Education</NavLink>
          <NavLink href="#security" isScrolled={isScrolled}>Security</NavLink>
          <NavLink href="#roadmap" isScrolled={isScrolled}>Roadmap</NavLink>
          <NavLink href="#community" isScrolled={isScrolled}>Community</NavLink>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-blue-700' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-blue-700' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <MobileNavLink href="#features" onClick={toggleMenu}>Features</MobileNavLink>
            <MobileNavLink href="#education" onClick={toggleMenu}>Education</MobileNavLink>
            <MobileNavLink href="#security" onClick={toggleMenu}>Security</MobileNavLink>
            <MobileNavLink href="#roadmap" onClick={toggleMenu}>Roadmap</MobileNavLink>
            <MobileNavLink href="#community" onClick={toggleMenu}>Community</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  isScrolled: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, isScrolled, children }) => (
  <a 
    href={href} 
    className={`font-medium hover:text-blue-700 transition-colors ${
      isScrolled ? 'text-gray-700' : 'text-white'
    }`}
  >
    {children}
  </a>
);

interface MobileNavLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, onClick, children }) => (
  <a 
    href={href} 
    className="text-gray-700 font-medium py-2 hover:text-blue-700 transition-colors"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;