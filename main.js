/* Clean Cut Property Maintenance - site behavior */
(function () {
  'use strict';

  /* ---- Mobile nav ---- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var open = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', open);
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Footer year ---- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- Quote form (Web3Forms) ----
     Replace WEB3FORMS_ACCESS_KEY in the HTML hidden input with your free key
     from https://web3forms.com to receive submissions by email.            */
  var form = document.getElementById('quote-form');
  if (form) {
    var msg = document.getElementById('form-msg');
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var key = form.querySelector('[name="access_key"]').value.trim();
      var btn = form.querySelector('button[type="submit"]');
      var label = btn.textContent;

      // Fallback: no key set yet -> open the visitor's email client pre-filled
      if (!key || key === 'WEB3FORMS_ACCESS_KEY') {
        var name = encodeURIComponent(form.name.value || '');
        var phone = encodeURIComponent(form.phone.value || '');
        var svc = encodeURIComponent(form.service ? form.service.value : '');
        var details = encodeURIComponent(form.message.value || '');
        var body = 'Name: ' + name + '%0D%0APhone: ' + phone + '%0D%0AService: ' + svc + '%0D%0A%0D%0A' + details;
        window.location.href = 'mailto:cleancutpm225@gmail.com?subject=Free%20Quote%20Request&body=' + body;
        return;
      }

      btn.disabled = true; btn.textContent = 'Sending...';
      msg.className = 'form-msg';
      var data = new FormData(form);
      fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res.success) {
            form.reset();
            msg.textContent = 'Thank you. Your request reached Will and Shelby. Expect a call back same day.';
            msg.className = 'form-msg ok';
          } else {
            msg.textContent = 'Something went wrong. Call or text us at 225-975-8063 and we will take care of you.';
            msg.className = 'form-msg err';
          }
        })
        .catch(function () {
          msg.textContent = 'Connection issue. Call or text us at 225-975-8063 and we will take care of you.';
          msg.className = 'form-msg err';
        })
        .finally(function () { btn.disabled = false; btn.textContent = label; });
    });
  }

  /* ---- Header shadow on scroll ---- */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 30) header.style.boxShadow = '0 10px 30px rgba(0,0,0,.5)';
      else header.style.boxShadow = 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
