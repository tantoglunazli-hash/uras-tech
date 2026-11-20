/* =========================================================
   URASTECH — "Uras" maskotu (TEK DEĞİŞİM NOKTASI)
   Maskotun çizimi ve kendi hareketi yalnız bu dosyada.
   Karakter değişecekse bu dosyadaki SVG'yi ve altındaki
   hareket CSS'ini değiştirmek yeter; asistan kodu
   window.URAS_MASKOT(boyut) çağırıp dönen SVG'yi basar.

   Tasarım (kurucu kararı, 20 Kasım 2026): küçük, sevimli,
   TURUNCU bir robot; başında TAVŞAN KULAĞI biçiminde iki
   anten (sağdaki uçtan bükük), koyu ekran yüz, iki göz,
   küçük gülümseme. Hareket: göz kırpma + kulak oynatma;
   prefers-reduced-motion'da hareket yok.
   ========================================================= */
(function () {
  'use strict';

  var TURUNCU = '#FF5733';
  var MUREKKEP = '#0B1220';
  var KULAK_ICI = '#FFC4B2';
  var EKRAN_YAZI = '#E7EBF3';

  var CSS =
    '.uras-maskot{display:block;overflow:visible}' +
    '.uras-maskot .um-kulak{transform-box:fill-box;transform-origin:50% 100%}' +
    '.uras-maskot .um-gozler{transform-box:fill-box;transform-origin:50% 50%}' +
    '@media (prefers-reduced-motion:no-preference){' +
      '.uras-maskot.um-canli .um-gozler{animation:um-kirp 5.2s infinite}' +
      '.uras-maskot.um-canli .um-kulak-sol{animation:um-seyir 7s ease-in-out infinite}' +
      '.uras-maskot.um-canli .um-kulak-sag{animation:um-sarkma 7s ease-in-out infinite}' +
    '}' +
    '@keyframes um-kirp{0%,92%,100%{transform:scaleY(1)}95%{transform:scaleY(.12)}}' +
    '@keyframes um-seyir{0%,60%,72%,100%{transform:rotate(0)}64%{transform:rotate(-9deg)}68%{transform:rotate(4deg)}}' +
    '@keyframes um-sarkma{0%,30%,48%,100%{transform:rotate(0)}36%{transform:rotate(14deg)}42%{transform:rotate(-4deg)}}';

  function stilEkle() {
    if (typeof document === 'undefined' || document.getElementById('uras-maskot-stil')) return;
    var s = document.createElement('style');
    s.id = 'uras-maskot-stil';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* boyut: piksel; canli: hareket açık mı (varsayılan açık) */
  window.URAS_MASKOT = function (boyut, canli) {
    stilEkle();
    var b = boyut || 64;
    return '' +
      '<svg class="uras-maskot' + (canli === false ? '' : ' um-canli') + '" width="' + b + '" height="' + b + '" viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">' +
        /* sol kulak: dik */
        '<g class="um-kulak um-kulak-sol">' +
          '<path d="M17.5 24 C14.5 16 14 8.5 16.5 4.2 C18.6 0.8 23 1.6 24.4 5.6 C26 10.2 25.6 17 24.2 24 Z" fill="' + TURUNCU + '" stroke="' + MUREKKEP + '" stroke-width="2.2" stroke-linejoin="round"/>' +
          '<path d="M19.6 21 C18 15.5 17.8 10 19 6.8 C19.8 5 21.6 5.2 22.2 7.2 C23 10.6 22.8 15.6 22 21 Z" fill="' + KULAK_ICI + '"/>' +
        '</g>' +
        /* sağ kulak: ucu dışa bükük */
        '<g class="um-kulak um-kulak-sag">' +
          '<path d="M39.8 24 C39 18 39.6 12.4 41.6 8.6 C43.4 5.2 47.6 3.4 51.4 4.4 C54.6 5.2 55 8.6 52.2 10.4 C49.4 12.2 47.4 14.6 46.6 18 C46.2 20 46.2 22 46.4 24 Z" fill="' + TURUNCU + '" stroke="' + MUREKKEP + '" stroke-width="2.2" stroke-linejoin="round"/>' +
          '<path d="M42.4 21.6 C42 17.6 42.6 13.6 44 11 C45.2 8.8 47.6 7.4 49.6 7.6 C47 9.6 45 12.8 44.4 16.4 C44.1 18.2 44 20 44.1 21.6 Z" fill="' + KULAK_ICI + '"/>' +
        '</g>' +
        /* baş */
        '<rect x="9" y="22" width="46" height="36" rx="13" fill="' + TURUNCU + '" stroke="' + MUREKKEP + '" stroke-width="2.4"/>' +
        /* yan civatalar */
        '<rect x="5.2" y="35" width="4.4" height="10" rx="2.2" fill="' + MUREKKEP + '"/>' +
        '<rect x="54.4" y="35" width="4.4" height="10" rx="2.2" fill="' + MUREKKEP + '"/>' +
        /* ekran yüz */
        '<rect x="15" y="28.5" width="34" height="23" rx="8" fill="' + MUREKKEP + '"/>' +
        '<g class="um-gozler" fill="' + EKRAN_YAZI + '">' +
          '<ellipse cx="25.4" cy="38" rx="3" ry="3.4"/>' +
          '<ellipse cx="38.6" cy="38" rx="3" ry="3.4"/>' +
        '</g>' +
        '<path d="M28.2 44.2 C30.4 46.4 33.6 46.4 35.8 44.2" stroke="' + TURUNCU + '" stroke-width="2.1" stroke-linecap="round"/>' +
        /* yanak ışığı */
        '<circle cx="19.6" cy="45.2" r="1.5" fill="' + TURUNCU + '" opacity=".55"/>' +
        '<circle cx="44.4" cy="45.2" r="1.5" fill="' + TURUNCU + '" opacity=".55"/>' +
      '</svg>';
  };
})();
