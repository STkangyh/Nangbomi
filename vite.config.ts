import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js, css, html, ico, png, svg}"],
      },
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Nangbomi",
        short_name: "Nangbomi",
        description: "Manage your refri with this app!",
        theme_color: "#ffffff",
        icons: [
          {
            src: "./public/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./public/icon-512.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
