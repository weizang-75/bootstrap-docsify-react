
## Custom Terminal commands

In Terminal, you can add aliases to frequently used commands to save you 
typing the whole command. Edit you bash profile, adding whatever is useful to you. 
You'll need to reload your terminal after making a change, and this is 
_probably_ where you'll find the file.

```sudo nano ~/.bash_profile```

```
source ~/.profile
alias docs="clear && cd ~/Desktop/START/rex-docs && yarn start"
alias s="clear && cd ~/Desktop/START && clear && ls -la"
alias dev="clear && cd ~/Desktop/START/rex-core-product/rex-dev-env && ./rex start"
alias cl="clear"
alias l="clear && ls -la"
alias g="clear && git branch && git status"
alias r="clear && cd ~/Desktop/START/rex-core-product/rex-app && clear && ls -la"
```
