// PRIVATE GYM - interactions + Arabic / English language switch
const navbar = document.getElementById("mainNav");
const backToTop = document.getElementById("backToTop");
const year = document.getElementById("year");
const navLinks = document.querySelectorAll(".navbar .nav-link");
const navbarCollapse = document.getElementById("navbarContent");
const languageToggle = document.getElementById("languageToggle");

year.textContent = new Date().getFullYear();

const translations = {
  "#mainNav .navbar-toggler": { ar: "فتح القائمة", en: "Open menu", attr: "aria-label" },
  ".navbar-nav .nav-item:nth-child(1) .nav-link": { ar: "الرئيسية", en: "Home" },
  ".navbar-nav .nav-item:nth-child(2) .nav-link": { ar: "عن الجيم", en: "About" },
  ".navbar-nav .nav-item:nth-child(3) .nav-link": { ar: "الأسعار", en: "Membership" },
  ".navbar-nav .nav-item:nth-child(4) .nav-link": { ar: "مميزاتنا", en: "Why Us" },
  ".navbar-nav .nav-item:nth-child(5) .nav-link": { ar: "تواصل معنا", en: "Contact" },
  ".nav-cta": { ar: 'اشترك الآن <i class="bi bi-arrow-left"></i>', en: 'Join Now <i class="bi bi-arrow-right"></i>' },
  ".eyebrow": { ar: '<span></span> قوتك. التزامك. إنجازك.', en: '<span></span> YOUR POWER. YOUR DISCIPLINE. YOUR SUCCESS.' },
  ".hero-section h1": { ar: 'ابدأ رحلتك نحو<br><span>نسخة أقوى</span> من نفسك.', en: 'START YOUR JOURNEY TO A<br><span>STRONGER</span> YOU.' },
  ".hero-description": { ar: "في PRIVATE GYM، بنساعدك تتحدى حدودك وتوصل لأهدافك في بيئة مجهزة وداعمة لكل خطوة.", en: "At PRIVATE GYM, we help you push your limits and reach your goals in a fully equipped, supportive environment." },
  ".hero-actions .btn-red": { ar: 'ابدأ اشتراكك <i class="bi bi-arrow-left"></i>', en: 'Start Membership <i class="bi bi-arrow-right"></i>' },
  ".hero-actions .btn-outline-light": { ar: "اكتشف برامجنا", en: "Explore Memberships" },
  ".hero-note": { ar: '<i class="bi bi-check-circle-fill"></i> خطوتك الأولى تبدأ بقرار', en: '<i class="bi bi-check-circle-fill"></i> YOUR FIRST STEP STARTS WITH A DECISION' },
  ".about-image": { ar: "صالة تدريب مجهزة بأحدث المعدات", en: "Gym equipped with modern training equipment", attr: "alt" },
  ".about-section .section-kicker": { ar: "من نحن", en: "WHO WE ARE" },
  ".about-section .section-title": { ar: 'مش مجرد جيم...<br><span>دي بداية تغييرك.</span>', en: 'MORE THAN A GYM...<br><span>IT’S YOUR NEW BEGINNING.</span>' },
  ".about-section .section-text:nth-of-type(1)": { ar: "في PRIVATE GYM بنؤمن إن كل شخص عنده هدف يستحق يوصله. وفرنالك مساحة تتمرن فيها، تطور من نفسك، وتحقق نتائج تفتخر بيها.", en: "At PRIVATE GYM, we believe everyone has a goal worth chasing. We’ve created a space where you can train, grow, and achieve results you’ll be proud of." },
  ".about-section .section-text:nth-of-type(2)": { ar: "سواء بتبدأ أول خطوة أو بتسعى لمستوى جديد، إحنا هنا ندعم رحلتك.", en: "Whether you’re taking your first step or aiming for a new level, we’re here to support your journey." },
  ".about-section .text-link": { ar: 'انضم لعيلتنا <i class="bi bi-arrow-left"></i>', en: 'JOIN OUR COMMUNITY <i class="bi bi-arrow-right"></i>' },
  ".programs-section .section-kicker": { ar: "اختار خطتك", en: "CHOOSE YOUR PLAN" },
  ".programs-section .section-title": { ar: 'أسعار <span>الاشتراك</span>', en: 'MEMBERSHIP <span>PLANS</span>' },
  ".programs-section .section-text": { ar: "ابدأ رحلتك الرياضية بالخطة المناسبة ليك.", en: "Start your fitness journey with the plan that works for you." },
  ".programs-section .row.g-4 > div:nth-child(1) .price-card .price-duration": { ar: "شهر واحد", en: "1 MONTH" },
  ".programs-section .row.g-4 > div:nth-child(1) .price-card h3": { ar: "الاشتراك الشهري", en: "MONTHLY MEMBERSHIP" },
  ".programs-section .row.g-4 > div:nth-child(1) .price-card p": { ar: "خطة مرنة لتبدأ تجربتك وتلتزم بتمرينك.", en: "A flexible plan to get started and build your routine." },
  ".programs-section .row.g-4 > div:nth-child(1) .price-card a": { ar: "اشترك الآن", en: "JOIN NOW" },
  ".programs-section .row.g-4 > div:nth-child(2) .price-card .price-duration": { ar: "3 شهور", en: "3 MONTHS" },
  ".programs-section .row.g-4 > div:nth-child(2) .price-card h3": { ar: "اشتراك 3 شهور", en: "3-MONTH MEMBERSHIP" },
  ".programs-section .row.g-4 > div:nth-child(2) .price-card p": { ar: "وقت أطول لبناء عادات رياضية وتحقيق تقدم.", en: "More time to build healthy habits and make progress." },
  ".programs-section .row.g-4 > div:nth-child(2) .price-card a": { ar: "اشترك الآن", en: "JOIN NOW" },
  ".programs-section .row.g-4 > div:nth-child(3) .price-card .price-duration": { ar: "6 شهور", en: "6 MONTHS" },
  ".programs-section .row.g-4 > div:nth-child(3) .price-card h3": { ar: "اشتراك 6 شهور", en: "6-MONTH MEMBERSHIP" },
  ".programs-section .row.g-4 > div:nth-child(3) .price-card p": { ar: "استمرارية أكبر وخطوة أقرب لهدفك.", en: "Stay consistent and get one step closer to your goal." },
  ".programs-section .row.g-4 > div:nth-child(3) .price-card a": { ar: "اشترك الآن", en: "JOIN NOW" },
  ".programs-section .price-value small": { ar: "جنيه", en: "EGP" },
  ".price-card-featured .price-badge": { ar: "أفضل مدة", en: "BEST VALUE" },
  ".price-card-featured .price-duration": { ar: "سنة كاملة", en: "1 YEAR" },
  ".price-card-featured h3": { ar: "الاشتراك السنوي", en: "ANNUAL MEMBERSHIP" },
  ".price-card-featured p": { ar: "خطة طويلة المدى لالتزام وتطور مستمر.", en: "A long-term plan for lasting commitment and progress." },
  ".price-card-featured a": { ar: "اشترك الآن", en: "JOIN NOW" },
  ".features-section .section-kicker": { ar: "ليه PRIVATE؟", en: "WHY PRIVATE?" },
  ".features-section .section-title": { ar: 'كل اللي تحتاجه <span>في مكان واحد</span>', en: 'EVERYTHING YOU NEED <span>IN ONE PLACE</span>' },
  ".features-section .row.g-4 > div:nth-child(1) .feature-card h3": { ar: "مدربون محترفون", en: "PROFESSIONAL COACHES" },
  ".features-section .row.g-4 > div:nth-child(1) .feature-card p": { ar: "دعم وتوجيه يساعدك تتمرن بطريقة صحيحة وتوصل لهدفك.", en: "Expert guidance to help you train safely and reach your goals." },
  ".features-section .row.g-4 > div:nth-child(2) .feature-card h3": { ar: "أجهزة ومعدات حديثة", en: "MODERN EQUIPMENT" },
  ".features-section .row.g-4 > div:nth-child(2) .feature-card p": { ar: "مساحة تدريب مجهزة علشان تقدم أفضل أداء في كل تمرينة.", en: "A well-equipped training space to bring your best to every workout." },
  ".features-section .row.g-4 > div:nth-child(3) .feature-card h3": { ar: "خطط تناسبك", en: "PLANS MADE FOR YOU" },
  ".features-section .row.g-4 > div:nth-child(3) .feature-card p": { ar: "اختار هدفك وابدأ بخطة تدريب مناسبة لمستواك واحتياجاتك.", en: "Choose your goal and follow a training plan tailored to your level and needs." },
  ".contact-section .section-kicker": { ar: "مستعد تبدأ؟", en: "READY TO START?" },
  ".contact-section h2": { ar: 'الوقت المناسب للتغيير<br><span>هو دلوقتي.</span>', en: 'THE RIGHT TIME TO CHANGE<br><span>IS NOW.</span>' },
  ".contact-section p": { ar: "تواصل معانا واعرف تفاصيل الاشتراك وابدأ أول خطوة في رحلتك.", en: "Get in touch to learn more about memberships and take the first step." },
  ".contact-section .btn": { ar: 'تواصل واشترك <i class="bi bi-whatsapp"></i>', en: 'CONTACT & JOIN <i class="bi bi-whatsapp"></i>' },
  ".contact-hint": { ar: "استبدل رقم الواتساب برقم الجيم الفعلي.", en: "Replace the WhatsApp number with the gym’s actual number." },
  ".site-footer p": { ar: "© <span id=\"year\"></span> PRIVATE GYM. جميع الحقوق محفوظة.", en: "© <span id=\"year\"></span> PRIVATE GYM. ALL RIGHTS RESERVED." },
  "#backToTop": { ar: "العودة لأعلى الصفحة", en: "Back to top", attr: "aria-label" }
};

function setLanguage(lang) {
  const isEnglish = lang === "en";
  document.documentElement.lang = lang;
  document.documentElement.dir = isEnglish ? "ltr" : "rtl";
  document.body.classList.toggle("lang-en", isEnglish);
  Object.entries(translations).forEach(([selector, values]) => {
    const element = document.querySelector(selector);
    if (!element) return;
    const value = values[lang];
    if (values.attr) element.setAttribute(values.attr, value);
    else element.innerHTML = value;
  });
  // Keep the year dynamic after replacing the footer content.
  const footerYear = document.querySelector(".site-footer #year");
  if (footerYear) footerYear.textContent = new Date().getFullYear();
  languageToggle.textContent = isEnglish ? "عربي" : "EN";
  languageToggle.setAttribute("aria-label", isEnglish ? "التبديل إلى العربية" : "Switch to English");
  document.title = isEnglish ? "PRIVATE GYM | Strength Starts Here" : "PRIVATE GYM | القوة تبدأ هنا";
  document.querySelector('meta[name="description"]').content = isEnglish
    ? "PRIVATE GYM - Start your journey to a stronger you."
    : "PRIVATE GYM - ابدأ رحلتك نحو نسخة أقوى من نفسك.";
  try { localStorage.setItem("privateGymLanguage", lang); } catch (_) {}
}

let currentLanguage = "ar";
try { currentLanguage = localStorage.getItem("privateGymLanguage") || "ar"; } catch (_) {}
setLanguage(currentLanguage);
languageToggle.addEventListener("click", () => setLanguage(currentLanguage = currentLanguage === "ar" ? "en" : "ar"));

function handleScroll() {
  const hasScrolled = window.scrollY > 50;
  navbar.classList.toggle("scrolled", hasScrolled);
  backToTop.classList.toggle("show", window.scrollY > 350);
}
window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.getComputedStyle(document.querySelector(".navbar-toggler")).display !== "none") {
      const menu = bootstrap.Collapse.getInstance(navbarCollapse);
      if (menu) menu.hide();
    }
  });
});
const sections = document.querySelectorAll("main section[id]");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach((section) => observer.observe(section));
