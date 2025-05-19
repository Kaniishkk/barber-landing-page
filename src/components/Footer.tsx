import React from 'react';
import { Scissors, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto">
        <div className="pt-16 pb-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Scissors className="h-8 w-8 text-red-500" />
                <div className="ml-2">
                  <h2 className="font-bold text-2xl">Fama Barber</h2>
                  <p className="text-sm text-gray-400">Beauty Salon</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Premium barbershop offering exceptional haircuts, beard trims, and grooming services in Denton, TX.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-900 p-2 rounded-full hover:bg-red-700 transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-blue-900 p-2 rounded-full hover:bg-red-700 transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-blue-900 p-2 rounded-full hover:bg-red-700 transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-10 h-1 bg-red-700"></span>
              </h3>
              <ul className="space-y-3">
                <li><a href="#home" className="footer-link">Home</a></li>
                <li><a href="#services" className="footer-link">Services</a></li>
                <li><a href="#about" className="footer-link">About Us</a></li>
                <li><a href="#gallery" className="footer-link">Gallery</a></li>
                <li><a href="#team" className="footer-link">Our Team</a></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                Services
                <span className="absolute -bottom-2 left-0 w-10 h-1 bg-red-700"></span>
              </h3>
              <ul className="space-y-3">
                <li><a href="#services" className="footer-link">Haircuts</a></li>
                <li><a href="#services" className="footer-link">Beard Trim</a></li>
                <li><a href="#services" className="footer-link">Hot Towel Shave</a></li>
                <li><a href="#services" className="footer-link">Hair Coloring</a></li>
                <li><a href="#services" className="footer-link">Kids Haircut</a></li>
                <li><a href="#services" className="footer-link">Hair & Beard Treatment</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                Contact Info
                <span className="absolute -bottom-2 left-0 w-10 h-1 bg-red-700"></span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-500 mr-3 mt-1" />
                  <span className="text-gray-400">
                    500 N Bell Ave #109<br />
                    Denton, TX 76209<br />
                    United States
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-red-500 mr-3" />
                  <a href="tel:+19406129127" className="text-gray-400 hover:text-white">
                    +1 940-612-9127
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-red-500 mr-3" />
                  <a href="mailto:info@famabarbershop.com" className="text-gray-400 hover:text-white">
                    info@famabarbershop.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-900 py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Fama Barber Shop and Beauty Salon. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;