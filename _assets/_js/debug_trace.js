	/* REMOVE FROM ALL SCRIPTS WHEN BUILT */
	
	var trace = function(str)
				{ 
					console.log(str); 
				};
				
				
	var cheatMode = true;
	
	var nonAlert = 	function(str)
					{
						if($("#CONTROL_CHECK"))
						{
							$("#CONTROL_CHECK p").text(str);	
						}	
					};