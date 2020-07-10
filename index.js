const visit = require(`unist-util-visit`);

module.exports = async ({ markdownAST }, pluginOptions = {}) => {
  visit(markdownAST, `code`, (node) => {
    if (!node.lang) {
      node.lang = pluginOptions.blockCodeDefaultLanguage;
    } else {
      // gatsby-remark-code-titles compat
      // if lang start with "title=X" or ":title=X"
      // it will transform it to "{defaultLanguage}:title=X"
      const match = node.lang.match(/^(\s*):?([^=\s:]+=.+$)/);
      if (match && match.length >= 2) {
        node.lang = `${pluginOptions.blockCodeDefaultLanguage}:${match[2]}`;
      }
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
