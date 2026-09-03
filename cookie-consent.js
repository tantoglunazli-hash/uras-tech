/* ========================================
   URAS TECH — Çerez onayı
   ----------------------------------------
   Şu an sitede takip çerezi YOKTUR. Bu dosya iki iş yapar:
   1. Ziyaretçiye tercihini sorar ve tercihi tarayıcısında saklar.
   2. Takip kodunu YALNIZCA onay verilirse yükler.

   İleride Google Analytics eklemek için tek yapılması gereken,
   bu dosyayı çağıran sayfada script etiketinden ÖNCE şunu tanımlamak:

       <script>window.URAS_GA_ID = 'G-XXXXXXXXXX';</script>

   Onay verilmeden gtag hiç yüklenmez, reddedilirse hiç çalışmaz.
   Başka bir takip aracı eklenecekse kodu loadAnalytics() içine koyun;
   oraya koyulmayan hiçbir takip kodu onaydan geçmiş sayılmaz.
======================================== */
(function () {
  'use strict';

  var KEY = 'urastech-cerez-onayi';   // 'kabul' | 'ret'
  var POLICY_URL = '/cerez-politikasi.html';

  /* ---- Tercih saklama (gizli sekmede erişim hata verebilir) ---- */
  function read() {
    try { return window.localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function write(value) {
    try { window.localStorage.setItem(KEY, value); } catch (e) { /* yoksay */ }
  }

  /* ---- Onay verildiğinde çalışacak tek yer ---- */
  var analyticsLoaded = false;
  function loadAnalytics() {
    if (analyticsLoaded) return;
    var id = window.URAS_GA_ID;
    if (!id) return;             // tanımlı değilse yüklenecek bir şey yok
    analyticsLoaded = true;

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', id, { anonymize_ip: true });
  }

  /* ---- Stil ---- */
  function injectStyles() {
    if (document.getElementById('uras-cerez-stil')) return;
    var css = [
      '.uras-cerez{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom, 0px));z-index:10001;',
      'max-width:640px;margin:0 auto;background:#0A192F;color:#fff;',
      'border:1px solid rgba(255,255,255,0.12);border-radius:16px;padding:20px 22px;',
      'box-shadow:0 12px 40px rgba(10,25,47,0.45);',
      "font-family:'Plus Jakarta Sans',system-ui,-apple-system,sans-serif;",
      'opacity:0;transform:translateY(14px);transition:opacity .35s ease,transform .35s ease;}',
      '.uras-cerez.acik{opacity:1;transform:translateY(0);}',
      '.uras-cerez h2{font-size:.95rem;font-weight:700;margin:0 0 6px;letter-spacing:-.01em;}',
      '.uras-cerez p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.66);margin:0 0 14px;}',
      '.uras-cerez a{color:#FF5733;font-weight:600;}',
      '.uras-cerez-btns{display:flex;gap:10px;flex-wrap:wrap;}',
      '.uras-cerez button{font:inherit;font-size:.84rem;font-weight:700;cursor:pointer;',
      'padding:10px 20px;border-radius:999px;border:1px solid transparent;transition:transform .2s,background .2s,border-color .2s;}',
      '.uras-cerez button:hover{transform:translateY(-2px);}',
      '.uras-cerez .kabul{background:#FF5733;color:#fff;}',
      '.uras-cerez .kabul:hover{background:#ff6b4d;}',
      '.uras-cerez .ret{background:transparent;color:#fff;border-color:rgba(255,255,255,.28);}',
      '.uras-cerez .ret:hover{border-color:rgba(255,255,255,.55);background:rgba(255,255,255,.06);}',
      '@media (max-width:520px){.uras-cerez{padding:18px;}.uras-cerez-btns button{flex:1 1 auto;}}',
      '@media (prefers-reduced-motion:reduce){.uras-cerez{transition:none;}}'
    ].join('');
    var el = document.createElement('style');
    el.id = 'uras-cerez-stil';
    el.textContent = css;
    document.head.appendChild(el);
  }

  /* ---- Bildirim ---- */
  function showBanner() {
    if (document.querySelector('.uras-cerez')) return;
    injectStyles();

    var box = document.createElement('div');
    box.className = 'uras-cerez';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-live', 'polite');
    box.setAttribute('aria-label', 'Çerez tercihi');
    box.innerHTML =
      '<h2>Çerez tercihiniz</h2>' +
      '<p>Bu sitenin çalışması için takip çerezi kullanmıyoruz. Yalnızca sitenin nasıl ' +
      'kullanıldığını ölçen isteğe bağlı analiz araçları için onayınızı soruyoruz. ' +
      'Reddederseniz hiçbir analiz kodu yüklenmez ve site aynı şekilde çalışır. ' +
      'Ayrıntı için <a href="' + POLICY_URL + '">Çerez Politikası</a>.</p>' +
      '<div class="uras-cerez-btns">' +
        '<button type="button" class="kabul">Kabul ediyorum</button>' +
        '<button type="button" class="ret">Reddediyorum</button>' +
      '</div>';

    document.body.appendChild(box);
    requestAnimationFrame(function () { box.classList.add('acik'); });

    box.querySelector('.kabul').addEventListener('click', function () {
      write('kabul');
      loadAnalytics();
      close(box);
    });
    box.querySelector('.ret').addEventListener('click', function () {
      write('ret');
      close(box);
    });
  }

  function close(box) {
    box.classList.remove('acik');
    setTimeout(function () { if (box.parentNode) box.parentNode.removeChild(box); }, 350);
  }

  /* ---- Başlangıç ---- */
  function init() {
    var choice = read();
    if (choice === 'kabul') { loadAnalytics(); return; }
    if (choice === 'ret') { return; }
    showBanner();
  }

  /* Çerez Politikası sayfasındaki "tercihimi değiştir" bağlantısı bunu çağırır. */
  window.urasCerez = {
    durum: read,
    degistir: function () { showBanner(); },
    sifirla: function () {
      try { window.localStorage.removeItem(KEY); } catch (e) { /* yoksay */ }
      showBanner();
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
