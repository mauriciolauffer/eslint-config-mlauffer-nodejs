const sonarjs = require("eslint-plugin-sonarjs");

const plugin = {
  configs: {},
  rules: sonarjs.rules,
  processors: {},
};

// Remove rules not supported in v9
delete sonarjs.configs.recommended.rules["sonarjs/no-gratuitous-expressions"];
delete sonarjs.configs.recommended.rules["sonarjs/no-extra-arguments"];
delete sonarjs.configs.recommended.rules["sonarjs/no-use-of-empty-return-value"];
delete sonarjs.configs.recommended.rules["sonarjs/no-empty-collection"];
delete sonarjs.configs.recommended.rules["sonarjs/no-unused-collection"];

Object.assign(plugin.configs, {
  recommended: {
    plugins: {
      sonarjs: plugin,
    },
    rules: { ...sonarjs.configs.recommended.rules },
  },
});

module.exports = plugin;
