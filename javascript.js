var home = document.getElementById("home");
var rooms = document.getElementById("rooms");
var automation = document.getElementById("automation");
var settings = document.getElementById("settings");


	rooms.style.color="#A8ECCF";
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

//-----------------------------------------------------------------------------------------
var air_off = document.getElementById("air_off");
var air_sw = document.getElementById("air_sw");
// var air_st = 0;

// air_sw.addEventListener('mousedown', () => {
// 	if(air_st==0){
// 		air.src = 'ice-crystal-on.png';
// 		air.style.transition = '0.4s';
// 		air_st = 1;
// 	}
// 	else{
// 		air.src = 'ice-crystal-off.png';
// 		air_st = 0;
// 	}
// })	

// air_sw.onclick = function(){
// 	air_off.classList.toggle('fade');
// }	
air_sw.addEventListener('mousedown', () => {
	air_off.classList.toggle('fade');
})

var light_off = document.getElementById("light_off");
var light_sw = document.getElementById("light_sw");
light_sw.addEventListener('mousedown', () => {
	light_off.classList.toggle('fade');
})

var spk_off = document.getElementById("spk_off");
var spk_sw = document.getElementById("spk_sw");
spk_sw.addEventListener('mousedown', () => {
	spk_off.classList.toggle('fade');
})

var tv_off = document.getElementById("tv_off");
var tv_sw = document.getElementById("tv_sw");
var dt_tv = document.getElementById("dt_tv");
var on=0;
tv_sw.addEventListener('mousedown', () => {
	tv_off.classList.toggle('fade');
	if(on==0){
		dt_tv.innerText = 'On';
		on=1;
	}else{
		dt_tv.innerText = 'Off';
		on=0;
	}
	
})

var game_off = document.getElementById("game_off");
var game_sw = document.getElementById("game_sw");
var dt_game = document.getElementById("dt_game");
var on1=0;
game_sw.addEventListener('mousedown', () => {
	game_off.classList.toggle('fade');
	if(on1==0){
		dt_game.innerText = 'On';
		on1=1;
	}else{
		dt_game.innerText = 'Off';
		on1=0;
	}
	
})

var sound_off = document.getElementById("sound_off");
var sound_sw = document.getElementById("sound_sw");
var dt_sound = document.getElementById("dt_sound");
var on2=0;
sound_sw.addEventListener('mousedown', () => {
	sound_off.classList.toggle('fade');
	if(on2==0){
		dt_sound.innerText = 'Connected';
		on2=1;
	}else{
		dt_sound.innerText = 'Disconnected';
		on2=0;
	}
	
})

//-------------------------------------------------------------------------------------------
var pause = document.getElementById("pause");
var play = document.getElementById("play");
var picoff = document.getElementById("pic-off")
let plai=1;
document.getElementById("card_media").classList.add('changecolor');
play.addEventListener('mousedown', () => {
	pause.classList.toggle('fadeout');
	play.classList.toggle('fadein');
	picoff.classList.toggle('fadein');
	if(plai==0){
		document.getElementById("card_media").classList.add('changecolor');
		plai=1;
	}else{
		document.getElementById("card_media").classList.remove('changecolor');
		plai=0;
	}
	
})
//---------------------------------------------------------------------------------------------
var card_air = document.getElementById("card_air");
var temp = document.getElementById("num_temp");
// var num_temp_air = document.getElementById("num_temp_air");
let value = document.getElementById("num_temp_air").innerHTML;
let data = parseInt(value,10);


document.getElementById("air_off").addEventListener('mousedown', () => {
	console.log(data);
	value = document.getElementById("num_temp_air").innerHTML;
	data=parseInt(value,10)
	temp.innerText=data;
	card_air.classList.add('scrollup');
	card_light.classList.remove('scrollup');
})
document.getElementById("stick").addEventListener('mousedown', () => {
	card_air.classList.remove('scrollup');
})
document.getElementById("inc_btn").addEventListener('mousedown', () => {
	if(data<30){
		data=data+1;
	}else if(data==30){
		data=data;
	}
	temp.innerText=data;
})
document.getElementById("dec_btn").addEventListener('mousedown', () => {
	if(data>12){
		data=data-1;
	}else if(data==12){
		data=data;
	}
	temp.innerText=data;
})
document.getElementById("cancel_btn").addEventListener('mousedown', () => {
	card_air.classList.remove('scrollup');
})
document.getElementById("confirm_btn").addEventListener('mousedown', () => {
	num_temp_air.innerText=data;
	card_air.classList.remove('scrollup');
})

var card_light = document.getElementById("card_light");
document.getElementById("light_off").addEventListener('mousedown', () => {
	card_light.classList.add('scrollup');
	card_air.classList.remove('scrollup');
})
document.getElementById("cancel_btn1").addEventListener('mousedown', () => {
	card_light.classList.remove('scrollup');
})
document.getElementById("confirm_btn1").addEventListener('mousedown', () => {
	card_light.classList.remove('scrollup');
	document.getElementById("num_temp_light").innerHTML=range_slider.value;
})
document.getElementById("stick1").addEventListener('mousedown', () => {
	card_light.classList.remove('scrollup');
})

var range_slider = document.getElementById("range_slider");
var num_tempk = document.getElementById("num_tempk");
num_tempk.innerHTML = range_slider.value;
range_slider.oninput = function() {
	num_tempk.innerHTML = this.value;
}