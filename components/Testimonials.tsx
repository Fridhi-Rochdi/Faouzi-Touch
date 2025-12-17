'use client';

import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: "/image/feedback/592004805_1899262197685442_3085278776044128799_n.jpg",
    },
    {
      id: 2,
      image: "/image/feedback/593466590_808896898816006_6282306900802571283_n.jpg",
    },
    {
      id: 3,
      image: "/image/feedback/594294654_1994621298001352_2109584009809719446_n.jpg",
    },
    {
      id: 4,
      image: "/image/feedback/594311651_1923094171935907_4607307731117136935_n.jpg",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 600);
    }, 3500);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-24 bg-gradient-elegant relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 glass-effect px-5 py-2.5 rounded-full shadow-soft mb-6">
            <Star className="w-5 h-5 text-accent-600 fill-accent-600" />
            <span className="text-sm font-medium text-gray-700">آراء عملائنا</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">ماذا يقول عملاؤنا</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نفخر بثقة عملائنا ورضاهم عن خدماتنا ومنتجاتنا
          </p>
        </div>

        {/* Testimonials Stack - Card Deck Animation */}
        <div className="max-w-md mx-auto px-4">
          <div className="relative h-[500px] md:h-[650px]">
            {/* Stack of Cards */}
            {testimonials.map((testimonial, index) => {
              const position = (index - currentIndex + testimonials.length) % testimonials.length;
              const isTop = position === 0;
              
              return (
                <div 
                  key={testimonial.id}
                  className="absolute inset-0 transition-all duration-600 ease-out"
                  style={{
                    transform: `
                      translateY(${position * 12}px) 
                      translateX(${position * 8}px) 
                      rotate(${position * 2}deg)
                      scale(${1 - position * 0.05})
                      ${isAnimating && isTop ? 'translateX(150%) rotate(25deg)' : ''}
                    `,
                    zIndex: testimonials.length - position,
                    opacity: position < 3 ? 1 : 0,
                    pointerEvents: position < 3 ? 'auto' : 'none',
                  }}
                >
                  {/* Card Container */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                      src={testimonial.image}
                      alt={`تقييم عميل ${testimonial.id}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={position < 2}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>
                    
                    {/* Quote Icon - Only on top card */}
                    {isTop && (
                      <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                    )}

                    {/* Card Number Indicator */}
                    <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-accent-600">{testimonial.id}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <div 
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-12 bg-accent-600' 
                    : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 glass-effect rounded-3xl px-10 py-6 shadow-elegant border border-white/50">
            <Star className="w-6 h-6 text-accent-600 fill-accent-600" />
            <p className="text-lg text-gray-700 font-medium">
              شكراً لثقتكم بنا - رضاكم هو نجاحنا
            </p>
            <Star className="w-6 h-6 text-accent-600 fill-accent-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
