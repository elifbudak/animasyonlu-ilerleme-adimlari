# 🚀 İlerleme Adımları (Progress Steps) - JavaScript Öğrenme Yolculuğu

Bu proje, JavaScript öğrenme yolculuğumda DOM manipülasyonu, event listeners (olay dinleyicileri) ve dinamik CSS yönetimi konularını pekiştirmek amacıyla geliştirdiğim interaktif bir **İlerleme Adımları (Progress Steps)** uygulamasıdır.

Kullanıcı "İleri" ve "Geri" butonlarına tıkladıkça adımlar dinamik olarak güncellenir ve aradaki ilerleme çizgisi akıcı bir animasyonla dolar veya boşalır.

---

## 🛠️ Kullanılan Teknolojiler

* **HTML5:** Sayfa yapısı ve buton bileşenlerinin oluşturulması.
* **CSS3:** Flexbox ile hizalama, CSS Değişkenleri (`:root`), `transition` ile akıcı animasyonlar ve katman yönetimi (`z-index`).
* **JavaScript (ES6+):** Sayfa içi dinamik mantık, DOM elementlerinin seçimi ve sınıf (`class`) yönetimi.

---

## 💡 Bu Projeden Neler Öğrendim?

Bu ufak ama etkili projeyi tamamlamak bana şu konularda pratik kazandırdı:

* **DOM Seçicileri:** `document.getElementById` ve `document.querySelectorAll` kullanarak elementlere nasıl erişeceğimi deneyimledim.
* **Event Listeners:** Butonlara tıklama (`click`) olayları ekleyerek kullanıcı etkileşimlerini yakalamayı öğrendim.
* **Dinamik Sınıf Yönetimi:** JavaScript ile elementlere nasıl sınıf eklenip (`classList.add('active')`) çıkarılacağını (`classList.remove('active')`) pratik ettim.
* **Matematiksel Oranlama:** İlerleme çizgisinin genişliğini, aktif adım sayısına göre dinamik olarak yüzde (`%`) cinsinden hesaplamayı formüle döktüm:
    $$\text{Genişlik} = \frac{\text{Aktif Çember Sayısı} - 1}{\text{Toplam Çember Sayısı} - 1} \times 100$$
* **Buton Durum Kontrolü:** İlk adımda "Geri" butonunu, son adımda ise "İleri" butonunu `disabled` (pasif) hale getirerek kullanıcı deneyimini (UX) iyileştirmeyi öğrendim.

---

## 🚀 Nasıl Çalıştırabilirsiniz?

Projeyi yerel bilgisayarınızda çalıştırmak oldukça basit:

1.  Bu depoyu klonlayın:
    ```bash
    git clone [https://github.com/kullanici-adiniz/proje-adi.git](https://github.com/kullanici-adiniz/proje-adi.git)
    ```
2.  Proje klasörüne gidin:
    ```bash
    cd proje-adi
    ```
3.  `index.html` dosyasını herhangi bir modern tarayıcıda açarak test edin!

---

✉️ **İletişim:** JavaScript öğrenme sürecim hakkındaki diğer projelerime göz atmak veya öneride bulunmak isterseniz benimle iletişime geçmekten çekinmeyin!
