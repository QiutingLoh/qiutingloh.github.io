// Theme toggle + active section highlighting. No dependencies.
(function () {
  'use strict';

  // --- Theme ---------------------------------------------------------------
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');

  function currentTheme() {
    return root.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // --- Active nav link -----------------------------------------------------
  var links = Array.prototype.slice.call(
    document.querySelectorAll('.site-nav__links a[href^="#"]')
  );
  if (!links.length || !('IntersectionObserver' in window)) return;

  var byId = {};
  var sections = [];
  links.forEach(function (link) {
    var section = document.getElementById(link.hash.slice(1));
    if (!section) return;
    byId[section.id] = link;
    sections.push(section);
  });

  var visible = new Set();

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) visible.add(entry.target.id);
      else visible.delete(entry.target.id);
    });

    // Highlight the topmost section currently in view.
    var active = null;
    for (var i = 0; i < sections.length; i++) {
      if (visible.has(sections[i].id)) { active = sections[i].id; break; }
    }

    links.forEach(function (link) { link.classList.remove('is-active'); });
    if (active && byId[active]) byId[active].classList.add('is-active');
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(function (section) { observer.observe(section); });
})();
