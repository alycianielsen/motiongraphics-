var main = $('#main');
var fullmoontoggle = $('#fullmoontoggle');
var starsone = $('#starsone');
var starstwo = $('#starstwo');
var earth = $('#fullmoontoggle');
var planet = $('#earth');
var spaceman = $('#spaceman');
var spaceship = $('#spaceship');
var spaceshiplight = $('#spaceshiplight');
var alien = $('#alien');

var tl = new TimelineMax();






tl.from(starsone, 1.5, {alpha:0});

tl.from(starstwo, 2, {alpha:0});

tl.from(earth, 2.5, {alpha:0});

tl.from(planet, 2.7, {alpha:0});

