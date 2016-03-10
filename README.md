# open-austin.org

### The Open Austin website

- [How to Contribute a Blog Post](#How-to-draft-a-blog-post)
- [Development Instructions](#development-instructions)
- [Planning](#planning)
- [License](#license)

------------------

# How to Draft a Blog Post

There are three primary options:
- _(Easiest)_ Draft it as a markdown file or Google doc and send it to @mateoclarke or @luqmaan.
- _(Hardest)_ Clone the `open-austin-org` repo to your local computer and submit your draft via a Pull Request to `master`. I use an app called [MacDown](http://macdown.uranusjr.com/) to edit Markdown files. The main advantage to this option is that you can preview what the post will look like on your local machine before deploying.
- _(Recommended)_ Try drafting it on Github.com

### How to draft on Github.com
  1. Go to: https://github.com/open-austin/open-austin.github.io/tree/master/_posts
  2. Create a new file (see image)
<img width="1117" alt="screen shot 2016-03-07 at 2 36 01 pm" src="https://cloud.githubusercontent.com/assets/5697474/13582507/664d0c70-e472-11e5-81b1-7cf8bba3ad40.png">

  3. name the file `YYYY-MM-DD-title-of-article.md` 
    - EX: `open-austin.github.io/_posts/2016-03-10-code-across-austin-2016-recap.md`
![screen shot 2016-03-10 at 12 33 00 am](https://cloud.githubusercontent.com/assets/5697474/13662346/5b1af58a-e65f-11e5-9e2e-ddae4b2292e0.png)
  4. Use the template below at the top of your new markdown file. (It's called [YML Front Matter](https://jekyllrb.com/docs/frontmatter/)). 

        ---
        layout: post
        title: Title of your article
        date: YYYY-MM-DD
        type: post
        published: true
        thumb: filename.jpg
        thumbalt: Alt text describing the thumbnail
        author:
          first_name: First
          last_name: Last
        ---
        Begin your the body content of your post here. Use markdown syntax.
        
  5. Draft the body of the post below the `---` in [Markdown](https://guides.github.com/features/mastering-markdown/) and/or HTML (Markdown compiles to HTML).
  6. Upload the thumbnail image (aka: featured image) you specified in the front matter to the [assets/images directory](https://github.com/open-austin/open-austin.github.io/tree/master/assets/images). You should be able to click the "Upload files" button.
    - All other photos you want to include in the body of the post also need to be uploaded here and referenced in the post as `![alt text describing the image](/assets/images/imagefile-name.jpg)`.
    - Thumbnail images shouldn't be wider than `250px`.
    - Body images shouldn't be wider than `778px` but `500px` is recommended.
![upload-photos](https://cloud.githubusercontent.com/assets/5697474/13662320/2f826098-e65f-11e5-9f51-995188a8fd10.png)
![screen shot 2016-03-10 at 12 42 03 am](https://cloud.githubusercontent.com/assets/5697474/13662325/39d36e02-e65f-11e5-9f99-f0e94baf1545.png)
  7. Once you are done drafting the file and uploading images, save your file creating a new branch, opening a pull request and requesting someone to review and merge. 
    - OR Publish it straight to `master`. Do this if you feel brave.
<img width="872" alt="screen shot 2016-03-07 at 2 54 17 pm" src="https://cloud.githubusercontent.com/assets/5697474/13582973/ae1a74be-e474-11e5-9a2a-6acf1ded30a4.png">

# Development Instructions

## Installing Jekyll/Ruby on OS X
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

## Start Jekyll

Once you've got everything installed, run

```
jekyll serve --incremental --watch --trace
```

Then go to

```
http://localhost:4000/
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

--------------------

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
