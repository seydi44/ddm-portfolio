// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu after click (mobile)
  nav.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
}

// Active link on scroll
const links = Array.from(document.querySelectorAll('.nav-link'))
  .filter(a => a.getAttribute('href')?.startsWith('#'));

const sections = links
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

const setActive = () => {
  const y = window.scrollY + 120;
  let current = sections[0]?.id;

  for (const sec of sections) {
    if (sec.offsetTop <= y) current = sec.id;
  }

  for (const a of links) {
    const isActive = a.getAttribute('href') === '#' + current;
    a.classList.toggle('active', isActive);
  }
};
window.addEventListener('scroll', setActive, { passive: true });
setActive();

// Toggle "about more"
document.querySelectorAll('[data-toggle]').forEach(btn => {
  btn.addEventListener('click', () => {
    const selector = btn.getAttribute('data-toggle');
    const target = document.querySelector(selector);
    if (!target) return;

    const willShow = target.hasAttribute('hidden');
    if (willShow) target.removeAttribute('hidden');
    else target.setAttribute('hidden', '');

    const alt = btn.getAttribute('data-toggle-text');
    if (alt) {
      const current = btn.textContent.trim();
      btn.textContent = willShow ? alt : 'Daha Fazla Gör';
      btn.setAttribute('data-toggle-text', current);
    }
  });
});

// Image fallback (hero/about gibi)
document.querySelectorAll('img[data-fallback]').forEach((img) => {
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
const modal = document.getElementById('projectModal');
const modalImage = modal?.querySelector('.modal-image');
const modalTitle = modal?.querySelector('.modal-title');
const modalDesc  = modal?.querySelector('.modal-desc');
const modalLink  = modal?.querySelector('.modal-link');

const closeModal = () => {
  if (!modal?.open) return;
  modal.close();
};

document.querySelectorAll('.project').forEach(card => {
  card.addEventListener('click', () => {
    if (!modal) return;

    const title = card.getAttribute('data-title') || 'Proje';
    const desc  = card.getAttribute('data-desc') || '';
    const img   = card.getAttribute('data-image') || '';
    const link  = card.getAttribute('data-link') || '#';

    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = desc;

    if (modalImage) {
      modalImage.src = img;
      modalImage.alt = title;
    }

    if (modalLink) {
      const hasLink = link && link !== '#';
      modalLink.href = hasLink ? link : '#';
      modalLink.style.display = hasLink ? '' : 'none';
    }

    modal.showModal();
  });
});

modal?.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

modal?.querySelectorAll('.modal-close, .modal-close-2').forEach(btn => {
  btn.addEventListener('click', closeModal);
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Video tabs (lazy-load iframes)
const tabButtons = document.querySelectorAll('.tab-btn[data-tab]');
const tabPanels = document.querySelectorAll('.tab-panel');

const stopPanelVideos = (panel) => {
  panel?.querySelectorAll('iframe[data-src]').forEach((iframe) => {
    iframe.setAttribute('src', 'about:blank');
  });
};

const loadPanelVideos = (panel) => {
  panel?.querySelectorAll('iframe[data-src]').forEach((iframe) => {
    const src = iframe.getAttribute('src');
    const ds = iframe.getAttribute('data-src');
    if ((!src || src === 'about:blank') && ds) iframe.setAttribute('src', ds);
  });
};

const setActiveTab = (tabId) => {
  tabButtons.forEach((btn) => {
    const active = btn.getAttribute('data-tab') === tabId;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-selected', String(active));
  });

  tabPanels.forEach((panel) => {
    const active = panel.id === tabId;
    if (active) {
      panel.removeAttribute('hidden');
      loadPanelVideos(panel);
    } else {
      panel.setAttribute('hidden', '');
      stopPanelVideos(panel);
    }
  });
};

tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => setActiveTab(btn.getAttribute('data-tab')));
});

// First load
const firstTab = tabButtons[0]?.getAttribute('data-tab');
if (firstTab) setActiveTab(firstTab);

// Klip/TV/Reklam (ayrı bölüm) lazy-load
const reklamIframes = document.querySelectorAll('#klip-tv-reklam iframe.lazy-iframe[data-src]');
if (reklamIframes.length) {
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const iframe = entry.target;
        const ds = iframe.getAttribute('data-src');
        const src = iframe.getAttribute('src');
        if (ds && (!src || src === 'about:blank')) iframe.setAttribute('src', ds);
        obs.unobserve(iframe);
      });
    }, { root: null, threshold: 0.2 });

    reklamIframes.forEach((ifr) => io.observe(ifr));
  } else {
    // Fallback: eski tarayıcılar
    reklamIframes.forEach((iframe) => {
      const ds = iframe.getAttribute('data-src');
      if (ds) iframe.setAttribute('src', ds);
    });
  }
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// To-top button
const toTop = document.querySelector('.to-top');
const toggleToTop = () => {
  if (!toTop) return;
  const show = window.scrollY > 500;
  toTop.hidden = !show;
};
window.addEventListener('scroll', toggleToTop, { passive: true });
toggleToTop();

toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
