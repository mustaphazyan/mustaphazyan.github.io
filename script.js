// ZAHRAOUI PROD - JavaScript Functions
// وظائف التفاعل والتبديل بين الأوضاع

// ============================================
// إدارة الوضع الليلي (Dark Mode)
// ============================================

// التحقق من تفضيل الوضع المحفوظ
function initDarkMode() {
  const savedMode = localStorage.getItem('darkMode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedMode === 'true' || (savedMode === null && prefersDark)) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

// تفعيل الوضع الليلي
function enableDarkMode() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'true');
  updateThemeToggleButton();
}

// تعطيل الوضع الليلي
function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', 'false');
  updateThemeToggleButton();
}

// تبديل الوضع الليلي
function toggleDarkMode() {
  if (document.body.classList.contains('dark-mode')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

// تحديث نص زر التبديل
function updateThemeToggleButton() {
  const btn = document.getElementById('themeToggle');
  if (btn) {
    const isDark = document.body.classList.contains('dark-mode');
    btn.textContent = isDark ? '☀️ وضع فاتح' : '🌙 وضع ليلي';
    btn.title = isDark ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الليلي';
  }
}

// ============================================
// إدارة اللغات (Language Support)
// ============================================

const translations = {
  ar: {
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.artists': 'الفنانون',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'hero.title': 'ZAHRAOUI PROD',
    'hero.subtitle': 'منصة احترافية للتوزيع الموسيقي العالمي',
    'hero.description': 'نساعد الفنانين والعلامات الموسيقية على توزيع أعمالهم عالمياً بكل احترافية',
    'hero.btn1': 'اكتشف الخدمات',
    'hero.btn2': 'تواصل معنا',
    'about.title': 'من نحن',
    'about.description': 'ZAHRAOUI PROD علامة مستقلة متخصصة في التوزيع الموسيقي والحقوق الرقمية',
    'services.title': 'الخدمات المميزة',
    'service.distribution': 'التوزيع الموسيقي العالمي',
    'service.copyright': 'حماية حقوق النشر',
    'service.youtube': 'YouTube Content ID',
    'service.promotion': 'الترويج الموسيقي',
    'service.management': 'إدارة الفنانين',
    'service.publishing': 'النشر الموسيقي',
    'artists.title': 'الفنانون المتميزون',
    'contact.title': 'اتصل بنا',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال',
    'footer.about': 'من نحن',
    'footer.services': 'الخدمات',
    'footer.contact': 'اتصل بنا',
    'footer.social': 'تابعنا',
    'footer.copyright': 'جميع الحقوق محفوظة © 2026 ZAHRAOUI PROD'
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.artists': 'Artists',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'ZAHRAOUI PROD',
    'hero.subtitle': 'Professional Music Distribution Platform',
    'hero.description': 'We help artists and music labels distribute their work globally with professionalism',
    'hero.btn1': 'Discover Services',
    'hero.btn2': 'Contact Us',
    'about.title': 'About Us',
    'about.description': 'ZAHRAOUI PROD is an independent label specializing in music distribution and digital rights',
    'services.title': 'Featured Services',
    'service.distribution': 'Global Music Distribution',
    'service.copyright': 'Copyright Protection',
    'service.youtube': 'YouTube Content ID',
    'service.promotion': 'Music Promotion',
    'service.management': 'Artist Management',
    'service.publishing': 'Music Publishing',
    'artists.title': 'Featured Artists',
    'contact.title': 'Contact Us',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'footer.about': 'About',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.social': 'Follow Us',
    'footer.copyright': 'All rights reserved © 2026 ZAHRAOUI PROD'
  }
};

// الحصول على اللغة المحفوظة
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'ar';
}

// تعيين اللغة
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  updatePageTranslations(lang);
  updateLanguageToggleButton(lang);
}

// تحديث الترجمات في الصفحة
function updatePageTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// تحديث نص زر اللغة
function updateLanguageToggleButton(lang) {
  const btn = document.getElementById('languageToggle');
  if (btn) {
    btn.textContent = lang === 'ar' ? 'EN' : 'AR';
    btn.title = lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية';
  }
}

// تبديل اللغة
function toggleLanguage() {
  const currentLang = getCurrentLanguage();
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  setLanguage(newLang);
}

// ============================================
// وظائف النموذج
// ============================================

function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  
  // التحقق من البيانات
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  if (!name || !email || !message) {
    alert('يرجى ملء جميع الحقول');
    return;
  }
  
  // التحقق من صحة البريد الإلكتروني
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('يرجى إدخال بريد إلكتروني صحيح');
    return;
  }
  
  // محاكاة إرسال النموذج
  console.log('Form Data:', { name, email, message });
  alert('تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.');
  form.reset();
}

// ============================================
// وظائف التنقل
// ============================================

function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// ============================================
// التهيئة عند تحميل الصفحة
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // تهيئة الوضع الليلي
  initDarkMode();
  
  // تهيئة اللغة
  const currentLang = getCurrentLanguage();
  setLanguage(currentLang);
  
  // إضافة مستمعي الأحداث للأزرار
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleDarkMode);
  }
  
  const languageToggle = document.getElementById('languageToggle');
  if (languageToggle) {
    languageToggle.addEventListener('click', toggleLanguage);
  }
  
  // إضافة مستمع الأحداث لنموذج الاتصال
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
  
  // إضافة مستمعي الأحداث للروابط الناعمة
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      smoothScroll(target);
    });
  });
  
  // تحديث زر التبديل
  updateThemeToggleButton();
});

// ============================================
// وظائف إضافية
// ============================================

// إضافة تأثير عند التمرير
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (header) {
    if (window.scrollY > 50) {
      header.style.boxShadow = 'var(--shadow-lg)';
    } else {
      header.style.boxShadow = 'var(--shadow)';
    }
  }
});

// دعم الاستجابة للتغييرات في تفضيل النظام
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (localStorage.getItem('darkMode') === null) {
    if (e.matches) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }
});

// تصدير الوظائف للاستخدام الخارجي
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    toggleDarkMode,
    toggleLanguage,
    setLanguage,
    getCurrentLanguage,
    handleFormSubmit,
    smoothScroll
  };
}
