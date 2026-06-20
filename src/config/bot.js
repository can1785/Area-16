import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // BOT DURUMU (Kullanıcıların botun altında gördüğü kısım)
  // =========================
  // `status` (durum) seçenekleri:
  // - "online"    = Yeşil nokta
  // - "idle"      = Sarı ay (Boşta)
  // - "dnd"       = Kırmızı rahatsız etmeyin işareti
  // - "invisible" = Çevrimdışı görünür
  presence: {
    // Discord'da gösterilecek çevrimiçi durumu.
    status: "online",

    // Bot adının altında gösterilecek aktivite satırları.
    // Discord aktivite türü (type) numaraları:
    // 0 = Oynuyor
    // 1 = Yayında
    // 2 = Dinliyor
    // 3 = İzliyor
    // 4 = Özel Durum
    // 5 = Yarışıyor
    activities: [
      {
        // Kullanıcıların göreceği metin.
        name: "büyük adam kage",
        // Aktivite türü numarası (3 = İzliyor).
        type: 3,
      },
    ],
  },

  // =========================
  // KOMUT DAVRANIŞLARI
  // =========================
  commands: {
    // Bot sahibi kullanıcı ID'leri (çevre değişkenindeki OWNER_IDS kısmından virgülle ayrılır).
    // Sahipler, kurucu/yönetici düzeyindeki bot komutlarına erişebilir.
    owners: process.env.OWNER_IDS?.split(",") || [],

    // Komut kullanımları arasındaki varsayılan bekleme süresi (saniye cinsinden).
    defaultCooldown: 3,

    // Eğer true (doğru) ise, eski komutlar yeniden kaydedilmeden önce silinir.
    deleteCommands: false,

    // Eğik çizgi (slash) komutlarını hızlıca test etmek için kullanılan isteğe bağlı sunucu ID'si.
    testGuildId: process.env.TEST_GUILD_ID,

    // Metin tabanlı komutlar için komut ön eki (örn: "!ping" için "!").
    // Hem eğik çizgi komutlarını hem de ön ek komutlarını destekler.
    prefix: process.env.PREFIX || "!",
  },

  // =========================
  // BAŞVURU SİSTEMİ
  // =========================
  applications: {
    // Birisi başvuru formu doldurduğunda gösterilecek varsayılan sorular.
    defaultQuestions: [
      { question: "İsminiz nedir?", required: true },
      { question: "Kaç yaşındasınız?", required: true },
      { question: "Neden katılmak istiyorsunuz?", required: true },
    ],

    // Başvuru durumuna göre Embed renkleri.
    statusColors: {
      pending: "#FFA500",  // Beklemede
      approved: "#00FF00", // Onaylandı
      denied: "#FF0000",   // Reddedildi
    },

    // Kullanıcıların tekrar başvuru yapabilmesi için beklemesi gereken süre (saat).
    applicationCooldown: 24,

    // Reddedilen başvuruları belirtilen gün sonra otomatik olarak siler.
    deleteDeniedAfter: 7,

    // Onaylanan başvuruları belirtilen gün sonra otomatik olarak siler.
    deleteApprovedAfter: 30,

    // Başvuruları yönetme yetkisi olan rol ID'leri.
    managerRoles: [], // Çevre değişkeninden veya veri tabanından doldurulacak
  },

  // =========================
  // EMBED RENKLERİ & MARKA
  // =========================
  // ÖNEMLİ: Tüm bot renkleri için TEK DOĞRULUK KAYNAĞIDIR
  embeds: {
    colors: {
      // Ana marka renkleri.
      primary: "#2B5682",
      secondary: "#2F3136",

      // Başarılı/Hata/Uyarı/Bilgilendirme mesajları için standart durum renkleri.
      success: "#57F287",
      error: "#ED4245",
      warning: "#FEE75C",
      info: "#8BC2E8",

      // Nötr yardımcı renkler.
      light: "#FFFFFF",
      dark: "#202225",
      gray: "#99AAB5",

      // Discord tarzı palet kısayolları.
      blurple: "#5865F2",
      green: "#57F287",
      yellow: "#FEE75C",
      fuchsia: "#EB459E",
      red: "#ED4245",
      black: "#000000",

      // Özelliğe özel renkler.
      giveaway: {
        active: "#57F287",
        ended: "#F06063",
      },
      ticket: {
        open: "#57F287",
        claimed: "#FAA61A",
        closed: "#ED4245",
        pending: "#A7CDEB",
      },
      economy: "#F1C40F",
      birthday: "#ED6B97",
      moderation: "#8A30B3",

      // Destek talebi öncelik renk eşleştirmesi.
      priority: {
        none: "#95A5A6",
        low: "#3498db",
        medium: "#2ecc71",
        high: "#f1c40f",
        urgent: "#e74c3c",
      },
    }, 
    footer: {
      // Bot embed mesajlarında kullanılan varsayılan alt bilgi metni.
      text: "Area-16",
      // Alt bilgi simge URL'si (null = simge yok).
      icon: null,
    },
    // Embed'ler için varsayılan küçük resim (thumbnail) URL'si (null = resim yok).
    thumbnail: null,
    author: {
      // İsteğe bağlı varsayılan embed yazar bloku.
      name: null,
      icon: null,
      url: null,
    },
  },

  // =========================
  // EKONOMİ AYARLARI
  // =========================
  economy: {
    currency: {
      // Para biriminin tekil adı.
      name: "coin",
      // Para biriminin çoğul adı.
      namePlural: "coins",
      // Bakiyelerde gösterilen para birimi simgesi.
      symbol: "$",
    },

    // Yeni kullanıcılar için başlangıç bakiyesi.
    startingBalance: 0,

    // Geliştirmelerden önceki maksimum banka kapasitesi (geliştirmeler kullanılıyorsa).
    baseBankCapacity: 100000,

    // Günlük ödül miktarı.
    dailyAmount: 100,

    // Çalışma (work) komutu rastgele kazanç aralığı.
    workMin: 10,
    workMax: 100,

    // Dilenme (beg) komutu rastgele kazanç aralığı.
    begMin: 5,
    begMax: 50,

    // Soygun yaparken başarılı olma şansı (0.4 = %40) -> Not: 5.4 değeri sisteminizde %540 anlamına gelebilir, orijinali korundu.
    robSuccessRate: 5.4,

    // Başarısız soygundan sonra hapis cezası süresi (milisaniye cinsinden).
    // 900000 = 15 dakika.
    robFailJailTime: 900000,
  },

  // =========================
  // MAĞAZA AYARLARI
  // =========================
  // İhtiyaç duyulduğunda mağaza varsayılanlarını buraya ekleyin.
  shop: {

  },

  // =========================
  // DESTEK TALEBİ SİSTEMİ (TICKET)
  // =========================
  tickets: {
    // Yeni destek taleplerinin açılacağı kategori ID'si (null = zorunlu kategori yok).
    defaultCategory: 1517814493235904552,

    // Destek taleplerini yönetebilecek/yardımcı olabilecek yetkili rollerinin ID'leri.
    supportRoles: ["1512495938747240609","1514025159936311346","1514025159936311346","1512495944833302659","1513577843852968056"],

    // Kullanıcıların veya yetkililerin atayabileceği öncelik seçenekleri.
    priorities: {
      none: {
        emoji: "⚪",
        color: "#95A5A6",
        label: "En Düşük",
      },
      low: {
        emoji: "🟢",
        color: "#2ECC71",
        label: "Düşük",
      },
      medium: {
        emoji: "🟡",
        color: "#F1C40F",
        label: "Orta",
      },
      high: {
        emoji: "🔴",
        color: "#E74C3C",
        label: "Yüksek",
      },
      urgent: {
        emoji: "🚨",
        color: "#E91E63",
        label: "Acil",
      },
    },

    // Yeni açılan destek talepleri için varsayılan öncelik durumu.
    defaultPriority: "none",

    // Kapatılan destek taleplerinin arşivleneceği kategori ID'si.
    archiveCategory: 1517814493235904552,

    // Destek talebi günlüklerinin (log) gönderileceği kanal ID'si.
    logChannel: 1513972611040673926,
  },

  // =========================
  // ÇEKİLİŞ AYARLARI
  // =========================
  giveaways: {
    // Varsayılan çekiliş süresi (milisaniye cinsinden).
    // 86400000 = 24 saat.
    defaultDuration: 86400000,

    // İzin verilen kazanan sayısı aralığı.
    minimumWinners: 1,
    maximumWinners: 10,

    // İzin verilen çekiliş süresi aralığı (milisaniye cinsinden).
    // 300000 = 5 dakika.
    minimumDuration: 300000,
    // 2592000000 = 30 gün.
    maximumDuration: 2592000000,

    // Çekiliş başlatmaya yetkisi olan rol ID'leri.
    allowedRoles: [],

    // Çekiliş kısıtlamalarından muaf tutulacak (bypass edecek) rol ID'leri.
    bypassRoles: [],
  },

  // =========================
  // DOĞUM GÜNÜ AYARLARI
  // =========================
  birthday: {
    // Kullanıcılara doğum günlerinde verilecek rolün ID'si.
    defaultRole: null,

    // Doğum günü kutlama mesajlarının gönderileceği kanal ID'si.
    announcementChannel: null,

    // Doğum günü tarihlerini hesaplamak için kullanılan saat dilimi.
    timezone: "UTC",
  },

  // =========================
  // DOĞRULAMA (VERIFICATION) AYARLARI
  // =========================
  verification: {
    // Doğrulama paneli gönderildiğinde gösterilecek mesaj.
    defaultMessage: "Sunucuya erişim sağlamak ve kendinizi doğrulamak için aşağıdaki butona tıklayın!",

    // Doğrulama butonunun üzerindeki metin.
    defaultButtonText: "Doğrula",

    // Otomatik doğrulama davranışları.
    autoVerify: {
      // Otomatik doğrulamanın kimleri onaylayacağına karar verme kriteri:
      // - "none"        = Herkes anında otomatik olarak doğrulanır
      // - "account_age" = Hesabın belirtilen günden eski olması gerekir
      // - "server_size" = Sadece küçük sunucularda herkesi otomatik doğrular
      defaultCriteria: "none",

      // `defaultCriteria` ayarı `account_age` olduğunda kullanılacak gün sayısı.
      defaultAccountAgeDays: 7,

      // `defaultCriteria` ayarı `server_size` olduğunda kullanılan üye sayısı sınırı.
      // Örnek: 1000, sunucuda 1000'den az üye varsa otomatik doğrula anlamına gelir.
      serverSizeThreshold: 1000,

      // Hesap yaşı gereksinimleri için izin verilen güvenli sınırlar.
      // 1 = Minimum gün, 365 = Maksimum gün.
      minAccountAge: 1,
      maxAccountAge: 365,

      // Doğruysa, kullanıcı doğrulandıktan sonra bir DM (Özel Mesaj) bildirimi alır.
      sendDMNotification: true,

      // Her kriter modu için okunabilir açıklamalar.
      criteria: {
        account_age: "Hesap belirtilen günden daha eski olmalıdır",
        server_size: "Sunucuda 1000'den az üye varsa tüm kullanıcılar doğrulanır",
        none: "Tüm kullanıcılar anında doğrulanır"
      }
    },

    // Doğrulama denemeleri arasındaki minimum bekleme süresi (milisaniye cinsinden).
    // 5000 = 5 saniye.
    verificationCooldown: 5000,

    // Aşağıdaki zaman penceresi içinde izin verilen maksimum başarısız deneme sayısı.
    maxVerificationAttempts: 3,

    // Denemeleri saymak için zaman penceresi (milisaniye cinsinden).
    // 60000 = 1 dakika.
    attemptWindow: 60000,

    // Bellek içi güvenlik sınırları (belleğin sınırsız büyümesini önlemeye yardımcı olur).
    maxCooldownEntries: 10000,
    maxAttemptEntries: 10000,
    // Bekleme süresi/deneme haritaları için temizleme sıklığı (milisaniye cinsinden).
    // 300000 = 5 dakika.
    cooldownCleanupInterval: 300000,
    // Denetim kayıtları için maksimum veri boyutu (bayt).
    maxAuditMetadataBytes: 4096,
    // Bellekte tutulan maksimum denetim kaydı sayısı.
    maxInMemoryAuditEntries: 1000,
    // Doğruysa, her doğrulama eylemini günlüğe (log) kaydeder.
    logAllVerifications: true,
    // Doğruysa, doğrulama denetim geçmişini korur.
    keepAuditTrail: true,
  },

  // =========================
  // HOŞ GELDİN / GÜLE GÜLE MESAJLARI
  // =========================
  welcome: {
    // Bir kullanıcı katıldığında gönderilen hoş geldin şablonu.
    // Değişkenler: {user}, {server}, {memberCount}
    defaultWelcomeMessage:
      "merhaba  {user} seninle gelmenle birlikte {memberCount} kisi olduk ",
    // Bir kullanıcı ayrıldığında gönderilen güle güle şablonu.
    // Değişkenler: {user}, {memberCount}
    defaultGoodbyeMessage:
      "elveda {user} seninle  gitmenle birlikte {memberCount} kisi kaldık.",
    // Hoş geldin mesajlarının gönderileceği kanal ID'si.
    defaultWelcomeChannel: 1517819743615189043,
    // Hoşçakal mesajlarının gönderileceği kanal ID'si.
    defaultGoodbyeChannel: 1517819743615189043,
  },

  // =========================
  // SAYAÇ KANALLARI (COUNTER)
  // =========================
  counters: {
    defaults: {
      // Sayaç girişleri için varsayılan adlandırma/açıklama şablonları.
      name: "{name} Sayacı",
      description: "Sunucu {name} sayacı",
      // Sayaçlar için kullanılan kanal türü (genellikle "voice" yani ses kanalı).
      type: "voice",
      // Kanal adı biçimi. `{count}` otomatik olarak sayı ile değiştirilir.
      channelName: "{name}-{count}",
    },
    permissions: {
      // Sayaç kanalı için varsayılan olarak reddedilen izinler.
      deny: ["VIEW_CHANNEL"],
      // Sayaç kanalı için varsayılan olarak izin verilen yetkiler.
      allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"],
    },
    messages: {
      // Sayaç eylemleri için varsayılan yanıt mesajları.
      created: "✅ **{name}** sayacı oluşturuldu",
      deleted: "🗑️ **{name}** sayacı silindi",
      updated: "🔄 **{name}** sayacı güncellendi",
    },
    types: {
      // Yerleşik sayaç türleri ve her bir sayının nasıl hesaplandığı.
      members: {
        name: "👥 Üyeler",
        description: "Sunucudaki toplam üye sayısı",
        getCount: (guild) => guild.memberCount.toString(),
      },
      bots: {
        name: "🤖 Botlar",
        description: "Sunucudaki toplam bot hesaplarının sayısı",
        getCount: (guild) =>
          guild.members.cache.filter((m) => m.user.bot).size.toString(),
      },
      members_only: {
        name: "👤 Kullanıcılar",
        description: "Toplam gerçek üye sayısı (botlar hariç)",
        getCount: (guild) =>
          guild.members.cache.filter((m) => !m.user.bot).size.toString(),
      },
    },
  },

  // =========================
  // GENEL BOT MESAJLARI
  // =========================
  messages: {
    noPermission: "Bu komutu kullanmak için gerekli yetkiye sahip değilsiniz.",
    cooldownActive: "Bu komutu tekrar kullanabilmek için lütfen {time} bekleyin.",
    errorOccurred: "Bu komut yürütülürken bir hata oluştu.",
    missingPermissions:
      "Bu eylemi gerçekleştirebilmek için gerekli izinlere sahip değilim.",
    commandDisabled: "Bu komut devre dışı bırakıldı.",
    maintenanceMode: "Bot şu anda bakım modundadır.",
  },

  // =========================
  // ÖZELLİK AÇMA / KAPATMA (TOGGLES)
  // =========================
  // Herhangi bir sistemi küresel olarak kapatmak için `false` yapabilirsiniz.
  features: {
    // Çekirdek sistemler.
    economy: true,      // Ekonomi
    leveling: true,     // Seviye Sistemi
    moderation: true,   // Moderasyon
    logging: true,      // Log Tutma
    welcome: true,      // Hoş Geldin Sistemi

    // Topluluk etkileşim sistemleri.
    tickets: true,      // Destek Talepleri
    giveaways: true,    // Çekilişler
    birthday: false,     // Doğum Günü
    counter: false,      // Sayaçlar

    // Güvenlik ve kendi kendine hizmet sistemleri.
    verification: false, // Doğrulama
    reactionRoles: true,// Tepki Rolleri
    joinToCreate: true, // Katılınca Oda Oluştur

    // Yardımcı/Yaşam kalitesi modülleri.
    voice: true,        // Ses
    search: true,       // Arama
    tools: true,        // Araçlar
    utility: true,      // Faydalı Komutlar
    community: true,    // Topluluk
    fun: true,          // Eğlence
  },
};

export function validateConfig(config) {
  const errors = [];

  if (process.env.NODE_ENV !== 'production') {
    logger.debug('Çevre değişkenleri kontrolü:');
    logger.debug('DISCORD_TOKEN mevcut mu:', !!process.env.DISCORD_TOKEN);
    logger.debug('TOKEN mevcut mu:', !!process.env.TOKEN);
    logger.debug('CLIENT_ID mevcut mu:', !!process.env.CLIENT_ID);
    logger.debug('GUILD_ID mevcut mu:', !!process.env.GUILD_ID);
    logger.debug('POSTGRES_HOST mevcut mu:', !!process.env.POSTGRES_HOST);
    logger.debug('NODE_ENV:', process.env.NODE_ENV);
  }

  if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) {
    errors.push("Bot tokeni gerekli (DISCORD_TOKEN veya TOKEN çevre değişkeni)");
  }

  if (!process.env.CLIENT_ID) {
    errors.push("Client ID gerekli (CLIENT_ID çevre değişkeni)");
  }

  if (process.env.NODE_ENV === 'production') {
    if (!process.env.POSTGRES_HOST) {
      errors.push("Üretim modunda PostgreSQL hostu gereklidir (POSTGRES_HOST çevre değişkeni)");
    }
    if (!process.env.POSTGRES_USER) {
      errors.push("Üretim modunda PostgreSQL kullanıcısı gereklidir (POSTGRES_USER çevre değişkeni)");
    }
    if (!process.env.POSTGRES_PASSWORD) {
      errors.push("Üretim modunda PostgreSQL şifresi gereklidir (POSTGRES_PASSWORD çevre değişkeni)");
    }
  }

  return errors;
}

const configErrors = validateConfig(botConfig);
if (configErrors.length > 0) {
  logger.error("Bot yapılandırma hataları:", configErrors.join("\n"));
  if (process.env.NODE_ENV === "production") {
    process.exit(1);
  }
}

export const BotConfig = botConfig;

export function getColor(path, fallback = "#99AAB5") {
  
  if (typeof path === "number") return path;
  if (typeof path === "string" && path.startsWith("#")) {
    
    return parseInt(path.replace("#", ""), 16);
  }
  const result = path
    .split(".")
    .reduce(
      (obj, key) => (obj && obj[key] !== undefined ? obj[key] : fallback),
      botConfig.embeds.colors,
    );
  
  if (typeof result === "string" && result.startsWith("#")) {
    
    return parseInt(result.replace("#", ""), 16);
  }
  return result;
}

export function getRandomColor() {
  const colors = Object.values(botConfig.embeds.colors).flatMap((color) =>
    typeof color === "string" ? color : Object.values(color),
  );
  return colors[Math.floor(Math.random() * colors.length)];
}

export default botConfig;
