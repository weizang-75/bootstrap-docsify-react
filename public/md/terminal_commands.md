### [Home](../README.md)

## Custom Terminal commands

In Terminal, you can add aliases to frequently used commands to save you 
typing the whole command. Edit you bash profile, adding whatever is useful to you. 
You'll need to reload your terminal after making a change, and this is 
_probably_ where you'll find the file.

```sudo nano ~/.bash_profile```

```
alias cl="clear"
alias l="clear && ls -la"
alias g="clear && git branch && git status"
alias docs="clear && cd ~/<path>/docsify-react && yarn start"
alias s="clear && cd ~/Desktop/START && clear && ls -la"
alias dev="clear && cd ~/<path>/rex-dev-env && ./rex start"
alias r="clear && cd ~/<path>/rex-app && clear && ls -la"
```