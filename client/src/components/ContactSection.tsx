import { Mail, Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'البريد الإلكتروني',
      value: 'contact@zahraouiprod.com',
      href: 'mailto:contact@zahraouiprod.com',
      color: 'bg-red-100 text-red-700',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@zahraouiprod',
      href: 'https://instagram.com',
      color: 'bg-pink-100 text-pink-700',
    },
    {
      icon: Youtube,
      label: 'YouTube',
      value: 'ZAHRAOUI PROD',
      href: 'https://youtube.com',
      color: 'bg-red-100 text-red-700',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+212 6XX XXX XXX',
      href: 'https://wa.me',
      color: 'bg-green-100 text-green-700',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="text-blue-700">تواصل</span>
            <span className="text-amber-400 mr-2">معنا</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            للاستفسارات التجارية، خدمات التوزيع الموسيقي، أو حماية الحقوق الرقمية يمكنكم التواصل معنا مباشرة. فريقنا جاهز لمساعدتك في تحقيق أحلامك الموسيقية.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center h-full hover:scale-105">
                  <div className={`w-16 h-16 ${method.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {method.label}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {method.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="mt-16 max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            أرسل لنا رسالة
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                الاسم
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                placeholder="أدخل اسمك"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                placeholder="أدخل بريدك الإلكتروني"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                الرسالة
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                placeholder="أدخل رسالتك"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full btn-primary"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
