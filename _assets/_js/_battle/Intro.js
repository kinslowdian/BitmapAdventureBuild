	/* @kinslowdian -- http://www.simonkinslow.com -- 2013 */
	
	var introBossCloud;
	
	//var fader = new Object();
	
	var INTRO = new Object();
	
	var introBossAttackPosY = -260;
	
	function NEW_INTRO()
	{
	 	fallOff = new Object(); 
	 	
	 	introBossCloud = new Object();
	 			
	 	introBossCloud.intoGiant = false;	

		
/*
		// part1
		INTRO.part1_id = $("#introPart1");
		INTRO.part1_html = $("#introPart1").html();
		
		// part2
		INTRO.part2_id = $("#introPart2");
		INTRO.part2_html = $("#introPart2").html();
		INTRO.part2_delay = new AnimationTimer();
		
		$(INTRO.part1_id).html("");
		$(INTRO.part2_id).html("");
*/

		
		
		// init_intro();
		
		trace("setup(); / init");
		
		trace($("#stage-startIntro").width() + " x " + screen.height);
	
/*
		var catchUp = new AnimationTimer();
		catchUp.time(1, init_intro);
*/
	}
	
	function prepIntroDataInit()
	{
		$(document).get(0).addEventListener("EVENT_HTML_LOADED", prepIntroDataDone, false);
		
		var lf = Logic.dat_ROM["_HTML-EXT"]["file_intro"]["file"];
		var lh = new load_HTML(lf, $("#memory"));
	}
	
	function prepIntroDataDone(event)
	{
		$(document).get(0).removeEventListener("EVENT_HTML_LOADED", prepIntroDataDone, false);
		
		
		$("#stage-startIntro").append($("#memory").html());
		$("#memory").html("");
		
		timerList_init();
		
<<<<<<< HEAD
		INTRO.viewerPosition = 0;
		
=======
>>>>>>> 23a8b485e4c093300a6d62d91b8b0935b4f10479
		// part1
		INTRO.showState = "PART1";
		INTRO.part1_id = $("#introPart1");
		INTRO.part1_html = $("#introPart1").html();
		
		// part2
		INTRO.part2_id = $("#introPart2");
		INTRO.part2_html = $("#introPart2").html();
		INTRO.part2_delay = new AnimationTimer();
		timerList_add(INTRO.part2_delay);
		
		$(INTRO.part1_id).html("");
		$(INTRO.part2_id).html("");
		
		getStartDataFound();
	}
	
	function build_intro()
	{
		$(INTRO.part1_id).html(INTRO.part1_html);
		
		init_intro();
	}
	
	function init_intro()
	{
/*
		fader.obj = $("#fader");
		
		$(fader.obj).css("visibility", "visible");
		$(fader.obj).addClass("flood-full");	
*/
		
		$(INTRO.part1_id).html(INTRO.part1_html);
		
		$(":root").addClass("color-intro");
		
		fallOff.edgeColor = "255-255-255";
		
		$(".fallOff-TOP").addClass("fallOff-" + fallOff.edgeColor);

		$(".fallOff-BTM").addClass("fallOff-basic-" + fallOff.edgeColor);
		
		$(".fallOff").css("visibility", "visible");
		
		
		globalFade_OUT(event_init_intro);
	}
	
	function event_init_intro()
	{
		// in pos
		
		$("#stage-startIntro").addClass("position0");
		
		INTRO.viewerPosition = 0;
		
			
		var action = new AnimationTimer();
		timerList_add(action);
		action.time(2, bossDrop);
		
		skipButtonShow();		
	}
	
	function skipButtonShow()
	{
		skipBtn_init();
	}
	
	function skipButtonUsed()
	{
		timerList_stopAll();
		animationEventKillAll("#introPart1");
		globalFade_IN("white", formPart2);
	}
	
 	function bossDrop()
 	{
 		// $("#bossCont1 .boss").get(0).addEventListener("webkitAnimationEnd", event_bossDrop, false);
 		// $("#bossCont1 .boss").get(0).addEventListener("animationend", event_bossDrop, false);
 		
 		animationEventManager("#bossCont1 .boss", "ANIMATION", "event_bossDrop");
 				
	 	$("#bossCont1 .boss").addClass("tween-boss-appear");
 	}
 			
 			
 	function event_bossDrop(event)
 	{
 		// $("#bossCont1 .boss").get(0).removeEventListener("webkitAnimationEnd", event_bossDrop, false);
 		// $("#bossCont1 .boss").get(0).removeEventListener("animationend", event_bossDrop, false);
	 	
	 	if($(event.target).attr("data-animationlink"))
	 	{
			animationEventKill($(event.target).attr("data-animationlink"));
		}	
	 	
	 	flashActionInit($("#intro-part-1-flash"));
	 			
	 	$("#backGround").addClass("tween-backGround-shake");
	 			
	 	// $("#introPunchCloud").get(0).addEventListener("webkitAnimationEnd", event_punchCloud, false);
	 	// $("#introPunchCloud").get(0).addEventListener("animationend", event_punchCloud, false);
	 	
	 	animationEventManager("#introPunchCloud", "ANIMATION", "event_punchCloud");
	 	
	 	var action0 = new AnimationTimer();		
	 	var action1 = new AnimationTimer();
	 	var action2 = new AnimationTimer();
	 	
		timerList_add(action0);
		timerList_add(action1);
		timerList_add(action2);
	 	
	 	action0.time(1, quickly, 0);		
	 	action1.time(2, quickly, 1);
	 	action2.time(3.5, quickly, 2);
	 			
	 	$(".goat .goat-hand-L .goat-hand").addClass("tween-goat-hand");	 
	 	$(".goat .goat-hand-R .goat-hand").addClass("tween-goat-hand");
	 			
	 	$(".goat .goat-hand-L").addClass("tween-goat-hand-L");
	 	$(".goat .goat-hand-R").addClass("tween-goat-hand-R");
	 			
	 	$(".goat .goat-sweat-h .goat-sweat-drop").addClass("tween-goat-sweat-drop-h");

	 	$(".goat .goat-sweat-v .goat-sweat-drop").addClass("tween-goat-sweat-drop-v");
	 			
	 	$("#babyCont .baby .baby-fear").css("visibility", "visible");		 			
 	}
 			
 	function quickly(cmd_id)
 	{
	 	switch(cmd_id)
	 	{
	 		case 0:
	 		{
	 			$("#stage-startIntro").removeClass("position0").addClass("position1");
	 			
	 			INTRO.viewerPosition = 1;
	 			
		 		break;
	 		}
	 		
	 		case 1:
	 		{
	 			$(".boss-armL-Cont").addClass("boss-armL-Cont-UP");
	 					
	 			break;
	 		}
	 				
	 		case 2:
	 		{
		 		$(".boss-armL-Cont").addClass("boss-armL-Cont-DOWN").removeClass("boss-armL-Cont-UP");
		 				
		 		$("#introPunchCloud").addClass("tween-punchCloud-down");
		 		
		 		$("#stage-startIntro").removeClass("position1").addClass("position2");
		 		
		 		INTRO.viewerPosition = 2;
		 				
		 		break;
	 		}
	 	}
 	}
 			
 	function event_punchCloud(event)
 	{
 	 	var TWEEN_NAME = event.animationName;
 	 			
 	 	var tweenDelay;
 				
 		switch(TWEEN_NAME)
 		{
	 		case "tweenPunchCloudDownFrames":
	 		{
	 			$("#babyCont .baby").remove();
	 			$("#bossCont1").remove();
	 					
	 			tweenDelay = setTimeout(function()
	 			{ 
	 				$("#introPunchCloud").removeClass("tween-punchCloud-down").addClass("tween-punchCloud-rise");
	 			}, 0.5 * 1000);
	 			
	 			// $("#stage-startIntro").removeClass("position1").addClass("position2");		
	 					
		 		break;
	 		}
	 				
	 		case "tweenPunchCloudRiseFrames":
	 		{
		 		// $("#introPunchCloud").get(0).removeEventListener("webkitAnimationEnd", event_punchCloud, false);
		 		// $("#introPunchCloud").get(0).removeEventListener("animationend", event_punchCloud, false);			 				
		 		
				if($(event.target).attr("data-animationlink"))
				{
					animationEventKill($(event.target).attr("data-animationlink"));
				}		 		
		 				
		 		$(".punchCloud-boss-inside").css("opacity", 1);
		 				
		 		// $(".punchCloud-boss-inside").get(0).addEventListener("webkitTransitionEnd", event_innerPunchCloud, false);
		 		// $(".punchCloud-boss-inside").get(0).addEventListener("transitionend", event_innerPunchCloud, false);
		 		
		 		animationEventManager(".punchCloud-boss-inside", "TRANSITION", "event_innerPunchCloud");
		 				
		 		break;
	 		}
	 				
	 		case "tweenPunchCloudGiantFoot":
	 		{
		 		// $(".punchCloud-giantFoot").get(0).removeEventListener("webkitAnimationEnd", event_punchCloud, false);
				// $(".punchCloud-giantFoot").get(0).removeEventListener("animationend", event_punchCloud, false);
		 		
				if($(event.target).attr("data-animationlink"))
				{
					animationEventKill($(event.target).attr("data-animationlink"));
				}
		 				
		 		$("#backGround .groundDamage").css("opacity", "1");
		 				
		 		$("#foreGround").addClass("tween-foreGround-fall");
		 		
		 		flashActionInit($("#intro-part-1-flash"));
		 		/* $(":root").addClass("tween-introflash"); */
		 		
		 		// $("#foreGround").get(0).addEventListener("webkitAnimationEnd", endPart1, false);
		 		// $("#foreGround").get(0).addEventListener("animationend", endPart1, false);
		 		
		 		animationEventManager("#foreGround", "ANIMATION", "endPart1");
		 		
		 		var delay_defaultStagePos = new AnimationTimer();
		 		timerList_add(delay_defaultStagePos);
<<<<<<< HEAD
		 		delay_defaultStagePos.time(0.5, function(){ $("#stage-startIntro").removeClass("position3").addClass("position1");  INTRO.viewerPosition = 1; });
=======
		 		delay_defaultStagePos.time(0.5, function(){ $("#stage-startIntro").removeClass("position3").addClass("position1"); });
>>>>>>> 23a8b485e4c093300a6d62d91b8b0935b4f10479
		 				
		 		break;
	 		}
	 				
	 		default:
	 		{
		 				
	 		}
 		}
 	}
 			
 	function event_innerPunchCloud(event)
 	{
 		var TWEEN_CALLER = event.target.classList[0];
 		var action_delay;
 		var new_css;
 		
	 			
	 	if(TWEEN_CALLER != null || TWEEN_CALLER != undefined)
	 	{
		 	// $("." + TWEEN_CALLER).get(0).removeEventListener("webkitTransitionEnd", event_innerPunchCloud, false);
		 	// $("." + TWEEN_CALLER).get(0).removeEventListener("transitionend", event_innerPunchCloud, false);
		 	
			if($(event.target.classList[0]).attr("data-animationlink"))
			{
				animationEventKill($(event.target.classList[0]).attr("data-animationlink"));
			}	
	 	}
	 			
	 	switch(TWEEN_CALLER)
	 	{
		 	case "punchCloud-boss-inside":
		 	{			 			
			 	if(!introBossCloud.intoGiant)
			 	{	
				 	new_css = 	{
					 				"-webkit-transform" 	: "translateY(0)",
					 				"transform"				: "translateY(0)"
				 				};
				 						
				 	$(".punchCloud-boss").css(new_css);
				 			
			 		// $(".punchCloud-boss").get(0).addEventListener("webkitTransitionEnd", event_innerPunchCloud, false);
			 		// $(".punchCloud-boss").get(0).addEventListener("transitionend", event_innerPunchCloud, false);
			 		
			 		animationEventManager(".punchCloud-boss", "TRANSITION", "event_innerPunchCloud");
			 	}
			 			
			 	else if(introBossCloud.intoGiant)
			 	{
				 	action_delay = setTimeout(function()
				 	{
				 		$(".punchCloud-giantFoot").addClass("tween-punchCloud-giantFoot");
				 	}, 0.5 * 1000);
				 			
				 	// $(".punchCloud-giantFoot").get(0).addEventListener("webkitAnimationEnd", event_punchCloud, false);
				 	// $(".punchCloud-giantFoot").get(0).addEventListener("animationend", event_punchCloud, false);
				 	
				 	animationEventManager(".punchCloud-giantFoot", "ANIMATION", "event_punchCloud");
				 	
				 	$("#stage-startIntro").removeClass("position2").addClass("position3");
				 	
				 	INTRO.viewerPosition = 3;					 			
			 	}
			 			
			 	break;
		 	}
		 			
		 	case "punchCloud-boss":
		 	{
		 		if(!introBossCloud.intoGiant)
		 		{
			 		introBossCloud.intoGiant = true;
			 		
			 		// clean up		
			 		action_delay = setTimeout(function()
			 		{
					 	new_css = 	{
						 				"-webkit-transform" 	: "translateY(40px)",
						 				"transform"				: "translateY(40px)"
					 				};
					 						
					 	$(".punchCloud-boss").css(new_css);
					 			
				 		// $(".punchCloud-boss").get(0).addEventListener("webkitTransitionEnd", event_innerPunchCloud, false);
				 		// $(".punchCloud-boss").get(0).addEventListener("transitionend", event_innerPunchCloud, false);		 					
				 		
				 		animationEventManager(".punchCloud-boss", "TRANSITION", "event_innerPunchCloud");
		 			
		 			}, 2 * 1000);
		 				
		 		}
		 				
		 		else if(introBossCloud.intoGiant)
		 		{
			 		$(".punchCloud-boss-inside").css("opacity", 0);
			 				
			 		// $(".punchCloud-boss-inside").get(0).addEventListener("webkitTransitionEnd", event_innerPunchCloud, false);
			 		// $(".punchCloud-boss-inside").get(0).addEventListener("transitionend", event_innerPunchCloud, false);
			 		
			 		animationEventManager(".punchCloud-boss-inside", "TRANSITION", "event_innerPunchCloud");
		 		}
			 			
		 		break;
		 	}
		 					 			
		 	default:
		 	{
			 			
		 	}	
	 	}
 	}
 	
 	function endPart1(event)
 	{
 		// $("#foreGround").get(0).removeEventListener("webkitAnimationEnd", endPart1, false);
		// $("#foreGround").get(0).removeEventListener("animationend", endPart1, false);
		
		if($(event.target).attr("data-animationlink"))
		{
			animationEventKill($(event.target).attr("data-animationlink"));
		}		
		
		globalFade_IN("white", formPart2);
	 	
	 	/* $(":root").removeClass("tween-introflash"); */ 	
 	}

 	function formPart2()
 	{	 	
		
		skipBtn_remove();
		
		if(INTRO.viewerPosition !== 1)
		{
			$("#stage-startIntro").removeClass("position" + INTRO.viewerPosition).addClass("position1");
		
			INTRO.viewerPosition = 1;
		}
		
		
		$(":root").removeClass("color-intro").addClass("color-night");
		
		
		// $("#introPart1").html("");
		
		$(INTRO.part1_id).remove();
		
		$(INTRO.part2_id).html(INTRO.part2_html);
		
		$(".fallOff-TOP").removeClass("fallOff-" + fallOff.edgeColor);

		$(".fallOff-BTM").removeClass("fallOff-basic-" + fallOff.edgeColor);
		
		fallOff.edgeColor = "0-0-0";
		
		$(".fallOff-TOP").addClass("fallOff-" + fallOff.edgeColor);

		$(".fallOff-BTM").addClass("fallOff-basic-" + fallOff.edgeColor);
		
		
		$("#babyCont2 .baby .baby-fear").css("visibility", "visible");
		
		INTRO.part2_delay.time(0.5, init_part2);
		
		alert("formPart2();");
		
		snowingInit("#introPart2 #snow-intro-part2", "punchCloudPixels", "snowFlake-pink"); 
		
		//init_part2();
 	}

 	
 	function init_part2()
 	{
 		var boss_css;
 		
	 	globalFade_OUT(event_init_part2);
	 	
	 	boss_css = 	{
		 				"-webkit-transform"		: "translateY(" + -(DISPLAY._height + Math.abs(introBossAttackPosY)) + "px)",
		 				"transform"				: "translateY(" + -(DISPLAY._height + Math.abs(introBossAttackPosY)) + "px)"
	 				};
	 				
	 	$("#bossCont2").css(boss_css);	 		
 	}
 	
 	function event_init_part2()
 	{	
		var bossAttackDelay = new AnimationTimer();
		timerList_add(bossAttackDelay);
		bossAttackDelay.time(1.5, bossAttack);	 	 	
 	}
	
	function bossAttack()
	{
		var boss_css;
		
	 	boss_css = 	{
		 				"-webkit-transform"		: "translateY(" + introBossAttackPosY + "px)",
		 				"transform"				: "translateY(" + introBossAttackPosY + "px)",
		 				"-webkit-transition"	: "-webkit-transform 0.3s linear",
		 				"transition"			: "-webkit-transform 0.3s linear"
	 				};
	 				
	 	$("#bossCont2").css(boss_css);		
		
		// $("#bossCont2").get(0).addEventListener("webkitTransitionEnd", bossAttackEnd, false);
		// $("#bossCont2").get(0).addEventListener("transitionend", bossAttackEnd, false);
		
		animationEventManager("#bossCont2", "TRANSITION", "bossAttackEnd");
		
		
		//$("#bossCont2 .boss").addClass("tween-boss-attack");
	
		//$("#bossCont2 .boss").get(0).addEventListener("webkitAnimationEnd", bossAttackEnd, false);
		//$("#bossCont2 .boss").get(0).addEventListener("animationend", bossAttackEnd, false);
	}
	
	function bossAttackEnd(event)
	{
		// $("#bossCont2").get(0).removeEventListener("webkitTransitionEnd", bossAttackEnd, false);
		// $("#bossCont2").get(0).removeEventListener("transitionend", bossAttackEnd, false);
		
		if($(event.target).attr("data-animationlink"))
		{
			animationEventKill($(event.target).attr("data-animationlink"));
		}		
		
		
		//$("#bossCont2 .boss").get(0).removeEventListener("webkitAnimationEnd", bossAttackEnd, false);
		//$("#bossCont2 .boss").get(0).removeEventListener("animationend", bossAttackEnd, false);
		
		flashActionInit($("#intro-part-2-flash"));
		
		$("#worldEdge-footing-boss").addClass("tween-boss-attack-shake");
	
		goatFlipToBoss();
	}
	
	function goatFlipToBoss()
	{
		$("#goatCont2 .goat .goat-body").removeClass("goat-body-front").addClass("goat-body-back");
		$("#goatCont2 .goat .goat-face").css("visibility", "hidden");
		$("#goatCont2 .goat .goat-hands").css("visibility", "hidden");
	
		// call battle nav
		
		var cloudDisplayDelay = new AnimationTimer();
		timerList_add(cloudDisplayDelay);
		cloudDisplayDelay.time(2, cloudDisplay);
		
		// cloudDisplay();
		
		//endIntroBattle();
	}
	
	function endIntroBattle()
	{
		var finishingMoveDelay = new AnimationTimer();
		timerList_add(finishingMoveDelay);
		finishingMoveDelay.time(1, boss_finishHim);
	}
	
	function boss_finishHim()
	{
		$("#bossCont2 .boss-legR").addClass("tween-boss-legR-bash");
	
		// $("#bossCont2 .boss-legR").get(0).addEventListener("webkitAnimationEnd", boss_finishHimEnd, false);
		// $("#bossCont2 .boss-legR").get(0).addEventListener("animationend", boss_finishHimEnd, false);
	
		animationEventManager("#bossCont2 .boss-legR", "ANIMATION", "boss_finishHimEnd");
	}
	
	function boss_finishHimEnd(event)
	{
		// $("#bossCont2 .boss-legR").get(0).removeEventListener("webkitAnimationEnd", boss_finishHimEnd, false);
		// $("#bossCont2 .boss-legR").get(0).removeEventListener("animationend", boss_finishHimEnd, false);		
		
		if($(event.target).attr("data-animationlink"))
		{
			animationEventKill($(event.target).attr("data-animationlink"));
		}
		
		flashActionInit($("#intro-part-2-flash"));
		
		$("#worldEdge-btm").addClass("tween-worldEdge-btm-drop-a");
	
		// $("#worldEdge-btm").get(0).addEventListener("webkitAnimationEnd", goat_finished, false);
		// $("#worldEdge-btm").get(0).addEventListener("animationend", goat_finished, false);
		
		animationEventManager("#worldEdge-btm", "ANIMATION", "goat_finished");
	}
	
	function goat_finished(event)
	{
		// $("#worldEdge-btm").get(0).removeEventListener("webkitAnimationEnd", goat_finished, false);
		// $("#worldEdge-btm").get(0).removeEventListener("animationend", goat_finished, false);
		
		if($(event.target).attr("data-animationlink"))
		{
			animationEventKill($(event.target).attr("data-animationlink"));
		}		
		
		$("#worldEdge-btm").addClass("tween-worldEdge-btm-drop-b");
		
		// $("#worldEdge-btm").get(0).addEventListener("webkitAnimationEnd", endPart2Init, false);
		// $("#worldEdge-btm").get(0).addEventListener("animationend", endPart2Init, false);
		
		animationEventManager("#worldEdge-btm", "ANIMATION", "endPart2Init");		
	}
	
	function endPart2Init(event)
	{
		// $("#worldEdge-btm").get(0).removeEventListener("webkitAnimationEnd", endPart2Init, false);
		// $("#worldEdge-btm").get(0).removeEventListener("animationend", endPart2Init, false);
		
		if($(event.target).attr("data-animationlink"))
		{
			animationEventKill($(event.target).attr("data-animationlink"));
		}		
		
		var endPart2Delay = new AnimationTimer();
		timerList_add(endPart2Delay);
		endPart2Delay.time(2, endPart2);		
	}
	
	function endPart2()
 	{
		globalFade_IN("green", end_intro);
	 	
 	}
 	
 	function end_intro()
 	{
		// snow cleanup
		
		// SKIP FIX
		
		snowingHardEnd();
		
		// clear intro HTML
		
		$(INTRO.part2_id).remove();
		
		// SKIP FIX
		
		INTRO = null;
		
		introFinishWithNotice();
		
		// purge_intro();	 	
 	}
 	
 	function purge_intro()
 	{
		snowingHardEnd();
		
		INTRO = null;
		
		introFinishWithNotice();	 	
 	} 	
 	
	function introFinishWithNotice()
	{
		$(document).get(0).addEventListener("EVENT_HTML_LOADED", introFinishWithNoticeReady, false);
		
		var lf = Logic.dat_ROM["_HTML-EXT"]["file_notice"]["file"];
		var lh = new load_HTML(lf, $("#memory"));
		
		$(".fallOff").css("visibility", "hidden");
	}
	
	function introFinishWithNoticeReady(event)
	{
		$(document).get(0).removeEventListener("EVENT_HTML_LOADED", introFinishWithNoticeReady, false);
		
		$("#stage-startIntro").append($("#memory").html());
		$("#memory").html("");
		
		
		// INTRO REPLACE
		// NoticeSetup(Logic.dat_ROM["_NOTICE_AFT_INTRO"]);
		
		noticeDataGet(0);
		
		$(":root").removeClass("color-night").addClass("color-notice");
		
		globalFade_OUT(introFullyFinished);
		
	}

	function introFullyFinished()
	{
		// INTRO REPLACE
		// show notice
		
		//NoticeShow();		
	
		noticeStart();
	} 
 	
	function introNoticeFullyFinished()
	{	
		$(".noticeWrapper").remove();
		
		start_bitmapAdventure();
		
		// gameAreaClear();
		
		// prepGameMapInit();
	}
 	
	
	function flashActionInit(flashDiv)
	{
		$(flashDiv).addClass("tween-FX_Flash");
		
		$(flashDiv).get(0).addEventListener("webkitAnimationEnd", flashActionPurge, false);
		$(flashDiv).get(0).addEventListener("animationend", flashActionPurge, false);
	
		//animationEventManager(flashDiv, "ANIMATION", "flashActionPurge");
	}
	
	function flashActionPurge(event)
	{
		var TARG = event.target.id;
		
		$("#" + TARG).get(0).removeEventListener("webkitAnimationEnd", flashActionPurge, false);
		$("#" + TARG).get(0).removeEventListener("animationend", flashActionPurge, false);
		
/*
		if($(event.target).attr("data-animationlink"))
		{
			animationEventKill($(event.target).attr("data-animationlink"));
		}	
*/	
		
		$("#" + TARG).removeClass("tween-FX_Flash");
	}
	
	