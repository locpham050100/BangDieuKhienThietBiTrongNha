var home = document.getElementById("home");
var rooms = document.getElementById("rooms");
var automation = document.getElementById("automation");
var settings = document.getElementById("settings");


	home.style.color="#A8ECCF";
home.onclick = function(){
	home.style.color="#A8ECCF";
	rooms.style.color="#C4CBD0";
	automation.style.color="#C4CBD0";
	settings.style.color="#C4CBD0";
}
rooms.onclick = function(){
	rooms.style.color="#A8ECCF";
	home.style.color="#C4CBD0";
	automation.style.color="#C4CBD0";
	settings.style.color="#C4CBD0";
}
automation.onclick = function(){
	automation.style.color="#A8ECCF";
	home.style.color="#C4CBD0";
	rooms.style.color="#C4CBD0";
	settings.style.color="#C4CBD0";
}
settings.onclick = function(){
	settings.style.color="#A8ECCF";
	home.style.color="#C4CBD0";
	automation.style.color="#C4CBD0";
	rooms.style.color="#C4CBD0";
}