{
	let infocasa1;
	let infocasa2;
	let infocasa3;
	let infocasa4;
	let infocasa5;
	let infocasa6;
	let infocasa7;
	let infocasa8;
	let infocasa9;

	let guardarInfoCasa1=function(){
		localStorage.setItem("casa", "casa1");
	}

	let guardarInfoCasa2=function(){
		localStorage.setItem("casa", "casa2");
	}

	let guardarInfoCasa3=function(){
		localStorage.setItem("casa", "casa3");	
	}

	let guardarInfoCasa4=function(){
		localStorage.setItem("casa", "casa4");	
	}

	let guardarInfoCasa5=function(){
		localStorage.setItem("casa", "casa5");
	}

	let guardarInfoCasa6=function(){
		localStorage.setItem("casa", "casa6");
	}

	let guardarInfoCasa7=function(){
		localStorage.setItem("casa", "casa7");
	}

	let guardarInfoCasa8=function(){
		localStorage.setItem("casa", "casa8");
	}

	let guardarInfoCasa9=function(){
		localStorage.setItem("casa", "casa9");
	}

	let init=function(){
		infocasa1 = document.getElementById("casa1");
		infocasa2 = document.getElementById("casa2");
		infocasa3 = document.getElementById("casa3");
		infocasa4 = document.getElementById("casa4");
		infocasa5 = document.getElementById("casa5");
		infocasa6 = document.getElementById("casa6");
		infocasa7 = document.getElementById("casa7");
		infocasa8 = document.getElementById("casa8");
		infocasa9 = document.getElementById("casa9");

		infocasa1.addEventListener("click", guardarInfoCasa1);
		infocasa2.addEventListener("click", guardarInfoCasa2);
		infocasa3.addEventListener("click", guardarInfoCasa3);
		infocasa4.addEventListener("click", guardarInfoCasa4);
		infocasa5.addEventListener("click", guardarInfoCasa5);
		infocasa6.addEventListener("click", guardarInfoCasa6);
		infocasa7.addEventListener("click", guardarInfoCasa7);
		infocasa8.addEventListener("click", guardarInfoCasa8);
		infocasa9.addEventListener("click", guardarInfoCasa9);
	}
	
	window.onload=init;
}