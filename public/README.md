## Docsify React

### What is this project about?

> Basic requirements

- We need to quickly create, update and share excellent documentation in Markdown 
- Docs should be edited in native code editor (sublime, VS code, PHP Storm, whatever)
- Should be able to be deployed as a Progressive Web App
- 

### What is Docsify?

Docsify is a Vue app which magically creates amazin docs from well-formatted markdown. 
If you learn how to write markdown in the way which looks good in docsify, which is easy 
you will be able to create amazing looking documentation which is extremely portable to 
any other platform supporting markdown. We love markdown.

![docsfiy](https://firebasestorage.googleapis.com/v0/b/docsify-react.appspot.com/o/docsify.jpg?alt=media&token=c1c0524c-8fbe-431a-9fdb-5a3c5b038313)

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

### Docs 
- [Squashing commits](./md/git_rebase_interactive.md)
- [Terminal commands](./md/terminal_commands.md)