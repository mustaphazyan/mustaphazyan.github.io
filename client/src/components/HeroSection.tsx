import { Music } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="hero-gradient text-white py-20 md:py-32 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Subtitle */}
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <div className="flex items-center gap-2 text-sm md:text-base">
              <Music size={18} />
              <span>منصة احترافية للتوزيع الموسيقي</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="display-title mb-6">
            <span className="block">ZAHRAOUI</span>
            <span className="text-amber-400">PROD</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
            نساعد الفنانين والعلامات الموسيقية على توزيع أعمالهم عالمياً بكل احترافية، حماية حقوقهم الرقمية، وتحقيق حضور قوي عبر جميع منصات البث الموسيقي العالمية.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="btn-accent inline-block"
            >
              اكتشف الخدمات
            </a>
            <a
              href="#contact"
              className="btn-secondary inline-block border-2 border-white text-white hover:bg-white/10"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl"></div>
    </section>
  );
}
