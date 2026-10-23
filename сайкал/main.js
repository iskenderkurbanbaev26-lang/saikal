
  // Счётчик дней в универе (с 1 сентября 2026)
  const start = new Date('2026-09-01');
  const now = new Date();
  const days = Math.max(0, Math.floor((now - start) / (1000 * 60 * 60 * 24)));

  function animateCount(id, target, duration = 1500) {
    const el = document.getElementById(id);
    let startTime = null;
    function step(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  animateCount('days', days);
  animateCount('coffee', days * 2);
  animateCount('smiles', days * 15);

  // Конфетти
  function launchConfetti() {
    const colors = ['#ff4d8d', '#9b5cff', '#4db8ff', '#ffd966', '#ff9999', '#a8e6ff'];
    for (let i = 0; i < 120; i++) {
      const c = document.createElement('div');
      c.className = 'confetti';
      c.style.left = Math.random() * 100 + 'vw';
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.animationDuration = (Math.random() * 2 + 2) + 's';
      c.style.animationDelay = Math.random() * 0.5 + 's';
      c.style.width = (Math.random() * 8 + 6) + 'px';
      c.style.height = c.style.width;
      c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 4500);
    }
  }

  // Автоматический салют при загрузке
  window.addEventListener('load', () => {
    setTimeout(launchConfetti, 800);
  });

  // Лёгкий параллакс для плавающих предметов
  document.addEventListener('mousemove', (e) => {
    const items = document.querySelectorAll('.floating');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    items.forEach((el, i) => {
      const factor = (i + 1) * 0.3;
      el.style.translate = `${x * factor}px ${y * factor}px`;
    });
  });
