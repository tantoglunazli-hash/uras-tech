/* =========================================================
   URASTECH — Uras asistanı (index, fiyatlar, blog)
   - Yapay zekâ DEĞİL: assets/uras-bilgi.js içindeki, sitede
     zaten yazan cevaplardan anahtar kelimeyle seçer.
   - Ağ isteği yok, çerez yok, yazılan hiçbir şey saklanmaz
     ya da gönderilmez. localStorage yalnız "balon kapandı"
     bilgisi için (try/catch içinde).
   - Maskot çizimi assets/uras-maskot.js'te (tek değişim noktası).
   - Başlatıcı, cagri.js'in yüzen grubuna (#cagri) eklenir ve
     onun gizlenme kurallarına uyar.
   ========================================================= */
(function () {
  'use strict';

  /* ---------- eşleştirici (DOM'suz, testlenebilir) ---------- */
  var HARF = { 'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u', 'â': 'a', 'î': 'i', 'û': 'u' };
  function katla(s) {
    /* toLocaleLowerCase('tr') yerine elle katlama: İ/I/ı/i hepsi "i" olur */
    s = String(s || '').replace(/[İIı]/g, 'i').toLowerCase();
    s = s.replace(/[çğıöşüâîû]/g, function (h) { return HARF[h]; });
    if (s.normalize) s = s.normalize('NFD').replace(/[̀-ͯ]/g, '');
    return s.replace(/[^a-z0-9]+/g, ' ').trim();
  }
  var DOLGU = {};
  ('bir ve ile mi mu misiniz musunuz miyim muyum midir mudur var yok ben biz siz sizin benim bana size bu su o de da ki icin gibi ama cok daha en ne nasil neden kadar hakkinda bilgi istiyorum lazim acaba merhaba selam iyi gunler tesekkurler peki hangi olur olabilir mi yapiyor').split(' ')
    .forEach(function (k) { DOLGU[k] = 1; });

  function mesafe(a, b) {
    if (Math.abs(a.length - b.length) > 2) return 9;
    var on = [], i, j;
    for (j = 0; j <= b.length; j++) on[j] = j;
    for (i = 1; i <= a.length; i++) {
      var sol = i, kose = on[0];
      on[0] = i;
      for (j = 1; j <= b.length; j++) {
        var ust = on[j];
        sol = Math.min(ust + 1, sol + 1, kose + (a[i - 1] === b[j - 1] ? 0 : 1));
        kose = ust; on[j] = sol;
      }
    }
    return on[b.length];
  }

  function kelimePuani(anahtar, kelimeler) {
    var en = 0;
    for (var i = 0; i < kelimeler.length; i++) {
      var k = kelimeler[i], p = 0;
      if (k === anahtar) p = 3;
      else if (anahtar.length >= 3 && k.indexOf(anahtar) === 0) p = 2.5;          /* ek almış: fiyatlari */
      else if (k.length >= 4 && anahtar.indexOf(k) === 0) p = 1.5;               /* kısaltılmış: otomas */
      else if (Math.min(k.length, anahtar.length) >= 5) {
        var m = mesafe(k, anahtar);
        if (m === 1) p = 2.5; else if (m === 2 && anahtar.length >= 8) p = 1;       /* yazım hatası */
      }
      if (p > en) en = p;
    }
    return en;
  }

  var hazirlik = null;
  function hazirla(bilgi) {
    return bilgi.map(function (g) {
      var a = (g.anahtarlar || []).concat([g.soru]).map(katla).filter(Boolean);
      return { g: g, anahtarlar: a };
    });
  }

  function esle(soru, bilgi) {
    bilgi = bilgi || window.URAS_BILGI || [];
    if (!hazirlik || hazirlik.kaynak !== bilgi) { hazirlik = hazirla(bilgi); hazirlik.kaynak = bilgi; }
    var q = katla(soru);
    if (!q) return [];
    var kelimeler = q.split(' ').filter(function (k) { return !DOLGU[k] && k.length > 1; });
    var sonuc = hazirlik.map(function (h) {
      var kapsanan = {};
      var puanlar = h.anahtarlar.map(function (a) {
        if (a.indexOf(' ') > -1) {
          if (!new RegExp('(^| )' + a).test(q)) return 0;
          a.split(' ').forEach(function (p) { kelimeler.forEach(function (k) { if (k.indexOf(p) === 0) kapsanan[k] = 1; }); });
          return 3 + a.split(' ').length;
        }
        if (DOLGU[a]) return 0;
        var en = 0;
        kelimeler.forEach(function (k) { var p = kelimePuani(a, [k]); if (p >= 2) kapsanan[k] = 1; if (p > en) en = p; });
        return en;
      }).sort(function (x, y) { return y - x; });
      var puan = (puanlar[0] || 0) + (puanlar[1] || 0) * 0.6 + (puanlar[2] || 0) * 0.3;
      /* tek zayıf eşleşme, uzun sorunun yarısını bile karşılamıyorsa tahmin etme: geri çekil */
      var kapsam = kelimeler.length ? Object.keys(kapsanan).length / kelimeler.length : 0;
      if (puan < 4 && kapsam < 0.5) puan = 0;
      return { id: h.g.id, g: h.g, puan: puan };
    }).filter(function (s) { return s.puan >= 2.5; });
    sonuc.sort(function (x, y) { return y.puan - x.puan; });
    return sonuc;
  }

  window.UrasAsistan = { katla: katla, esle: esle };
  if (typeof document === 'undefined' || !document.body) return;
  if (document.getElementById('uras-panel')) return;

  /* ---------- arayüz ---------- */
  var BILGI = window.URAS_BILGI || [];
  var WA = 'https://wa.me/905063026474?text=Merhaba%2C%20Uras%20Tech%20ile%20bir%20ke%C5%9Fif%20g%C3%B6r%C3%BC%C5%9Fmesi%20yapmak%20istiyorum.';
  var ANA = !!document.getElementById('iletisim');
  var FIYAT_SAYFASI = /\/fiyatlar(\.html)?$/.test(location.pathname);
  var azHareket = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var KONULAR = ['hizmetler', 'fiyatlar', 'nasil-calisir', 'sure', 'sahiplik', 'kvkk', 'urunler', 'iletisim'];
  var BALON_ANAHTAR = 'uras-balon';
  var maskot = window.URAS_MASKOT || function () { return ''; };

  /* site içi bağlantıyı bulunduğumuz sayfaya göre kısalt: aynı sayfadaysa yalnız #bolum */
  function yerel(href) {
    var m = /^\/(fiyatlar\.html)?#(.+)$/.exec(href);
    if (!m) return href;
    if (!m[1] && ANA) return '#' + m[2];
    if (m[1] && FIYAT_SAYFASI) return '#' + m[2];
    return href;
  }
  var GORUSME = ANA ? '#iletisim' : (FIYAT_SAYFASI ? '#gorusme' : '/#iletisim');
  var FIYATLAR = FIYAT_SAYFASI ? '#paketler' : '/fiyatlar.html';

  function el(etiket, sinif, metin) {
    var e = document.createElement(etiket);
    if (sinif) e.className = sinif;
    if (metin != null) e.textContent = metin;
    return e;
  }
  function bul(id) { for (var i = 0; i < BILGI.length; i++) if (BILGI[i].id === id) return BILGI[i]; return null; }

  /* başlatıcı */
  var baslat = el('button', 'ua-baslat');
  baslat.type = 'button';
  baslat.id = 'uras-baslat';
  baslat.setAttribute('aria-label', 'Uras asistanını aç: sitedeki sorularınızı cevaplar');
  baslat.setAttribute('aria-haspopup', 'dialog');
  baslat.setAttribute('aria-expanded', 'false');
  baslat.setAttribute('aria-controls', 'uras-panel');
  baslat.innerHTML = '<span class="ua-baslat-govde">' + maskot(58) + '</span>';

  var balon = el('div', 'ua-balon');
  balon.setAttribute('role', 'status');
  var balonMetin = el('button', 'ua-balon-metin', 'Merhaba, ben Uras. Sorunuz mu var?');
  balonMetin.type = 'button';
  var balonKapat = el('button', 'ua-balon-kapat');
  balonKapat.type = 'button';
  balonKapat.setAttribute('aria-label', 'Balonu kapat');
  balonKapat.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
  balon.appendChild(balonMetin);
  balon.appendChild(balonKapat);

  var yuva = el('div', 'ua-yuva');
  yuva.appendChild(balon);
  yuva.appendChild(baslat);

  var grup = document.getElementById('cagri');
  if (grup) grup.appendChild(yuva);
  else { var kendi = el('div', 'cg cg-acik ua-tek'); kendi.appendChild(yuva); document.body.appendChild(kendi); grup = kendi; }

  /* panel */
  var perde = el('div', 'ua-perde');
  perde.hidden = true;
  var panel = el('div', 'ua-panel');
  panel.id = 'uras-panel';
  panel.hidden = true;
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'true');
  panel.setAttribute('aria-labelledby', 'ua-baslik');
  panel.innerHTML =
    '<div class="ua-ust">' +
      '<span class="ua-ust-maskot">' + maskot(40, false) + '</span>' +
      '<div class="ua-ust-yazi"><span class="ua-kod">U-01 · Site asistanı</span><b id="ua-baslik">Uras</b></div>' +
      '<button type="button" class="ua-kapat" aria-label="Asistanı kapat"><svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg></button>' +
    '</div>' +
    '<div class="ua-akis" role="log" aria-live="polite" aria-relevant="additions"></div>' +
    '<form class="ua-form" autocomplete="off">' +
      '<label class="ua-gizli" for="ua-girdi">Sorunuzu yazın</label>' +
      '<input id="ua-girdi" class="ua-girdi" type="text" maxlength="160" placeholder="Sorunuzu yazın…" enterkeyhint="send">' +
      '<button type="submit" class="ua-gonder" aria-label="Sor"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
    '</form>' +
    '<p class="ua-not">Uras sitedeki bilgilerle cevap verir; yapay zekâ değildir. Yazdıklarınız kaydedilmez, hiçbir yere gönderilmez.</p>';
  document.body.appendChild(perde);
  document.body.appendChild(panel);

  var akis = panel.querySelector('.ua-akis');
  var form = panel.querySelector('.ua-form');
  var girdi = panel.querySelector('.ua-girdi');
  var kapatDugme = panel.querySelector('.ua-kapat');
  var acik = false, ilk = true;

  var sonSoru = null;
  function asagi() { akis.scrollTop = akis.scrollHeight; }
  /* cevap gelince soruyu üstte tut: uzun cevabın başı kaybolmasın */
  function soruyaKaydir() {
    if (!sonSoru) return asagi();
    akis.scrollTop = Math.max(0, sonSoru.offsetTop - akis.offsetTop - 8);
  }

  function cip(metin, sinif, isle) {
    var b = el('button', 'ua-cip' + (sinif ? ' ' + sinif : ''), metin);
    b.type = 'button';
    b.addEventListener('click', isle);
    return b;
  }
  function cipBag(metin, href, sinif, yeniSekme) {
    var a = el('a', 'ua-cip' + (sinif ? ' ' + sinif : ''), metin);
    a.href = href;
    if (yeniSekme) { a.target = '_blank'; a.rel = 'noopener noreferrer'; a.setAttribute('aria-label', metin + ' (yeni sekmede açılır)'); }
    else a.addEventListener('click', bagTiklandi);
    return a;
  }
  function bagTiklandi(e) {
    var h = e.currentTarget.getAttribute('href') || '';
    if (h.charAt(0) === '#') kapat(false);
  }

  function kullanici(metin) {
    var s = el('div', 'ua-satir ua-satir--sen');
    s.appendChild(el('p', 'ua-mesaj ua-mesaj--sen', metin));
    akis.appendChild(s);
    sonSoru = s;
  }
  function uras(icerik) {
    var s = el('div', 'ua-satir');
    var k = el('div', 'ua-mesaj');
    icerik(k);
    s.appendChild(k);
    akis.appendChild(s);
    soruyaKaydir();
    return k;
  }

  function konuCipleri() {
    var sira = el('div', 'ua-cipler');
    sira.setAttribute('role', 'group');
    sira.setAttribute('aria-label', 'Hızlı konular');
    KONULAR.forEach(function (id) {
      var g = bul(id);
      if (g) sira.appendChild(cip(g.soru, '', function () { sor(g.soru, g); }));
    });
    return sira;
  }

  function sonrakiAdim(g) {
    var sira = el('div', 'ua-cipler ua-cipler--adim');
    var fiyatKonusu = g.link && /fiyatlar/.test(g.link.href);
    if (g.sonraki === 'fiyat') {
      sira.appendChild(cipBag('Fiyatları gör', FIYATLAR, 'ua-cip--ana'));
      sira.appendChild(cipBag('Ücretsiz görüşme', GORUSME));
    } else {
      sira.appendChild(cipBag('Ücretsiz görüşme', GORUSME, 'ua-cip--ana'));
      if (fiyatKonusu || g.id === 'fiyatlar') sira.appendChild(cipBag('WhatsApp\'tan sor', WA, '', true));
      else sira.appendChild(cipBag('Fiyatları gör', FIYATLAR));
    }
    sira.appendChild(cip('Başka bir konu', 'ua-cip--sade', function () {
      uras(function (k) { k.appendChild(el('p', '', 'Hangi konuya bakalım?')); k.appendChild(konuCipleri()); });
    }));
    return sira;
  }

  function cevapla(g, alternatifler) {
    uras(function (k) {
      k.appendChild(el('b', 'ua-konu', g.soru));
      k.appendChild(el('p', '', g.cevap));
      if (g.link) {
        var a = el('a', 'ua-bag', g.link.metin + ' →');
        a.href = yerel(g.link.href);
        a.addEventListener('click', bagTiklandi);
        k.appendChild(a);
      }
      if (alternatifler && alternatifler.length) {
        k.appendChild(el('span', 'ua-etiket', 'Şunu mu demek istediniz?'));
        var sira = el('div', 'ua-cipler');
        alternatifler.forEach(function (a) { sira.appendChild(cip(a.g.soru, 'ua-cip--sade', function () { sor(a.g.soru, a.g); })); });
        k.appendChild(sira);
      }
      k.appendChild(sonrakiAdim(g));
    });
  }

  function bulunamadi() {
    uras(function (k) {
      k.appendChild(el('p', '', 'Bunu sitede bulamadım, uydurmak istemem. Ekibe doğrudan sorarsanız 24 saat içinde dönüş yapılır.'));
      var sira = el('div', 'ua-cipler ua-cipler--adim');
      sira.appendChild(cipBag('Ücretsiz görüşme', GORUSME, 'ua-cip--ana'));
      sira.appendChild(cipBag('WhatsApp\'tan sor', WA, '', true));
      k.appendChild(sira);
      k.appendChild(el('span', 'ua-etiket', 'Ya da şu konulardan birine bakın:'));
      k.appendChild(konuCipleri());
    });
  }

  var yaziyor = null;
  function sor(metin, dogrudan) {
    metin = String(metin).trim().slice(0, 160);
    if (!metin) return;
    kullanici(metin);
    asagi();
    var g = dogrudan, alternatif = [];
    if (!g) {
      var s = esle(metin, BILGI);
      if (s.length) { g = s[0].g; alternatif = s.slice(1, 3); }
    }
    if (yaziyor) { clearTimeout(yaziyor.t); yaziyor.e.remove(); }
    if (azHareket) { g ? cevapla(g, alternatif) : bulunamadi(); return; }
    var nokta = el('div', 'ua-satir ua-yaziyor');
    nokta.setAttribute('aria-hidden', 'true');
    nokta.innerHTML = '<span></span><span></span><span></span>';
    akis.appendChild(nokta);
    asagi();
    yaziyor = { e: nokta, t: setTimeout(function () {
      nokta.remove(); yaziyor = null;
      g ? cevapla(g, alternatif) : bulunamadi();
    }, 420) };
  }

  function karsila() {
    var s = el('div', 'ua-karsilama');
    s.innerHTML = '<span class="ua-karsilama-maskot">' + maskot(112) + '</span>';
    s.appendChild(el('p', 'ua-karsilama-baslik', 'Merhaba, ben Uras.'));
    s.appendChild(el('p', 'ua-karsilama-alt', 'Uras Tech hakkında sitede yazan her şeyi bilirim. Bir konu seçin ya da sorunuzu yazın.'));
    akis.appendChild(s);
    var k = uras(function (k) { k.appendChild(konuCipleri()); });
    k.classList.add('ua-mesaj--yalin');
  }

  /* ---------- aç / kapat / odak kapanı ---------- */
  var oncekiOdak = null;
  function odaklanabilir() {
    return Array.prototype.filter.call(
      panel.querySelectorAll('a[href], button:not([disabled]), input:not([disabled])'),
      function (e) { return e.offsetParent !== null || e === document.activeElement; }
    );
  }
  function ac() {
    if (acik) return;
    acik = true;
    balonGizle(true);
    oncekiOdak = baslat;
    if (ilk) { karsila(); ilk = false; }
    perde.hidden = false; panel.hidden = false;
    document.documentElement.classList.add('uras-acik');
    baslat.setAttribute('aria-expanded', 'true');
    requestAnimationFrame(function () {
      perde.classList.add('ua-gorunur'); panel.classList.add('ua-gorunur');
      if (sonSoru) asagi(); else akis.scrollTop = 0;
      /* telefonda klavye açılıp paneli kaplamasın diye ilk odak kapat düğmesinde; masaüstünde girdide */
      (matchMedia('(max-width: 640px)').matches ? kapatDugme : girdi).focus();
    });
  }
  function kapat(odakGeri) {
    if (!acik) return;
    acik = false;
    perde.classList.remove('ua-gorunur'); panel.classList.remove('ua-gorunur');
    document.documentElement.classList.remove('uras-acik');
    baslat.setAttribute('aria-expanded', 'false');
    setTimeout(function () { if (!acik) { perde.hidden = true; panel.hidden = true; } }, azHareket ? 0 : 220);
    if (odakGeri !== false && oncekiOdak) oncekiOdak.focus();
  }

  baslat.addEventListener('click', function () { acik ? kapat() : ac(); });
  balonMetin.addEventListener('click', ac);
  balonKapat.addEventListener('click', function () { balonGizle(true); baslat.focus(); });
  kapatDugme.addEventListener('click', function () { kapat(); });
  perde.addEventListener('click', function () { kapat(); });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var m = girdi.value;
    girdi.value = '';
    sor(m);
  });
  panel.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { e.preventDefault(); kapat(); return; }
    if (e.key !== 'Tab') return;
    var f = odaklanabilir();
    if (!f.length) return;
    var bas = f[0], son = f[f.length - 1];
    if (e.shiftKey && document.activeElement === bas) { e.preventDefault(); son.focus(); }
    else if (!e.shiftKey && document.activeElement === son) { e.preventDefault(); bas.focus(); }
  });

  /* ---------- ilk ziyarette bir kez balon ---------- */
  function oku() { try { return localStorage.getItem(BALON_ANAHTAR); } catch (e) { return null; } }
  function yaz(v) { try { localStorage.setItem(BALON_ANAHTAR, v); } catch (e) { /* yoksay */ } }
  var balonZamani = null;
  function balonGizle(kalici) {
    balon.classList.remove('ua-balon--acik');
    if (kalici) yaz('kapandi');
  }
  function grupGorunur() { return grup.classList.contains('cg-acik'); }
  function balonPlanla() {
    if (balonZamani || oku()) return;
    if (!grupGorunur()) return;
    balonZamani = setTimeout(function () {
      if (acik || oku() || !grupGorunur()) { balonZamani = null; return; }
      balon.classList.add('ua-balon--acik');
      yaz('gosterildi');
      setTimeout(function () { balonGizle(false); }, 14000);
    }, 6000);
  }
  new MutationObserver(balonPlanla).observe(grup, { attributes: true, attributeFilter: ['class'] });
  balonPlanla();
})();
