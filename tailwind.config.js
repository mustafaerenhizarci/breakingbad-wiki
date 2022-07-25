module.exports = {
  content: ["./*.js", "./components/*.js"],
  theme: {
    fontFamily: {},
    extend: {
      backgroundImage: {
        'bbwallpaper':
          "url('https://images6.alphacoders.com/321/thumb-1920-321927.jpg')",
      },
    },
  },
  plugins: [],
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};
