// burger
function showDiv() {
	
	document.querySelector(".inside-burger").style.display ="block";
	document.querySelector(".burger").style.display ="none";
	document.querySelector(".close").style.display ="flex";
}

function hideDiv() {
	document.querySelector(".inside-burger2").style.display ="none";
}

function closeDiv() {
	
	document.querySelector(".inside-burger").style.display ="none";
	document.querySelector(".inside-burger2").style.display ="block";
	setTimeout(hideDiv , 400);
	document.querySelector(".burger").style.display ="block";
	document.querySelector(".close").style.display ="none";
	
}


/*var x = document.querySelectorAll(".image");
function nextImage() {

	for(var i = 0; i < x.lenth; i++){
		
		//x[i].style.display="block";
		x[i].style.display="none";
	}
} */

	 
	// images and articles

function nextImage() {
	
	 var x1 = document.querySelector(".first-image");
	var x2 = document.querySelector(".second-image");
	var x3 = document.querySelector(".third-image");
var a1 = document.querySelector(".discover");
var a2 = document.querySelector(".globe");
var a3 = document.querySelector(".materials");
 
	if(x1.style.display !=="none" && a1.style.display !=="none"){
		x1.style.display ="none";
		x2.style.display ="block";
		a1.style.display ="none";
		a2.style.display ="block";
	}
	else if(x2.style.display !=="none" && a2.style.display !=="none"){
		x2.style.display ="none";
		x3.style.display ="block";
		a2.style.display ="none";
		a3.style.display ="block";
	}
	else if(x3.style.display !=="none" && a3.style.display !=="none") {  
		x3.style.display ="none";
		x1.style.display ="block";
		a3.style.display ="none";
		a1.style.display ="block";
	}
/*	else{
		
	} */
	
}

function previousImage() {
	
	 var x1 = document.querySelector(".first-image");
	var x2 = document.querySelector(".second-image");
	var x3 = document.querySelector(".third-image");
	var a1 = document.querySelector(".discover");
var a2 = document.querySelector(".globe");
var a3 = document.querySelector(".materials");
	
	if(x1.style.display !=="none" && a1.style.display !=="none"){
		x1.style.display ="none";
		x3.style.display ="block";
		a1.style.display ="none";
		a3.style.display ="block";
	}
	else if(x2.style.display !=="none" && a2.style.display !=="none"){
		x2.style.display ="none";
		x1.style.display ="block";
		a2.style.display ="none";
		a1.style.display ="block";
	}
	else if(x3.style.display !=="none" && a3.style.display !=="none"){
		x3.style.display ="none";
		x2.style.display ="block";
		a3.style.display ="none";
		a2.style.display ="block";
	}
/*	else{
		
	} */
}

