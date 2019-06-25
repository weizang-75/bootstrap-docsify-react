
### [Home](../README.md)

## Git Fundamentals

Quick & easy cut & paste cheat sheet for useful Git terminal commands. 

### Basic commands
Will cover 95% of what you'll need
```
git clone
git push
git pull
git commit
git checkout
git reset
git stash
git diff
```

### Conventional Commits

[conventionalcommits.org](https://www.conventionalcommits.org) are a way of 
standardising commit messages to make them more useful. They can be linted 
and thus developers are forced to crete messages which can be read and 
incorporated into a meaningful change log. It also stops developers having 
to use precious brain power thinking up new messages.

Example: 
```
git commit -m 'feat(react): allow provided config object to extend other configs'
```

### merge || rebase

[To merge or to rebase?](https://www.atlassian.com/git/tutorials/merging-vs-rebasing) The cool kids rebase and there's a reason for that.

** Remember: ONLY rebase your own branches. If there are multiple people working on a 
branch, rebasing is bad. mmmmkay?
 
#### What is actually happening?

> __merge__   
Merging basically smashes two branches together and tells you if there are 
any conflices. It also merges the history.
[![merge](https://firebasestorage.googleapis.com/v0/b/docsify-react.appspot.com/o/merge.png?alt=media&token=70cff9d4-57f2-4389-9bb2-5b22a0f58df7)](https://es.atlassian.com/git/tutorials/using-branches/git-merge) 
  

> __rebase__   
Rebasing literally rewrites history. It will make a note of all your commits, 
then go back to the base branch and get all the commits that have happened since 
you branched.
[![rebase](https://firebasestorage.googleapis.com/v0/b/docsify-react.appspot.com/o/rebase.png?alt=media&token=032f7127-a973-4689-8c38-6bdd223a16a7)](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)

### Getting out of trouble

Reset your branch to a certain commit or point in time 
Reset is a local thing. Try not to reset remote branches. 
Look at the commit history, find the commit hash 

```
git reset <commit-hash>
```

### Tips & tweaks

Delete a branch locally  
```git branch -D <branch-name>``` 

Optionally clone a repo into a new folder name. 
```git clone https://github.com/rexlabsio/rex-app.git <optional-new-name>``` 

Checks out previous branch  
```git checkout -```  

Stage all changes  
```git add .``` 

Turn multiple commits into one, retaining the commit titles into the new commit's message  
```git rebase <branch> -i```

Be specific about your rebasing branches  
```git rebase -onto <target-branch> <current-branch>```  

~ Tilda in Git kind of means distance from now