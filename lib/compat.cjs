const sonarjs = require("eslint-plugin-sonarjs");

const plugin = {
  configs: {},
  rules: sonarjs.rules,
  processors: {},
};

Object.assign(plugin.configs, {
  recommended: {
    plugins: {
      sonarjs: plugin,
    },
    rules: { ...sonarjs.configs.recommended.rules },
  },
});

module.exports = plugin;
