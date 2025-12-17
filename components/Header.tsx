'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="glass-effect shadow-elegant sticky top-0 z-50 border-b border-elegant-sand/30 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        {/* Main Navigation */}
        <nav className="py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-4 group">
              <div className="relative group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 blur-lg opacity-40 group-hover:opacity-60 transition-opacity">
                  <Logo size={56} />
                </div>
                <div className="relative">
                  <Logo size={56} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient group-hover:scale-105 transition-transform">Faouzi Touch</h1>
                <p className="text-xs text-gray-500">فوزي تاتش للعطور الفاخرة</p>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              <a href="#home" className="relative text-gray-700 hover:text-primary-700 font-medium transition-colors group">
                <span>الرئيسية</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#products" className="relative text-gray-700 hover:text-primary-700 font-medium transition-colors group">
                <span>المنتجات</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#testimonials" className="relative text-gray-700 hover:text-primary-700 font-medium transition-colors group">
                <span>آراء العملاء</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="relative text-gray-700 hover:text-primary-700 font-medium transition-colors group">
                <span>اتصل بنا</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="https://wa.me/21694840369" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-3 rounded-full hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
              >
                <span className="relative z-10">اطلب الآن</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-elegant-sand/30 transition-colors"
              aria-label="Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-6 pb-6 border-t border-elegant-sand/30 pt-6 animate-slide-up">
              <div className="flex flex-col gap-5">
                <a href="#home" className="text-gray-700 hover:text-primary-700 font-medium transition-colors py-2 px-4 rounded-xl hover:bg-elegant-sand/20" onClick={() => setIsMenuOpen(false)}>الرئيسية</a>
                <a href="#products" className="text-gray-700 hover:text-primary-700 font-medium transition-colors py-2 px-4 rounded-xl hover:bg-elegant-sand/20" onClick={() => setIsMenuOpen(false)}>المنتجات</a>
                <a href="#testimonials" className="text-gray-700 hover:text-primary-700 font-medium transition-colors py-2 px-4 rounded-xl hover:bg-elegant-sand/20" onClick={() => setIsMenuOpen(false)}>آراء العملاء</a>
                <a href="#contact" className="text-gray-700 hover:text-primary-700 font-medium transition-colors py-2 px-4 rounded-xl hover:bg-elegant-sand/20" onClick={() => setIsMenuOpen(false)}>اتصل بنا</a>
                <a 
                  href="https://wa.me/21694840369" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-full hover:shadow-elegant transition-all duration-300 text-center font-bold mt-2"
                >
                  اطلب الآن
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
