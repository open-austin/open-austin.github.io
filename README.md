# open-austin.org

### The Open Austin website

- [How to Draft a Blog Post](https://github.com/open-austin/open-austin.github.io/wiki/How-to-Draft-a-Blog-Post)
- [Development Instructions](#development-instructions)
- [Planning](#planning)
- [License](#license)

---

# Development Instructions

## Required System Installs (if you haven't already)

-  Install [**homebrew**](http://brew.sh/) (for better installation of OS X packages)	
	- `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
- Install OSX Xcode command line tools if you haven't
  - `xcode-select --install`

## Installing Jekyll/Ruby on OS X

_OS X comes with Ruby 2.0.0, but its not the latest version and you may have to use the `sudo` command to do anything. Best to install a version manager like ruby-install + chruby to help with that._

_If you already use [rbenv](https://github.com/rbenv/rbenv) or another Ruby version manager, you should be good as long as you use ruby 2.4.2+._ 

- Install [**ruby-install**](https://github.com/postmodern/ruby-install#readme) for installing Ruby versions.	Jekyll requires at least Ruby 2.1 but we recommend Ruby 2.4+
	- `brew install ruby-install`	
	- `ruby-install ruby 2.4.2`

- Install [**chruby**](https://github.com/postmodern/chruby) to switch ruby versions.	
	- `brew install chruby`	
	- `chruby ruby 2.4.2`
  - Copy `source /usr/local/share/chruby/chruby.sh` into your ~/.bashrc file (or if you use Zsh, .zshrc). Save that file and start a new terminal.

- Install [**jekyll**](https://github.com/postmodern/chruby) to install Jekyll.	- Install [**jekyll**](https://github.com/postmodern/chruby) to install Jekyll.
	- `gem install jekyll`

- Install [Ruby Bundler](https://bundler.io/), the best way to manage Ruby gems (packages)
  - `gem install bundler`


## Start Jekyll

Once you've got everything installed, run

```
bundle install
```

Then,

```
bundle exec jekyll serve --incremental --watch --trace
```

Then go to

```
http://localhost:4000/
```

## Troubleshooting

- If you run into errors that look like `zsh: command not found: chruby` you may need to update your `.bashrc` or `.zshrc` file which is a shell script that runs and initializes your shell whenever you open a new terminal.
  - https://github.com/postmodern/chruby/blob/master/README.md#configuration
  - https://unix.stackexchange.com/questions/129143/what-is-the-purpose-of-bashrc-and-how-does-it-work


- If you get permissions errors, run the command again with 'sudo'

```
sudo <your> <command here>
```


### Instructions for exporting content from Wordpress

```
gem install jekyll-import hpricot open_uri_redirections
ruby -rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordpressDotCom.run({
      "source" => "import/openaustin.wordpress.2015-11-21.xml",
      "no_fetch_images" => false,
      "assets_folder" => "assets"
    })'
```


---

# Planning

Staging Site: http://open-austin.github.io/

## Planning & Design

### Sitemap

![our sitemap](planning-design/site_architecture/oa-sitemap.png?raw=true)
[link to Gliffy](http://www.gliffy.com/go/publish/8981187)

### Design Docs

[Design Brief](planning-design/planning_and_analytics/OA Design Brief.pdf?raw=true)

[Colors/Typography](planning-design/typography/colorstypography2.png?raw=true)

### Mockups

[Homepage Mockups from 1-Sept](planning-design/final_mockups/oa_homepage_mockup.pdf?raw=true)

Higher fidelity Mockup from 24-Aug Meeting ([PDF](planning-design/other_mockups/OA Homepage 1.pdf?raw=true) AND [Sketch](planning-design/other_mockups/OA Homepage 1.sketch?raw=true))

[Original Lo-fi Mockup](planning-design/planning_and_analytics/lo-fi-mockup.jpg?raw=true)

### Requirements

[Link to functional requirements doc](https://docs.google.com/document/d/1dgYQunemFzfGPpmc6jJz5L1sCm0m7f9ZemPT0z6FK2c)

### Assets/Images

[Links to potential assets/images](https://github.com/open-austin/OA-Website/wiki/Assets-&-Images-for-potential-use)

# License

The code for this repository has been released into the public domain by Open Austin via the Unlicense.
