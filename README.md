# Mustapha Zyan - Official Website

موقع رسمي احترافي للفنان **موسطفى زيان** - الراي الحديث

## 🎨 الميزات

### التصميم
- **Luxury Dark/Gold Aesthetic:** تصميم فاخر بألوان ذهبية وسوداء عميقة
- **Glassmorphism Effects:** تأثيرات زجاجية حديثة وسلسة
- **Responsive Design:** متوافق تماماً مع جميع الأجهزة (موبايل، تابلت، ديسكتوب)
- **Parallax Scrolling:** تأثيرات بصرية متقدمة عند التمرير

### الوظائف
- **Hero Section:** قسم بطل بصري مع صورة الفنان وتأثيرات Parallax
- **Biography:** سيرة ذاتية احترافية مع إحصائيات
- **3D Album Cards:** بطاقات ألبومات بتأثيرات ثلاثية الأبعاد
- **Advanced Audio Player:** مشغل صوت متقدم مع:
  - تحكم كامل (تشغيل، إيقاف، تخطي)
  - شريط تقدم قابل للتفاعل
  - التحكم في مستوى الصوت
  - قائمة أغاني مع تمييز الأغنية الحالية
- **Audio Visualizer:** محلل صوتي بصري متفاعل
- **Social Integration:** روابط مباشرة إلى YouTube, Instagram, TikTok, Spotify

## 📁 هيكل المشروع

```
/project
├── index.html              # الصفحة الرئيسية
├── style.css              # التنسيقات الرئيسية
├── script.js              # منطق التطبيق
├── README.md              # هذا الملف
├── /albums/
│   ├── album1.html        # صفحة الألبوم الأول
│   ├── album2.html        # صفحة الألبوم الثاني
│   ├── album3.html        # صفحة الألبوم الثالث
│   └── album.css          # تنسيقات صفحات الألبومات
├── /music/
│   └── /album1/
│       ├── song1.mp3      # الأغنية الأولى
│       └── song2.mp3      # الأغنية الثانية
├── /covers/
│   ├── album1.jpg         # غلاف الألبوم الأول
│   └── default.jpg        # الصورة الافتراضية
└── /artist/
    ├── artist.jpg         # صورة الفنان
    └── background.jpg     # صورة الخلفية
```

## 🚀 البدء السريع

### 1. استنساخ المستودع
```bash
git clone https://github.com/mustaphazyan/mustaphazyan.github.io.git
cd mustaphazyan.github.io
```

### 2. فتح الموقع
ببساطة افتح ملف `index.html` في متصفحك أو استخدم خادم محلي:
```bash
# باستخدام Python
python -m http.server 8000

# أو باستخدام Node.js
npx http-server
```

ثم اذهب إلى `http://localhost:8000`

## 🎵 إضافة ألبومات وأغاني جديدة

### خطوات إضافة ألبوم جديد:

1. **أنشئ مجلد جديد للألبوم:**
   ```
   /music/albumX/
   ```

2. **أضف ملفات الموسيقى:**
   - ضع ملفات MP3 في المجلد الجديد

3. **أضف غلاف الألبوم:**
   - ضع صورة الغلاف في `/covers/albumX.jpg`

4. **حدّث ملف `script.js`:**
   أضف بيانات الألبوم الجديد في قسم `albumsData`:
   ```javascript
   albumX: {
       title: 'اسم الألبوم',
       artist: 'موسطفى زيان',
       year: 2024,
       cover: './covers/albumX.jpg',
       description: 'وصف الألبوم',
       songs: [
           { title: 'اسم الأغنية 1', file: './music/albumX/song1.mp3', duration: '3:45' },
           { title: 'اسم الأغنية 2', file: './music/albumX/song2.mp3', duration: '4:20' }
       ]
   }
   ```

5. **أنشئ صفحة ألبوم جديدة:**
   - انسخ ملف `albums/album1.html`
   - غيّر معرّف الألبوم في السطر الأخير:
   ```javascript
   window.initializeAlbumPlayer('albumX');
   ```

6. **حدّث الصفحة الرئيسية:**
   أضف بطاقة ألبوم جديدة في قسم `discography`:
   ```html
   <div class="album-card" onclick="window.location.href='./albums/albumX.html'">
       <!-- محتوى البطاقة -->
   </div>
   ```

## 🌐 النشر على GitHub Pages

### الخطوة 1: تحضير المستودع
```bash
git add .
git commit -m "Update with new albums"
git push origin main
```

### الخطوة 2: تفعيل GitHub Pages
1. اذهب إلى إعدادات المستودع (Settings)
2. اختر "Pages" من القائمة الجانبية
3. تحت "Build and deployment"، اختر:
   - Branch: `main`
   - Folder: `/ (root)`
4. اضغط "Save"

### الخطوة 3: التحقق من النشر
بعد دقائق قليلة، سيكون موقعك متاحاً على:
```
https://mustaphazyan.github.io
```

## 🎨 تخصيص الألوان والأنماط

### تغيير اللون الذهبي الأساسي:
في ملف `style.css`، غيّر قيمة المتغير:
```css
--primary-gold: #D4AF37; /* غيّر هذا اللون */
```

### تغيير الخطوط:
في ملف `index.html` و `albums/album1.html`، عدّل استيراد Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

## 📱 الميزات المتقدمة

### Audio Visualizer
يعمل تلقائياً عند تشغيل الموسيقى ويعرض تحليلاً بصرياً للترددات الصوتية.

### Parallax Scrolling
يتحرك الخلفية بسرعة مختلفة عند التمرير لإنشاء عمق بصري.

### Responsive Navigation
تتكيف شريط التنقل تلقائياً مع حجم الشاشة.

## 🔧 المتطلبات التقنية

- متصفح حديث يدعم:
  - HTML5 Audio
  - CSS Grid و Flexbox
  - Web Audio API (للمحلل الصوتي)
  - ES6 JavaScript

## 📝 الملاحظات المهمة

1. **المسارات النسبية:** جميع المسارات نسبية لضمان عمل الموقع على GitHub Pages
2. **دعم اللغة العربية:** الموقع مدعوم بالكامل للغة العربية مع اتجاه RTL
3. **الأداء:** تم تحسين الأداء باستخدام CSS transitions بدلاً من JavaScript animations

## 🤝 المساهمة

للمساهمة في تحسين الموقع:
1. اعمل على فرع جديد
2. قم بالتغييرات المطلوبة
3. أرسل Pull Request

## 📄 الترخيص

جميع الحقوق محفوظة © 2024 Mustapha Zyan

---

**تم التطوير بواسطة:** Manus AI  
**آخر تحديث:** مايو 2024
