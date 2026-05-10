export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              <span className="text-blue-700">من</span>
              <span className="text-amber-400 mr-2">نحن</span>
            </h2>
          </div>

          {/* Content */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-2xl border border-blue-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className="font-bold text-blue-700">ZAHRAOUI PROD</span> علامة مستقلة متخصصة في التوزيع الموسيقي والحقوق الرقمية. نقدم حلولاً احترافية وموثوقة للفنانين لضمان وصول أعمالهم إلى جمهور عالمي مع الحفاظ الكامل على حقوق الملكية الفكرية والاستفادة القصوى من الأرباح.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">100+</div>
                <p className="text-gray-600">فنان موثق</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">150+</div>
                <p className="text-gray-600">منصة توزيع</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">24/7</div>
                <p className="text-gray-600">دعم فني</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
