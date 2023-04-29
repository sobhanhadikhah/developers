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
    manifest:{
      name: 'Developers', // The name of your app
      short_name: 'DEVS', // The short name of your app
      display: 'standalone', // The display mode of your app
      scope: '/', // The scope of your app
      start_url: '/', // The start URL of your app
      
  }
  })],
  
})
