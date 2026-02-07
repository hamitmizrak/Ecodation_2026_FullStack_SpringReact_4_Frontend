import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    open: true,
  },
});

// vite: otomatik olarak oluşturulur, elle müdahale edilmez

// Vite, modern web projeleri için hızlı bir geliştirme sunucusu ve optimize edilmiş bir üretim yapısı sağlayan bir araçtır. Vite, özellikle React, Vue ve diğer modern JavaScript framework'leriyle uyumlu çalışır. Vite, hızlı başlangıç süreleri ve anında modül yenileme (HMR) gibi özelliklerle geliştirme sürecini hızlandırır. Ayrıca, üretim yapısı için optimize edilmiş bir paketleme sağlar.

// Vite, genellikle bir proje oluşturulduğunda otomatik olarak oluşturulur ve yapılandırma dosyası olarak "vite.config.js" adında bir dosya içerir. Bu dosya, Vite'nin çalışma şeklini özelleştirmek için kullanılır. Örneğin, geliştirme sunucusunun portunu değiştirmek, proxy ayarları yapmak veya özel eklentiler eklemek gibi işlemler bu dosyada yapılabilir.
