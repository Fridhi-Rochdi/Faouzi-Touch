'use client';

import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/21694840369"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 group"
      aria-label="WhatsApp"
    >
      <div className="relative">
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        
        {/* Main button */}
        <div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white w-16 h-16 rounded-full shadow-elegant flex items-center justify-center hover:scale-110 transition-all duration-500 group-hover:shadow-2xl">
          <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
