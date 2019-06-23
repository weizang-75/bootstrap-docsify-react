## Docsify React

## Developer Docs 

- [Squashing commits](./md/git_rebase_interactive.md)
- [Terminal commands](./md/terminal_commands.md)
- [:alien: Emojis](./md/emojis.md)

### What is this project about?

> #### Docsify React 
We need to quickly create, update and share excellent documentation in Markdown. 
There are many zillions of options from confluence to github pages. All are good and 
also bad. This is another one.

### Acceptance Criteria

- Docs should be edited in native code editor (sublime, VS code, PHP Storm, whatever)
    - Saving a change in whatever editor you are using should update the local app
- Should be able to be deployed to Firebase as a functioning Progressive Web App
    - Lighthouse Audit
    - Service Worker
    - SEO
- Should work nicely with GitHub
- Should have the ability to place content behind Authentication
- 

## About Docsify

Docsify is a Vue app which magically creates amazin docs from well-formatted markdown. 
If you learn how to write markdown in the way which looks good in docsify, which is easy 
you will be able to create amazing looking documentation which is extremely portable to 
any other platform supporting markdown. We love markdown.

[![docsfiy](https://firebasestorage.googleapis.com/v0/b/docsify-react.appspot.com/o/docsify.jpg?alt=media&token=c1c0524c-8fbe-431a-9fdb-5a3c5b038313)](https://docsify.js.org/#/?id=docsify)

### Install Docsify

Load docsify vue app into your SPA's html

`./index.html`

```html
<link rel="stylesheet" href="//unpkg.com/docsify/themes/vue.css">
<script src="//unpkg.com/docsify/lib/docsify.min.js"></script>
```
#### Configuration

```javascript
window.$docsify = {
    name: 'Docsify React',
    repo: 'https://github.com/listingslab-software/docsify-react',
    auto2top   : true,
    maxLevel   : 3, 
    subMaxLevel: 3,
    themeColor: colours.colour1,
    colours
}
```
