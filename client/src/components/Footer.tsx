import { Music } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Music size={24} className="text-amber-400" />
              <span className="text-xl font-bold">
                <span className="text-amber-400">ZAHRAOUI</span> PROD
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              منصة احترافية للتوزيع الموسيقي العالمي
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-amber-400 transition">من نحن</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition">الخدمات</a></li>
              <li><a href="#artists" className="hover:text-amber-400 transition">الفنانون</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition">تواصل</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition">التوزيع الموسيقي</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">حماية الحقوق</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">YouTube Content ID</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">الترويج الموسيقي</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">تابعنا</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">Instagram</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">YouTube</a></li>
              <li><a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">WhatsApp</a></li>
              <li><a href="mailto:contact@zahraouiprod.com" className="hover:text-amber-400 transition">البريد الإلكتروني</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} ZAHRAOUI PROD. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-amber-400 transition">سياسة الخصوصية</a>
              <a href="#" className="hover:text-amber-400 transition">شروط الخدمة</a>
              <a href="#" className="hover:text-amber-400 transition">اتصل بنا</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
