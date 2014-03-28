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

    		function prefixAnim(val_1,val_2){
    			var r_val = {
    				"-webkit-animation":val_1,
    				"-moz-animation":val_1,
    				"-o-animation":val_1,
    				"animation":val_1,
    				"-webkit-animation-fill-mode":val_2,
    				"-moz-animation-fill-mode":val_2,
    				"-o-animation-fill-mode":val_2,
    				"animation-fill-mode":val_2,
    			}
    			return r_val;
    		}

    		function animate(MSdiv){

    			// Resetting all animations
    			$(MSdiv).children('.ms-view').each(function(index,element){    				
    				$(this).children('.dot').css(prefixAnim("none","none"));
    				$(this).css(prefixAnim("none","none"));
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
                            console.log('reset');
				              animate(MSdiv);
				        }

		    			// Dot animation
		    			var dot = $(that).children('.dot');
		    			dot.css(prefixAnim(dot.attr("data-action")+" "+dot.attr("data-speed"),"forwards"));

		    			setTimeout(function(){

			    			// View animation
			    			$(that).css(prefixAnim($(that).attr("data-transition")+" 1s","forwards"));

		    			},300);

		    		},timeToWait);

	    		});
    		}

    		animate(this);
    	});
    };
}(jQuery));
