// animationEventManager("#box0", "TRANSITION", "onEnd");

// animationEventManager(".box", "ANIMATION", "onEnd");

/*
function onEnd(event)
{
	if($(event.target).attr("data-animationlink"))
	{
		animationEventKill($(event.target).attr("data-animationlink"));
	}	
}
*/


function animationEventManager(div, anim_t, anim_f)
{
	var dynamicFunction;
				
	$(div).attr("data-animationlink", div);
	$(div).attr("data-animationtype", anim_t);
	$(div).attr("data-animationfunction", anim_f);
				
	dynamicFunction = window[anim_f];
				
	if(anim_t === "TRANSITION")
	{
		$(div)[0].addEventListener("webkitTransitionEnd", dynamicFunction, false); 
		$(div)[0].addEventListener("transitionend", dynamicFunction, false);
	}
			    
	if(anim_t === "ANIMATION")
	{
		$(div)[0].addEventListener("webkitAnimationEnd", dynamicFunction, false); 
		$(div)[0].addEventListener("animationend", dynamicFunction, false); 
	}
}
			
function animationEventKillAll(container)
{
	$(container + " div").each(function(i, div)
	{
		if($(div).attr("data-animationlink"))
		{
			animationEventKill($(div).attr("data-animationlink"));	
		}
	});
}

function animationEventKill(div)
{
	var dynamicName;
	var dynamicEvent;
	var dynamicFunction;
				
	dynamicName			= 	$(div).attr("data-animationlink");
	dynamicEvent 		= 	$(div).attr("data-animationtype")
	dynamicFunction 	= 	window[$(div).attr("data-animationfunction")];
						
						
	if(dynamicEvent === "TRANSITION")
	{
		$(dynamicName)[0].removeEventListener("webkitTransitionEnd", dynamicFunction, false);
		$(dynamicName)[0].removeEventListener("transitionend", dynamicFunction, false);
	}
						
	if(dynamicEvent === "ANIMATION")
	{
		$(dynamicName)[0].removeEventListener("webkitAnimationEnd", dynamicFunction, false);
		$(dynamicName)[0].removeEventListener("animationend", dynamicFunction, false); 							
	}
}