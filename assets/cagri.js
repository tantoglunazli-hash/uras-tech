/* =========================================================
   URASTECH — yüzen görüşme hapı (index, fiyatlar, blog)
   - Sayfanın kendi iletişim bölümü ya da ilk CTA'sı görünürken
     gizlenir: [data-cg-gizle] taşıyan her öğe izlenir. Eşik 0:
     uzun iletişim bölümü ekranın %12'sini hiç dolduramayabilir.
   - Çerez bildirimi açıkken ve mobil menü açıkken gösterilmez.
   - Bağımlılık yok.
   ========================================================= */
(function () {
  'use strict';
  if (document.getElementById('cagri')) return;

  var WA = 'https://wa.me/905063026474?text=Merhaba%2C%20Uras%20Tech%20ile%20bir%20ke%C5%9Fif%20g%C3%B6r%C3%BC%C5%9Fmesi%20yapmak%20istiyorum.';
  var hedef = document.getElementById('iletisim') ? '#iletisim' : '/#iletisim';
  var azHareket = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  var kutu = document.createElement('div');
  kutu.className = 'cg';
  kutu.id = 'cagri';
  kutu.innerHTML =
    '<button type="button" class="cg-yuvarlak cg-yukari" aria-label="Sayfanın başına dön">' +
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 13V3M4 7l4-4 4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
    '</button>' +
    '<a class="cg-yuvarlak cg-wa" href="' + WA + '" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp\'tan yazın (yeni sekmede açılır)">' +
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91A9.92 9.92 0 0 0 12.04 2zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/></svg>' +
    '</a>' +
    '<a class="cg-hap" href="' + hedef + '">' +
      '<span class="cg-isik" aria-hidden="true"></span>' +
      '<span>Ücretsiz Görüşme</span>' +
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
    '</a>';
  document.body.appendChild(kutu);

  kutu.querySelector('.cg-yukari').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: azHareket ? 'auto' : 'smooth' });
  });

  var gorunen = new Set();
  var mnav = document.getElementById('mnav');
  var bekliyor = false;

  function guncelle() {
    bekliyor = false;
    var engel = !!document.querySelector('.uras-cerez') ||
      (mnav && mnav.classList.contains('open')) ||
      !!document.querySelector('.modal-overlay.open');
    var goster = window.scrollY > window.innerHeight * 0.6 && gorunen.size === 0 && !engel;
    kutu.classList.toggle('cg-acik', goster);
    kutu.setAttribute('aria-hidden', String(!goster));
    if (!goster && kutu.contains(document.activeElement)) document.activeElement.blur();
  }
  function iste() { if (!bekliyor) { bekliyor = true; requestAnimationFrame(guncelle); } }

  var hedefler = document.querySelectorAll('[data-cg-gizle]');
  if ('IntersectionObserver' in window && hedefler.length) {
    var io = new IntersectionObserver(function (girdiler) {
      girdiler.forEach(function (g) { if (g.isIntersecting) gorunen.add(g.target); else gorunen.delete(g.target); });
      iste();
    }, { threshold: 0, rootMargin: '0px 0px -20% 0px' });
    hedefler.forEach(function (h) { io.observe(h); });
  }

  addEventListener('scroll', iste, { passive: true });
  addEventListener('resize', iste, { passive: true });
  /* çerez bildirimi eklenip kalkınca, menü/modal açılıp kapanınca */
  new MutationObserver(iste).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
  guncelle();
})();
