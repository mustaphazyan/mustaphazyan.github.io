# ZAHRAOUI PROD - موقع التوزيع الموسيقي العالمي

موقع ويب احترافي للتوزيع الموسيقي العالمي، مصمم بتصميم عصري واحترافي مع دعم كامل لـ GitHub Pages.

## المميزات

- ✅ تصميم احترافي وعصري
- ✅ دعم كامل للغة العربية (RTL)
- ✅ Responsive Design (يعمل على جميع الأجهزة)
- ✅ جاهز للنشر على GitHub Pages
- ✅ أداء عالي وسرعة تحميل سريعة
- ✅ SEO Optimized

## الأقسام الرئيسية

1. **Hero Section** - قسم البداية الجذاب مع CTA buttons
2. **About Section** - معلومات عن الشركة والإحصائيات الأساسية
3. **Services Section** - عرض الخدمات الستة الرئيسية
4. **Artists Section** - عرض الفنانين المتميزين
5. **Statistics Section** - إحصائيات النجاح
6. **Contact Section** - نماذج التواصل وطرق الاتصال
7. **Footer** - الروابط السريعة والمعلومات الإضافية

## التكنولوجيا المستخدمة

- **React 19** - مكتبة واجهات المستخدم
- **Tailwind CSS 4** - نظام التصميم
- **TypeScript** - لغة البرمجة
- **Vite** - أداة البناء والتطوير
- **Lucide React** - مكتبة الأيقونات

## كيفية النشر على GitHub Pages

### الخطوة 1: إعداد المستودع

1. قم بإنشاء مستودع جديد على GitHub باسم `username.github.io` أو أي اسم آخر
2. انسخ جميع ملفات المشروع إلى المستودع

### الخطوة 2: تكوين GitHub Pages

1. اذهب إلى إعدادات المستودع (Settings)
2. اختر "Pages" من القائمة الجانبية
3. تحت "Build and deployment"، اختر:
   - Source: "GitHub Actions"
4. سيتم تفعيل GitHub Actions تلقائياً

### الخطوة 3: الدفع والنشر

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

سيقوم GitHub Actions تلقائياً بـ:
1. بناء المشروع
2. نشر الملفات على GitHub Pages
3. إتاحة الموقع على `https://username.github.io`

## التطوير المحلي

### المتطلبات

- Node.js 18+
- pnpm 10+

### التثبيت والتشغيل

```bash
# تثبيت المتعلقات
pnpm install

# تشغيل خادم التطوير
pnpm run dev

# بناء المشروع للإنتاج
pnpm run build

# معاينة البناء
pnpm run preview
```

## هيكل المشروع

```
zahraoui-prod-website/
├── client/
│   ├── src/
│   │   ├── components/        # مكونات React
│   │   ├── pages/            # الصفحات
│   │   ├── App.tsx           # التطبيق الرئيسي
│   │   ├── main.tsx          # نقطة الدخول
│   │   └── index.css         # الأنماط العامة
│   ├── index.html            # ملف HTML الرئيسي
│   └── public/               # الملفات الثابتة
├── .github/
│   └── workflows/
│       └── deploy.yml        # ملف GitHub Actions
├── vite.config.ts            # إعدادات Vite
├── package.json              # المتعلقات
└── README_GITHUB_PAGES.md    # هذا الملف
```

## التخصيص

### تغيير الألوان

عدّل ملف `client/src/index.css` وغيّر متغيرات CSS:

```css
:root {
  --primary: #1e40af;      /* اللون الأساسي */
  --accent: #fbbf24;       /* لون التركيز */
  --background: #ffffff;   /* لون الخلفية */
  --foreground: #1f2937;   /* لون النص */
}
```

### تغيير المحتوى

عدّل الملفات التالية:

- `client/src/components/HeroSection.tsx` - قسم البداية
- `client/src/components/ServicesSection.tsx` - الخدمات
- `client/src/components/ArtistsSection.tsx` - الفنانون
- `client/src/components/ContactSection.tsx` - التواصل

### إضافة صور

استخدم روابط خارجية أو قم بتحميل الصور على خدمة CDN:

```tsx
<img src="https://cdn.example.com/image.jpg" alt="description" />
```

## الأداء والتحسينات

- تم تحسين حجم الحزمة (Bundle Size)
- استخدام Code Splitting للأداء الأفضل
- تحميل سريع للصفحات
- تحسين SEO

## المتطلبات الإضافية

### لتفعيل النطاق المخصص

1. اشتر نطاق من أي مزود نطاقات
2. أضف السجلات التالية إلى إعدادات DNS:

```
A record: 185.199.108.153
A record: 185.199.109.153
A record: 185.199.110.153
A record: 185.199.111.153
```

3. في إعدادات GitHub Pages، أضف النطاق المخصص

## الدعم والمساعدة

للمساعدة في التطوير أو الاستفسارات:

- 📧 البريد الإلكتروني: contact@zahraouiprod.com
- 📱 Instagram: @zahraouiprod
- 🎬 YouTube: ZAHRAOUI PROD
- 💬 WhatsApp: +212 6XX XXX XXX

## الترخيص

هذا المشروع مرخص تحت MIT License - انظر ملف LICENSE للتفاصيل.

---

**تم إنشاء هذا الموقع بواسطة ZAHRAOUI PROD**
