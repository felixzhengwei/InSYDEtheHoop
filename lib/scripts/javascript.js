var allQuestions = [{question: "How tall are you?", 
					 choices: ["Under 5 feet 10", "5'10 - 6'3", "6'4 - 6'8", "6'9 - 7'2", "Above 7 feet 2"] },
					{question: "How good are you at passing the basketball?",
					 choices:["Very good", "Kinda good", "Not very good", "I can pass but prefer not too", "I don't pass"]},
					{question: "Which one are you better at? Shooting or Driving to the basket?",
					 choices: ["Definitily Shooting", "Definitily Driving", "Equally good", "Bad at both", "Not sure"]},
					{question: "Do you enjoy telling people what to do on the court?",
					 choices: ["Very much", "More than others", "Sometimes", "Not that much","Not at all"]},
					{question:"Are you active defensively? Are you good?",
					 choices: ["Yes, very much", "I can play defense", "Not too much", "Barely able to", "I am really bad"]},
					{question:"Are you fast?",
					 choices:["Oh ya!", "above average", "average", "below average", "I run like a turtle"]},
					{question:"Do you consider yourself as a strong person(physically)?",
					 choices:["Oh ya!", "I am decent", "Average built","Not very strong","LOL no..."]}
				];
var pgHeader = "<p class=" + "congratz"+">Congratulations! You are a Point Guard</p>"
var sgHeader = "<p class=" + "congratz"+">Congratulations! You are a Shooting Guard</p>"
var sfHeader = "<p class=" + "congratz"+">Congratulations! You are a Small Forward</p>"
var pfHeader = "<p class=" + "congratz"+">Congratulations! You are a Power Forward</p>"
var cHeader = "<p class=" + "congratz"+">Congratulations! You are a Center</p>"

var pg = "<p class=" + "youare" + ">Point guards are the leaders on a basketball court. A point guard is the player on a team who typically brings the ball up the floor. They are the people running the plays, creating opportunties and most importantly, orchestrating the offense. Point guards usually have execellent ball handling skills, the ability to drive in the paint and hit perimeter jump shots. They also have great court vision and are able to pass the ball to the right place on the floor. Speed is an importmant asset for a point guard. Some amazing point guards you ask? Well, I hope Stephen Curry and Kyrie Irving fits in your category of amamzing.</p>"

var sg = "<p class=" + "youare" + ">Shooting guards are very versatile players on a team. Not only do they have incredible speeds like point guards, they are also strong enough to play down the post like forwards. Sometimes, shootings guards are referred to as the eblow while point guards are referred to as the shoulder on a basketball court. They have great shooting skills and are able to create their own shots off the dribble. Some famous shooting guards in today's NBA are Kobe Bryant, Dwayne Wade and Demar Derozen.</p>"

var sf = "<p class=" + "youare" + ">Small forwards are probably the most versatile players on a team. They are able to do a little bit of everything on the court, shooting, lay-ups, slam dunks... They are very good at getting to the foul line and knocking down free throws. Since they are the most versatile players, they are often interchangeable with shooting guards or power forwards. Some of the famous small forwards in today's league are Lebron James, Carmelo Anthony and Kevin Durant.</p>"

var pf = "<p class=" + "youare" + ">Power forwards are strong, oh ya, you are strong. Power forwards play a role similar to the center where they have to travel down the floor and make shots close to the basket, they are the most versatile travellers on the floor because they manage the low-post area of the floor. It is also very important for power forwards to shoot mid-range jump shots from the floor. Some famous power forwards in the NBA are Blake Griffin, Chris Bosh, and Kevin Love.</p>"

var center = "<p class=" + "youare" + ">Center is the Big Man on the floor, they are usually the tallest people on the team. They have to be strong, and have the ability to rebound. They are the defensive anchor of a team. There's an old saying" + " <strong>If you control the rebounds, you control the game</strong>" +", so now you can see why centers are important for a team. They play down the post and contribute a lot to the teams' offense and defense. Some big centers are Dwight Howard and Tim Duncan.</p>"

var modal = "<div class=" + "modal " + "id=" + "myModal " + "tabindex=" + "-1 " + "role=" + "dialog " + "aria-labelledby=" + "myModalLabel " +"aria-hidden=" + "true" + "><div class=" + "modal-dialog " +"><div class=" + "modal-content " + "><div class=" + "modal-header " + ">" + "<button type=" + "button " + "class=" + "close " + "data-dismiss= " + "modal " + "><span aria-hidden=" + "true " + ">&times;</span><span class=" + "sr-only " + ">Close</span></button><h4 class=" + "modal-title " + "id=" + "myModalLabel " + ">Modal title</h4></div><div class=" + "modal-body " +">...</div><div class=" + "modal-footer " + "><button type=" + "button " + "class=" + "btn btn-default " + "data-dismiss=" + "modal " + ">Close</button><button type=" + "button " +" class=" +"btn btn-primary " + ">Save changes</button></div></div></div></div>"

var linkOne =  "https://www.youtube.com/embed/KYct_U274JA" 
var linkTwo = "https://www.youtube.com/embed/fvu-QCVfBzU" 
var linkThree = "https://www.youtube.com/embed/ffjo8ReDzhA" 
var linkFour = "https://www.youtube.com/embed/MDO-i_VpnfM" 
var linkFive = "https://www.youtube.com/embed/mBskBc-3vZg" 
var linkSix = "https://www.youtube.com/embed/bfjChqS80dQ"
var linkSeven = "https://www.youtube.com/embed/eGGEAhSFFB0"
var linkEight = "https://www.youtube.com/embed/FWRKFWHtv8s?list=PLF5D33548D6B0EE8E"  
var linkNine = "https://www.youtube.com/embed/EZwfDzWm4vw?list=PLF5D33548D6B0EE8E" 
var linkTen = "https://www.youtube.com/embed/wx-0O4X-354?list=PLF5D33548D6B0EE8E"
var linkEle = "https://www.youtube.com/embed/zQ-T9vGxXyU?list=PLF5D33548D6B0EE8E" 
var linkTwe = "https://www.youtube.com/embed/yExZVYU13ko?list=PLF5D33548D6B0EE8E"

$(document).ready(function()
{


	$('#nbavid').on("loadedmetadata", scaleVideo);
	$(window).on("resize", scaleVideo);

	//scroll to internal links
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	//function to scale video based on viewport size
	function scaleVideo()
	{
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		
		//dynamically load texts
		$(document).on("scroll", function(){

		var docScrollTop = $(document).scrollTop();
		var docScrollLeft = $(document).scrollLeft();

		var minTop = docScrollTop;
		var maxTop = windowHeight + docScrollTop;
		var minLeft = docScrollLeft;
		var maxLeft = windowWidth + docScrollLeft;

		var elementOne = $("#imagequestion");
		var elementTwo = $("#little");
		var elementThree = $("#know");
		var elementFour = $("#quiz");
		var elementFive = $("#imagequestion2");

		var elementOneHeight = elementOne.height();
		var elementOneWidth = elementOne.width();

		var elementTwoHeight = elementTwo.height();
		var elementTwoWidth = elementTwo.width();

		var elementThreeHeight = elementThree.height();
		var elementThreeWidth = elementThree.width();

		var elementFourHeight = elementFour.height();
		var elementFourWidth = elementFour.width();

		var elementFiveHeight = elementFive.height();
		var elementFiveWidth = elementFive.width();

		var elementOneOffset = elementOne.offset();
		var elementTwoOffset = elementTwo.offset();
		var elementThreeOffset = elementThree.offset();
		var elementFourOffset = elementFour.offset();
		var elementFiveOffset = elementFive.offset();


		if ((elementOneOffset.top > minTop && elementOneOffset.top + elementOneHeight < maxTop) && (elementOneOffset.left >= minLeft && elementOneOffset.left + elementOneWidth <= maxLeft)){
				elementOne.animate({opacity:'1'},1000);
				
        }

        if ((elementTwoOffset.top > minTop && elementTwoOffset.top + elementTwoHeight < maxTop) && (elementTwoOffset.left >= minLeft && elementTwoOffset.left + elementTwoWidth <= maxLeft)){
				elementTwo.animate({opacity:'1'},200);
				
        }

        if ((elementThreeOffset.top > minTop && elementThreeOffset.top + elementThreeHeight < maxTop) && (elementThreeOffset.left >= minLeft && elementThreeOffset.left + elementThreeWidth <= maxLeft)){
				elementThree.animate({opacity:'1'},500);
				
        }

        if ((elementFourOffset.top > minTop && elementFourOffset.top + elementFourHeight < maxTop) && (elementFourOffset.left >= minLeft && elementFourOffset.left + elementFourWidth <= maxLeft)){
				elementFour.animate({opacity:'1'}, 500);
				
        }

        if ((elementFiveOffset.top > minTop && elementFiveOffset.top + elementFiveHeight < maxTop) && (elementFiveOffset.left >= minLeft && elementFiveOffset.left + elementFiveWidth <= maxLeft)){
				elementFive.animate({opacity:'1'}, 1000);
				
        }

    });


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
		$("#pump").height(scaledVideoHeight*0.5);
		$("#pump").width(scaledVideoWidth*0.5);

		//scale the text ontop of video
		var textPadding = scaledVideoHeight*0.33;
		
		$(".how:first").css({"padding-top": textPadding});
		$(".how").css({"opacity": 1});

		if(windowWidth <= 700)
		{
			$("#pump").width(windowWidth);
			$("#pump").height(windowWidth*0.7);
		}
		

		$("#video").height(scaledVideoHeight);
		$("#bigtext").height(scaledVideoHeight);
			/*console.log(scaledVideoHeight);
			console.log(scaledVideoWidth);
			console.log(windowWidth);
			console.log(heightScale);
			console.log(widthScale);*/
						
		$(".cd-fixed-bg").height(windowHeight);
		$(".cd-fixed-bg").width(windowWidth);

		$("#spurspump").slideDown();
		$(".cd-fixed-bg").slideDown();
		$(".cd-fixed-bg").css({display:"table-cell"});
		$("#quizsec").slideDown();
		$("#tutorial").slideDown();
		$(modal).appendTo("body");
		$(".rights").slideDown();


	}

	//scale the logo's height
	var navheight = $("#logobrand").height();
		$("#logo").height(navheight);
		$("#logobrand").css({opacity: "1"});
	
	$("#expand").on("click", function(){
		$(".vidrow").slideToggle();
	});


	var counter = 1;

	//variables to store answers
	var namefirst
	var namesecond 
	var namethird 
	var namefourth 
	var namefifth 
	var namesixth 
	var nameseventh

	//assigns first question
	var displayQuestion = "<p class=" + "question" + ">" + allQuestions[0].question + "</p>";

	$(".questionbox").prepend(displayQuestion);

	//assigns first list
	for (var i = 0; i < allQuestions[0].choices.length; i++)
		{
			var displaychoices = "<li class=" +"list" + ">" + "<button class=" + i + ">" + allQuestions[0].choices[i] +"</button>"+ "</li>";
			
			$(".spanquestion > ul").append(displaychoices);
			

		}

	//display list
	$("#quiz").on('click', function(){
		console.log(allQuestions[0].question);
		
		$(".questionbox").slideDown();

		var divheight = $(".questionmiddle").height();
		$(".questionfiller").height(divheight);

		change();
		return;
	});

	
	//function to assign all lists
	function change(){
		console.log("outside:" + counter);
		if(counter < 8)
		{
			$("#questionlist button").on("click", function(){

			//function being called recursively to navigate between lists
				if(counter === 1)
				{
					 namefirst = $(this).attr('class');
				}

				console.log(counter);
				if(counter < 7)
				{
					var prevQuestion = displayQuestion;
					displayQuestion = "<p class=" + "question" + ">" + allQuestions[counter].question + "</p>";

					$(".question").remove();
					$(".questionbox").prepend(displayQuestion);
					$(".question").fadeOut(400);
					$("#questionlist").fadeOut(400);
					$(".list").remove();
					
					

					for (var i = 0; i < allQuestions[counter].choices.length; i++)
					{
						var displayNextChoices = "<li class=" +"list" + ">" + "<button class=" + i + ">" + allQuestions[counter].choices[i] +"</button>"+"</li>";
						
						$(displayNextChoices).appendTo(".spanquestion ul");
					}

					$("#questionlist").fadeIn(400);
					
					$('.question').fadeIn(400);
				}

				if(counter === 2){ namesecond = $(this).attr('class');}
				if(counter === 3){ namethird = $(this).attr('class');}
				if(counter === 4){ namefourth = $(this).attr('class');}
				if(counter === 5){ namefifth = $(this).attr('class');}
				if(counter === 6){ namesixth = $(this).attr('class');}
				if(counter === 7){ nameseventh = $(this).attr('class');}
				counter++;
				$("#questionlist button").unbind('click');
				$("#quiz").unbind('click');
				return change();
				
			});
		}


		else{

			var one = parseInt(namefirst);
			var two = parseInt(namesecond);
			var three = parseInt(namethird);
			var four = parseInt(namefourth);
			var five = parseInt(namefifth);
			var six = parseInt(namesixth);
			var seven = parseInt(nameseventh);
			if (((one === 0 || one === 1) && (two === 0 || two === 1) && (four === 1 || four === 0)))
			{
				$(".pos").append(pgHeader);
				$(".postwo").append(pg);
				$(".questionbox").slideUp();
				$(".positioning").slideDown();
				

			}

			else if(((one === 1 || one ===1) && (four == 3 || four === 4 || four === 2)) || ( (one ===1 || one ===0) && (two === 2 || two === 3 || two === 4)))
			{
				$(".pos").append(sgHeader);
				$(".postwo").append(sg);
				$(".questionbox").slideUp();
				$(".positioning").slideDown();
			}
			
			else if ( (one === 2 && three === 0) || (one ===2 && (six === 0 || six === 1 || six === 2)) || (one === 2 && (seven === 2 || seven === 3 || seven === 4)))
			{
				$(".pos").append(sfHeader);
				$(".postwo").append(sf);
				$(".questionbox").slideUp();
				$(".positioning").slideDown();
			}

			else if ( (one ===2 && (six === 3 || six === 4)) || (one === 2 && (seven === 0 || seven === 1)) || (one === 3))
			{
				$(".pos").append(pfHeader);
				$(".postwo").append(pf);
				$(".questionbox").slideUp();
				$(".positioning").slideDown();
			}

			else if ( one === 4)
			{
				$(".pos").append(cHeader);
				$(".postwo").append(center);
				$(".questionbox").slideUp();
				$(".positioning").slideDown();
			}

			else
			{
				$(".pos").append(sgHeader);
				$(".postwo").append(sg);
				$(".questionbox").slideUp();
				$(".positioning").slideDown();
			}
			return true;
		}
	}

	//fires video modals
	$(".contain > a").on('click', function(){

		showModal(this);

		function showModal(ele){
			var element = ele.getAttribute("data-target");
			console.log(element);
			if (element === "#Modal2")
			{
				var placeHolder = document.getElementsByClassName("modal");
				placeHolder[0].setAttribute("id", element);

				$('.modal iframe').attr('src', linkTwo);
				$(placeHolder[0]).modal('toggle')
			}

			else if (element === "#Modal1")
			{
				var placeHolder = document.getElementsByClassName("modal");
				placeHolder[0].setAttribute("id", element);
				$('.modal iframe').attr('src', linkOne);
				$(placeHolder[0]).modal('toggle')
			}

			else if (element === "#Modal3")
			{
				var placeHolder = document.getElementsByClassName("modal");
				placeHolder[0].setAttribute("id", element);
				$('.modal iframe').attr('src', linkThree);
				$(placeHolder[0]).modal('toggle')
			}

			else if (element === "#Modal4")
			{
				var placeHolder = document.getElementsByClassName("modal");
				placeHolder[0].setAttribute("id", element);
				$('.modal iframe').attr('src', linkFour);
				$(placeHolder[0]).modal('toggle')
			}

			else if (element === "#Modal5")
			{
				var placeHolder = document.getElementsByClassName("modal");
				placeHolder[0].setAttribute("id", element);
				$('.modal iframe').attr('src', linkFive);
				$(placeHolder[0]).modal('toggle')
			}

			else if (element === "#Modal6")
			{
				var placeHolder = document.getElementsByClassName("modal");
				placeHolder[0].setAttribute("id", element);
				$('.modal iframe').attr('src', linkSix);
				$(placeHolder[0]).modal('toggle')
			}

			else if (element === "#Modal7")
			{
				var placeHolder = document.getElementsByClassName("modal");
				placeHolder[0].setAttribute("id", element);
				$('.modal iframe').attr('src', linkSeven);
				$(placeHolder[0]).modal('toggle')
			}

			else if (element === "#Modal8")
			{
				var placeHolder = document.getElementsByClassName("modal");
				placeHolder[0].setAttribute("id", element);
				$('.modal iframe').attr('src', linkEight);
				$(placeHolder[0]).modal('toggle')
			}

			else if (element === "#Modal9")
			{
				var placeHolder = document.getElementsByClassName("modal");
				placeHolder[0].setAttribute("id", element);
				$('.modal iframe').attr('src', linkNine);
				$(placeHolder[0]).modal('toggle')
			}

			else if (element === "#Modal10")
			{
				var placeHolder = document.getElementsByClassName("modal");
				placeHolder[0].setAttribute("id", element);
				$('.modal iframe').attr('src', linkTen);
				$(placeHolder[0]).modal('toggle')
			}

			else if (element === "#Modal11")
			{
				var placeHolder = document.getElementsByClassName("modal");
				placeHolder[0].setAttribute("id", element);
				$('.modal iframe').attr('src', linkEle);
				$(placeHolder[0]).modal('toggle')
			}

			else if(element === "#Modal12")
			{
				var placeHolder = document.getElementsByClassName("modal");
				placeHolder[0].setAttribute("id", element);
				$('.modal iframe').attr('src', linkTwe);
				$(placeHolder[0]).modal('toggle')
			}
		}
		
		$('.modal').on('hidden.bs.modal', function () {
    		$('.modal iframe').removeAttr('src');
		});

	});
	
});

