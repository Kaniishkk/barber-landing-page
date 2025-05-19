import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, Scissors } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Scissors className={`h-8 w-8 ${isScrolled ? 'text-red-700' : 'text-white'}`} />
            <div className="ml-2">
              <h1 className={`font-bold text-xl md:text-2xl transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Fama Barber
              </h1>
              <p className={`text-xs md:text-sm transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-gray-200'
              }`}>
                Beauty Salon
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Home</a>
            <a href="#services" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Services</a>
            <a href="#about" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'}`}>About</a>
            <a href="#gallery" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Gallery</a>
            <a href="#team" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Team</a>
            <a href="#contact" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Contact</a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className={`h-4 w-4 mr-2 ${isScrolled ? 'text-red-700' : 'text-white'}`} />
              <span className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                +1 940-612-9127
              </span>
            </div>
            <div className="flex items-center">
              <Clock className={`h-4 w-4 mr-2 ${isScrolled ? 'text-red-700' : 'text-white'}`} />
              <span className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                Open ⋅ Closes 7 pm
              </span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-4 p-4 absolute left-4 right-4 animate-fade-up">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#services" className="nav-link" onClick={() => setIsOpen(false)}>Services</a>
              <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
              <a href="#gallery" className="nav-link" onClick={() => setIsOpen(false)}>Gallery</a>
              <a href="#team" className="nav-link" onClick={() => setIsOpen(false)}>Team</a>
              <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center mb-2">
                <Phone className="h-4 w-4 mr-2 text-red-700" />
                <span className="text-sm text-gray-700">+1 940-612-9127</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-red-700" />
                <span className="text-sm text-gray-700">Open ⋅ Closes 7 pm</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;