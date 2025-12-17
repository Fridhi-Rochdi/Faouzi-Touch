'use client';

import { Sparkles, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="relative bg-white min-h-screen flex items-center">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-elegant-cream/30 via-white to-elegant-sand/20"></div>

      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-8 text-center lg:text-right space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-soft border border-elegant-sand/30">
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-gray-700">عطور أصلية 100%</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-gray-900 mb-2">عطور فاخرة</span>
              <span className="block text-gradient">لكل المناسبات</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              اختر من مجموعة واسعة من العطور الأصلية بأسعار مميزة مع توصيل سريع لكافة أنحاء تونس
            </p>

            {/* Pricing Cards */}
            <div className="inline-flex items-center gap-4 bg-white rounded-2xl shadow-soft p-5 border border-elegant-sand/20">
              <div className="text-center px-3">
                <p className="text-xs text-gray-500 mb-1">50 مل</p>
                <p className="text-3xl font-bold text-primary-700">20</p>
                <p className="text-xs text-gray-500 mt-1">دينار</p>
              </div>
              <div className="h-14 w-px bg-elegant-sand"></div>
              <div className="text-center px-3">
                <p className="text-xs text-gray-500 mb-1">30 مل</p>
                <p className="text-3xl font-bold text-accent-700">15</p>
                <p className="text-xs text-gray-500 mt-1">دينار</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <a 
                href="https://wa.me/21694840369" 
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-2xl text-base font-semibold hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <span>اطلب الآن</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </a>
              <a 
                href="#products"
                className="inline-flex items-center justify-center bg-white text-gray-700 px-8 py-4 rounded-2xl text-base font-semibold hover:shadow-soft transition-all duration-300 border border-elegant-sand/50 hover:border-primary-600"
              >
                استعرض المنتجات
              </a>
            </div>
          </div>

          {/* Image/Visual - Hidden on mobile */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Main Image Container */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-elegant">
                <Image
                  src="/image/placeimage/594529476_797904769918761_4375915893873626652_n.jpg"
                  alt="فوزي تاتش - عطور فاخرة"
                  fill
                  className="object-cover"
                  priority
                  sizes="33vw"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              
              {/* Floating quality badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-elegant p-4 border border-elegant-sand/30">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">جودة مضمونة</p>
                    <p className="text-base font-bold text-gray-900">100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
