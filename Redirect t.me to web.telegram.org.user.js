// ==UserScript==
// @name        Redirect t.me to web.telegram.org
// @namespace   uso2usom
// @description On any web page it will check if the clicked links goes to userscripts.org. If so, the link will be rewritten to point to userscripts-mirror.org
// @include     http://*.*
// @include     https://*.*
// @exclude     http://userscripts.org/*
// @exclude     https://userscripts.org/*
// @exclude     http://userscripts.org:8080/*
// @exclude     https://userscripts.org:8080/*
// @version     1.0
// @grant       none
// ==/UserScript==

// This is a slightly brute force solution, but there is no other way to do it using only a userscript. A full-fledged addon may be created soon.

document.body.addEventListener('mousedown', function(e){
    var targ = e.target || e.srcElement;
    if ( targ && targ.href && targ.href.match(/https?:\/\/t\.me\//) ) {
        targ.href = targ.href.replace(/https?:\/\/t\.me\//, 'https://web.telegram.org/#/im?p=@');
    }
});