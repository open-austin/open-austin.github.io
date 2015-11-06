# open-austin.org
Open Austin Website Redesign - 2015

Staging Site: http://open-austin.github.io/open-austin-org/

## Planning & Design
### Sitemap

![our sitemap](https://github.com/open-austin/open-austin.org/blob/master/planning-design/oa-sitemap.png)
[link to Gliffy](http://www.gliffy.com/go/publish/8981187)

### Design Docs
[Design Brief](https://github.com/open-austin/open-austin.org/blob/master/OA%20Design%20Brief.pdf)

### Mockups
[Homepage Mockups from 1-Sept](https://github.com/open-austin/open-austin.org/blob/master/oa_homepage_mockup.pdf)

Higher fidelity Mockup from 24-Aug Meeting ([PDF](https://github.com/open-austin/open-austin.org/blob/master/OA%20Homepage%201.pdf) AND [Sketch](https://github.com/open-austin/open-austin.org/blob/master/OA%20Homepage%201.sketch))

[Original Lo-fi Mockup](https://github.com/open-austin/open-austin.org/blob/master/lo-fi-mockup.jpg)

### Requirements
[Link to functional requirements doc](https://docs.google.com/document/d/1dgYQunemFzfGPpmc6jJz5L1sCm0m7f9ZemPT0z6FK2c)

### Assets/Images
[Links to potential assets/images](https://github.com/open-austin/OA-Website/wiki/Assets-&-Images-for-potential-use)

## Setting up Jekyll/Ruby on OS X
- *(Optional)* Install [**iTerm**](https://www.iterm2.com/) for a better Command Line App in OS X.

- _(Optional)_ Install [**oh-my-zsh**](https://github.com/robbyrussell/oh-my-zsh
) for a prettier command line interface and easier zsh configuration than bash.
	- `sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`

- Install [**homebrew**](http://brew.sh/) (for better installation of OS X packages)
	- `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

- Install [**ruby-install**](https://github.com/postmodern/ruby-install#readme) for installing Ruby versions. (OS X comes with 2.0.0, but its not the latest version and you may have to use the `sudo` command to do anything. Best to install a version manager like ruby-install + chruby to help with that.)
	- `brew install ruby-install`
	- `ruby-install ruby 2.2.2`

- Install [**chruby**](https://github.com/postmodern/chruby) to switch ruby versions.
	- `brew install chruby`
	- `chruby ruby 2.2.2`
