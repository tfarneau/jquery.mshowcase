## jQuery.MShowcase | WORK IN PROGRESS
Jquery.MShowcase is a  simple, lightweight jQuery plugin that offer you a new way to present mobile applications.

# Installation

Include script *after* the jQuery library, and include the css file (it contains all CSS animations).

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<link rel="stylesheet" href="/path/to/jquery.mshowcase.css">
<script src="/path/to/jquery.mshowcase.js"></script>
```

## Usage

Create a JS object that contains configuration about the app showcase : 

```javascript
var config = {
	width:"280px", // Width with "px" at the end
	height:"480px" // Height with "px" at the end
};
```

Create a JS object that contains all informations about app's views:

```javascript
var elements = {
	1: {
		image : "images/page1.png", // Path to the image
		action : "tap", // Touch action to simulate
		transition: "page_goLeft", // Transition when changing page
		x : "10%", // Distance from top to put the touch dot
		y : "10%", // Distance from left to put the touch dot
		delay: 1000, // Time the view is visible
		dot_speed: "0.5s" // Duration the touch event is simulate
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
```

Animate that !

```javascript
$('.mobile-showcase').initMShowcase(config,elements); // Choose div, init showcase
$('.mobile-showcase').playMShowcase(); // Play the animation
```

## Animations

Some preset animations are available, but you can add your own custom animations. 

### Dot animations 
- tap
- swipeLeft_small
- swipeLeft_medium
- swipeLeft_large
- swipeRight_small
- swipeRight_medium
- swipeRight_large

### Page animations 
- fadeOut
- page_goLeft
- page_goRight

Created by [Tristan Farneau](http://www.tristanfarneau.fr)