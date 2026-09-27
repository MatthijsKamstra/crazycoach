const toggle = document.getElementById('modeToggle');
const body = document.body;
const modeKey = 'crazycoach-mode';
const navCollapse = document.getElementById('mainNav');

function formatReadableText(value) {
  const trimmed = (value || '').trim();
  if (!trimmed) return value;

  const alphaOnly = trimmed.replace(/[^A-Za-z]/g, '');
  const isMostlyUpper = alphaOnly.length > 3 && alphaOnly === alphaOnly.toUpperCase();

  if (!isMostlyUpper) return value;

  const lowered = trimmed.toLowerCase();
  const sentenceCased = lowered.replace(/(^|[.!?]\s+)([a-z])/g, (_, pre, letter) => `${pre}${letter.toUpperCase()}`);
  return sentenceCased.replace(/\bfaq\b/g, 'FAQ');
}

function setModeState(mode) {
  if (!toggle) return;

  toggle.querySelectorAll('.mode-option').forEach(option => {
    const active = option.dataset.mode === mode;
    option.classList.toggle('active', active);
    option.setAttribute('aria-pressed', String(active));
  });
}

function applyMode(mode) {
  const attr = mode === 'business' ? 'data-business' : 'data-crazy';

  document.querySelectorAll(`[${attr}]`).forEach(el => {
    const val = el.getAttribute(attr);
    if (val !== null) {
      el.textContent = formatReadableText(val);
    }
  });

  setModeState(mode);
}

if (toggle) {
  toggle.addEventListener('click', event => {
    const option = event.target.closest('.mode-option');
    if (!option) return;

    const mode = option.dataset.mode === 'business' ? 'business' : 'crazy';
    body.classList.toggle('theme-business', mode === 'business');
    body.classList.toggle('theme-crazy', mode === 'crazy');
    applyMode(mode);
    localStorage.setItem(modeKey, mode);
  });
}

const savedMode = localStorage.getItem(modeKey) === 'business' ? 'business' : 'crazy';
body.classList.toggle('theme-business', savedMode === 'business');
body.classList.toggle('theme-crazy', savedMode === 'crazy');
applyMode(savedMode);

if (navCollapse && window.bootstrap?.Collapse) {
  const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapse, { toggle: false });
  navCollapse.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      bsCollapse.hide();
    });
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
