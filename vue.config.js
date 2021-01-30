module.exports = {
  chainWebpack: (config) => {
    config.module.rule("eslint").use("eslint-loader")
      .tap((options) => {
        options.fix = true; // auto-fix 옵션
        return options;
      });
  },
  pwa: {
    name: "pwa",
    short_name: "pwa",
    icons: [
      {
        "src": "/img/icons/192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/img/icons/512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    start_url: "/index.html",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#4DBA87",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
  }
};
