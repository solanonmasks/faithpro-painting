// Page interactions: before/after slider, scroll reveal, reviews, quote form.
// Everything here respects prefers-reduced-motion.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Before / after slider ---------- */
const ba = document.querySelector<HTMLElement>('[data-ba]');
if (ba) {
  let dragging = false;
  const setPos = (pct: number) => {
    const p = Math.max(0, Math.min(100, pct));
    ba.style.setProperty('--pos', p + '%');
    ba.setAttribute('aria-valuenow', String(Math.round(p)));
  };
  const fromPointer = (e: PointerEvent) => {
    const r = ba.getBoundingClientRect();
    setPos(((e.clientX - r.left) / r.width) * 100);
  };
  ba.addEventListener('pointerdown', (e) => { dragging = true; fromPointer(e); });
  ba.addEventListener('pointermove', (e) => { if (dragging) fromPointer(e); });
  ba.addEventListener('pointerup', () => { dragging = false; });
  ba.addEventListener('pointerleave', () => { dragging = false; });
  ba.addEventListener('keydown', (e) => {
    const now = Number(ba.getAttribute('aria-valuenow')) || 50;
    if (e.key === 'ArrowLeft') { setPos(now - 5); e.preventDefault(); }
    if (e.key === 'ArrowRight') { setPos(now + 5); e.preventDefault(); }
  });

  // A short sweep after load hints that the slider can be dragged.
  if (!reduceMotion) {
    setTimeout(() => {
      const keys: [number, number][] = [[0, 50], [700, 24], [1500, 76], [2200, 50]];
      const t0 = performance.now();
      const frame = (t: number) => {
        const elapsed = t - t0;
        if (elapsed > 2200 || dragging) return;
        let i = 0;
        while (i < keys.length - 2 && elapsed > keys[i + 1][0]) i++;
        const [ta, a] = keys[i];
        const [tb, b] = keys[i + 1];
        const p = (elapsed - ta) / (tb - ta);
        const q = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        setPos(a + (b - a) * q);
        requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }, 1400);
  }
}

/* ---------- Scroll reveal ---------- */
// Content is visible by default. We only hide it when JS runs and motion is allowed.
const revealEls = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
if (!reduceMotion && 'IntersectionObserver' in window && revealEls.length) {
  // Anything already on screen stays visible (no flash).
  revealEls.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-shown');
  });
  document.documentElement.classList.add('js-reveal');

  const io = new IntersectionObserver(
    (entries) => {
      let i = 0;
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        el.style.setProperty('--d', `${i++ * 0.08}s`);
        el.classList.add('is-shown');
        io.unobserve(el);
      });
    },
    { rootMargin: '0px 0px -8% 0px' }
  );
  revealEls.forEach((el) => { if (!el.classList.contains('is-shown')) io.observe(el); });
}

/* ---------- Reviews ---------- */
const reviews = Array.from(document.querySelectorAll<HTMLElement>('[data-review]'));
const count = document.querySelector('[data-rev-count]');
if (reviews.length) {
  let current = 0;
  const pad = (n: number) => String(n).padStart(2, '0');
  const show = (index: number) => {
    current = (index + reviews.length) % reviews.length;
    reviews.forEach((r, i) => {
      r.hidden = i !== current;
      r.classList.remove('is-entering');
    });
    const active = reviews[current];
    void active.offsetWidth; // restart the animation
    active.classList.add('is-entering');
    if (count) count.textContent = `${pad(current + 1)} / ${pad(reviews.length)}`;
  };
  document.querySelector('[data-rev-prev]')?.addEventListener('click', () => show(current - 1));
  document.querySelector('[data-rev-next]')?.addEventListener('click', () => show(current + 1));
}

/* ---------- Quote form ---------- */
const form = document.querySelector<HTMLFormElement>('[data-quote-form]');
const thanks = document.querySelector<HTMLElement>('[data-thanks]');
if (form && thanks) {
  const chipsInput = form.querySelector<HTMLInputElement>('[data-chips-value]');
  const errorEl = form.querySelector<HTMLElement>('[data-form-error]');
  const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const picked: string[] = [];

  form.querySelectorAll<HTMLButtonElement>('[data-chip]').forEach((chip) => {
    chip.addEventListener('click', () => {
      const label = chip.dataset.chip || '';
      const idx = picked.indexOf(label);
      if (idx >= 0) picked.splice(idx, 1);
      else picked.push(label);
      chip.setAttribute('aria-pressed', String(idx < 0));
      if (chipsInput) chipsInput.value = picked.join(', ');
    });
  });

  const showThanks = () => {
    form.hidden = true;
    thanks.hidden = false;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const endpoint = form.dataset.endpoint;
    // No endpoint set yet (see src/data/site.ts): demo mode, just say thanks.
    if (!endpoint) { showThanks(); return; }

    if (errorEl) errorEl.hidden = true;
    if (submitBtn) submitBtn.disabled = true;
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(`Form error ${res.status}`);
      showThanks();
    } catch {
      if (errorEl) errorEl.hidden = false;
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}
