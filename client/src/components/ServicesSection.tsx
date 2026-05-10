import { Globe, Shield, Music, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: 'التوزيع الموسيقي العالمي',
      description: 'نشر الأغاني والألبومات على Spotify و Apple Music و Deezer و TikTok و YouTube Music وأكثر من 150 منصة بث عالمية بسهولة وسرعة.',
    },
    {
      icon: Shield,
      title: 'حماية حقوق النشر',
      description: 'إزالة المحتوى المسروق وتقديم بلاغات DMCA ضد أي انتهاك لحقوق الملكية الفكرية والمراقبة المستمرة لأعمالك.',
    },
    {
      icon: Music,
      title: 'YouTube Content ID',
      description: 'حماية موسيقاك على يوتيوب واكتشاف أي استخدام غير مصرح به وتحقيق الأرباح تلقائياً من كل استخدام.',
    },
    {
      icon: TrendingUp,
      title: 'الترويج الموسيقي',
      description: 'استراتيجيات تسويق رقمية احترافية لزيادة المشاهدات والاستماعات وبناء جمهور حقيقي ومخلص.',
    },
    {
      icon: Users,
      title: 'إدارة الفنانين',
      description: 'تطوير الهوية الفنية وإدارة الإصدارات الموسيقية وتحسين الظهور الرقمي والعلاقات مع المنصات.',
    },
    {
      icon: DollarSign,
      title: 'النشر الموسيقي',
      description: 'إدارة العائدات وحقوق النشر وجمع الأرباح من مختلف المنصات العالمية مع تقارير شفافة وفورية.',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="text-amber-400">المتميزة</span>
            <span className="text-blue-700 mr-2">الخدمات</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            حلول متكاملة وشاملة للفنانين والمنتجين والعلامات الموسيقية المستقلة والكبرى.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="text-blue-700" size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
