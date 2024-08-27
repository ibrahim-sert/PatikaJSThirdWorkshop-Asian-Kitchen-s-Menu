# PatikaJSThirdWorkshop-Asian-Kitchen-s-Menu

# Asian Kitchen's Menu

Bu proje, Asya mutfağına ait yemeklerin listelendiği dinamik bir menü sayfasını içerir. Menüdeki öğeler, JavaScript kullanılarak sayfa yüklendiğinde dinamik olarak oluşturulur ve farklı kategorilere göre filtrelenebilir.

## Proje Yapısı

Proje dosya yapısı şu şekildedir:


### Dosyaların Açıklamaları:

- **index.html**: Projenin temel HTML yapısını içerir. Menü butonları ve menü öğelerinin yer alacağı alanlar bu dosyada tanımlanmıştır.

- **styles.css**: Sayfanın stil dosyasıdır. Menünün tasarımı, renkler, yazı tipleri gibi tüm stil kuralları burada tanımlanmıştır.

- **menu.js**: Menüde listelenecek yemek verilerini içeren dosyadır. Yemekler bu dosyada bir dizi (`array`) olarak tanımlanmıştır.

- **app.js**: JavaScript dosyasıdır. Menü öğelerini dinamik olarak oluşturur ve filtreleme işlevini sağlar. `menu.js` dosyasındaki verileri kullanarak menü öğelerini sayfaya ekler.

- **README.md**: Projenin açıklamalarını, kullanımını ve yapısını anlatan dökümantasyon dosyasıdır.

## Kurulum ve Kullanım

Bu projeyi kullanmak için aşağıdaki adımları takip edebilirsiniz:

### 1. Projeyi Klonlayın veya İndirin

Projeyi GitHub'dan klonlayabilir veya zip dosyası olarak indirebilirsiniz:

```bash
git clone https://github.com/ibrahim-sert/PatikaJSThirdWorkshop-Asian-Kitchen-s-Menu.git
```

### 2. Dosya Yapısını Kontrol Edin

Proje dizininde aşağıdaki dosyaların bulunduğundan emin olun:

- **index.html**

- **styles.css**

- **menu.js**

- **app.js**

- **README.md**

### 3. index.html Dosyasını Tarayıcıda Açın

Proje kök dizininde bulunan index.html dosyasını bir tarayıcıda açarak menü sayfasını görüntüleyin.

## Özelleştirme

### Menü Verilerini Güncelleme

Menüdeki öğeleri güncellemek veya yenilerini eklemek için menu.js dosyasını düzenleyebilirsiniz. Aşağıda örnek bir menü öğesi verilmiştir:

Her menü öğesi aşağıdaki özelliklere sahiptir:

`id`: Öğenin benzersiz kimliği

`title`: Yemeğin adı

`category`: Yemeğin ait olduğu kategori (örneğin, "Korea", "Japan")

`price`: Yemeğin fiyatı

`img`: Yemeğin resminin URL'si

`desc`: Yemeğin kısa açıklaması

### Stil Düzenleme

Sayfanın görünümünü değiştirmek için `styles.css` dosyasını düzenleyebilirsiniz. Örneğin, renkleri, yazı tiplerini veya menü düzenini değiştirebilirsiniz.

### Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir fork yapın ve pull request gönderin. Her türlü geri bildiriminiz için teşekkür ederiz!

### Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakabilirsiniz.

