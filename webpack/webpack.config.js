const path = require('path');
const glob = require('glob');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  entry: glob.sync('./components/**/*.css').reduce((entries, path) => {
    /**
     * The "[name]" placeholder in the "output" property will be replaced
     * with each key name in our "entry" object. We need to make sure the
     * keys are a path to the "index.js" file but without the actual file
     * name. This is why we replace the file name, "index.js", with a string
     */
    const entry = path.replace('/index.js', '');
    /**
     * Here we start building our object by placing the "entry" variable from
     * the previous line as a key and the entire path including the file name
     * as the value
     */
    entries[entry] = path;
    return entries;
  }, {}),
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      loaders.CSSLoader,
    ]
  },
  plugins: [
    plugins.MiniCssExtractPlugin,
    plugins.FixStyleOnlyEntriesPlugin,
  ],
};
