# open-austin.org
Open Austin Website Redesign - 2015

### Sitemap

![our sitemap](https://github.com/open-austin/open-austin.org/blob/master/planning-design/oa-sitemap.png)
[link to Gliffy](http://www.gliffy.com/go/publish/8981187)

### Design Docs
[Design Brief](https://github.com/open-austin/open-austin.org/blob/master/OA%20Design%20Brief.pdf)

[Colors/Typography](https://github.com/open-austin/open-austin-org/blob/gh-pages/planning-design/colorstypography2.png)

### Mockups
[Homepage Mockups from 1-Sept](https://github.com/open-austin/open-austin.org/blob/master/oa_homepage_mockup.pdf)

Higher fidelity Mockup from 24-Aug Meeting ([PDF](https://github.com/open-austin/open-austin.org/blob/master/OA%20Homepage%201.pdf) AND [Sketch](https://github.com/open-austin/open-austin.org/blob/master/OA%20Homepage%201.sketch))

[Original Lo-fi Mockup](https://github.com/open-austin/open-austin.org/blob/master/lo-fi-mockup.jpg)


### Requirements
[Link to functional requirements doc](https://docs.google.com/document/d/1dgYQunemFzfGPpmc6jJz5L1sCm0m7f9ZemPT0z6FK2c)

### Assets/Images
[Links to potential assets/images](https://github.com/open-austin/OA-Website/wiki/Assets-&-Images-for-potential-use)

### Import Wordpress.com

```
gem install jekyll-import hpricot open_uri_redirections
ruby -rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordpressDotCom.run({
      "source" => "import/openaustin.wordpress.2015-11-21.xml",
      "no_fetch_images" => false,
      "assets_folder" => "assets"
    })'
```
