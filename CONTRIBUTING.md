# We would love your help!

Thanks ahead of time for your interest in helping **Open Austin**. In the spirit of open source and social coding, we welcome your involvement in contributing:

- new issues or bugs
- fixes
- code expertise to resolve issues
- and obviously, pull requests  



## Getting Started



### The Quickest Route

1. To find the file you would like to change, click on the Find File button
2. Once you find the file you'd like to edit, click on the **Pencil icon**
3. GitHub will give you an editor to add some changes
4. Once you're finished, *enter a Commit message* where it says **Propose file change** 
5. Click on the green **Propose file change** button to *commit* your changes
6. Review your changes :)
7. Once you're confident in your changes/additons, click on the **Create pull request** button
8. In the **Pull Request** form, edit your PR message to detail the changes you've pushed
9. Click on the **Create pull request** button!


***


### The Developer Route
1. [Fork the project repo](#1-fork-the-project-repo)
2. [Clone the project to your desktop](#2-clone-the-project-to-your-desktop)
3. [Create a branch](#3-create-a-branch)
4. [Make some changes](#4-make-some-changes)
5. [Simple test](#5-simple-test)
6. [Commit your changes](#6-commit-your-changes)
7. [Make Pull Request](#7-make-a-pull-request)  
 



#### 1. Fork the project repo

One of the most widely used and suggested development workflows is the [fork-and-branch workflow](http://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/).

- In the top right corner of the [Open Austin Website repo](https://github.com/open-austin/open-austin.github.io), click on the **Fork Button**

   <img src="https://github.com/techtolentino/general_assets/blob/master/images/github_fork.png" alt="" width="400">


- When prompted for where to fork the repo, *select your GitHub profile*

- The Open Austin Website repo is will now be forked to your own Github account



#### 2. Clone the project to your desktop

Now that you have the Open Austin Website repo, you can **Clone** it down to your desktop. This will give you a full working copy of the source code on your own computer

- Navigate to `https://github.com/YOUR-GITHUB-NAME/open-austin.github.io` and you can see that you're in your own fork

   <img src="https://github.com/techtolentino/general_assets/blob/master/images/github_forked_repo.png" alt="" width="400">

- Click on the *Copy to Clipboard* button, to copy your fork's **Git address**

   <img src="https://github.com/techtolentino/general_assets/blob/master/images/github_clone.png" alt="" width="400">

- Then, in your Terminal (or iTerm), run this command to clone (download) your code

```
git clone <https://github.com/YOUR-GITHUB-NAME/open-austin.github.io.git>
```

- Change directory 

```
cd open-austin.github.io
```

- Add the **Open Austin Website repo** upstream

```
git remote add upstream https://github.com/open-austin/open-austin.github.io
```

- You have successfully cloned your forked copy of the **Open Austin Website repo** to your computer!



#### 3. Create a branch

- While in the master branch, create a new branch

```
git checkout -b your-new-branch-name
```

- you have now created your own branch where you can safely make edits



#### 4. Make some changes

Open up your favorite Text Editor (Brackets, Sublime, Atom are some, to name a few). Make the edits or add the files you wish to contribute.



#### 5. Simple test
It is always important to test your changes locally. Please take some time to:
- view your changes in different browsers
- different screen widths
- review your changes for spelling, grammar, and proper code
- test all links to ensure they work (if any)




#### 6. Commit your changes

When you are confident that your change/addition has been made correctly, you are ready to commit your changes up to GitHub.

- First, **git add** the files that you have created/edited
```
git add <files that have been changed>
```
- Next, you want to **git commit** those files you just added
```
git commit -m "Some awesome message that describes the changes you made"
```
- Lastly, **git push** those files up to your fork!
```
git push origin your-new-branch-name
```



#### 7. Make Pull Request

- Push your commits up to *Your* GitHub Fork
```
git push origin your-new-branch-name
```
- Log into your [GitHub account](https://github.com)
- Find your Fork of the Open Austin repo
- Click on the green *Create pull request* button
