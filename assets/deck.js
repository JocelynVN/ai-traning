/* ---- inline line-icon renderer (Lucide-style, no CDN) ---- */
function renderIcons(root) {
  const scope = root || document;
  const I = {
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C4 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
    activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    lightbulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    cpu: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>',
    pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>',
    chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    process: '<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    image: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
    ban: '<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>',
    package: '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    megaphone: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    layers: '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    ok: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    no: '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
    message: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    sparkles: '<path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0L14.06 8.5A2 2 0 0 0 15.5 9.94l6.14 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  };
  scope.querySelectorAll('[data-i]').forEach(function (el) {
    const n = el.getAttribute('data-i');
    if (I[n]) {
      el.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' +
        I[n] +
        '</svg>';
    }
  });
}

let slides = [];
let current = 0;
let numEl;

function buildBrandElements() {
  slides.forEach(function (s) {
    if (s.classList.contains('cover') || s.classList.contains('close-hero')) return;
    if (!s.querySelector('.slide-logo')) {
      const logo = document.createElement('img');
      logo.className = 'slide-logo';
      logo.src = 'assets/wir-logo.webp';
      logo.alt = 'WIR GROUP';
      logo.loading = 'lazy';
      logo.decoding = 'async';
      s.appendChild(logo);
    }
  });
}

function buildAtmosphere() {
  slides.forEach(function (s) {
    if (s.querySelector('.slide-sky')) return;
    const sky = document.createElement('div');
    sky.className = 'slide-sky';
    sky.setAttribute('aria-hidden', 'true');
    sky.innerHTML =
      '<div class="sun-flare"></div>' +
      '<div class="sun-rays"></div>' +
      '<div class="starfield-dots"></div>' +
      '<div class="star-sparkle s1">✦</div>' +
      '<div class="star-sparkle s2">✦</div>' +
      '<div class="star-sparkle s3">★</div>' +
      '<div class="star-sparkle s4">✦</div>' +
      '<div class="star-sparkle s5">✦</div>' +
      '<div class="star-sparkle s6">★</div>';
    s.insertBefore(sky, s.firstChild);
  });
}

function buildFooters() {
  const label = document.body.dataset.deck || 'Wir Group AI Training Program';
  const note = document.body.dataset.note || '';
  const total = slides.length;
  slides.forEach(function (s, k) {
    if (s.classList.contains('cover') || s.classList.contains('close-hero')) return;
    const f = document.createElement('div');
    f.className = 'wfoot';
    f.innerHTML = '<span class="l"></span><span class="c"></span><span class="r"></span>';
    f.children[0].innerHTML = '<img src="assets/wir-mark.webp" loading="lazy" decoding="async" class="foot-logo" alt="WIR"><span>' + label + '</span>';
    f.children[1].textContent = note;
    f.children[2].textContent = 'Trang ' + (k + 1) + ' / ' + total;
    s.appendChild(f);
  });
}

function show(n) {
  current = Math.max(0, Math.min(slides.length - 1, n));
  slides.forEach(function (s, k) {
    s.classList.toggle('active', k === current);
  });
  if (numEl) numEl.textContent = current + 1 + ' / ' + slides.length;
  if (location.hash !== '#' + (current + 1)) {
    history.replaceState(null, '', '#' + (current + 1));
  }
}

function fit() {
  slides.forEach(function (sl) {
    sl.style.transform = 'none';
  });
}

function bindControls() {
  const nextBtn = document.getElementById('next');
  if (nextBtn) {
    nextBtn.onclick = function () {
      show(current + 1);
    };
  }
  const prevBtn = document.getElementById('prev');
  if (prevBtn) {
    prevBtn.onclick = function () {
      show(current - 1);
    };
  }
  addEventListener('keydown', function (e) {
    const modal = document.getElementById('deck-image-modal');
    if (modal && modal.classList.contains('open')) {
      if (e.key === 'Escape') {
        modal.classList.remove('open');
      }
      return;
    }
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') show(current + 1);
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') show(current - 1);
    if (e.key.toLowerCase() === 'f') {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen();
      else document.exitFullscreen();
    }
  });
  window.addEventListener('hashchange', function () {
    const h = parseInt(location.hash.replace('#', ''), 10);
    if (!isNaN(h) && h - 1 !== current) show(h - 1);
  });
  addEventListener('resize', fit);
}

function initImageZoom() {
  let modal = document.getElementById('deck-image-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'deck-image-modal';
    modal.className = 'deck-modal';
    modal.innerHTML =
      '<div class="deck-modal-backdrop"></div>' +
      '<div class="deck-modal-content">' +
        '<button class="deck-modal-close" title="Đóng (Esc)">✕</button>' +
        '<img class="deck-modal-img" src="" alt="">' +
        '<div class="deck-modal-cap"></div>' +
      '</div>';
    document.body.appendChild(modal);

    const closeModal = function () {
      modal.classList.remove('open');
    };

    modal.onclick = function (e) {
      if (e.target.closest('.deck-modal-cap')) return;
      closeModal();
    };

    const modalImg = modal.querySelector('.deck-modal-img');
    const modalCap = modal.querySelector('.deck-modal-cap');

    function fitModalImage(imgEl) {
      if (!imgEl) return;
      modalImg.style.width = 'auto';
      modalImg.style.height = 'auto';
    }

    window.addEventListener('resize', function () {
      if (modal && modal.classList.contains('open')) {
        fitModalImage(modalImg);
      }
    });

    // Event delegation on document to reliably handle image clicks
    document.addEventListener('click', function (e) {
      if (modal.classList.contains('open')) {
        return;
      }
      let img = e.target.closest('.zoomable-img, .slide img');
      if (!img) {
        const card = e.target.closest('.card, .or-shot');
        if (card && card.querySelector('img')) {
          img = card.querySelector('img');
        }
      }
      if (!img) return;

      if (
        img.classList.contains('cover-logo') ||
        img.classList.contains('slide-logo') ||
        img.classList.contains('foot-logo') ||
        img.classList.contains('deck-modal-img')
      ) {
        return;
      }

      e.stopPropagation();
      modalImg.src = img.src;
      modalImg.alt = img.alt || '';

      if (img.naturalWidth && img.naturalHeight) {
        fitModalImage(img);
      } else {
        modalImg.onload = function () {
          fitModalImage(modalImg);
        };
      }

      const parent = img.parentElement;
      const card = img.closest('.card, .or-shot, .prm-box') || parent;
      const capEl = card.querySelector('.cap') ||
                    card.querySelector('div[style*="font-size"]') ||
                    card.querySelector('.tx') ||
                    parent.querySelector('div:not(:has(img))');
      let capText = '';
      if (capEl && capEl !== img) {
        capText = capEl.textContent.trim();
      } else if (img.alt) {
        capText = img.alt.trim();
      }
      modalCap.textContent = capText;
      modalCap.style.display = capText ? 'block' : 'none';

      modal.classList.add('open');
    });
  }

  document.querySelectorAll('.slide img').forEach(function (img) {
    if (
      !img.classList.contains('cover-logo') &&
      !img.classList.contains('slide-logo') &&
      !img.classList.contains('foot-logo')
    ) {
      img.classList.add('zoomable-img');
    }
  });
}

function copyTextToClipboard(text, onSuccess, onError) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(onSuccess).catch(function () {
      fallbackCopy(text, onSuccess, onError);
    });
  } else {
    fallbackCopy(text, onSuccess, onError);
  }
}

function fallbackCopy(text, onSuccess, onError) {
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    if (successful && onSuccess) onSuccess();
    else if (!successful && onError) onError();
  } catch (err) {
    if (onError) onError(err);
  }
}

window.copyPromptText = function (btn, targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const text = (el.innerText || el.textContent || '').trim();
  if (!text) return;

  copyTextToClipboard(
    text,
    function () {
      if (!btn) return;
      const oldHtml = btn.innerHTML;
      btn.innerHTML = '✓ Đã sao chép!';
      btn.style.filter = 'brightness(0.92)';
      setTimeout(function () {
        btn.innerHTML = oldHtml;
        btn.style.filter = '';
      }, 2000);
    },
    function () {
      if (!btn) return;
      btn.innerHTML = 'Nhấn Ctrl+C để chép';
    }
  );
};

document.addEventListener('click', function (e) {
  const btn = e.target.closest('.btn-copy, [data-copy-target]');
  if (!btn) return;
  const targetId = btn.getAttribute('data-copy-target');
  if (targetId) {
    e.preventDefault();
    e.stopPropagation();
    window.copyPromptText(btn, targetId);
  }
});

// Custom Instructions accordion toggle handler (OpenAI Academy pattern)
document.addEventListener('click', function (e) {
  const header = e.target.closest('.ci-acc-header');
  if (!header) return;
  const item = header.closest('.ci-acc-item');
  if (!item) return;
  const container = item.closest('.ci-accordion');
  if (!container) return;

  const isCurrentlyActive = item.classList.contains('active');
  container.querySelectorAll('.ci-acc-item').forEach(function (it) {
    it.classList.remove('active');
    const icon = it.querySelector('.ci-acc-icon');
    if (icon) icon.textContent = '+';
  });

  if (!isCurrentlyActive) {
    item.classList.add('active');
    const icon = item.querySelector('.ci-acc-icon');
    if (icon) icon.textContent = '–';
  } else {
    // If clicking an active item in single-select accordion, keep it open (or re-open)
    item.classList.add('active');
    const icon = item.querySelector('.ci-acc-icon');
    if (icon) icon.textContent = '–';
  }
});


function initDeck() {
  slides = [...document.querySelectorAll('.slide')];
  numEl = document.getElementById('pnum');
  renderIcons();
  buildBrandElements();
  buildAtmosphere();
  buildFooters();
  bindControls();
  initImageZoom();
  fit();
  const hashNum = parseInt(location.hash.replace('#', ''), 10);
  const startIdx = !isNaN(hashNum) && hashNum >= 1 && hashNum <= slides.length ? hashNum - 1 : 0;
  show(startIdx);
}

async function loadSlides(urls) {
  const stage = document.getElementById('stage');
  const pages = await Promise.all(
    urls.map(async (url) => {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Không tải được slide: ' + url);
      return res.text();
    })
  );
  stage.innerHTML = pages.map((p) => p.trim()).join('');
  initDeck();
}

document.addEventListener('DOMContentLoaded', function () {
  const urls = window.DECK_PAGES;
  if (!urls || !urls.length) {
    initDeck();
    return;
  }
  loadSlides(urls).catch(function (err) {
    console.error(err);
    document.getElementById('stage').innerHTML =
      '<div style="color:#fff;text-align:center;padding:40px;font-family:sans-serif">' +
      'Không tải được slide. Hãy mở qua local server (vd: <code>npx serve</code>).<br><br>' +
      err.message +
      '</div>';
  });
});
