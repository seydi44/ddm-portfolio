// utils
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* =========================
   i18n (TR / EN)
========================= */
const I18N = {
  tr: {
    skip: "İçeriğe atla",
    nav: { home: "Anasayfa", about: "Hakkımda", skills: "Yetkinlikler", videos: "Videolar", portfolio: "Marka Tasarımları", contact: "İletişim" },
    hero: {
      hello: "Merhaba",
      iam: "ben",
      desc: "Hikâyeleri görselleştiriyor; çekim, kurgu ve grafikle güçlü bir bütün hâline getiriyorum. Her proje benim için yeni bir sahne, yeni bir bakış açısı. Portfolyomda bu yolculuğun izlerini bulacaksın.",
      cv: "CV İndir",
      seeVideos: "Videoları Gör",
      email: "E-posta"
    },
    about: {
      title: "Hakkımda",
      p1: "Yaratıcı bakış açısını teknik bilgiyle birleştiren bir videographer ve tasarımcıyım. Farklı konseptlerde içerik üreterek prodüksiyon süreçlerini uçtan uca yönetiyorum.",
      p2: "Çekimden kurguya, grafik tasarımdan görsel düzenlemeye kadar tüm süreçleri üstlenerek projeleri bütüncül bir bakışla hayata geçiriyorum. YouTube içerikleri için çekim/ışık/kadraj, kurgu, renk çalışması, ses tasarımı ve thumbnail tasarımlarını uçtan uca yürütebiliyorum.",
      ticks: ["🎥 Çekim • ışık • kadraj • ses", "✂️ Kurgu • renk • SFX • motion", "🖼️ Thumbnail • banner • afiş • sosyal medya", "🧩 Marka dili • görsel tutarlılık"],
      more: "Daha Fazla Gör",
      less: "Daha Az Gör",
      contact: "İletişime Geç"
    },
    skills: {
      title: "Yetkinlikler",
      ps: "Görsel düzenleme, kompozit, sosyal medya.",
      pr: "Kurgu, renk, ritim, teslim formatları.",
      ae: "Motion, title pack, VFX temelleri.",
      ai: "Vektör, logo, infografik.",
      figma: "UI tasarım, sunum, layout.",
      aiToolsTitle: "Yapay Zekâ Araçları",
      aiTools: "İçerik hızlandırma, fikir üretimi, düzenleme."
    },
    videos: {
      title: "Video Çalışmalarım",
      sub: "Aşağıdaki örnekler; çekim, kurgu ve thumbnail çalışmalarına ait referans videolardır.",
      kidsChannels: "Çocuk Kanalları",
      kidsShorts: "Çocuk Shorts",
      openYT: "YouTube’da aç ↗",
      adsTitle: "Klip / TV / Reklam",
      adsSub: "Klip, TV ve reklam işleri için seçili referanslar."
    },
    portfolio: {
      title: "Marka Tasarımları",
      open: "Projeyi Aç",
      close: "Kapat"
    },
    contact: {
      title: "İletişim",
      text: "Proje, iş birliği veya soru için bana yazabilirsin. En hızlı dönüş için e-posta kullanabilirsin.",
      send: "E-posta Gönder",
      cv: "CV İndir"
    }
  },
  en: {
    skip: "Skip to content",
    nav: { home: "Home", about: "About", skills: "Skills", videos: "Videos", portfolio: "Brand Designs", contact: "Contact" },
    hero: {
      hello: "Hello",
      iam: "I'm",
      desc: "I turn stories into visuals — combining shooting, editing, and design into one strong whole. Each project is a new scene and a new perspective. You’ll find traces of that journey in my portfolio.",
      cv: "Download CV",
      seeVideos: "See Videos",
      email: "Email"
    },
    about: {
      title: "About",
      p1: "I’m a videographer and designer who blends a creative perspective with technical skills. I produce content across different concepts and manage production end-to-end.",
      p2: "From shooting to editing, graphic design to visual refinement — I handle the entire process with a holistic approach. For YouTube content, I can manage shooting/light/framing, editing, color work, sound design, and thumbnails end-to-end.",
      ticks: ["🎥 Shooting • lighting • framing • sound", "✂️ Editing • color • SFX • motion", "🖼️ Thumbnails • banners • posters • social media", "🧩 Brand language • visual consistency"],
      more: "Show More",
      less: "Show Less",
      contact: "Get in Touch"
    },
    skills: {
      title: "Skills",
      ps: "Image editing, compositing, social media.",
      pr: "Editing, color, rhythm, delivery formats.",
      ae: "Motion, title packs, VFX basics.",
      ai: "Vector, logo, infographics.",
      figma: "UI design, presentation, layout.",
      aiToolsTitle: "AI Tools",
      aiTools: "Content acceleration, ideation, refinement."
    },
    videos: {
      title: "My Video Work",
      sub: "The examples below are reference videos for shooting, editing and thumbnail work.",
      kidsChannels: "Kids Channels",
      kidsShorts: "Kids Shorts",
      openYT: "Open on YouTube ↗",
      adsTitle: "Music Video / TV / Ads",
      adsSub: "Selected references for music video, TV and advertising work."
    },
    portfolio: {
      title: "Brand Designs",
      open: "Open Project",
      close: "Close"
    },
    contact: {
      title: "Contact",
      text: "For projects, collaboration or questions, feel free to email me. Email is the fastest way to reach me.",
      send: "Send Email",
      cv: "Download CV"
    }
  }
};

// Portfolio çevirileri (modal + kart içeriği için)
const PORTFOLIO_MAP = {
  "assets/brands/hipet-products-line.png": {
    title: { tr: "HiPet Ürün Serisi", en: "HiPet Product Line" },
    sub:   { tr: "Paketleme & ürün görsel dili", en: "Packaging & visual system" },
    desc:  {
      tr: "Ürün serisi için etiket/paketleme tasarımı ve renk sistematiği.",
      en: "Label/packaging design and a consistent color system for the product line."
    }
  },
  "assets/brands/hipet-poster.png": {
    title: { tr: "HiPet Tanıtım Afişi", en: "HiPet Promo Poster" },
    sub:   { tr: "Afiş / dijital tasarım", en: "Poster / digital design" },
    desc:  {
      tr: "HiPet Professional için tanıtım afişi, QR alanları ve hiyerarşi kurgusu.",
      en: "Promotional poster with QR areas and clear typographic hierarchy."
    }
  },
  "assets/brands/pump-station-gym-logo.png": {
    title: { tr: "Pump Station Gym Logo", en: "Pump Station Gym Logo" },
    sub:   { tr: "Logo tasarımı", en: "Logo design" },
    desc:  {
      tr: "Fitness & health markası için güçlü, yüksek kontrastlı logo tasarımı.",
      en: "Strong, high-contrast logo design for a fitness & health brand."
    }
  },
  "assets/brands/pump-station-business-cards.png": {
    title: { tr: "Pump Station Gym Kartvizit", en: "Pump Station Gym Business Card" },
    sub:   { tr: "Kartvizit tasarımı", en: "Business card design" },
    desc:  {
      tr: "Kurumsal kimliğe uygun kartvizit düzeni: ikon seti, hiyerarşi ve baskı alanları.",
      en: "Business card layout aligned with brand identity: icon set, hierarchy and print-safe areas."
    }
  },
  "assets/brands/liora-beauty-center-logo.png": {
    title: { tr: "Liora Beauty Center", en: "Liora Beauty Center" },
    sub:   { tr: "Logo tasarımı", en: "Logo design" },
    desc:  {
      tr: "Beauty Center için tipografi odaklı, zarif logo tasarımı.",
      en: "Elegant, typography-focused logo design for a beauty center."
    }
  },
  "assets/brands/lanthe-shampoo.png": {
    title: { tr: "Lanthe Shampoo", en: "Lanthe Shampoo" },
    sub:   { tr: "Ambalaj / etiket tasarımı", en: "Packaging / label design" },
    desc:  {
      tr: "Şampuan ürünü için etiket tasarımı: marka dili, okunabilirlik ve kompozisyon.",
      en: "Label design for shampoo: brand language, readability and composition."
    }
  },
  "assets/brands/lanthe-capsul.png": {
    title: { tr: "Lanthe Capsul", en: "Lanthe Capsule" },
    sub:   { tr: "Ambalaj / etiket tasarımı", en: "Packaging / label design" },
    desc:  {
      tr: "Kapsül ürün için tasarım: marka dili, okunabilirlik ve kompozisyon.",
      en: "Design for capsule product: brand language, readability and composition."
    }
  },
  "assets/brands/bedirhan-avli-card.png": {
    title: { tr: "Bedirhan Avlı Kartvizit", en: "Bedirhan Avlı Business Card" },
    sub:   { tr: "Kartvizit tasarımı", en: "Business card design" },
    desc:  {
      tr: "Minimal kartvizit tasarımı: grid, tipografi ve renk dengesi.",
      en: "Minimal business card design: grid, typography and color balance."
    }
  }
};

let currentLang = localStorage.getItem("lang");
if (currentLang !== "tr" && currentLang !== "en") {
  currentLang = (navigator.language || "").toLowerCase().startsWith("tr") ? "tr" : "en";
}

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // skip
  const skip = $(".skip-link");
  if (skip) skip.textContent = I18N[lang].skip;

  // nav
  const nav = I18N[lang].nav;
  const setNav = (href, text) => { const a = $(`.nav a[href="${href}"]`); if (a) a.textContent = text; };
  setNav("#home", nav.home);
  setNav("#about", nav.about);
  setNav("#skills", nav.skills);
  setNav("#videos", nav.videos);
  setNav("#portfolio", nav.portfolio);
  setNav("#contact", nav.contact);

  // hero
  const hero = I18N[lang].hero;
  const eyebrow = $(".hero .eyebrow"); if (eyebrow) eyebrow.textContent = hero.hello;
  const iam = $(".hero-title .muted"); if (iam) iam.textContent = hero.iam;
  const heroDesc = $(".hero .hero-desc"); if (heroDesc) heroDesc.textContent = hero.desc;

  const heroBtns = $$(".hero-actions a");
  if (heroBtns[0]) heroBtns[0].textContent = hero.cv;
  if (heroBtns[1]) heroBtns[1].textContent = hero.seeVideos;

  const emailSpan = $('.social[aria-label="E-posta"] span');
  if (emailSpan) emailSpan.textContent = hero.email;

  // about
  const about = I18N[lang].about;
  const aboutTitle = $("#about .section-title"); if (aboutTitle) aboutTitle.textContent = about.title;

  const aboutP1 = $("#about .about-copy > .about-text");
  if (aboutP1) aboutP1.textContent = about.p1;

  const aboutP2 = $("#about .about-more .about-text");
  if (aboutP2) aboutP2.textContent = about.p2;

  const ticks = $$("#about .ticks li");
  about.ticks.forEach((txt, i) => { if (ticks[i]) ticks[i].textContent = txt; });

  const aboutMoreEl = $("#about .about-more");
  const aboutBtn = $('#about .about-actions button[data-toggle]');
  const aboutContact = $('#about .about-actions a.btn-ghost');

  if (aboutContact) aboutContact.textContent = about.contact;

  if (aboutBtn && aboutMoreEl) {
    aboutBtn.dataset.originalText = about.more;
    aboutBtn.dataset.toggleText = about.less;

    const isHidden = aboutMoreEl.hasAttribute("hidden");
    aboutBtn.textContent = isHidden ? about.more : about.less;
  }

  // skills
  const skills = I18N[lang].skills;
  const skillsTitle = $("#skills .section-title.center"); if (skillsTitle) skillsTitle.textContent = skills.title;

  const skillPs = $$("#skills .skill p");
  // sıraya göre: Premiere, PS, AE, Illustrator, Figma, AI Tools
  if (skillPs[0]) skillPs[0].textContent = skills.pr;
  if (skillPs[1]) skillPs[1].textContent = skills.ps;
  if (skillPs[2]) skillPs[2].textContent = skills.ae;
  if (skillPs[3]) skillPs[3].textContent = skills.ai;
  if (skillPs[4]) skillPs[4].textContent = skills.figma;
  if (skillPs[5]) skillPs[5].textContent = skills.aiTools;

  const lastSkillTitle = $('#skills .skill:last-child h3');
  if (lastSkillTitle) lastSkillTitle.textContent = skills.aiToolsTitle;

  // videos
  const videos = I18N[lang].videos;
  const videosTitle = $("#videos .section-title.center"); if (videosTitle) videosTitle.textContent = videos.title;
  const videosSub = $("#videos .section-sub.center"); if (videosSub) videosSub.textContent = videos.sub;

  const kidsChannelsBtn = $('.tab-btn[data-tab="tab-ocuk-kanallar"]');
  if (kidsChannelsBtn) kidsChannelsBtn.textContent = videos.kidsChannels;

  const kidsShortsBtn = $('.tab-btn[data-tab="tab-ocuk-shorts"]');
  if (kidsShortsBtn) kidsShortsBtn.textContent = videos.kidsShorts;

  $$(".video-link").forEach(a => a.textContent = videos.openYT);

  const adsTitle = $("#klip-tv-reklam .section-subtitle");
  if (adsTitle) adsTitle.textContent = videos.adsTitle;

  const adsSub = $("#klip-tv-reklam .section-sub.center");
  if (adsSub) adsSub.textContent = videos.adsSub;

  // portfolio
  const portfolio = I18N[lang].portfolio;
  const portTitle = $("#portfolio .section-title.center"); if (portTitle) portTitle.textContent = portfolio.title;

  $$(".project").forEach((card) => {
    const img = card.dataset.image;
    const meta = PORTFOLIO_MAP[img];
    if (!meta) return;

    // kart içi yazılar
    const h3 = $(".project-meta h3", card);
    const p = $(".project-meta p", card);

    if (h3) h3.textContent = meta.title[lang];
    if (p) p.textContent = meta.sub[lang];

    // modal için dataset güncelle
    card.dataset.title = meta.title[lang];
    card.dataset.desc = meta.desc[lang];
  });

  const modalOpen = $("#projectModal .modal-link");
  if (modalOpen) modalOpen.textContent = portfolio.open;
  const modalClose2 = $("#projectModal .modal-close-2");
  if (modalClose2) modalClose2.textContent = portfolio.close;

  // contact
  const contact = I18N[lang].contact;
  const cTitle = $("#contact .section-title"); if (cTitle) cTitle.textContent = contact.title;
  const cText = $("#contact .contact-text"); if (cText) cText.textContent = contact.text;

  const cBtns = $$("#contact .contact-actions a");
  if (cBtns[0]) cBtns[0].textContent = contact.send;
  if (cBtns[1]) cBtns[1].textContent = contact.cv;

  // lang button ui
  const langBtn = $("#langToggle");
  if (langBtn) {
    const flag = $(".flag", langBtn);
    const code = $(".code", langBtn);
    if (flag && code) {
      if (lang === "tr") { flag.textContent = "🇹🇷"; code.textContent = "TR"; }
      else { flag.textContent = "🇬🇧"; code.textContent = "EN"; }
    }
  }
}

/* =========================
   Existing site behaviors
========================= */

// Mobile menu
const navToggle = $(".nav-toggle");
const navEl = $(".nav");
if (navToggle && navEl) {
  navToggle.addEventListener("click", () => {
    const isOpen = navEl.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navEl.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    navEl.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
}

// Active link on scroll
const navLinks = $$(".nav-link").filter(a => (a.getAttribute("href") || "").startsWith("#"));
const sections = navLinks.map(a => $(a.getAttribute("href"))).filter(Boolean);

function setActiveLink() {
  const y = window.scrollY + 120;
  let current = sections[0]?.id;

  for (const sec of sections) {
    if (sec.offsetTop <= y) current = sec.id;
  }
  navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
}
window.addEventListener("scroll", setActiveLink, { passive: true });
setActiveLink();

// Generic toggles (About)
$$("[data-toggle]").forEach((btn) => {
  const targetSel = btn.dataset.toggle;
  btn.addEventListener("click", () => {
    const target = $(targetSel);
    if (!target) return;

    const isHidden = target.hasAttribute("hidden");
    if (isHidden) target.removeAttribute("hidden");
    else target.setAttribute("hidden", "");

    const original = btn.dataset.originalText || btn.textContent.trim();
    const toggleText = btn.dataset.toggleText;

    // Eğer yeni açıyorsak "less", kapatıyorsak "more"
    btn.textContent = isHidden ? (toggleText || btn.textContent) : (original || btn.textContent);
  });
});

// Image fallback
$$('img[data-fallback]').forEach((img) => {
  const list = (img.getAttribute('data-fallback') || '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);

  let i = 0;
  img.addEventListener('error', () => {
    if (i >= list.length) return;
    img.src = list[i];
    i += 1;
  });
});

// Portfolio modal
const modal = $("#projectModal");
const modalImage = $(".modal-image", modal || undefined);
const modalTitle = $(".modal-title", modal || undefined);
const modalDesc  = $(".modal-desc", modal || undefined);
const modalLink  = $(".modal-link", modal || undefined);

function closeModal() {
  if (!modal?.open) return;
  modal.close();
}

$$(".project").forEach((card) => {
  card.addEventListener("click", () => {
    if (!modal) return;

    const t = card.dataset.title || "Project";
    const d = card.dataset.desc || "";
    const img = card.dataset.image || "";
    const link = card.dataset.link || "";

    if (modalTitle) modalTitle.textContent = t;
    if (modalDesc) modalDesc.textContent = d;

    if (modalImage) { modalImage.src = img; modalImage.alt = t; }

    if (modalLink) {
      const hasLink = link && link !== "#";
      modalLink.href = hasLink ? link : "#";
      modalLink.style.display = hasLink ? "" : "none";
    }

    modal.showModal();
  });
});

modal?.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
$$(".modal-close, .modal-close-2", modal || undefined).forEach(btn => btn.addEventListener("click", closeModal));
window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

// Video tabs + iframe lazy
const tabButtons = $$(".tab-btn[data-tab]");
const tabPanels = $$(".tab-panel");

function stopPanelVideos(panel) {
  $$("iframe[data-src]", panel).forEach((iframe) => iframe.setAttribute("src", "about:blank"));
}
function loadPanelVideos(panel) {
  $$("iframe[data-src]", panel).forEach((iframe) => {
    const ds = iframe.getAttribute("data-src");
    const src = iframe.getAttribute("src");
    if (ds && (!src || src === "about:blank")) iframe.setAttribute("src", ds);
  });
}
function setActiveTab(tabId) {
  tabButtons.forEach((btn) => {
    const active = btn.getAttribute("data-tab") === tabId;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-selected", String(active));
  });

  tabPanels.forEach((panel) => {
    const active = panel.id === tabId;
    if (active) {
      panel.removeAttribute("hidden");
      loadPanelVideos(panel);
    } else {
      panel.setAttribute("hidden", "");
      stopPanelVideos(panel);
    }
  });
}
tabButtons.forEach((btn) => btn.addEventListener("click", () => setActiveTab(btn.getAttribute("data-tab"))));
const firstTab = tabButtons[0]?.getAttribute("data-tab");
if (firstTab) setActiveTab(firstTab);

// Ads section iframes lazy
const adsIframes = $$('#klip-tv-reklam iframe.lazy-iframe[data-src]');
if (adsIframes.length && "IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const iframe = entry.target;
      const ds = iframe.getAttribute("data-src");
      const src = iframe.getAttribute("src");
      if (ds && (!src || src === "about:blank")) iframe.setAttribute("src", ds);
      obs.unobserve(iframe);
    });
  }, { threshold: 0.2 });
  adsIframes.forEach((ifr) => io.observe(ifr));
} else {
  adsIframes.forEach((iframe) => {
    const ds = iframe.getAttribute("data-src");
    if (ds) iframe.setAttribute("src", ds);
  });
}

// Footer year
const yearEl = $("#year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// To-top
const toTop = $(".to-top");
function toggleToTop() {
  if (!toTop) return;
  toTop.hidden = !(window.scrollY > 500);
}
window.addEventListener("scroll", toggleToTop, { passive: true });
toggleToTop();
toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Lang toggle click
$("#langToggle")?.addEventListener("click", () => {
  const next = currentLang === "tr" ? "en" : "tr";
  localStorage.setItem("lang", next);
  applyLang(next);
});

// init
applyLang(currentLang);
