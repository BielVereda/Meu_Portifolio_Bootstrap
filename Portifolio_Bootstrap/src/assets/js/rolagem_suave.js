// ===== SCROLL SUAVE DO NAVBAR =====
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');

    if (targetId.startsWith('#')) {
      e.preventDefault();

      const target = document.querySelector(targetId);
      if (!target) return;

      const navbarHeight = document.querySelector('.navbar').offsetHeight;

      const targetOffset = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

      const start = window.scrollY;
      const distance = targetOffset - start;
      const duration = 700;
      const startTime = performance.now();

      // Easing suave que começa *imediatamente*
      const easeOutQuad = t => t * (2 - t);

      function animate(time) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutQuad(progress);

        window.scrollTo(0, start + distance * eased);

        if (progress < 1) requestAnimationFrame(animate);
      }

      requestAnimationFrame(animate);
    }
  });
});