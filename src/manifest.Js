export const manifestForPlugin = {
    name: 'Developers', // The name of your app
    short_name: 'DEVS', // The short name of your app
    theme_color: '#1DA1F2', // The theme color of your app
    background_color: '#000000', // The background color of your app
    display: 'standalone', // The display mode of your app
    scope: '/', // The scope of your app
    start_url: '/', // The start URL of your app
    icons: [
      {
        src: './favIcon.png', // The path to your app icon
        sizes: [96, 128, 192, 256, 384, 512], // The sizes of your app icon
      },
    ],
}