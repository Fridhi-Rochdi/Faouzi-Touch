'use client';

import { Heart, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Side */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary-50 to-gold-50 rounded-3xl p-12 shadow-luxury">
              <div className="aspect-square bg-white rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center space-y-6 p-8">
                  <div className="text-8xl">💎</div>
                  <h3 className="text-3xl font-bold text-gradient">Faouzi Touch</h3>
                  <p className="text-gray-600 text-lg">رحلتنا مع الرائحة الفاخرة</p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-luxury p-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-gradient">500+</p>
                <p className="text-gray-600 text-sm">عميل راضي</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-50 to-gold-50 px-4 py-2 rounded-full mb-4">
                <Heart className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-medium text-gray-700">قصتنا</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                من نحن <span className="text-gradient">Faouzi Touch</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                فوزي تاتش هو متجر تونسي متخصص في توفير أجود أنواع العطور الفاخرة. نحن نؤمن بأن العطر ليس مجرد رائحة، بل هو تعبير عن الشخصية والأناقة.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                نقدم مجموعة منتقاة بعناية من العطور بأسعار منافسة، مع خدمة توصيل سريعة لجميع مناطق تونس. رضا العملاء هو أولويتنا.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 border border-primary-100">
                <Award className="w-10 h-10 text-primary-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">جودة عالية</h4>
                <p className="text-gray-600">عطور أصلية 100% من أفضل العلامات</p>
              </div>
              <div className="bg-gradient-to-br from-gold-50 to-white rounded-2xl p-6 border border-gold-100">
                <Users className="w-10 h-10 text-gold-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">خدمة مميزة</h4>
                <p className="text-gray-600">فريق محترف لخدمة عملائنا الكرام</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a 
                href="https://wa.me/21694840369"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-gold-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300"
              >
                تواصل معنا الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
