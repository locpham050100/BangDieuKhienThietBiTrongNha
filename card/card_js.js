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