var mycanvas = document.getElementById('myCanvas');
var context = mycanvas.getContext("2d");
var value = 64;
var x = mycanvas.width / 2;
var y = mycanvas.height / 2;
var xm = x - 170;
var ym = y;
var xp = x + 170;
var yp = y;
var r = 100;
var startangle = -9 * Math.PI / 8;
var endangle = 1 * Math.PI / 8;
var clockwise = false;
//mau gradient
var grd = context.createLinearGradient(288,342,574,242);//gradient xanh trang
grd.addColorStop(0,"#87dcf0");
grd.addColorStop(0.15,"#87dcf0");
grd.addColorStop(0.95,"#0023d2");
grd.addColorStop(1,"#0023d2");
var grd2 = context.createLinearGradient(231,333,560,267);//gradient xanh trang
grd2.addColorStop(0,"#ffff00");
grd2.addColorStop(0.80,"#ff4500");
grd2.addColorStop(0.90,"#f40000");
//khoi tao
//ve cac nut +/- va nen cua round
  context.beginPath();  	//ve nut -
  context.arc(xm,ym,20,0,2 * Math.PI,clockwise);
  context.lineWidth=10;
  context.strokeStyle ="#e9eaf3";
  context.fillStyle ="#e9eaf3";
  context.fill();
  context.stroke();
  context.closePath();
  drawLine(xm-8,ym,xm+8,ym,"#000",1);
  context.beginPath();  	//ve nut +
  context.arc(xp,yp,20,0,2 * Math.PI,clockwise);
  context.lineWidth=10;
  context.strokeStyle ="#e9eaf3";
  context.fillStyle ="#e9eaf3";
  context.fill();
  context.stroke();
  context.closePath();
  drawLine(xp-8,yp,xp+8,yp,"#000",1);
  drawLine(xp,yp-8,xp,yp+8,"#000",1);
  value_draw(value);  	//ve round

mycanvas.addEventListener('mousedown',e =>{ //xu ly click chuot
  px = e.offsetX;
  py = e.offsetY;
  console.log("x position:%d y position: %d",px,py);
	if (e.offsetY >= y - 25 && e.offsetY <= y + 25)
		if(e.offsetX >= xm - 25 && e.offsetX<= xm + 25){
			value = value - 1;
			console.log("tru");

		}else if(e.offsetX >= xp - 25 && e.offsetX <= xp + 25){
			value = value + 1;
			console.log("cong");
		}else{}
	else{}
	if (value > 100){value = 100;}else if (value < 0) {value = 0;}
	value_draw(value);
});
function draw_background(){
	context.beginPath();
	context.fillStyle = "#ffffff";
	context.fillRect(260,155,280,220);
	context.stroke();
	context.arc(x, y, r, startangle, endangle, clockwise);
  	context.lineWidth=10;
  	context.strokeStyle ="#e9eaf3";
  	context.stroke();
  	context.closePath();
 
}
function value_write(val){
	context.beginPath();
	context.font = "75px MS UI Gothic";
	context.fillStyle = "red";
	context.textAlign = "center";
	context.fillText(val,x,y + 30);
	context.closePath();
}
function value_draw(dvalue){
	draw_background();
	var valueangle = (dvalue - 90)  * Math.PI / 80;
	context.beginPath();
	context.arc(x, y, r, startangle, valueangle, clockwise);
  	context.lineWidth=15;
  	context.strokeStyle =grd;
  	context.stroke();
	context.closePath();
	value_write(dvalue);
}

function drawLine(dlx1, dly1, dlx2, dly2,draw_color,line_width) {
  context.beginPath();
  context.strokeStyle = draw_color;
  context.lineWidth = line_width;
  context.moveTo(dlx1, dly1);
  context.lineTo(dlx2, dly2);
  context.stroke();
  context.closePath();
}

