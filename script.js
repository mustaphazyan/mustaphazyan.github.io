/* ZAHRAOUI PROD - Style Sheet */
/* نظام ألوان أسود وأبيض مع دعم الوضع الليلي */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* الوضع الفاتح (الأبيض) */
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --text-primary: #000000;
  --text-secondary: #333333;
  --border-color: #e0e0e0;
  --accent-color: #004E89;
  --accent-light: #F7B801;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.15);
}

/* الوضع الليلي (الأسود) */
body.dark-mode {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --text-primary: #ffffff;
  --text-secondary: #e0e0e0;
  --border-color: #404040;
  --accent-color: #4a90e2;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.5);
}

/* الخط والنص */
body {
  font-family: 'Cairo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* الرأس (Header) */
header {
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: var(--shadow);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--accent-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo span {
  color: var(--accent-light);
}

/* التنقل */
nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

nav a {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

nav a:hover {
  color: var(--accent-color);
  background-color: var(--bg-primary);
}

/* أزرار التحكم */
.controls {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.btn-toggle {
  background: none;
  border: 2px solid var(--text-primary);
  color: var(--text-primary);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-weight: 500;
}

.btn-toggle:hover {
  background-color: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
}

/* الحاوية الرئيسية */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* قسم البطل (Hero) */
.hero {
  background: linear-gradient(135deg, var(--accent-color) 0%, #003d6b 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  border-radius: 8px;
  margin: 3rem 0;
  box-shadow: var(--shadow-lg);
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.hero h1 span {
  color: var(--accent-light);
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* الأزرار */
.btn {
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background-color: var(--accent-light);
  color: #000;
}

.btn-primary:hover {
  background-color: #e6a800;
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background-color: white;
  color: var(--accent-color);
}

/* الأقسام */
section {
  padding: 3rem 0;
  border-bottom: 1px solid var(--border-color);
}

section h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: var(--accent-color);
}

section h2 span {
  color: var(--accent-light);
}

section p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

/* شبكة الخدمات */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.service-card {
  background-color: var(--bg-secondary);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  box-shadow: var(--shadow);
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-color);
}

.service-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--accent-color);
}

.service-card p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

/* شبكة الفنانين */
.artists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.artist-card {
  background-color: var(--bg-secondary);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.artist-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.artist-image {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, var(--accent-color) 0%, #003d6b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}

.artist-info {
  padding: 1.5rem;
}

.artist-name {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
}

.artist-description {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.artist-link {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.artist-link:hover {
  color: var(--accent-light);
}

/* نموذج الاتصال */
.contact-form {
  max-width: 600px;
  margin: 2rem auto;
  background-color: var(--bg-secondary);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--text-primary);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(0, 78, 137, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

/* الإحصائيات */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  background-color: var(--bg-secondary);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* التذييل (Footer) */
footer {
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: 2rem 0;
  margin-top: 3rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  color: var(--accent-color);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.footer-section a {
  display: block;
  color: var(--text-secondary);
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: var(--accent-color);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
}

/* الروابط الاجتماعية */
.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--accent-color);
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.social-link:hover {
  background-color: var(--accent-light);
  transform: translateY(-2px);
}

/* الاستجابة */
@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    gap: 1rem;
  }

  nav {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }

  nav a {
    width: 100%;
    text-align: center;
  }

  .hero {
    padding: 3rem 1rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .hero-buttons .btn {
    width: 100%;
  }

  section h2 {
    font-size: 1.8rem;
  }

  .services-grid,
  .artists-grid,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .container {
    padding: 0 1rem;
  }
}

/* الانتقالات السلسة */
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

/* الطباعة */
@media print {
  header,
  footer,
  .controls {
    display: none;
  }
}
