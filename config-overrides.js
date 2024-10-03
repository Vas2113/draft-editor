module.exports = function override(config, env) {
  const rules = config.module.rules;

  const sassRule = rules.find((rule) => rule.test && rule.test.test('.scss'));

  if (sassRule) {
    sassRule.use.splice(sassRule.use.indexOf('sass-loader'), 0, {
      loader: 'resolve-url-loader',
      options: {
        sourceMap: true,
      },
    });
  }

  return config;
};
