(function($){

    $.fn.initMShowcase = function(config,elements) {
    	return this.each(function(){

    		$(this).css({
    			position:"relative",
    			overflow:"hidden",
    			height:config.height,
    			width:config.width
    		});

    		// Place elements
    		for(var i in elements){

	    			$(this).append('<div class="ms-view mobile-'+i+'" data-delay="'+elements[i].delay+'" data-transition="'+elements[i].transition+'"><img src="'+elements[i].image+'" /></div>');
	    			$(this).children(".mobile-"+i)
	    				.css({
	    					position:"absolute",
	    					"z-index":1000-i
	    				})
	    				.append('<div class="dot" data-action="'+elements[i].action+'" data-speed="'+elements[i].dot_speed+'"></div>')
	    				.children(".dot")
	    				.css({
	    					top:elements[i].y,
	    					left:elements[i].x
	    				});
    		}
    	});
    };

    $.fn.playMShowcase = function() {
    	return this.each(function(){

    		function animate(MSdiv){

    			// Resetting all animations
    			$(MSdiv).children('.ms-view').each(function(index,element){
    				$(this).children('.dot').css({
    					"-webkit-animation":"none",
		    			"-webkit-animation-fill-mode":"none"
    				});
    				$(this).css({
    					"-webkit-animation":"none",
		    			"-webkit-animation-fill-mode":"none"
    				});
    			});

	    		var timeToWait=0;
	    		var len = $(MSdiv).children('.ms-view').length;
	    		$(MSdiv).children('.ms-view').each(function(index,element){

	    			// Time to wait
	    			timeToWait+=parseInt($(this).attr("data-delay"));

	    			var that = this;
	    			setTimeout(function(){

	    				// Reset slider
	    				if (index == len - 1) {
				              animate(MSdiv);
				        }

		    			// Dot animation
		    			var dot = $(that).children('.dot');
		    			dot.css({
		    				"-webkit-animation":dot.attr("data-action")+" "+dot.attr("data-speed"),
		    				"-webkit-animation-fill-mode":"forwards"
		    			});

		    			setTimeout(function(){

			    			// View animation
			    			$(that).css({
			    				"-webkit-animation":$(that).attr("data-transition")+" 1s",
			    				"-webkit-animation-fill-mode":"forwards"
			    			});

		    			},300);

		    		},timeToWait);

	    		});
    		}

    		animate(this);
    	});
    };
}(jQuery));
