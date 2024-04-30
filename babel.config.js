module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          alias: {
            src: "./src",
            "@assets": "./assets",
            "@components": "./components",
            "@constants": "./constants",
            "@hooks": "./hooks",
            "@utils": "./lib/utils.js"
          }
        }
      ]
    ]
  };
};
