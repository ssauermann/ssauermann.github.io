---
title: Manipulating the Chromium cache - Part 1 - Why?
---

Many applications today are based on parts of the [Chromium](https://www.chromium.org/) code. Firstly there is the [Chrome Browser](https://www.google.com/chrome/) itself. Then there is software based on the [Chromium Embedded Framework (CEF)](https://bitbucket.org/chromiumembedded/) and especially software based on the [Electron Framework](http://electron.atom.io/), which itself is based on the CEF.
To name some examples: **Atom**, **Curse**, **Discord**, [and many more](http://electron.atom.io/apps/).


##Why should I care what those applications cache?
For the most of those programs the cache content is probably boring, that's true. But for some it might be interesting what has been cached, e.g. for browsers. There is software for viewing the cache like  [ChromeCacheView](http://www.nirsoft.net/utils/chrome_cache_view.html) or *chrome://cache/* in Chrome itself.  
But I have not found a single tool that allows you to edit the cache's content.

This topic got my attention when I tried Discord and was annoyed by the lack of distinguishable sound effects. Skins and sound packs will be a paid feature for Discord, but at this time there is no way to buy anything. A short  [search](https://www.reddit.com/r/discordapp/comments/3r5pnt/any_word_on_custom_sound_effects/) revealed that the sound files can be found in Discord's resource folder and can be replaced. However, this is no longer the case for the current version nor can the sound files be found anywhere else in the Discord folders. Where have they gone?

Logging the network traffic of Discord shows that the sound files are now requested from the Discord servers with some cryptic URLs like [https://discordapp.com/assets/429d09ee3b86e81a75b5e06d3fb482be.mp3](https://discordapp.com/assets/429d09ee3b86e81a75b5e06d3fb482be.mp3). Because Discord is backed by the Electron Framework, these files are stored in a chromium cache structure found in `%appdata%\discord\Cache` (in Windows). Playing some of the files with an audio player confirms that some of those files are actually the sought files.


##Trivial attempt - Replacing the files
At first I simply tried replacing the files which could be played in an audio player with other sounds. This partially worked.
1. Discord played those for the same length as the original ones. Long sounds were cut off.
2. Not all sounds could be found as a single file. The smallest ones were missing.


##Second attempt - Intercepting the server request with a proxy
To validate that the play time limit was not Discord's fault, I used [Fiddler](http://www.telerik.com/fiddler)'s Autoresponder feature and configured some of the sound file URLs with the replacement files. After clearing Discord's cache and setting fiddler as the system proxy Discord cached all the new audio files and played them without a problem. So the file size/audio length must be part of the cache.

This method for changing the audio files works but is not easily set-up and can barely be done by a program (Using scripts to install and control fiddler excluded).


**Continued in part 2:** *(coming soon)*









