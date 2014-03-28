var config = {
	width:"280px",
	height:"480px"
};

var elements = {
	1: {
		image : "images/page1.png",
		action : "tap",
		transition: "page_goLeft",
		x : "10%",
		y : "10%",
		delay: 1000,
		dot_speed: "0.5s"
	},
	2: {
		image : "images/page2.png",
		action : "swipeRight_medium",
		transition: "page_goLeft",
		x : "30%",
		y : "10%",
		delay : 1000,
		dot_speed: "0.5s"
	},
	3: {
		image : "images/page1.png",
		action : "swipeLeft_medium",
		transition: "page_fadeOut",
		x : "30%",
		y : "10%",
		delay : 3000,
		dot_speed: "0.5s"
	}
};

$('.mobile-showcase').initMShowcase(config,elements);
$('.mobile-showcase').playMShowcase();