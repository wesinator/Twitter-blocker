// ==UserScript==
// @name     Twitter blocker
// @version  1
// @grant    none
// @match    https://twitter.com/*
// ==/UserScript==
// based on https://github.com/MperorM/twitter-feed-block/blob/master/twitter_block.js

url = document.URL;
url = location.href;
var post = "https:\/\/twitter.com\/.+\/status\/|search+.*";
matches = url.match(post);

if (matches == null) {
    var all = document.getElementsByTagName("*");
    for (let i = 0; i < all.length; i++) {
        all[i].style.display = "none";
    }
};
