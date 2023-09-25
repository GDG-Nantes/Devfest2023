const locales = require("./locales/config.json").map((l) => l.code);
const path = require("path");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

/** Removes the useless pages (ex: /en/team.fr/)
 *   Changes path for files with extensions: /fr/team.fr/ -> /fr/team/
 *   Duplicates the french pages to create entrypoints without explicit languages: https://github.com/gatsbyjs/themes/issues/124
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new FilterWarningsPlugin({
        exclude:
          /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
      }),
    ],
  });
};
