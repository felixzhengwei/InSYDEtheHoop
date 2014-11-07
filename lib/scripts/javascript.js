
$(function()
{

	$('#nbavid').on("loadedmetadata", scaleVideo);
	$(window).on("resize", scaleVideo);

	function scaleVideo()
	{
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();

		var videoNativeWidth = $('#nbavid')[0].videoWidth;
		var videoNativeHeight = $("#nbavid")[0].videoHeight;

		var heightScale = windowHeight/videoNativeHeight;
		var widthScale = windowWidth/videoNativeWidth;

		if (widthScale > heightScale)
		{
			var scale = widthScale;
		}

		else
		{
			var scale = heightScale;
		}

		var scaledVideoHeight = videoNativeHeight * scale;
		var scaledVideoWidth = videoNativeWidth * scale;

		$("#nbavid").height(scaledVideoHeight);
		$("#nbavid").width(scaledVideoWidth);
		
		console.log(scaledVideoHeight);

		$("#video").height(scaledVideoHeight);

		//scale the logo's height
	}

	var navheight = $("#logobrand").height();
		$("#logo").height(navheight);
	var divheight = $("#nbavid")[0].videoHeight;
		$("#bigtext").height(divheight);
});

