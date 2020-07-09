# `gatsby-remark-default-code-lang`

This plugin sets default code block or inline code language.

Use together with `gatsby-remark-prismjs` (place `gatsby-remark-default-code-lang` before `gatsby-remark-prismjs`, so prismjs receive updated content):

```js
{
  resolve: `gatsby-remark-default-code-lang`,
  options: {
    // this is important to match the `inlineCodeMarker` with value used in `gatsby-remark-prismjs` configuration
    inlineCodeMarker: "¬",
    inlineCodeDefaultLanguage: "csharp",
    blockCodeDefaultLanguage: "csharp",
  },
},
{
  resolve: `gatsby-remark-prismjs`,
  options: {
    inlineCodeMarker: "¬",
  },
},
```
