'use client';

import { ShoppingBag, Star, Sparkles } from 'lucide-react';
import Image from 'next/image';

const Products = () => {
  // Real products with actual images
  const products = [
    {
      id: 1,
      name: "عطر أنيق",
      category: "مميز",
      description: "تركيبة فاخرة تدوم طويلاً",
      rating: 5,
      image: "/image/imageproduit/592878814_1308235344440439_1988135843593317708_n.jpg"
    },
    {
      id: 2,
      name: "عطر راقي",
      category: "كلاسيكي",
      description: "رائحة متميزة وأنيقة",
      rating: 5,
      image: "/image/imageproduit/593431943_748718001589586_6328330890145578329_n.jpg"
    },
    {
      id: 3,
      name: "عطر فريد",
      category: "حصري",
      description: "عبير مميز يناسب الجميع",
      rating: 5,
      image: "/image/imageproduit/593433595_1636121404018651_3865101332063792807_n.jpg"
    },
    {
      id: 4,
      name: "عطر فاخر",
      category: "مميز",
      description: "تركيبة استثنائية",
      rating: 5,
      image: "/image/imageproduit/594019910_1581129332889190_525507822472380568_n.jpg"
    },
    {
      id: 5,
      name: "عطر ساحر",
      category: "رومانسي",
      description: "رائحة عطرية ساحرة",
      rating: 5,
      image: "/image/imageproduit/594502147_958794083974449_7244311463395413904_n.jpg"
    },
    {
      id: 6,
      name: "عطر مميز",
      category: "فاخر",
      description: "تركيبة فنية متقنة",
      rating: 5,
      image: "/image/imageproduit/594522990_726200427199086_5628087341806687659_n.jpg"
    }
  ];

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-elegant-cream to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 glass-effect px-5 py-2.5 rounded-full shadow-soft mb-6">
            <Sparkles className="w-5 h-5 text-accent-600" />
            <span className="text-sm font-medium text-gray-700">مجموعتنا المميزة</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">عطورنا الفاخرة</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            اختر من بين مجموعة واسعة من العطور الفاخرة الأصلية بأفضل الأسعار
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-white rounded-3xl shadow-soft overflow-hidden card-hover border border-elegant-sand/20"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-elegant-cream to-elegant-sand">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 glass-effect px-4 py-2 rounded-full text-sm font-bold text-gray-800 shadow-soft border border-white/50">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-500 text-accent-500" />
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-4 p-4 bg-gradient-to-br from-elegant-cream to-white rounded-2xl border border-elegant-sand/30">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">50 مل</p>
                    <p className="text-2xl font-bold text-primary-700">20 <span className="text-sm">دت</span></p>
                  </div>
                  <div className="h-10 w-px bg-elegant-sand"></div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">30 مل</p>
                    <p className="text-2xl font-bold text-accent-700">15 <span className="text-sm">دت</span></p>
                  </div>
                </div>

                {/* Order Button */}
                <a 
                  href={`https://wa.me/21694840369?text=مرحبا، أريد طلب ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3 rounded-full font-bold hover:shadow-elegant transition-all duration-500 flex items-center justify-center gap-2 group text-sm"
                >
                  <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>اطلب الآن</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-4">
          <div className="inline-block bg-gradient-to-br from-elegant-cream to-white rounded-2xl p-6 shadow-elegant border border-elegant-sand/30">
            <Sparkles className="w-8 h-8 text-accent-600 mx-auto mb-3" />
            <p className="text-base text-gray-700 mb-4 font-medium">لم تجد ما تبحث عنه؟</p>
            <a 
              href="https://wa.me/21694840369"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-elegant transition-all duration-500 hover:scale-105 text-sm"
            >
              تواصل معنا للمزيد من الخيارات
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
