const toggle = document.getElementById('modeToggle');
const body = document.body;

function applyMode(mode) {
  const attr = mode === 'business' ? 'data-business' : 'data-crazy';

  // Swap all labelled text nodes
  document.querySelectorAll(`[${attr}]`).forEach(el => {
    const val = el.getAttribute(attr);
    if (val !== null) el.textContent = val;
  });

  // Update toggle active state
  toggle.querySelector('.mode-crazy').classList.toggle('active', mode === 'crazy');
  toggle.querySelector('.mode-business').classList.toggle('active', mode === 'business');
}

if (toggle) {
  toggle.addEventListener('click', () => {
    const toBusiness = body.classList.toggle('theme-business');
    body.classList.toggle('theme-crazy', !toBusiness);
    applyMode(toBusiness ? 'business' : 'crazy');
  });
}

// Contact form — prevent default, show feedback
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    const orig = btn.textContent;
    btn.textContent = 'Verstuurd ✓';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = orig;
      btn.disabled = false;
      form.reset();
    }, 2200);
  });
}
