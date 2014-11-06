
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
		
		if (window.jQuery) {  
    alert("good");
} else {
    alert("bad");
}

	}
});

