/* ==========================================================================
   TechWise BD — main.js
   Small, dependency-free behaviour: mobile nav toggle + article filtering.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* Close the menu after a link is chosen (mobile) */
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Article category filter (Articles page only) ---- */
  var filterBar = document.querySelector('.filter-bar');
  var cards = document.querySelectorAll('[data-category]');

  function applyFilter(category, btn) {
    filterBar.querySelectorAll('.filter-btn').forEach(function (b) {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');

    cards.forEach(function (card) {
      var match = category === 'all' || card.getAttribute('data-category') === category;
      card.style.display = match ? '' : 'none';
    });
  }

  if (filterBar && cards.length) {
    filterBar.addEventListener('click', function (event) {
      var btn = event.target.closest('.filter-btn');
      if (!btn) return;
      applyFilter(btn.getAttribute('data-filter'), btn);
    });

    /* If arriving from a link like articles.html#browsers, pre-select that filter */
    var hash = window.location.hash.replace('#', '');
    if (hash) {
      var matchBtn = filterBar.querySelector('[data-filter="' + hash + '"]');
      if (matchBtn) applyFilter(hash, matchBtn);
    }
  }

  /* ---- Footer year ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
