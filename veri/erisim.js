// =============================================================
// ERİŞİM LİSTESİ — siteye girebilecek kişiler (deneme amaçlı "sahte kapı")
// Benzetme: Kapıdaki görevlinin elindeki davetli listesi. Listede isimler değil,
// her kişinin "kullanıcı adı + şifre"sinden üretilmiş bir parmak izi (hash) durur.
// Şifrenin kendisi hiçbir yerde yazmaz.
//
// YENİ KİŞİ EKLEMEK: siteyi açıp adres çubuğuna .../erisim-olustur.html yaz,
// kullanıcı adı ve şifre belirle, çıkan satırı aşağıdaki listeye ekle.
// ERİŞİMİ KALDIRMAK: o kişinin satırını sil.
// KAPIYI TAMAMEN KALDIRMAK: listeyi boşalt → [] (site herkese açılır).
//
// UYARI: Bu gerçek bir güvenlik değildir. Sayfa kaynağını açan biri içeriği görebilir.
// =============================================================
const ERISIM = [
  // "parmak-izi", // kimin olduğu (not)
];
