import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";
//import { manifestForPlugin } from './src/manifest.Js';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),VitePWA({
       // add this to cache all the imports
       workbox: {
        globPatterns: ["**/*"],
    },
    // add this to cache all the
    // static assets in the public folder
    includeAssets: [
        "**/*",
    ],
    registerType:"autoUpdate",
    outDir:"dist",
    manifest:{
      name: 'Developers', // The name of your app
      short_name: 'DEVS', // The short name of your app
      display: 'standalone', // The display mode of your app
      description: "ViteJS example to show how to create PWA app throw the easyest way",
      scope: '/', // The scope of your app
      start_url: '/', // The start URL of your app
      icons: [
        {
          src:"android-chrome-192x192.png",
          sizes:"192x192",
          type:"image/png"
        },
        {
          src:"android-chrome-512x512.png",
          sizes:"512x512",
          type:"image/png"
        },
        {
          src:"android-chrome-192x192.png",
          sizes:"192x192",
          type:"image/png"
        },
      ]
  }
  })],
  
})
