	
	
	function enemySearch(hitEnemy)
	{
		trace("enemySearch();");
		trace(enemies);
		
		for(var i in enemies)
		{
			if(enemies[i].buildData.id === hitEnemy)
			{
				GAME.enemy = enemies[i];
				
				trace("enemySearch(); == " + hitEnemy);
				trace(GAME.enemy);	
			}
		}		
	}
	
	function battleMode_fromMap()
	{
		// clear weather
		
		mapWeatherClear();
		
		// clear portals
		
		portalClear();
		
		// $(window).off("resize", screenUpdate);
		
		screenUpdateCancel();
		
		$("#gameDisp").html("");
		
		battleMode_prepInit();		
	}
	
	function battleMode_prepInit()
	{
		$(document).get(0).addEventListener("EVENT_HTML_LOADED", battleMode_prepDone, false);
		
		var lf = Logic.dat_ROM["_HTML-EXT"]["file_battle_arena"]["file"];
		var lh = new load_HTML(lf, $("#memory"));		
	}
	
	function battleMode_prepDone(event)
	{
		$(document).get(0).removeEventListener("EVENT_HTML_LOADED", battleMode_prepDone, false);
		
		$("#gameDisp").append($("#memory").html());
		$("#memory").html("");
		
		battleMode_addCharacters();
	}
	
	function battleMode_addCharacters()
	{
		var entrance_delay;
		
		entrance_delay = new AnimationTimer();
		timerList_add(entrance_delay);
		entrance_delay.time(0.5, globalFade_OUT, battleMode_show);
		
		//globalFade_OUT(battleMode_show);
	}
	
	function battleMode_show()
	{
		var battleStart_delay;
		
		battleStart_delay = new AnimationTimer();
		timerList_add(battleStart_delay);
		battleStart_delay.time(2, battleMode_switch);
	}
	
	function battleMode_switch()
	{
		$("#battleArena-player1 .goat .goat-body").removeClass("goat-body-front").addClass("goat-body-back");
		$("#battleArena-player1 .goat .goat-face").css("visibility", "hidden");
		$("#battleArena-player1 .goat .goat-hands").css("visibility", "hidden");
	
		// call battle nav
		
		var cloudDisplayDelay = new AnimationTimer();
		timerList_add(cloudDisplayDelay);
		// cloudDisplayDelay.time(2, cloudDisplay);
		
		cloudDisplayDelay.time(2, function(){cloudDisplay(); addChoiceButtons();});
	}
		
		
