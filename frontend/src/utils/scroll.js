const HEADER_HEIGHT = 80;

/**
 * Smooth scrolls to a section, accounting for the fixed header height.
 * Uses a two-pass approach: first instant scroll near the target (to trigger
 * lazy image loading), then a smooth fine-tune scroll to the exact position.
 * This handles CLS caused by lazy-loaded images in between sections.
 *
 * @param {string} selector - CSS selector like "#about" or "#services"
 * @param {object} options - { delay: ms to wait before scrolling }
 */
export function scrollToSection(selector, options = {}) {
  const { delay = 0 } = options;

  const doScroll = () => {
    const el = document.querySelector(selector);
    if (!el) return;

    const getTarget = () => el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;

    // First pass: instant jump near the target to trigger lazy loads
    window.scrollTo({ top: getTarget(), behavior: "instant" });

    // Second pass: after images settle, smooth scroll to exact position
    requestAnimationFrame(() => {
      setTimeout(() => {
        window.scrollTo({ top: getTarget(), behavior: "smooth" });
      }, 50);
    });
  };

  if (delay > 0) {
    setTimeout(doScroll, delay);
  } else {
    doScroll();
  }
}
