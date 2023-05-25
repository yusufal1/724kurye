import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function CookiePolicy() {
  return (
    <>
      <div className="w-[80%] mx-auto min-h-screen">
        <Header />
        <div className="my-10 md:w-2/3 flex flex-col  mx-auto max-h-[700px] overflow-y-auto">
          <h1 className="md:text-5xl text-2xl font-bold">Çerez Politikası</h1>
          <p className="mt-10 md:text-base text-sm">
          7/24 Kurye olarak, web sitemizi kullanırken çerezlerin kullanımını ve nasıl kontrol edebileceğinizi önemsiyoruz. Bu çerez politikası, çerezlerin ne olduğunu, hangi tür çerezlerin kullanıldığını ve nasıl kontrol edebileceğinizi açıklamaktadır.
          </p><br />
          <h3 className="font-bold text-left">Çerez Nedir?</h3>
          <p className="mt-5 md:text-base text-sm">
          Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza veya cihazınıza yerleştirilen küçük metin dosyalarıdır. Bu dosyalar, web sitesinin size özel olmayan bilgileri depolamak ve hatırlamak için kullanılır. Çerezler, web sitesinin daha verimli çalışmasını sağlar ve size kişiselleştirilmiş bir deneyim sunmak için kullanılabilir.
          </p><br />
          <h3 className="font-bold text-left">Hangi Tür Çerezler Kullanıyoruz?</h3>
          <p className="mt-5 md:text-base text-sm">
          7/24 Kurye web sitesi, aşağıdaki türde çerezleri kullanabilir:
          </p>
          <p className="mt-2 md:text-base text-sm">
          1.Zorunlu Çerezler: Web sitesinin temel işlevlerini yerine getirmek için gerekli olan çerezlerdir. Örneğin, oturum açma bilgilerinizi hatırlamak veya alışveriş sepetinizi saklamak için kullanılır. Bu çerezlerin kullanımı, web sitesinin düzgün çalışmasını sağlar.
          </p>
          <p className="mt-2 md:text-base text-sm">
          2.Analiz ve Performans Çerezleri: Web sitesinin performansını ölçmek, kullanıcı deneyimini iyileştirmek ve hataları tespit etmek için kullanılan çerezlerdir. Bu çerezler, ziyaretçi trafiğini analiz etmek, sayfa yükleme sürelerini izlemek ve site kullanımını anlamak için kullanılabilir.
          </p>
          <p className="mt-2 md:text-base text-sm">
          3.Hedefleme ve Reklam Çerezleri: Üçüncü tarafların reklamlarını göstermek veya sizin ilgi alanlarınıza uygun içerikleri sunmak için kullanılan çerezlerdir. Bu çerezler, reklam kampanyalarının etkinliğini ölçmek ve kullanıcıların reklamlara nasıl tepki verdiklerini anlamak için kullanılabilir.
          </p>
          <h3 className="mt-5 font-bold text-left">Çerez Kontrolleri Nasıl Yapılır?</h3>
          <p className="mt-5 md:text-base text-sm">
          Çoğu web tarayıcısı, çerezleri otomatik olarak kabul eder. Ancak, çerez ayarlarınızı değiştirerek veya çerezleri tamamen devre dışı bırakarak çerez kullanımını kontrol edebilirsiniz. Tarayıcınızdaki ayarlar menüsünden çerez tercihlerinizi düzenleyebilirsiniz.
          </p>
          <p className="mt-2 md:text-base text-sm">
          Çoğu tarayıcıda, çerezleri reddetme, yalnızca belirli çerezleri kabul etme veya çerezlerin ne zaman bildirim vererek kabul edileceğini seçme gibi seçenekler bulunur. Ancak, çerezleri devre dışı bırakmanız durumunda, web sitesinin bazı özelliklerini kullanma yeteneğiniz etkilenebilir.
          </p>
          <h3 className="mt-5 font-bold text-left">Çerez Politikası Güncellemeleri</h3>
          <p className="mt-5 md:text-base text-sm">
          Bu çerez politikası, gerektiğinde güncellenebilir ve revize edilebilir. Politikadaki değişikliklerin yayınlanmasıyla birlikte yürürlüğe girecektir. Lütfen bu sayfayı düzenli olarak kontrol ederek güncellemeleri takip edin.
          </p>
          <h3 className="mt-5 font-bold text-left">İletişim</h3>
          <p className="mt-5 md:text-base text-sm">
          Gizlilik politikamızla ilgili herhangi bir sorunuz varsa veya kişisel verilerinizi nasıl kullandığımızla ilgili bilgi almak isterseniz, bize ulaşmaktan çekinmeyin. Aşağıdaki iletişim bilgilerimizi kullanarak bize ulaşabilirsiniz:
          </p>
          <p className="mt-5 md:text-base text-sm text-primary">
          7/24 Kurye
          </p>
          <p className="mt-2 md:text-base text-sm">
          Adres: Örnek Mahallesi, Örnek Caddesi No: 123, Örnek Şehir, Türkiye
          </p>
          <p className="mt-2 md:text-base text-sm">
          E-posta: info@724kurye.com
          </p>
          <p className="mt-2 md:text-base text-sm">
          Telefon: +90 123 456 7890
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CookiePolicy;
