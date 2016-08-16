## Manipulating the Chromium cache
## Part 1 - Why?

###Overview
Many applications today are based on parts of the [Chromium](https://www.chromium.org/) code. Firstly there is the [Chrome Browser](https://www.google.com/chrome/) itself. Then there is software based on the [Chromium Embedded Framework (CEF)](https://bitbucket.org/chromiumembedded/) and especially software based on the [Electron Framework](http://electron.atom.io/), which itself is based on the CEF.
To name some examples: **Atom**, **Curse**, **Discord**, [and many more](http://electron.atom.io/apps/).


###Why should I care what these applications cache?
For the most of those programs the cache content is probably boring, thats true. But for some it might be interesting what has been cached, e.g. for browsers. There is software for this like [ChromeCacheView](http://www.nirsoft.net/utils/chrome_cache_view.html) or even in Chrome itself via *chrome://cache/*.

But I have not found one tools that allows you to edit the cache's content.