// ==UserScript==
// @name     GoogleAntiChillingEffectsAndShit
// @version  1
// @include     https://www.google.de/*
// @grant    none
// @require     https://code.jquery.com/jquery-3.1.0.min.js
// ==/UserScript==

// Description:
// Script to be used on Google.de
// Fetches Lumendatabase Links and Displays on top
// To be used with greasemonkey

$(document).ready(function() {
  if($('.mfr') !== undefined) {
    var streamElem = $('<div id="streams"><h3 style="color: #9203ff">Most Interesting Content</h3></div>');
    $('div.srg').prepend(streamElem);
    $('.mfr a').each(function( index, url ) {
        $.ajax({
          type: "GET",
          url: url,
          success: function(data) {
            //alert($(data).find('.infringing-urls'));
            $(data).find('.infringing_url').each(function(idx,content) {
              $('#streams').append($('<a href="'+$(content).html()+'">'+$(content).html()+'</a><br/>'));
              //alert(content);
            });
            var dataObj = $(data).find('.infringing-urls');
          }
        });
      });
  }
});

