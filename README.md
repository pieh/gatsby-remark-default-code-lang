# `gatsby-remark-default-code-lang`

This plugin sets default code block or inline code language.

Use together with `gatsby-remark-prismjs`:

```js
// gatsby-remark-default-code-lang should be before `gatsby-remark-prismjs` and `gatsby-remark-code-titles` (if you use it)
{
  resolve: `gatsby-remark-default-code-lang`,
  options: {
    // this is important to match the `inlineCodeMarker` with value used in `gatsby-remark-prismjs` configuration
    inlineCodeMarker: "¬",
    inlineCodeDefaultLanguage: "csharp",
    blockCodeDefaultLanguage: "csharp",
  },
},
// optional
`gatsby-remark-code-titles`,
{
  resolve: `gatsby-remark-prismjs`,
  options: {
    inlineCodeMarker: "¬",
  },
},
```
