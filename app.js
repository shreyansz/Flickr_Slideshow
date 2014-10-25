var main = function()
{
	"use strict";
	$("button").on('click', function(event) 
	{
		displayImages($("input[name='tag']").val());	
	});
	$("input[name='tag']").on('keypress', function(event) 
	{
		if (event.keyCode === 13) 
        {
		displayImages($("input[name='tag']").val());	
		}
	});
	var timer;
	var displayImages = function(tags, index)
	{
		if(! (tags = $.trim(tags) ) )
		{
			console.log('err');
			$("input[name='tag']").val('');
			return;
		}
		if(!index)
		{
			clearTimeout(timer);
		}
		var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" + tags + "&format=json&jsoncallback=?";
		$("main .photos").empty();
		$.getJSON(url, function (fl)
		{
			var picArr = fl.items;
			if ( !index || picArr.length == index)
			{
				index = 0;
			}
			$("main .photos").empty();
			$("main .photos").css({ 'padding-top':'5%','text-align':'center','width':'100%','height':'100%'});
			var $i = $("<img>").width('50%').height('70%').hide();
			$i.attr("src",picArr[index].media.m);
			$("main .photos").append($i);
			console.log("Showing " + index + " of " + picArr.length);
			$i.fadeIn();
		});
		timer = setTimeout(function(){
								displayImages(tags, index+1);
		}, 2000);
	};
}
$(document).ready(main);