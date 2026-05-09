# ZAHRAOUI PROD - منصة التوزيع الموسيقي الاحترافية

**Professional Music Distribution Platform**

موقع GitHub Pages بسيط وسهل الاستخدام مع دعم كامل للغة العربية والإنجليزية والوضع الليلي.

## 📁 هيكل الملفات

```
zahraoui-github/
├── index.html          # الصفحة الرئيسية
├── contact.html        # صفحة الاتصال
├── artists1.html       # صفحة الفنان الأول (Mustapha Zyan)
├── artists2.html       # صفحة الفنان الثاني (Hakim Qaisar)
├── artists3.html       # صفحة الفنان الثالث (Kader El Berkani)
├── style.css           # ملف التنسيقات الموحد
├── script.js           # ملف الوظائف التفاعلية
└── README.md           # هذا الملف
```

## ✨ الميزات الرئيسية

### 🌙 الوضع الليلي (Dark Mode)
- تبديل سلس بين الوضع الفاتح والليلي
- حفظ التفضيل في localStorage
- يدعم تفضيلات النظام التلقائية

### 🌍 دعم اللغات المتعددة
- **العربية (AR)** - مع دعم كامل للـ RTL
- **الإنجليزية (EN)** - مع دعم كامل للـ LTR
- تبديل فوري بدون إعادة تحميل الصفحة
- حفظ اختيار اللغة في localStorage

### 🎨 نظام ألوان أسود وأبيض
- تصميم احترافي وبسيط
- ألوان واضحة وسهلة القراءة
- متوافق مع الوضع الليلي

### 📱 تصميم متجاوب
- يعمل بشكل مثالي على جميع الأجهزة
- Mobile-first approach
- شاشات صغيرة وكبيرة

### ⚡ أداء سريع
- ملفات خفيفة الوزن
- بدون مكتبات خارجية ثقيلة
- تحميل سريع جداً

## 🚀 البدء السريع

### 1. استنساخ المستودع
```bash
git clone https://github.com/sonariqmusic/sonariq-music.github.io.git
cd sonariq-music.github.io
```

### 2. فتح الموقع
يمكنك فتح الملفات مباشرة في المتصفح:
- Windows: انقر نقراً مزدوجاً على `index.html`
- Mac/Linux: `open index.html` أو `firefox index.html`

### 3. أو استخدم خادم محلي
```bash
# باستخدام Python 3
python -m http.server 8000

# أو باستخدام Node.js
npx http-server
```

ثم افتح: `http://localhost:8000`

## 📝 تخصيص الموقع

### تغيير الألوان
عدّل متغيرات CSS في `style.css`:
```css
:root {
  --accent-color: #004E89;      /* اللون الأساسي */
  --accent-light: #F7B801;      /* اللون الثانوي */
  --bg-primary: #ffffff;        /* خلفية الوضع الفاتح */
  --text-primary: #000000;      /* نص الوضع الفاتح */
}

body.dark-mode {
  --bg-primary: #1a1a1a;        /* خلفية الوضع الليلي */
  --text-primary: #ffffff;      /* نص الوضع الليلي */
}
```

### إضافة فنان جديد
1. انسخ ملف `artists1.html`
2. غيّر الاسم والمعلومات
3. أضف الرابط في `index.html`

### تحديث معلومات الاتصال
عدّل الروابط في `contact.html` و `index.html`:
```html
<a href="mailto:your-email@example.com">البريد الإلكتروني</a>
<a href="https://wa.me/your-number">WhatsApp</a>
<a href="https://instagram.com/your-account">Instagram</a>
```

### إضافة ترجمات جديدة
عدّل كائن `translations` في `script.js`:
```javascript
const translations = {
  ar: {
    'key': 'القيمة بالعربية',
  },
  en: {
    'key': 'The value in English',
  }
};
```

## 🔧 الوظائف الرئيسية في script.js

### إدارة الوضع الليلي
```javascript
toggleDarkMode()      // تبديل الوضع
enableDarkMode()      // تفعيل الوضع الليلي
disableDarkMode()     // تعطيل الوضع الليلي
```

### إدارة اللغات
```javascript
toggleLanguage()      // تبديل اللغة
setLanguage('ar')     // تعيين لغة معينة
getCurrentLanguage()  // الحصول على اللغة الحالية
```

### وظائف أخرى
```javascript
handleFormSubmit()    // معالجة نموذج الاتصال
smoothScroll()        // تمرير سلس
```

## 📱 التوافقية

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ جميع المتصفحات الحديثة

## 🌐 نشر على GitHub Pages

### الخطوة 1: إنشاء مستودع
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

### الخطوة 2: تفعيل GitHub Pages
1. اذهب إلى Settings في المستودع
2. اختر Pages من القائمة الجانبية
3. اختر Branch: main
4. اضغط Save

### الخطوة 3: الوصول للموقع
سيكون الموقع متاحاً على: `https://your-username.github.io/your-repo`

## 📄 الملفات الرئيسية

### index.html
الصفحة الرئيسية تحتوي على:
- قسم البطل (Hero)
- قسم من نحن
- قسم الخدمات
- قسم الفنانين
- قسم الإحصائيات
- التذييل

### contact.html
صفحة الاتصال تحتوي على:
- معلومات الاتصال
- نموذج الاتصال
- وسائل التواصل الاجتماعي
- ساعات العمل

### artists*.html
صفحات الفنانين تحتوي على:
- معلومات الفنان
- نبذة عن الفنان
- أحدث الأغاني
- فنانون آخرون

### style.css
ملف التنسيقات يحتوي على:
- متغيرات CSS للألوان
- تنسيقات الوضع الليلي
- تنسيقات الاستجابة
- تأثيرات التحويم

### script.js
ملف الوظائف يحتوي على:
- إدارة الوضع الليلي
- إدارة اللغات
- معالجة النماذج
- وظائف التنقل

## 🎯 الميزات المستقبلية

- [ ] نظام حجز الاستشارات
- [ ] لوحة تحكم للفنانين
- [ ] نظام التعليقات
- [ ] تقارير تحليلية
- [ ] نظام البحث
- [ ] دعم لغات إضافية

## 📞 الدعم والتواصل

- **البريد الإلكتروني**: contact@zahraouiprod.com
- **Instagram**: @zahraouiprod
- **YouTube**: @zahraouiprod
- **WhatsApp**: [رقم الواتس]

## 📄 الترخيص

جميع الحقوق محفوظة © 2026 ZAHRAOUI PROD

## 🙏 شكر وتقدير

شكراً لاستخدام ZAHRAOUI PROD. نتمنى لك تجربة رائعة!

---

**مبني بـ ❤️ باستخدام HTML, CSS, و JavaScript**

آخر تحديث: 2026-05-09
