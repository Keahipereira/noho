(function () {
  'use strict';

  gsap.registerPlugin(ScrollTrigger);

  // Bail out if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var ease = 'power3.out';

  /* ── Hero entrance ── */
  var tl = gsap.timeline({ defaults: { ease: ease } });
  var heroTag  = document.querySelector('.hero-tag');
  var heroH1   = document.querySelector('.hero-content h1, .page-hero h1');
  var heroP    = document.querySelector('.hero-content > p, .page-hero p');
  var heroBtns = document.querySelectorAll('.hero-content .btn');

  if (heroTag)         tl.from(heroTag,   { opacity: 0, y: 18, duration: 0.55 }, 0.1);
  if (heroH1)          tl.from(heroH1,    { opacity: 0, y: 32, duration: 0.75 }, 0.25);
  if (heroP)           tl.from(heroP,     { opacity: 0, y: 22, duration: 0.7  }, 0.45);
  if (heroBtns.length) tl.from(heroBtns,  { opacity: 0, y: 18, duration: 0.5, stagger: 0.13 }, 0.6);

  /* ── Section labels ── */
  gsap.utils.toArray('.section-label').forEach(function (el) {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%' },
      opacity: 0, x: -20, duration: 0.55, ease: 'power2.out'
    });
  });

  /* ── Section headings ── */
  gsap.utils.toArray('h2').forEach(function (el) {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%' },
      opacity: 0, y: 26, duration: 0.65, ease: ease
    });
  });

  /* ── Card grids — staggered ── */
  gsap.utils.toArray('.card-grid').forEach(function (grid) {
    gsap.from(Array.from(grid.children), {
      scrollTrigger: { trigger: grid, start: 'top 82%' },
      opacity: 0, y: 38, duration: 0.55, stagger: 0.1, ease: 'power2.out'
    });
  });

  /* ── Two-col sections — slide from sides ── */
  gsap.utils.toArray('.two-col').forEach(function (col) {
    var kids = Array.from(col.children);
    if (kids[0]) {
      gsap.from(kids[0], {
        scrollTrigger: { trigger: col, start: 'top 82%' },
        opacity: 0, x: -44, duration: 0.8, ease: ease
      });
    }
    if (kids[1]) {
      gsap.from(kids[1], {
        scrollTrigger: { trigger: col, start: 'top 82%' },
        opacity: 0, x: 44, duration: 0.8, ease: ease
      });
    }
  });

  /* ── Mission quote + testimonials ── */
  gsap.utils.toArray('.mission-quote, .testimonial').forEach(function (el) {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      opacity: 0, y: 30, duration: 0.75, ease: 'power2.out'
    });
  });

  /* ── Impact list items ── */
  gsap.utils.toArray('.impact-list li').forEach(function (li) {
    gsap.from(li, {
      scrollTrigger: { trigger: li, start: 'top 92%' },
      opacity: 0, x: -18, duration: 0.45, ease: 'power2.out'
    });
  });

  /* ── Donate tiers ── */
  gsap.utils.toArray('.donate-tier').forEach(function (tier, i) {
    gsap.from(tier, {
      scrollTrigger: { trigger: tier, start: 'top 88%' },
      opacity: 0, y: 28, duration: 0.5, delay: i * 0.08, ease: 'power2.out'
    });
  });

  /* ── CTA dark/gold sections ── */
  gsap.utils.toArray('.section-dark .container, .section-gold .container').forEach(function (el) {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      opacity: 0, y: 26, duration: 0.7, ease: 'power2.out'
    });
  });

  /* ── Contact card ── */
  var contactCard = document.querySelector('.contact-card');
  if (contactCard) {
    gsap.from(contactCard, {
      scrollTrigger: { trigger: contactCard, start: 'top 85%' },
      opacity: 0, y: 24, duration: 0.65, ease: 'power2.out'
    });
  }

  /* ── Photo grid — staggered scale + fade ── */
  gsap.utils.toArray('.photo-grid').forEach(function (grid) {
    gsap.from(Array.from(grid.querySelectorAll('img')), {
      scrollTrigger: { trigger: grid, start: 'top 82%' },
      opacity: 0, scale: 0.94, duration: 0.65, stagger: 0.1, ease: 'power2.out'
    });
  });

  /* ── Management grid — staggered fade up ── */
  gsap.utils.toArray('.mgmt-photo').forEach(function (el, i) {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%' },
      opacity: 0, y: 32, duration: 0.55, delay: (i % 4) * 0.1, ease: 'power2.out'
    });
  });

  /* ── Standalone images (two-col, etc.) ── */
  gsap.utils.toArray('.two-col img').forEach(function (img) {
    // already handled by two-col animation above — no double animation
  });

  /* ── Sticky CTA button ── */
  var stickyBtn = document.querySelector('.sticky-cta');
  if (stickyBtn) {
    ScrollTrigger.create({
      start: 420,
      onEnter: function () {
        stickyBtn.style.pointerEvents = 'auto';
        gsap.to(stickyBtn, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
      },
      onLeaveBack: function () {
        stickyBtn.style.pointerEvents = 'none';
        gsap.to(stickyBtn, { opacity: 0, y: 20, duration: 0.3, ease: 'power2.in' });
      }
    });
  }

})();
