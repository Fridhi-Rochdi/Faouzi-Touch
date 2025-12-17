'use client';

import { Truck, Shield, Phone, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "توصيل سريع",
      description: "نوصل لكل تونس في أقل من 48 ساعة"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "جودة مضمونة",
      description: "عطور أصلية 100% مع ضمان الجودة"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "خدمة عملاء",
      description: "فريق متاح للرد على استفساراتك"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "طلبات سريعة",
      description: "اطلب عبر واتساب وتوصلك العطور"
    }
  ];

  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-7 shadow-soft card-hover border border-elegant-sand/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center text-white mb-5 shadow-soft">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
