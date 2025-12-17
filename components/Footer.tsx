'use client';

import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center shadow-elegant">
                <span className="text-white font-bold text-base">FT</span>
              </div>
              <h3 className="text-lg font-bold">Faouzi Touch</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              متجر متخصص في توفير أجود أنواع العطور الفاخرة بأسعار منافسة مع خدمة التوصيل لجميع مناطق تونس.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-base font-bold mb-4">اتصل بنا</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <a href="tel:26960603" className="flex items-center gap-2 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>26960603</span>
              </a>
              <a href="https://wa.me/21694840369" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>94840369 (واتساب)</span>
              </a>
              <a href="mailto:fawziqualite28@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-accent-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-xs">fawziqualite28@gmail.com</span>
              </a>
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="leading-relaxed">سيتي الرياض، برج سدرية، تونس</span>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-base font-bold mb-4">ساعات العمل</h3>
            <div className="text-gray-300 space-y-2 mb-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                <p>السبت - الخميس: 9:00 - 21:00</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent-600 rounded-full"></div>
                <p>الجمعة: 14:00 - 21:00</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-600 transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-gray-400">
          <p className="text-sm">&copy; 2025 Faouzi Touch. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
