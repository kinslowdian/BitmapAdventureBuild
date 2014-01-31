	var NEW_LEVELER = false;
	
	/* var Logic; */
	
	var LEVEL_MAIN;
	
	var LIB_DATA;
	
	/* var GAME = {}; */
	
	var BUILD_PORTAL;
	
	var PORTAL_LEVEL_TRAVEL;
	
	var mapSnapShot_html;
	
	var action_map_fadeInto;
	var action_map_fadeOut;
	
	function prepGameMapInit()
	{
		$(document).get(0).addEventListener("EVENT_HTML_LOADED", prepGameMapDone, false);
		
		var lf = Logic.dat_ROM["_HTML-EXT"]["file_roam"]["file"];
		var lh = new load_HTML(lf, $("#memory"));		
	}
	
	function prepGameMapDone(event)
	{
		$(document).get(0).removeEventListener("EVENT_HTML_LOADED", prepGameMapDone, false);
		
		$("#gameDisp").append($("#memory").html());
		$("#memory").html("");
		
		prepGameMapRest();
	}
	
	
	function prepGameMapRest()
	{
		trace("prepGameMapRest();");
		
		DISPLAY.tileWidth = 80;
		DISPLAY.tileHeight = 80;
		
		PORTAL_LEVEL_TRAVEL = false;
		
		mapSnapShot_html = $("#wrapper-roam").html();
		
		// FADE EDIT
		// map_fadeIntoInit(true);
		
		$(window).resize(function(){ screenUpdate(); });
		
		GAME.mapLevel = 0;
		
		prepHtmlLibInit();
		
		// html_lib_read();
		
		// JSON_Init();
	}
	
	// FADE EDIT
	
	/// ------------------------------------------------------------------------- FADE
	
	
	/// IN
	
/*
	function gameMapFade_IN()
	{
		
	}
*/
	
	
	
	/// IN
	
/*
	function map_fadeIntoInit(setToVisible)
	{
		var fadeAlpha;
		
		setToVisible ? fadeAlpha = 1 : fadeAlpha = 0;
		
		$(".fader > div").addClass("fadeBlock");
		$(".fadeBlock").addClass("fadeBlock-green");
		$(".fadeBlock").css("opacity", fadeAlpha);
	}
*/
	
/*
	function map_fadeIntoRun(setAlpha, action)
	{
		action ? action_map_fadeInto = action : action_map_fadeInto = "";
		
		
		$(".fadeBlock").addClass("tween-fadeBlock");
		
		$(".fadeBlock")[0].addEventListener("webkitTransitionEnd", map_fadeIntoEvent, false);
		$(".fadeBlock")[0].addEventListener("transitionend", map_fadeIntoEvent, false);
			
		$(".fadeBlock").css("opacity", setAlpha);
	}
*/
	
/*
	function map_fadeIntoEvent(event)
	{
		$(".fadeBlock")[0].removeEventListener("webkitTransitionEnd", map_fadeIntoEvent, false);
		$(".fadeBlock")[0].removeEventListener("transitionend", map_fadeIntoEvent, false);
		
		if($(".fadeBlock").css("opacity") === "0")
		{
			$(".fadeBlock").removeClass("fadeBlock-green");
			$(".fadeBlock").removeClass("tween-fadeBlock");
			$(".fadeBlock").removeAttr('style');
			$(".fader > div").removeClass("fadeBlock");
		}
		
		switch(action_map_fadeInto)
		{
			case "GET_WEATHER_TITLE":
			{
				dayTimeTitleUseCheck();
				
				break;
			}
			
			default:
			{
				
			}
		}
	}
*/
	
	/// OUT
	
/*
	function map_fadeOutInit(setToVisible)
	{
*/
/*
		var fadeAlpha;
		
		setToVisible ? fadeAlpha = 1 : fadeAlpha = 0;
*/
		
		// $(".fader > div").addClass("fadeBlock");
		// $(".fadeBlock").addClass("fadeBlock-green");
		// $(".fadeBlock").css("opacity", fadeAlpha);
		
/* 	} */
	
/*
	function map_fadeOutRun(setAlpha, action)
	{
		action ? action_map_fadeOut = action : action_map_fadeInto = "";
		
		
		$(".fadeBlock").addClass("tween-fadeBlock");
		
		$(".fadeBlock")[0].addEventListener("webkitTransitionEnd", map_fadeOutEvent, false);
		$(".fadeBlock")[0].addEventListener("transitionend", map_fadeOutEvent, false);
			
		$(".fadeBlock").css("opacity", setAlpha);
	}
*/
	
/*
	function map_fadeOutEvent(event)
	{
		$(".fadeBlock")[0].removeEventListener("webkitTransitionEnd", map_fadeOutEvent, false);
		$(".fadeBlock")[0].removeEventListener("transitionend", map_fadeOutEvent, false);
		
		if($(".fadeBlock").css("opacity") === "0")
		{
			$(".fadeBlock").removeClass("fadeBlock-green");
			$(".fadeBlock").removeClass("tween-fadeBlock");
			$(".fadeBlock").removeAttr('style');
			$(".fader > div").removeClass("fadeBlock");
		}
		
		switch(action_map_fadeOut)
		{
			case "LOAD_NEW_LEVEL":
			{
				refreshRebuildLevel();
				
				break;
			}
			
			default:
			{
				
			}
		}
	}
*/
	
	/// ------------------------------------------------------------------------- FADE
	
/*
	function JSON_Init()
	{
		var xhr = new XMLHttpRequest();
		var xhr_method = "GET"; //other option is POST
		var xhr_url = "_assets/_data/data.json"; //file
		var xhr_async = true;
		
		xhr.open(xhr_method, xhr_url, xhr_async);
			
		xhr.onload = JSON_Done;
			
		xhr.send();	
	}
*/
	
/*
	function JSON_Done()
	{
		Logic = JSON.parse(this.responseText);
		
		trace("JSON_Done();");
		trace(Logic);
		
		html_lib_read();
	}
*/
	
	
	function html_lib_read()
	{
		//$("#memory").load(Logic.dat_ROM["html_data"]["html_lib"], function(){ html_lib_store(); });
	}
	
	
	function prepHtmlLibInit()
	{
		$(document).get(0).addEventListener("EVENT_HTML_LOADED", prepHtmlLibDone, false);
		
		var lf = Logic.dat_ROM["_HTML-EXT"]["file_lib"]["file"];
		var lh = new load_HTML(lf, $("#memory"));		
	}
	
	function prepHtmlLibDone(event)
	{
		$(document).get(0).removeEventListener("EVENT_HTML_LOADED", prepHtmlLibDone, false);
		
		html_lib_store();
	}
	
	
	
	
	function html_lib_store()
	{	
		LIB_DATA = $("#memory").html();
		
		trace("LIB_DATA == ");
		trace(LIB_DATA);
		
		levelInit();
	}
	
	function html_lib_reuse()
	{
		$("#memory").html(LIB_DATA);
		
		levelInit();
	}
	
	function html_data_use(dat, classBlock)
	{
		trace("!!!!!!!!!!!!! html_data_use();");
		
		var cb;
		
		$("#memory").html($(dat).html());
		
		cb = $("#memory ." + classBlock).html();
		
		return cb;
		
	}
	
	function html_data_purge()
	{
		$("#memory").html('');
	}
	
	function levelInit()
	{
		// BUG?
		screenUpdate();
		
		if(NEW_LEVELER)
		{
		
		}
		
		
		// LEVEL MAIN
		
		LEVEL_MAIN = new LEVEL(Logic.dat_ROM["level" + GAME.mapLevel]["levelSettings"]);
		
		LEVEL_MAIN.create();
		
		levelInit_field();
		
		trace("LEVEL_MAIN ==");
		
		trace(LEVEL_MAIN);
	}
	
	function levelInit_field()
	{
		if(NEW_LEVELER)
		{

		}
		
		var woodlandHeight = LEVEL_MAIN.buildData.block_h + DISPLAY.screenSections;
		var hitTestBlock_css;
		var levelFinish_css;
		
		
		$(".field").css("height", LEVEL_MAIN.buildData.block_h + "px");
		
		$(".woodland").css("height", woodlandHeight + "px");
		
		$(".woodland-bg .woodland-bg-border").css("height", LEVEL_MAIN.buildData.block_h + "px");
		// $(".woodland-bg .woodland-bg-border").addClass("pixels_btm_bg_bushBorder");
		$(".woodland-bg .woodland-bg-border").addClass("pixels_forest");
		
		levelFinish_css =	{
								"-webkit-transform"	: "translateY(" + LEVEL_MAIN.buildData.block_h + "px)",
								"transform"			: "translateY(" + LEVEL_MAIN.buildData.block_h + "px)"
							};
		
		
		hitTestBlock_css = 	{
								"-webkit-transform"	: "translateY(" + LEVEL_MAIN.buildData.block_h + "px)",
								"transform"			: "translateY(" + LEVEL_MAIN.buildData.block_h + "px)"
							};
		
		$(".fieldEdge-B").css(hitTestBlock_css);
		
		$(".woodland-bg .woodland-bg-levelFinish").css(levelFinish_css);
		
		
		DISPLAY.screenSectionCurrent = 0;
		DISPLAY.screenSectionMove = false;
		
		if(LEVEL_MAIN.buildData.useTime)
		{
			initTime();
		}
		
		levelInit_weather();
	}
	
	function levelInit_weather()
	{
		
		for(var i in LEVEL_MAIN.buildData.weather)
		{
			switch(LEVEL_MAIN.buildData.weather[i].weather)
			{
				case "CLEAR":
				{
				
					break;
				}
				
				case "FOG":
				{
					fogInit();
					
					break;
				}
				
				case "RAIN":
				{
					rainingInit();
					
					break;
				}
				
				case "SNOW":
				{
					snowingInit(".weather-snow", "pixels_weather-snow", "snowFlake-white");
					
					break;
				}
				
				case "WIND":
				{
					//windInit();
					
					windInit(6, 8);
					
					break;
				}
			}
		}
		
		levelform();
	}

	function levelform()
	{
		var i;
		
		i = 0;
		
		// WALLS BUSHES
		$.each(Logic.dat_ROM["level" + GAME.mapLevel]["texture"]["BUSH"], function(item)
		{
			var b = new levelBuild(Logic.dat_ROM["level" + GAME.mapLevel]["texture"]["BUSH"][item], i, "BUSH", ".field-area");
			
			b.create();
			
			i++;
		});
		
		
		i = 0;
		
		// FLOWERS NON BLOCKING ART
		$.each(Logic.dat_ROM["level" + GAME.mapLevel]["texture"]["FLOWER_LIGHT"], function(item)
		{
			var f = new levelBuild(Logic.dat_ROM["level" + GAME.mapLevel]["texture"]["FLOWER_LIGHT"][item], i, "FLOWER_LIGHT", ".field-area");
			
			f.create();
			
			i++;
		});
		
		// SIDE AREAS
		$.each(Logic.dat_ROM["level" + GAME.mapLevel]["clearing"], function(item)
		{
			var c = new woodlandClearings(Logic.dat_ROM["level" + GAME.mapLevel]["clearing"][item], ".woodland-areas", LIB_DATA);
			
			c.create();
		});			
		
		// MAP ENEMY
		$.each(Logic.dat_ROM["level" + GAME.mapLevel]["enemyPlayers"]["ENEMY"], function(item)
		{
			var e = new characterPlace(Logic.dat_ROM["level" + GAME.mapLevel]["enemyPlayers"]["ENEMY"][item], ".enemy-area", LIB_DATA);
				
			e.create();
				
		});
		
		i = 0;
		
		BUILD_PORTAL = new Array();
		
		// PORTALS
		$.each(Logic.dat_ROM["level" + GAME.mapLevel]["portal"], function(item)
		{
			var p = new portalPlace(Logic.dat_ROM["level" + GAME.mapLevel]["portal"][item], i, ".portal-area", LIB_DATA);
			
			p.create();
			
			BUILD_PORTAL.push(p);
			
			i++;
		});	
		
		
		// call once all html data has been used
		html_data_purge();
		
		run();
	}
	
	var LEVEL = function(settings)
	{
		this.settings = settings;
		this.buildData = {};
	}
	
	LEVEL.prototype.create = function()
	{
		this.buildData.levelNumber 	= this.settings.n; 
		this.buildData.block_w 		= this.settings.w * 80;
		this.buildData.block_h 		= this.settings.h * 80;
		this.buildData.weather		= this.settings.w;
		this.buildData.useTime		= this.settings.t;
		this.buildData.entry_x		= this.settings.entry_x;
		this.buildData.entry_y		= this.settings.entry_y;
		this.buildData.title		= this.settings.title;
	
		delete this.settings;
	}
	
	
	var levelBuild = function(settings, num, set, container)
	{
		this.settings = settings;
		this.container = container;
		this.buildData = {};
		this.num = num;
		this.set = set;	
	};
	
	levelBuild.prototype.create = function()
	{
		this.buildData.block_x	= this.settings.x * 80;
		this.buildData.block_y	= this.settings.y * 80;
		this.buildData.block_w	= this.settings.w * 80;
		this.buildData.block_h	= this.settings.h * 80;
		//this.buildData.id		= this.settings.n;
		this.buildData.id		= "level" + GAME.mapLevel + "_" + this.set + this.num;
		this.buildData.pixels	= this.settings.p;
		this.buildData.html 	= '<div id="' + this.buildData.id + '" class="' + this.buildData.pixels + '"></div>';
		this.buildData.css		= 	{
										"width"				: this.buildData.block_w + "px",
										"height"			: this.buildData.block_h + "px",
										"position"			: "absolute",
										"-webkit-transform"	: "translate(" + this.buildData.block_x + "px, " + this.buildData.block_y + "px)",
										"transform"			: "translate(" + this.buildData.block_x + "px, " + this.buildData.block_y + "px)"
									};
								
		$(this.container).append(this.buildData.html);
		$(this.container + " #" + this.buildData.id).css(this.buildData.css);
		
		delete this.settings;		
	};
	
	var woodlandClearings = function(settings, container, htmlData)
	{
		this.settings = settings;
		this.library = htmlData;
		this.container = container;
		this.buildData = {};
	};
	
	woodlandClearings.prototype.create = function()
	{
		var html_0;
		var html_1;
		
		this.buildData.block_x	= this.settings.x * 80;
		this.buildData.block_y	= this.settings.y * 80;
		this.buildData.block_w	= this.settings.w * 80;
		this.buildData.block_h	= this.settings.h * 80;
		this.buildData.id		= this.settings.n;
		this.buildData.charType = this.settings.t;
		this.buildData.html 	= html_data_use(this.library, "_" + this.buildData.charType);
		
		delete this.settings;
		delete this.library;
		
		html_0 	= '<div id="';
		html_1	= this.buildData.html.split(html_0);
		
		this.buildData.htmlFinal = html_0 + this.buildData.id + html_1[1];
		
		trace(this.buildData.html);
		
		
		this.buildData.css		= 	{
										"-webkit-transform"	: "translate(" + this.buildData.block_x + "px, " + this.buildData.block_y + "px)",
										"transform"			: "translate(" + this.buildData.block_x + "px, " + this.buildData.block_y + "px)"
									};
		
		
		$(this.container).append(this.buildData.htmlFinal);
		
		
		$("#" + this.buildData.id).css(this.buildData.css);
	};
	
	var characterPlace = function(settings, container, htmlData)
	{
		this.settings = settings;
		this.library = htmlData;
		this.container = container;
		this.buildData = {};
		
		trace("WRONG?");
		trace(this);	
	};
	
	characterPlace.prototype.create = function()
	{
		var html_0;
		var html_1;
		
		this.buildData.block_x	= this.settings.x * 80;
		this.buildData.block_y	= this.settings.y * 80;
		this.buildData.block_w	= this.settings.w * 80;
		this.buildData.block_h	= this.settings.h * 80;
		this.buildData.id		= this.settings.n;
		this.buildData.charType = this.settings.t;
		this.buildData.html 	= html_data_use(this.library, "_" + this.buildData.charType);
		
		delete this.settings;
		delete this.library;
		
		html_0 	= '<div id="';
		html_1	= this.buildData.html.split(html_0);
		
		this.buildData.htmlFinal = html_0 + this.buildData.id + html_1[1];
		
		
		trace("error after");
		trace(this.buildData.html);
		
		
		this.buildData.css		= 	{
										"-webkit-transform"	: "translate(" + this.buildData.block_x + "px, " + this.buildData.block_y + "px)",
										"transform"			: "translate(" + this.buildData.block_x + "px, " + this.buildData.block_y + "px)"
									};
		
		
		$(this.container).append(this.buildData.htmlFinal);
		
		
		$("#" + this.buildData.id).css(this.buildData.css);

	};
	
	var portalPlace = function(settings, num, container, htmlData)
	{
		this.settings = settings;
		this.library = htmlData;
		this.container = container;
		this.buildData = {};
		this.star_ARR = new Array();
		this.num = num;
	};
	
	portalPlace.prototype.create = function()
	{
		var html_0;
		var html_1;
		
		this.buildData.block_x			= this.settings.x * 80;
		this.buildData.block_y			= this.settings.y * 80;
		this.buildData.block_w			= this.settings.w * 80;
		this.buildData.block_h			= this.settings.h * 80;
		//this.buildData.id				= this.settings.n;
		this.buildData.id				= "level" + GAME.mapLevel + "_portal" + this.num;
		this.buildData.charType 		= this.settings.t;
		this.buildData.html 			= html_data_use(this.library, "_" + this.buildData.charType);
		this.buildData.collideInstance 	= this.settings.collideInstance;
		this.buildData.travel			= this.settings.travel;
		this.buildData.journey			= this.settings.journey;
		this.buildData.exitDir			= this.settings.exitDir;
		this.buildData.starMass			= this.settings.stars;
		
		
		if(this.settings.jump != null)
		{
			this.buildData.jump = this.settings.jump;
		}
		
		// COULD FAIL BECAUSE OF null
		if(this.settings.jump_portal != null)
		{
			this.buildData.enterThroughPortal = true;
			this.buildData.enterThroughPortal_num = this.settings.jump_portal;
		}
		
		else
		{
			this.buildData.enterThroughPortal = false;
		}
		
		delete this.settings;
		delete this.library; 

		html_0 	= '<div id="';
		html_1	= this.buildData.html.split(html_0);
		
		this.buildData.htmlFinal = html_0 + this.buildData.id + html_1[1];
		
		
		this.buildData.css		= 	{
										"-webkit-transform"	: "translate(" + this.buildData.block_x + "px, " + this.buildData.block_y + "px)",
										"transform"			: "translate(" + this.buildData.block_x + "px, " + this.buildData.block_y + "px)"
									};
		
		
		$(this.container).append(this.buildData.htmlFinal);
		
		$("#" + this.buildData.id).attr("data-collideInstance", this.buildData.collideInstance);
		$("#" + this.buildData.id).attr("data-travel", this.buildData.travel);
		$("#" + this.buildData.id).attr("data-exitDir", this.buildData.exitDir);
		$("#" + this.buildData.id).attr("data-x", this.buildData.block_x);
		$("#" + this.buildData.id).attr("data-y", this.buildData.block_y);
		$("#" + this.buildData.id).attr("data-journey", this.buildData.journey);
		$("#" + this.buildData.id).attr("data-jump", this.buildData.jump);
		
		if(this.buildData.enterThroughPortal)
		{
			$("#" + this.buildData.id).attr("data-jump-to", this.buildData.enterThroughPortal_num);
		}
		
		else
		{
			$("#" + this.buildData.id).removeAttr("data-jump-to");
		}
		

		
		
		
		$("#" + this.buildData.id).css(this.buildData.css);
		
									// (holder, w, h, mass) 	
		this.starArea = new StarCont(this.buildData.id, $("#" + this.buildData.id).width(), $("#" + this.buildData.id).height(), this.buildData.starMass);
		
		starConstruct(this);
		
		trace("PORTAL CHECK!!! - ");
		trace(this);
	};
	
	
	function run()
	{
		readPortals();
		
		controlInit();
		
		// use main fade
		// map_fadeIntoRun(0, "GET_WEATHER_TITLE");
		
		globalFade_OUT(dayTimeTitleUseCheck);
	}
	
	function dayTimeTitleUseCheck()
	{
		
		if(NEW_LEVELER)
		{

		}
		
		if(LEVEL_MAIN.buildData.useTime)
		{
			dayTimeTitleInit();
		}
		
		else
		{
			playerEnterMap();
		}		
	}
	
	function dayTimeTitleInit()
	{
		var exitFrame;
		
		$(".mapTitle").css("visibility", "visible");
		$(".mapTitle p:nth-child(1)").addClass("mapTitleText font-dosis hideMapTitle");
		$(".mapTitle p:nth-child(2)").addClass("levelTitleText font-dosis hideMapTitle");
		
		$(".mapTitleText").text(TIME.daylight);
		$(".levelTitleText").text(LEVEL_MAIN.buildData.title.toUpperCase());
		
		exitFrame = setTimeout(dayTimeTitleShow, 20);
	}
	
	function dayTimeTitleShow()
	{
		$(".mapTitleText").removeClass("hideMapTitle").addClass("showMapTitle tweenMapTitle");
		
		$(".levelTitleText").removeClass("hideMapTitle").addClass("showMapTitle tweenMapTitle");
	
		$(".mapTitleText")[0].addEventListener("webkitTransitionEnd", dayTimeTitleEvent, false);	
		$(".mapTitleText")[0].addEventListener("transitionend", dayTimeTitleEvent, false);
	}
	
	function dayTimeTitleEvent(event)
	{
		
		switch(event.propertyName)
		{
			case "-webkit-transform" : case "transform":
			{
				var delay = setTimeout(function(){ $(".mapTitleText").css("opacity", 0); $(".levelTitleText").css("opacity", 0); }, 2000);
				
				break;
			}
			
			case "opacity":
			{
				
				$(".mapTitleText")[0].removeEventListener("webkitTransitionEnd", dayTimeTitleEvent, false);	
				$(".mapTitleText")[0].removeEventListener("transitionend", dayTimeTitleEvent, false);
				
				$(".mapTitle p").text("");
				$(".mapTitle p").removeClass("mapTitleText font-dosis showMapTitle tweenMapTitle");
				
				$(".mapTitle").removeAttr('style');
				$(".mapTitle p").removeAttr('style');
				
				playerEnterMap();
				
				break;
			}
		}
	}
	
	
	
	function refreshRebuildLevel()
	{
		alert("refreshRebuildLevel();");
		
		// clear weather
		
		mapWeatherClear();
		
		
		// clear portals
		
		portalClear();
		
		// clear arrays objects (Wind, Snow, Stars, Textures)
		
		
		$("#wrapper-roam").html(mapSnapShot_html);
		
		trace(window);
		
		// GAME.mapLevel = 1;
		
		NEW_LEVELER = true;
		
		LEVEL_MAIN = null;
		
		MAP_PLAYER.enter = true;
		
		html_lib_reuse();
	}
	
	
	
	function screenUpdate()
	{
		var css_x;
		var css_y;
		var x;
		var y;
		
		
		DISPLAY._width 			= window.screen.width;
		DISPLAY._height 		= window.screen.height;
		DISPLAY._width_row 		= Math.round(DISPLAY._width / DISPLAY.tileWidth);
		DISPLAY._height_row 	= Math.round(DISPLAY._height / DISPLAY.tileHeight);
		DISPLAY._width_fill 	= DISPLAY._width_row * DISPLAY.tileWidth;
		DISPLAY._height_fill	= DISPLAY._height_row * DISPLAY.tileHeight;
		
		// fix blurring:
		DISPLAY.center_X		= Math.floor(($("#stage-roam").width() - $(".woodland").width()) * 0.5);
		
		DISPLAY.center_y	= 0;
		

		DISPLAY.center_X < 0 ? x = DISPLAY.center_X : x = 0;
		
		css_x = {
					"-webkit-transform"	: "translateX(" + x + "px)",
					"transform" 		: "translateX(" + x + "px)"
				};
			
		$(".stageCenter-x").css(css_x);
		
		
		DISPLAY.stageOffset = $(".woodland").offset().left;
		
		DISPLAY.viewHeight = document.height;
		
		DISPLAY.y = 0;	
		DISPLAY.current_y = 0;
		
		$("#dev #dev_w").text($("#stage-roam").width());
		$("#dev #dev_cx").text(DISPLAY.center_X);
		
		$("#dev #dev_hy").text(document.height + "px");
		
		if(!DISPLAY.screenSections)
		{
			screenDivision();	
		}
	}
	
	function screenDivision()
	{
		DISPLAY._height <= 480 ?  DISPLAY.screenSections = 240 : DISPLAY.screenSections = 400;
	}
	