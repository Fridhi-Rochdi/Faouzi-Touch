'use client';

import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 glass-effect px-5 py-2.5 rounded-full shadow-soft mb-6">
            <MessageCircle className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-medium text-gray-700">تواصل معنا</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">نحن في خدمتك</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            لا تتردد في التواصل معنا للاستفسارات أو الطلبات
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Cards */}
          <div className="space-y-6">
            {/* Phone */}
            <a 
              href="tel:26960603"
              className="group block bg-gradient-to-br from-white to-elegant-cream rounded-2xl shadow-elegant p-5 card-hover border border-elegant-sand/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center text-white shadow-soft flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1">اتصل بنا</h3>
                  <p className="text-xl font-bold text-primary-700 direction-ltr">26960603</p>
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/21694840369"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gradient-to-br from-white to-elegant-cream rounded-2xl shadow-elegant p-5 card-hover border border-elegant-sand/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white shadow-soft flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1">واتساب</h3>
                  <p className="text-xl font-bold text-green-600 direction-ltr">94840369</p>
                </div>
              </div>
            </a>

            {/* Email */}
            <a 
              href="mailto:fawziqualite28@gmail.com"
              className="group block bg-gradient-to-br from-white to-elegant-cream rounded-2xl shadow-elegant p-5 card-hover border border-elegant-sand/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white shadow-soft flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1">البريد الإلكتروني</h3>
                  <p className="text-sm text-accent-600 break-all">fawziqualite28@gmail.com</p>
                </div>
              </div>
            </a>

            {/* Address */}
            <div className="bg-gradient-to-br from-white to-elegant-cream rounded-2xl shadow-elegant p-5 border border-elegant-sand/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center text-white shadow-soft flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-2">العنوان</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    سيتي الرياض، برج سدرية<br />تونس، تونس
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & CTA */}
          <div className="space-y-8">
            {/* Hours */}
            <div className="bg-gradient-to-br from-white to-elegant-cream rounded-2xl shadow-elegant p-6 border border-elegant-sand/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center text-white shadow-soft">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">ساعات العمل</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-elegant-sand">
                  <span className="text-gray-700 font-medium text-sm">السبت - الخميس</span>
                  <span className="text-primary-700 font-bold text-base">9:00 - 21:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700 font-medium text-sm">الجمعة</span>
                  <span className="text-primary-700 font-bold text-base">14:00 - 21:00</span>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 rounded-2xl shadow-elegant p-6 text-white">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3">جاهز للطلب؟</h3>
                <p className="text-white/90 mb-6 text-sm leading-relaxed">
                  تواصل معنا عبر واتساب الآن واحصل على عطرك المفضل مع التوصيل السريع
                </p>
                <a 
                  href="https://wa.me/21694840369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-full font-bold hover:shadow-elegant transition-all duration-500 hover:scale-105 text-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>اطلب عبر واتساب</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
