// ===== SCROLL SUAVE DO NAVBAR =====
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (!target) return;

      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 900;
      let start = null;

      // Função de suavização (easeInOutCubic)
      function animation(currentTime) {
        if (!start) start = currentTime;
        const progress = currentTime - start;
        const t = Math.min(progress / duration, 1);
        const ease = t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * ease);
        if (progress < duration) requestAnimationFrame(animation);
      }

      requestAnimationFrame(animation);
    }
  });
});