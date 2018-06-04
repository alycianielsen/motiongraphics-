var main = $('#main');
var fullmoontoggle = $('#fullmoontoggle');
var starsone = $('#starsone');
var starstwo = $('#starstwo');
var earth = $('#earth');
var planet = $('#planet');
var spaceman = $('#spaceman');
var spaceship = $('#spaceship');
var spaceshiplight = $('#spaceshiplight');
var alien = $('#alien');

var tl = new TimelineMax({paused:true});





function init(){

	// make stars twinkleStars
	twinkleStars();

	// hide alien
	TweenMax.set(alien,{alpha:0});

	// main timeline
	tl
	.add(fadeStars())
	.add(fadePlanets())
	.add(flySpaceship(),"-=1.5")
	.add(shineLightBeam())
	.add(alienAppears(),"-=4")
	.add(spacemanAppears());
}

function twinkleStars(){

	TweenMax.to(starsone, 1.5, {alpha:0, repeatDelay:1.5, repeat:5, yoyo:true})
}


function startAnimation(){

	tl.play();

}

// fade in stars
function fadeStars(){

	var starTL = new TimelineMax();
		starTL.from(starsone, 1.5, {alpha:0})
			.from(starstwo, 1.5, {alpha:0})

	return starTL;
}


// fade in planets
function fadePlanets(){

	var planetsTL = new TimelineMax();
 		planetsTL.from(planet, 1.5, {alpha:0})
 				.from(earth, 1.5, {alpha:0, rotation:360, svgOrigin:"50% 50%"})


 	return planetsTL;
 }

// fly in spaceship
function flySpaceship(){

	var spaceshipTL = new TimelineMax();
	spaceshipTL.from(spaceship, 3, {x:"+=400", y:"-=400"})
	spaceshipTL.from(spaceship, 3.3, {scale:1});

	return spaceshipTL;
}


// light beam shines from ship
function shineLightBeam(){

	var lightbeamTL = new TimelineMax();
		lightbeamTL.from(spaceshiplight, 3, {alpha:0})
		lightbeamTL.to(spaceshiplight, 3.5, {opacity:0});

	return lightbeamTL;
}

// alien slides down from ship
function alienAppears(){

	var alienTL = new TimelineMax();
		alienTL.to(alien, 0.1, {alpha:1})
		       .to(alien, 3.1, { y:400, x:-50})
		       .to(alien, 3.1, {scale: 1.1, x:-100});
		

	return alienTL;
}

//spaceman floats into frame
function spacemanAppears(){

	var spacemanTL = new TimelineMax();
		spacemanTL.from(spaceman, 3.5, {alpha:0, y:-200, x:-100})
		spacemanTL.from(spaceman, 3.6, {y:-200, x:-50});

		return spacemanTL;
}






fullmoontoggle.click(startAnimation);

init();

// tl.from(starsone, 1.5, {alpha:0});

// tl.from(starstwo, 2, {alpha:0});

// tl.from(spaceship, 3, {x:800});

// tl.from(spaceman, 4, {x:800});

// tl.from(earth, 2.5, {alpha:0});

// tl.from(planet, 2.7, {alpha:0});


// var tl = new TimelineLite();
// tl.from("#earth", 1.5, {alpha:0, rotation:360}, "+=1",)
//   .from("#planet", 1, {alpha:0}, "+=1")



// var tl = new TimelineLite();
// tl.from("spaceship", 1.5, {scaleY:750})



// function spaceship () {
// 	var tl = new TimelineLite()
// 	tl.to("spaceship", 1.5, {scaleY:750})
// 	return tl;
// }







// function spaceshiplight () {
// 	var tl = new TimelineLite()
// 	tl.to( "spaceshiplight", )
// 	return tl;
// }

// function spaceman () {
// 	var tl = new TimelineLite()
// 	tl.to("spaceman")
// 	return tl;
// }


// function alien () {
// 	var tl = new TimelineLite()
// 	tl.to( "alien", )
// 	return tl;
// }



// function spaceman () {
// 	var tl = new TimelineLite()
// 	tl.to()
// 	return tl;
// }