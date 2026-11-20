/* =========================================================
   URASTECH — Uras asistanının bilgi bankası
   KURAL: Buradaki her cevap sitede ZATEN yazan bir metinden
   alınır (index.html, fiyatlar.html, llms.txt, kvkk.html, blog).
   Sitede olmayan süre, garanti, müşteri sonucu ya da rakam
   YAZILMAZ. Fiyat değişirse önce fiyatlar.html, sonra burası.
   Alanlar:
     id        tekil kimlik
     soru      kullanıcıya gösterilen başlık / öneri çipi
     anahtarlar eşleştirme kelimeleri (Türkçe karakterli ya da
               karaktersiz yazılabilir; eşleştirici ikisini de katlar)
     cevap     en fazla 3 cümle
     link      { href, metin } — site içi sayfa ya da bölüm (isteğe bağlı)
     sonraki   'gorusme' | 'fiyat' — cevabın altındaki ilk adım çipi
   ========================================================= */
window.URAS_BILGI = [
  {
    id: 'hizmetler',
    soru: 'Neler yapıyorsunuz?',
    anahtarlar: ['neler yapıyorsunuz', 'ne yapıyorsunuz', 'hizmet', 'hizmetler', 'ne iş', 'neler sunuyorsunuz', 'ne yapabilirsiniz', 'yaptığınız işler'],
    cevap: 'Dört işimiz var: şirkete özel otomasyon, web sitesi ve dijital altyapı, 7/24 yapay zekâ asistanı ve reklam görseli ile video üretimi. Hazır bir paketi size uydurmuyoruz; önce süreçlerinizi dinliyor, sonra tam o sürece göre kurulan sistemi yazıyoruz. Kurulumdan sonra da sahipsiz bırakmıyoruz.',
    link: { href: '/#hizmetler', metin: 'Hizmetlere bak' },
    sonraki: 'gorusme'
  },
  {
    id: 'fiyatlar',
    soru: 'Fiyatlar',
    anahtarlar: ['fiyat', 'fiyatlar', 'ücret', 'ücretler', 'ne kadar', 'kaç para', 'kaç dolar', 'maliyet', 'paket', 'paketler', 'tarife', 'bütçe', 'pahalı', 'kurulum ücreti', 'aylık ücret', 'dolar'],
    cevap: 'Başlangıç kurulumu 349 $\'dan (aylık destek 69 $), Büyüme 690 $\'dan (139 $/ay), Çok şubeli / ajans 1.390 $\'dan (229 $/ay); Size özel işler yazılı teklifle belirlenir. Fiyatlar USD, KDV ve üçüncü taraf ücretleri hariçtir; kurulum tek sefer ödenir, aylık destek ayrıca yazılır. Keşif görüşmesi ücretsiz.',
    link: { href: '/fiyatlar.html#paketler', metin: 'Fiyat cetvelini aç' },
    sonraki: 'gorusme'
  },
  {
    id: 'nasil-calisir',
    soru: 'Nasıl çalışıyorsunuz?',
    anahtarlar: ['nasıl çalışıyorsunuz', 'nasıl çalışır', 'süreç', 'adımlar', 'nasıl ilerliyor', 'çalışma şekli', 'nasıl başlarız', 'ilk adım', 'aşamalar', 'nereden başlarız'],
    cevap: 'Dört adımda: ücretsiz keşif görüşmesi (20–30 dakika), ertesi gün gelen ücretsiz ilk okuma, onayladığınız kapsamla kurulum ve entegrasyon, ardından izleme ve destek. Kod yazmadan önce neyin gerçekten zaman ve müşteri kaybettirdiğini birlikte görüyoruz. Bazen doğru karar bir şeyi hiç otomatikleştirmemektir; bunu da söylüyoruz.',
    link: { href: '/#nasil-calisir', metin: 'Adımları gör' },
    sonraki: 'gorusme'
  },
  {
    id: 'sure',
    soru: 'Ne kadar sürer?',
    anahtarlar: ['ne kadar sürer', 'kaç günde', 'kaç gün', 'kaç hafta', 'süre', 'sürer', 'sürüyor', 'teslim', 'teslim süresi', 'ne zaman biter', 'ne zaman hazır', 'kurulum süresi', 'hızlı', 'zaman alır', 'iş günü'],
    cevap: 'Projenin kapsamına göre değişir: basit bir asistan (chatbot) kurulumu 5–7 iş günü, kapsamlı otomasyon projeleri 3–6 hafta arasında tamamlanır. Süreç boyunca her aşamada sizi bilgilendirip onayınızı alırız.',
    link: { href: '/#sss', metin: 'Sık sorulanlara bak' },
    sonraki: 'gorusme'
  },
  {
    id: 'sahiplik',
    soru: 'Sistem kimin adına kurulur?',
    anahtarlar: ['kimin adına', 'sahiplik', 'sahibi', 'bağımlı', 'bağımlı kalır', 'hesaplar', 'alan adı', 'domain', 'sunucu', 'veritabanı', 'yolumuz ayrılırsa', 'devralabilir', 'erişim', 'yönetici erişimi', 'kime ait'],
    cevap: 'Sistem sizin adınıza kurulur: alan adı, sunucu, veritabanı ve kullandığımız servislerin hesapları sizin adınıza açılır, yönetici erişimi baştan sizde olur. Yarın yolumuz ayrılsa bile sistem sizde kalır ve başka bir ekip devralabilir. Kimseye bağımlı olmazsınız.',
    link: { href: '/#taahhut', metin: 'Taahhüdümüzü oku' },
    sonraki: 'gorusme'
  },
  {
    id: 'kvkk',
    soru: 'KVKK',
    anahtarlar: ['kvkk', 'kişisel veri', 'veri güvenliği', 'gizlilik', 'aydınlatma metni', 'verilerim', 'veriler', 'uyumlu', 'yasal', '6698', 'çerez', 'kvkk uyum'],
    cevap: 'Sitedeki formdan gelen bilgiler yalnızca size dönüş yapmak için kullanılır; satış listesine eklenmez, üçüncü taraflarla paylaşılmaz. Hangi veriyi hangi amaçla işlediğimiz KVKK Aydınlatma Metni\'nde yazılı. İşletmeniz için ayrıca "KVKK hazırlık kontrolü" ek modülü var (129 $\'dan): formlarınız, çerez onayınız ve aydınlatma metniniz bir kontrol listesinden geçer.',
    link: { href: '/kvkk.html', metin: 'KVKK Aydınlatma Metni' },
    sonraki: 'gorusme'
  },
  {
    id: 'urunler',
    soru: 'Kendi ürünleriniz',
    anahtarlar: ['kendi ürünleriniz', 'ürünleriniz', 'ürün', 'saas', 'velocost', 'premisey', 'yazdığınız ürünler', 'referans', 'referanslar', 'örnek iş'],
    cevap: 'İki ticari SaaS ürünümüz yayında: Velocost (yol ve filo maliyet zekâsı, velocost.app) ve Premisey (iş fikri ve başvuru doğrulama, premisey.com). Yani sizin projenizde de deneme yanılmayla değil, bunları ayakta tutan aynı mühendislikle çalışıyoruz.',
    link: { href: '/#platformlar', metin: 'Ürünlerimizi gör' },
    sonraki: 'gorusme'
  },
  {
    id: 'iletisim',
    soru: 'İletişim',
    anahtarlar: ['iletişim', 'ulaşmak', 'ulaşırım', 'telefon', 'numara', 'e-posta', 'eposta', 'mail', 'adres', 'whatsapp numarası', 'aramak', 'yazmak', 'nasıl ulaşırım', 'irtibat'],
    cevap: 'WhatsApp ya da telefon: 0506 302 64 74 · e-posta: info@urastech.com · ya da sayfadaki görüşme formu. Mesajınıza 24 saat içinde dönüş yapıyoruz.',
    link: { href: '/#iletisim', metin: 'Görüşme formuna git' },
    sonraki: 'gorusme'
  },
  {
    id: 'kesif-gorusmesi',
    soru: 'Keşif görüşmesi nedir?',
    anahtarlar: ['keşif', 'keşif görüşmesi', 'görüşme', 'ücretsiz görüşme', 'toplantı', 'randevu almak', 'ön görüşme', 'görüşme ücretli mi', 'hazırlık'],
    cevap: 'Keşif görüşmesi ücretsiz, 20–30 dakikalık bir görüşmedir; işinizi anlatırsınız, hazırlık yapmanıza ya da doküman toplamanıza gerek yok. Ertesi gün tek sayfalık ilk okumayı göndeririz; teklif netleşene kadar hiçbir ödeme yok.',
    link: { href: '/#iletisim', metin: 'Görüşme iste' },
    sonraki: 'gorusme'
  },
  {
    id: 'ilk-okuma',
    soru: 'İlk okuma nedir, ücretli mi?',
    anahtarlar: ['ilk okuma', 'okuma', 'değerlendirme', 'tek sayfa', 'rapor', 'kayıp noktası', 'ön analiz'],
    cevap: 'Keşif görüşmesinden sonraki gün gönderdiğimiz tek sayfalık değerlendirmedir ve ücretsizdir. İçinde duyduğumuz dert, en fazla üç kayıp noktası, her biri için kararımız (otomatikleştir, önce ölç ya da dokunma) ve bize para vermeden yapabileceğiniz çözüm yazar. Devam etmemeye karar verirseniz ilk okuma yine sizde kalır.',
    link: { href: '/#nasil-calisir', metin: 'Örnek ilk okumayı gör' },
    sonraki: 'gorusme'
  },
  {
    id: 'derin-teshis',
    soru: 'Derin teşhis nedir?',
    anahtarlar: ['derin teşhis', 'teşhis', 'ölçüm', 'analiz', 'darboğaz', 'teşhis ücreti'],
    cevap: 'Birden fazla süreç iç içeyse ve neyin ne kadar kaybettirdiği belli değilse ücretli bir derin teşhis öneririz: 1–2 hafta ölçüm ve rapor, her rakam kaynağıyla yazılır. Kapsamı ve ücreti görüşmede yazılı verilir; kurulum alırsanız teşhis ücreti kurulumdan düşülür.',
    link: { href: '/fiyatlar.html#kurulum', metin: 'Fiyatlanmayı oku' },
    sonraki: 'gorusme'
  },
  {
    id: 'paket-baslangic',
    soru: 'Başlangıç paketi',
    anahtarlar: ['başlangıç', 'başlangıç paketi', 'en ucuz', 'küçük işletme', 'tek süreç', '349', '69'],
    cevap: 'Başlangıç: kurulum 349 $\'dan, aylık destek 69 $. Tek bir süreçte tıkanan küçük işletmeler için; tek süreç otomasyonu ya da tek kanallı (WhatsApp ya da web sitesi) 7/24 yapay zekâ asistanı, programlarınıza bağlantı, kullanım rehberi ve kurulum sonrası destek içerir. KDV ve üçüncü taraf ücretleri hariç.',
    link: { href: '/fiyatlar.html#paketler', metin: 'Paketi incele' },
    sonraki: 'gorusme'
  },
  {
    id: 'paket-buyume',
    soru: 'Büyüme paketi',
    anahtarlar: ['büyüme', 'büyüme paketi', 'önerilen paket', 'iki kanal', 'çok adımlı', '690', '139'],
    cevap: 'Büyüme: kurulum 690 $\'dan, aylık destek 139 $. Çok adımlı otomasyon, iki kanalda 7/24 yapay zekâ asistanı (ör. WhatsApp + web sitesi) ve form → CRM → takvim iş akışlı web altyapısı içerir. KDV ve üçüncü taraf ücretleri hariç.',
    link: { href: '/fiyatlar.html#paketler', metin: 'Paketi incele' },
    sonraki: 'gorusme'
  },
  {
    id: 'paket-cok-subeli',
    soru: 'Çok şubeli / ajans paketi',
    anahtarlar: ['çok şubeli', 'şube', 'şubeler', 'ajans', 'birden fazla marka', 'franchise', 'zincir', '1390', '1.390', '229'],
    cevap: 'Çok şubeli / ajans: kurulum 1.390 $\'dan, aylık destek 229 $. Büyüme paketindeki kurulum birden fazla şube ya da marka için kurulur; ekip kullanıcıları ve şube/marka bazında haftalık rapor içerir. KDV ve üçüncü taraf ücretleri hariç.',
    link: { href: '/fiyatlar.html#paketler', metin: 'Paketi incele' },
    sonraki: 'gorusme'
  },
  {
    id: 'paket-ozel',
    soru: 'Size özel proje',
    anahtarlar: ['size özel', 'özel proje', 'özel yazılım', 'web uygulaması', 'sıfırdan', 'uygulama yaptırmak', 'mobil uygulama', 'yazılım yaptırmak', 'özel entegrasyon', 'ürün fikrim'],
    cevap: 'Basamaklara sığmayan işler için tam sizin akışınıza göre yazılan sistem; kapsam ve fiyat yazılı teklifle netleşir. Aklınızdaki yazılımı sıfırdan kurup yayına almak istiyorsanız, Velocost ve Premisey\'i ayağa kaldıran ekip aynı işi sizin için de yapar.',
    link: { href: '/fiyatlar.html#paketler', metin: 'Size özel basamağı gör' },
    sonraki: 'gorusme'
  },
  {
    id: 'ek-moduller',
    soru: 'Ek modüller',
    anahtarlar: ['ek modül', 'modül', 'modüller', 'eklenti', 'ekstra', 'ek özellik'],
    cevap: 'Her pakete ek modül eklenebilir; çoğu 129 $\'dan kurulur, WhatsApp asistanı ve web sitesi asistanı 199 $\'dan (kurulum, tek sefer). Reklam görsel & video aylık paketi teklifle. Hangi modülün işinize yarayacağını görüşmede birlikte seçeriz; yaramayacaksa bunu da söyleriz.',
    link: { href: '/fiyatlar.html#ek-moduller', metin: 'Modülleri gör' },
    sonraki: 'gorusme'
  },
  {
    id: 'modul-whatsapp',
    soru: 'WhatsApp asistanı',
    anahtarlar: ['whatsapp asistanı', 'whatsapp bot', 'whatsapp botu', 'whatsapp otomatik cevap', 'whatsapp otomasyonu', 'whatsapp', 'wp bot'],
    cevap: 'WhatsApp asistanı ek modülü 199 $\'dan kurulur (tek sefer): WhatsApp\'tan gelen sorulara gece gündüz doğal Türkçeyle cevap verir. Fiyat KDV ve üçüncü taraf ücretleri hariç; Meta mesaj ücretleri ve yapay zekâ kullanımı müşterinin kendi hesabından ödenir.',
    link: { href: '/fiyatlar.html#ek-moduller', metin: 'Modülü gör' },
    sonraki: 'gorusme'
  },
  {
    id: 'modul-web-asistani',
    soru: 'Web sitesi asistanı',
    anahtarlar: ['web sitesi asistanı', 'site asistanı', 'sitede chatbot', 'canlı destek', 'web chatbot', 'site botu'],
    cevap: 'Web sitesi asistanı ek modülü 199 $\'dan kurulur (tek sefer): sitenizdeki ziyaretçiyi karşılar, soruyu cevaplar, gerekirse sizi bilgilendirir. KDV ve üçüncü taraf ücretleri hariç.',
    link: { href: '/fiyatlar.html#ek-moduller', metin: 'Modülü gör' },
    sonraki: 'gorusme'
  },
  {
    id: 'modul-instagram',
    soru: 'Instagram yorum → DM otomatik cevap',
    anahtarlar: ['instagram', 'instagram dm', 'dm', 'dm otomasyonu', 'yorum dm', 'yoruma dm', 'insta', 'sosyal medya otomasyonu'],
    cevap: 'Instagram yorum → DM otomatik cevap modülü 129 $\'dan kurulur (tek sefer): gönderinize yorum yazan kişiye istediği bilgi DM olarak kendiliğinden gider. KDV ve üçüncü taraf ücretleri hariç.',
    link: { href: '/fiyatlar.html#ek-moduller', metin: 'Modülü gör' },
    sonraki: 'gorusme'
  },
  {
    id: 'modul-randevu',
    soru: 'Online randevu + hatırlatma',
    anahtarlar: ['randevu', 'online randevu', 'hatırlatma', 'takvim', 'rezervasyon', 'randevu sistemi'],
    cevap: 'Online randevu + hatırlatma modülü 129 $\'dan kurulur (tek sefer): müşteri boş saati kendisi seçer, randevudan önce hatırlatma mesajı alır. KDV ve üçüncü taraf ücretleri hariç.',
    link: { href: '/fiyatlar.html#ek-moduller', metin: 'Modülü gör' },
    sonraki: 'gorusme'
  },
  {
    id: 'modul-google-yorum',
    soru: 'Google yorumları ve yorum takibi',
    anahtarlar: ['google yorum', 'google yorumları', 'yorum takibi', 'itibar', 'yorumlar', 'müşteri yorumu', 'google puan'],
    cevap: '"Google yorumlarını sitede gösterme ve yorum takibi" modülü 129 $\'dan kurulur (tek sefer): yorumlarınız sitenizde görünür, yeni yorum geldiğinde haberiniz olur. Konuyu blogda da yazdık: Google yorumları bir erken uyarı sistemidir.',
    link: { href: '/blog/google-yorumlari-erken-uyari-sistemi.html', metin: 'Blog yazısını oku' },
    sonraki: 'fiyat'
  },
  {
    id: 'modul-form-crm',
    soru: 'Form → CRM bağlantısı',
    anahtarlar: ['crm', 'form', 'form crm', 'müşteri listesi', 'müşteri takibi', 'satış takibi', 'lead'],
    cevap: 'Form → CRM bağlantısı modülü 129 $\'dan kurulur (tek sefer): sitenizdeki formu dolduran kişi, elle aktarım olmadan müşteri listenize düşer. KDV ve üçüncü taraf ücretleri hariç.',
    link: { href: '/fiyatlar.html#ek-moduller', metin: 'Modülü gör' },
    sonraki: 'gorusme'
  },
  {
    id: 'modul-mesaj-kutusu',
    soru: 'Sosyal medya mesaj kutusu (tek ekranda)',
    anahtarlar: ['mesaj kutusu', 'tek ekran', 'tek ekranda', 'facebook', 'messenger', 'tüm mesajlar', 'gelen kutusu'],
    cevap: 'Sosyal medya mesaj kutusu modülü 129 $\'dan kurulur (tek sefer): Instagram, Facebook ve WhatsApp mesajlarını tek ekrandan okur, cevaplarsınız. KDV ve üçüncü taraf ücretleri hariç.',
    link: { href: '/fiyatlar.html#ek-moduller', metin: 'Modülü gör' },
    sonraki: 'gorusme'
  },
  {
    id: 'modul-haftalik-rapor',
    soru: 'Haftalık rapor e-postası',
    anahtarlar: ['haftalık rapor', 'raporlama', 'rapor e-postası', 'pazartesi raporu', 'istatistik'],
    cevap: 'Haftalık rapor e-postası modülü 129 $\'dan kurulur (tek sefer): haftanın mesaj, randevu ve form sayıları her pazartesi e-postanızda. KDV ve üçüncü taraf ücretleri hariç.',
    link: { href: '/fiyatlar.html#ek-moduller', metin: 'Modülü gör' },
    sonraki: 'gorusme'
  },
  {
    id: 'reklam-video',
    soru: 'Reklam görsel & video',
    anahtarlar: ['reklam', 'video', 'görsel', 'reels', 'içerik üretimi', 'tanıtım videosu', 'sosyal medya içerik', 'reklam görseli', 'kampanya'],
    cevap: 'Hedef kitlenize hitap eden, platforma özel görsel ve video içerikler üretiyoruz: Instagram Reels, feed ve story reklam görselleri, sezonluk kampanya setleri. Reklam görsel & video paketi aylıktır ve fiyatı teklifle belirlenir.',
    link: { href: '/fiyatlar.html#ek-moduller', metin: 'Modülü gör' },
    sonraki: 'gorusme'
  },
  {
    id: 'yapay-zeka-asistani',
    soru: '7/24 yapay zekâ asistanı',
    anahtarlar: ['yapay zeka', 'yapay zekâ asistanı', 'chatbot', 'asistan', 'bot', 'otomatik cevap', 'müşteri soruları', 'mesai dışı', 'gece gelen mesaj', '7/24', 'insan devri'],
    cevap: 'Markanızın sesini öğrenen, doğal Türkçe ile yanıt veren bir asistan kuruyoruz; web sitesi, WhatsApp, Instagram DM ve Facebook Messenger\'da çalışabilir. Tekrarlayan soruları kendi çözer, karmaşık durumda sizi bildirip konuşmayı size aktarır. Başlangıç paketinde tek kanal, Büyüme paketinde iki kanal dahildir.',
    link: { href: '/#hizmetler', metin: 'Hizmeti incele' },
    sonraki: 'fiyat'
  },
  {
    id: 'otomasyon',
    soru: 'Şirkete özel otomasyon',
    anahtarlar: ['otomasyon', 'otomatikleştirme', 'iş akışı', 'n8n', 'make', 'zapier', 'fatura', 'sipariş', 'stok', 'kargo', 'tekrarlayan iş', 'elle yapılan', 'excel', 'tablo', 'veri girişi', 'shopify', 'woocommerce', 'ideasoft', 'google workspace'],
    cevap: 'Her gün elle yaptığınız işi sürecinize göre otomatikleştiriyor, mevcut programlarınıza bağlıyoruz: sipariş → fatura → kargo zinciri, stok uyarısı, CRM, raporlama, ekip bildirimleri gibi. n8n ve Make ile; Shopify, WooCommerce, IdeaSoft ve Google Workspace entegrasyonlarıyla çalışıyoruz. Süreç sizden bağımsız ama sizin kontrolünüzde çalışır.',
    link: { href: '/#hizmetler', metin: 'Hizmeti incele' },
    sonraki: 'fiyat'
  },
  {
    id: 'web-sitesi',
    soru: 'Web sitesi & dijital altyapı',
    anahtarlar: ['web sitesi', 'site', 'internet sitesi', 'kurumsal site', 'e-ticaret', 'eticaret', 'seo', 'site yaptırmak', 'landing', 'tasarım'],
    cevap: 'Vitrin değil, müşteri getiren ve arka planda işi yürüten bir site kuruyoruz: kurumsal site, e-ticaret ya da web uygulaması. Özel tasarım, mobil öncelikli, teknik SEO altyapısı ve otomasyon entegrasyonuyla; alan adı ve hesaplar sizin adınıza açılır.',
    link: { href: '/#hizmetler', metin: 'Hizmeti incele' },
    sonraki: 'fiyat'
  },
  {
    id: 'kdv',
    soru: 'Fiyatlara KDV dahil mi?',
    anahtarlar: ['kdv', 'vergi', 'kdv dahil', 'kdv hariç', 'fatura kesiyor musunuz'],
    cevap: 'Hayır. Fiyatlar sayfasındaki ve tekliflerimizdeki fiyatlar KDV hariç yazılır.',
    link: { href: '/fiyatlar.html#sss', metin: 'Fiyat sorularına bak' },
    sonraki: 'gorusme'
  },
  {
    id: 'ucuncu-taraf',
    soru: 'Üçüncü taraf ücretleri neler?',
    anahtarlar: ['üçüncü taraf', 'ek ücret', 'gizli ücret', 'meta ücreti', 'mesaj ücreti', 'sunucu ücreti', 'yapay zeka kullanım', 'api ücreti', 'başka ücret'],
    cevap: 'Meta mesaj ücretleri, yapay zekâ kullanımı ve sunucu bedeli müşterinin kendi hesabından ödenir; bu yüzden paket fiyatları üçüncü taraf ücretleri hariç yazılır. Fiyatın iki kalemi (kurulum ve aylık destek) teklifte baştan yazılır; proje ortasında "bu ekstra" denmez.',
    link: { href: '/fiyatlar.html#kurulum', metin: 'Fiyatlanmayı oku' },
    sonraki: 'gorusme'
  },
  {
    id: 'indirim',
    soru: 'Kampanya ya da indirim var mı?',
    anahtarlar: ['indirim', 'kampanya', 'pazarlık', 'promosyon', 'kupon', 'ucuzlatma'],
    cevap: 'Hayır. İndirim ve kampanya yapmıyoruz; fiyat herkese aynı. Bugün soran da bir ay sonra soran da aynı kapsam için aynı fiyatı görür.',
    link: { href: '/fiyatlar.html#sss', metin: 'Fiyat sorularına bak' },
    sonraki: 'gorusme'
  },
  {
    id: 'sozlesme',
    soru: 'Sözleşme süresi var mı?',
    anahtarlar: ['sözleşme', 'taahhüt süresi', 'iptal', 'bırakabilir miyim', 'aylık desteği bırakmak', 'bağlayıcı', 'minimum süre'],
    cevap: 'Süre ve iptal koşulları kapsamla birlikte teklifte yazılır; teklifte yazmayan bir koşul sonradan çıkmaz. Sistem sizin adınıza kurulduğu için yolumuz ayrılsa bile sistem sizde kalır.',
    link: { href: '/fiyatlar.html#sss', metin: 'Fiyat sorularına bak' },
    sonraki: 'gorusme'
  },
  {
    id: 'odeme',
    soru: 'Ödemeyi nasıl yapıyorum?',
    anahtarlar: ['ödeme', 'ödeme nasıl', 'taksit', 'kredi kartı', 'havale', 'peşin', 'ön ödeme', 'kapora'],
    cevap: 'Ödeme biçimi ve takvimi teklifte yazılır. Teklif netleşene kadar hiçbir ödeme yok.',
    link: { href: '/fiyatlar.html#sss', metin: 'Fiyat sorularına bak' },
    sonraki: 'gorusme'
  },
  {
    id: 'hangi-paket',
    soru: 'Hangi paket bana uyar?',
    anahtarlar: ['hangi paket', 'bana uygun', 'hangisi', 'hangi basamak', 'ne almalıyım', 'karar veremedim', 'emin değilim', 'nereden başlamalı'],
    cevap: 'Keşif görüşmesinde dinleriz, ertesi gün gönderdiğimiz ilk okumada hangi basamağın yeteceğini yazarız. Gerek yoksa bir üst pakete geçmenizi önermeyiz; ihtiyacınız hazır bir araçla çözülüyorsa bunu da açıkça söyleriz.',
    link: { href: '/fiyatlar.html#paketler', metin: 'Paketleri karşılaştır' },
    sonraki: 'gorusme'
  },
  {
    id: 'sektorler',
    soru: 'Hangi sektörlere hizmet veriyorsunuz?',
    anahtarlar: ['sektör', 'sektörler', 'hangi sektör', 'klinik', 'diş', 'restoran', 'otel', 'konaklama', 'e-ticaret', 'perakende', 'sağlık', 'eğitim', 'kuaför', 'emlak', 'işletme türü', 'benim işim'],
    cevap: 'E-ticaret, perakende, sağlık, eğitim, konaklama, profesyonel hizmetler ve daha fazlası. Tekrarlayan süreçleri olan ve büyümek isteyen her işletmeyle çalışabiliriz; sektörünüzün kendine özgü ihtiyaçlarını anlayarak çözüm üretiyoruz.',
    link: { href: '/#sss', metin: 'Sık sorulanlara bak' },
    sonraki: 'gorusme'
  },
  {
    id: 'her-sey-otomasyon-mu',
    soru: 'Her işi otomatikleştirmeyi mi önerirsiniz?',
    anahtarlar: ['her işi', 'her şeyi otomatik', 'gerek var mı', 'gereksiz', 'dokunma', 'otomatikleştirmeli miyim'],
    cevap: 'Hayır. Bazen doğru karar bir süreci olduğu gibi bırakmak ya da önce elle düzeltmektir. Her ilk okumada bizimle çalışmadan uygulayabileceğiniz bir çözümü de yazarız; ihtiyacınız hazır bir araçla çözülüyorsa bunu açıkça söyleriz.',
    link: { href: '/#sss', metin: 'Sık sorulanlara bak' },
    sonraki: 'gorusme'
  },
  {
    id: 'hazir-program',
    soru: 'Neden hazır program değil de size özel?',
    anahtarlar: ['hazır program', 'hazır yazılım', 'neden özel', 'paket program', 'neden size', 'farkınız', 'neden siz', 'neden uras'],
    cevap: 'Hazır program iyi bir çözümse bunu açıkça söyleriz ve hangisini alacağınızı da tarif ederiz; sırf iş çıksın diye gereksiz proje satmıyoruz. Ama çoğu işletmede hazır program çalışma şeklinize uymaz; özel kurulumda sistem sizin akışınıza uyar ve ekibiniz alışkanlığını değiştirmez.',
    link: { href: '/#sss', metin: 'Sık sorulanlara bak' },
    sonraki: 'gorusme'
  },
  {
    id: 'destek',
    soru: 'Kurulum sonrası destek var mı?',
    anahtarlar: ['destek', 'bakım', 'kurulum sonrası', 'kurulumdan sonra', 'sorun çıkarsa', 'arıza', 'hata', 'güncelleme', 'teslimden sonra', 'aylık destek', 'izleme', 'müdahale'],
    cevap: 'Evet. Kurulumdan sonra sistemi izliyor, güncelliyor ve gerektiğinde müdahale ediyoruz; hata alarmı 7/24 çalışır, mesai içinde aynı gün dönüş yapıyoruz. Bir sorun olduğunda tek yapmanız gereken mesaj atmak.',
    link: { href: '/#taahhut', metin: 'Taahhüdümüzü oku' },
    sonraki: 'fiyat'
  },
  {
    id: 'kapasite',
    soru: 'Projeme yeterli zaman ayırır mısınız?',
    anahtarlar: ['zaman ayırır', 'yoğun musunuz', 'takvim dolu', 'ne zaman başlarsınız', 'başlangıç tarihi', 'kaç proje', 'müsait'],
    cevap: 'Aynı anda sınırlı sayıda proje alıyoruz; takvimimiz doluysa bunu ilk görüşmede söyler, size gerçekçi bir başlangıç tarihi veririz. Velocost ve Premisey\'i yayında tutarken karşılaştığımız her sorunun çözümünü sizin sisteminize de taşıyoruz.',
    link: { href: '/#sss', metin: 'Sık sorulanlara bak' },
    sonraki: 'gorusme'
  },
  {
    id: 'teknik-bilgi',
    soru: 'Teknik bilgim olmadan yönetebilir miyim?',
    anahtarlar: ['teknik bilgi', 'bilgisayardan anlamam', 'yönetebilir miyim', 'kullanması zor', 'eğitim', 'kullanım rehberi', 'zor mu'],
    cevap: 'Evet. Kurduğumuz sistemler teknik bilgi gerektirmeden yönetilebilecek şekilde tasarlanır; size özel kullanım rehberi hazırlıyor ve ekibinizi eğitiyoruz. Bir sorun çıktığında bize mesaj atmanız yeterli.',
    link: { href: '/#sss', metin: 'Sık sorulanlara bak' },
    sonraki: 'gorusme'
  },
  {
    id: 'velocost',
    soru: 'Velocost nedir?',
    anahtarlar: ['velocost', 'filo', 'yol maliyeti', 'yakıt', 'sevkiyat', 'araç takibi', 'otoyol', 'vinyet', 'tco'],
    cevap: 'Velocost, bir aracın yolculuğunun yola çıkmadan kaça mal olacağını hesaplar: yakıt, köprü ve otoyol geçişleri, ülke vinyetleri dahil; Türkiye ve Avrupa kapsar. Kurumsal Velocost Filo paketinde araç, sürücü, bütçe ve araç başına gerçek maliyet tek panelde, donanımsız kurulur.',
    link: { href: '/#platformlar', metin: 'Velocost\'u gör' },
    sonraki: 'gorusme'
  },
  {
    id: 'premisey',
    soru: 'Premisey nedir?',
    anahtarlar: ['premisey', 'iş fikri', 'fikir doğrulama', 'fizibilite', 'girişim', 'başvuru eleme', 'kuluçka', 'hızlandırıcı'],
    cevap: 'Premisey, bir iş fikrinin tutup tutmayacağını kaynaklı ve dürüst değerlendirir; her rakam gerçek, tahmini veya bilinmiyor olarak işaretlenir. Kurumsal tarafta hızlandırıcı, kuluçka ve TTO\'lar için başvuru eleme sunar ve ücretsiz pilotla başlanır. İlk okumamız da Premisey\'in kanıt yöntemiyle yapılır.',
    link: { href: '/#platformlar', metin: 'Premisey\'i gör' },
    sonraki: 'gorusme'
  },
  {
    id: 'konum',
    soru: 'Neredesiniz?',
    anahtarlar: ['nerede', 'neredesiniz', 'konum', 'şehir', 'tekirdağ', 'istanbul', 'ofis', 'uzaktan', 'türkiye geneli', 'yüz yüze', 'başka şehir'],
    cevap: 'Tekirdağ merkezliyiz ve uzaktan çalışıyoruz; Türkiye genelinde hizmet veriyoruz.',
    link: { href: '/#iletisim', metin: 'İletişime geç' },
    sonraki: 'gorusme'
  },
  {
    id: 'kurucu',
    soru: 'Uras Tech kimdir?',
    anahtarlar: ['kimsiniz', 'kurucu', 'hakkınızda', 'şirket', 'ekip', 'kim kurdu', 'tecrübe', 'deneyim', 'uras tech'],
    cevap: 'Uras Tech, kendi ürünlerini yazan bir yazılım ekibidir; kurucusu Cenk Alper Tantoğlu (inşaat mühendisi, 20 yıllık tecrübe). Tekirdağ merkezli, uzaktan çalışıyoruz; Velocost ve Premisey\'i biz yazıp yayında tutuyoruz.',
    link: { href: '/#iletisim', metin: 'Tanışalım' },
    sonraki: 'gorusme'
  },
  {
    id: 'blog',
    soru: 'Blog yazıları',
    anahtarlar: ['blog', 'yazı', 'makale', 'okumak', 'cevapsız mesaj', 'kayıp satış', 'filo maliyeti'],
    cevap: 'Blogda operasyon, otomasyon ve filo yönetimi üzerine yazıyoruz: cevapsız kalan müşteri sorularının maliyeti, Google yorumlarının erken uyarı sistemi olması ve filo maliyetlerinin gerçek kaynağı.',
    link: { href: '/blog/', metin: 'Bloga git' },
    sonraki: 'gorusme'
  },
  {
    id: 'uras',
    soru: 'Sen kimsin?',
    anahtarlar: ['sen kimsin', 'uras kim', 'bot musun', 'robot musun', 'yapay zeka mısın', 'gerçek kişi', 'insan mısın', 'chatgpt'],
    cevap: 'Ben Uras, bu sitenin yardımcısıyım. Yapay zekâ değilim: yalnızca sitede yazan bilgilerle cevap veririm ve hiçbir şey kaydetmem ya da göndermem. Sitede olmayan bir soru için ekibe WhatsApp\'tan ya da görüşme formundan ulaşabilirsiniz.',
    sonraki: 'gorusme'
  }
];
