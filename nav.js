// Lavender Lifeline Archive — shared nav behavior
// Include this script in every page

(function () {
  const toggle = document.getElementById('nav-toggle');
  const drawer = document.getElementById('nav-drawer');
  const overlay = document.getElementById('nav-overlay');

  if (!toggle || !drawer) return;

  function openMenu() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  // Close on nav link tap (mobile)
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  // Mark active page
  const path = window.location.pathname.split('/').pop() || 'index.html';
  drawer.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('nav-active');
    }
  });
  document.querySelectorAll('.nav-links-desktop a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('nav-active');
    }
  });
})();
