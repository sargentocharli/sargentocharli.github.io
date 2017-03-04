{
	let botonPrincipal;
	let botonSobreMi;
	let botonProyectos;
	let botonCV;
	let botonContacto;
	let botonRojo;

	let estatica = function() {
		document.getElementById("contenidoMonitor").style.background = "url('imagenes/estatica.gif')";
		document.getElementById("contenidoMonitor").style.height = "100%";
		document.getElementById("contenidoMonitorSobreMi").style.display = "none";
		document.getElementById("contenidoMonitorProyectos").style.display = "none";
		document.getElementById("contenidoMonitorCV").style.display = "none";
		document.getElementById("contenidoMonitorContacto").style.display = "none";
		document.getElementById("contenidoMonitorPrincipal").style.display = "none";
	}

	let mostrarPrincipal = function() {
		document.getElementById("contenidoMonitor").style.height = "100%";
		document.getElementById("contenidoMonitor").style.background = "url('imagenes/blanco.png')";
		document.getElementById("contenidoMonitorSobreMi").style.display = "none";
		document.getElementById("contenidoMonitorProyectos").style.display = "none";
		document.getElementById("contenidoMonitorCV").style.display = "none";
		document.getElementById("contenidoMonitorContacto").style.display = "none";
		document.getElementById("contenidoMonitorPrincipal").style.display = "inline-block";	
		document.getElementById("monitorVacio").style.display = "inline-block";
	}

	let mostrarSobreMi = function() {
		document.getElementById("contenidoMonitor").style.height = "100%";
		document.getElementById("contenidoMonitor").style.background = "url('imagenes/blanco.png')";
		document.getElementById("contenidoMonitorPrincipal").style.display = "none";
		document.getElementById("contenidoMonitorSobreMi").style.display = "inline-block";
		document.getElementById("contenidoMonitorProyectos").style.display = "none";
		document.getElementById("contenidoMonitorCV").style.display = "none";
		document.getElementById("contenidoMonitorContacto").style.display = "none";
		document.getElementById("contenidoMonitor").style.display = "inherit";
	}

	let mostrarProyectos = function() {
		document.getElementById("contenidoMonitor").style.height = "100%";
		document.getElementById("contenidoMonitor").style.background = "url('imagenes/blanco.png')";
		document.getElementById("contenidoMonitorPrincipal").style.display = "none";
		document.getElementById("contenidoMonitorSobreMi").style.display = "none";
		document.getElementById("contenidoMonitorProyectos").style.display = "inline-block";
		document.getElementById("contenidoMonitorCV").style.display = "none";
		document.getElementById("contenidoMonitorContacto").style.display = "none";
		document.getElementById("contenidoMonitor").style.display = "inherit";
	}

	let mostrarCV = function() {
		document.getElementById("contenidoMonitor").style.height = "100%";
		document.getElementById("contenidoMonitor").style.background = "url('imagenes/blanco.png')";
		document.getElementById("contenidoMonitorPrincipal").style.display = "none";
		document.getElementById("contenidoMonitorSobreMi").style.display = "none";
		document.getElementById("contenidoMonitorProyectos").style.display = "none";
		document.getElementById("contenidoMonitorCV").style.display = "inline-block";
		document.getElementById("contenidoMonitorContacto").style.display = "none";
		document.getElementById("contenidoMonitor").style.display = "inherit";
	}

	let mostrarContacto = function() {
		document.getElementById("contenidoMonitor").style.height = "100%";
		document.getElementById("contenidoMonitor").style.background = "url('imagenes/blanco.png')";
		document.getElementById("contenidoMonitorPrincipal").style.display = "none";
		document.getElementById("contenidoMonitorSobreMi").style.display = "none";
		document.getElementById("contenidoMonitorProyectos").style.display = "none";
		document.getElementById("contenidoMonitorCV").style.display = "none";
		document.getElementById("contenidoMonitorContacto").style.display = "inline-block";
		document.getElementById("contenidoMonitor").style.display = "inherit";
	}

	let mostrarEspacio = function() {
		document.getElementById("contenidoMonitorPrincipal").style.display = "none";
		document.getElementById("contenidoMonitorSobreMi").style.display = "none";
		document.getElementById("contenidoMonitorProyectos").style.display = "none";
		document.getElementById("contenidoMonitorCV").style.display = "none";
		document.getElementById("contenidoMonitorContacto").style.display = "none";
		document.getElementById("contenidoMonitor").style.height = "	0%";

	}

	let mostrarPrincipal2 = function() {
		estatica();
		setTimeout(mostrarPrincipal, 500);
	}

	let mostrarSobreMi2 = function() {
		estatica();
		setTimeout(mostrarSobreMi, 500);
	}

	let mostrarProyectos2 = function() {
		estatica();
		setTimeout(mostrarProyectos, 500);
	}

	let mostrarCV2 = function() {
		estatica();
		setTimeout(mostrarCV, 500);
	}


	let mostrarContacto2 = function() {
		estatica();
		setTimeout(mostrarContacto, 500);
	}

	let init = function() {
		botonPrincipal = document.getElementById("botonPrincipal");
		botonSobreMi = document.getElementById("botonSobreMi");
		botonProyectos = document.getElementById("botonProyectos");
		botonCV = document.getElementById("botonCV");
		botonContacto = document.getElementById("botonContacto");
		botonRojo = document.getElementById("botonRojo");

		botonPrincipal.addEventListener("click", mostrarPrincipal2);
		botonSobreMi.addEventListener("click", mostrarSobreMi2);
		botonProyectos.addEventListener("click", mostrarProyectos2);
		botonCV.addEventListener("click", mostrarCV2);
		botonContacto.addEventListener("click", mostrarContacto2);
		botonRojo.addEventListener("click", mostrarEspacio);
	}

	window.onload = init;
}