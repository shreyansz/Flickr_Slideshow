var main = function()
{
"use strict";

var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=dogs&format=json&jsoncallback=?";

$.getJSON(url, function (fl){
fl.items.forEach(function(ph) 
{
var $i = $("<img>").hide();
$i.attr("src",ph.media.m);
$("main .photos").append($i);
$("main .photos").append("<br>");
$i.fadeIn();
});
});
}
$(document).ready(main);