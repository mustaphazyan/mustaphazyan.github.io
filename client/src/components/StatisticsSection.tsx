export default function StatisticsSection() {
  const stats = [
    {
      number: '100+',
      label: 'إصدار موسيقي',
    },
    {
      number: '24/7',
      label: 'حماية الحقوق',
    },
    {
      number: '150+',
      label: 'منصة بث',
    },
    {
      number: 'Global',
      label: 'توزيع عالمي',
    },
  ];

  return (
    <section id="stats" className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4 text-white">
            <span className="text-amber-400">إحصائيات</span>
            <span className="mr-2">النجاح</span>
          </h2>
          <p className="text-blue-100 text-lg">
            نتائج احترافية تعكس قوة منصتنا والثقة التي يضعها فيها الفنانون.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-box text-center"
            >
              <div className="text-5xl font-bold mb-3 text-amber-400">
                {stat.number}
              </div>
              <p className="text-blue-100 text-lg font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
