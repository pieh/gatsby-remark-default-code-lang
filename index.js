const visit = require(`unist-util-visit`);

module.exports = async ({ markdownAST }, pluginOptions = {}) => {
  visit(markdownAST, `code`, (node) => {
    if (!node.lang) {
      node.lang = pluginOptions.blockCodeDefaultLanguage;
    }
  });

  visit(markdownAST, `inlineCode`, (node) => {
    if (
      node.value &&
      node.value.indexOf(pluginOptions.inlineCodeMarker) === -1
    ) {
      node.value = `${pluginOptions.inlineCodeDefaultLanguage}${pluginOptions.inlineCodeMarker}${node.value}`;
    }
  });
};
