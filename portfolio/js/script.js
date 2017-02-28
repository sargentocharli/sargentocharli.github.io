{
	let botonPrincipal;
	let botonSobreMi;
	let botonProyectos;
	let botonCV;
	let botonContacto;
	let botonRojo;

	let mostrarPrincipal = function() {			

		document.getElementById("contenidoMonitor").style.height = "100%";
		document.getElementById("contenidoMonitor").style.background = "url('imagenes/blanco.png')";
		document.getElementById("contenidoMonitorSobreMi").style.display = "none";
		document.getElementById("contenidoMonitorProyectos").style.display = "none";
		document.getElementById("contenidoMonitorContacto").style.display = "none";
		document.getElementById("contenidoMonitorPrincipal").style.display = "inline-block";	
		document.getElementById("monitorVacio").style.display = "inline-block";
		



	}

	let mostrarSobreMi = function() {
		document.getElementById("contenidoMonitor").style.height = "100%";
		document.getElementById("contenidoMonitorPrincipal").style.display = "none";
		document.getElementById("contenidoMonitorSobreMi").style.display = "none";
		document.getElementById("contenidoMonitorProyectos").style.display = "none";
		document.getElementById("contenidoMonitorContacto").style.display = "none";
		document.getElementById("contenidoMonitor").style.display = "inherit";
	}

	let mostrarProyectos = function() {
		document.getElementById("contenidoMonitor").style.height = "100%";
		document.getElementById("contenidoMonitorPrincipal").style.display = "none";
		document.getElementById("contenidoMonitorSobreMi").style.display = "none";
		document.getElementById("contenidoMonitorProyectos").style.display = "inline-block";
		document.getElementById("contenidoMonitorContacto").style.display = "none";
		document.getElementById("contenidoMonitor").style.display = "inherit";
	}

	let mostrarCV = function() {
		document.getElementById("contenidoMonitor").style.height = "100%";
		document.getElementById("contenidoMonitorPrincipal").style.display = "none";
		document.getElementById("contenidoMonitorSobreMi").style.display = "none";
		document.getElementById("contenidoMonitorProyectos").style.display = "none";
		document.getElementById("contenidoMonitorContacto").style.display = "none";
		document.getElementById("contenidoMonitor").style.display = "inherit";
	}

	let mostrarContacto = function() {
		document.getElementById("contenidoMonitor").style.height = "100%";
		document.getElementById("contenidoMonitorPrincipal").style.display = "none";
		document.getElementById("contenidoMonitorSobreMi").style.display = "none";
		document.getElementById("contenidoMonitorProyectos").style.display = "none";
		document.getElementById("contenidoMonitorContacto").style.display = "none";
		document.getElementById("contenidoMonitor").style.display = "inherit";
	}

	let mostrarEspacio = function() {
		document.getElementById("contenidoMonitorPrincipal").style.display = "none";
		document.getElementById("contenidoMonitorSobreMi").style.display = "none";
		document.getElementById("contenidoMonitorProyectos").style.display = "none";
		document.getElementById("contenidoMonitorContacto").style.display = "none";
		document.getElementById("contenidoMonitor").style.height = "	0%";

	}

	let init = function() {
		botonPrincipal = document.getElementById("botonPrincipal");
		botonSobreMi = document.getElementById("botonSobreMi");
		botonProyectos = document.getElementById("botonProyectos");
		botonCV = document.getElementById("botonCV");
		botonContacto = document.getElementById("botonContacto");
		botonRojo = document.getElementById("botonRojo");

		botonPrincipal.addEventListener("click", mostrarPrincipal);
		botonSobreMi.addEventListener("click", mostrarSobreMi);
		botonProyectos.addEventListener("click", mostrarProyectos);
		botonCV.addEventListener("click", mostrarCV);
		botonContacto.addEventListener("click", mostrarContacto);
		botonRojo.addEventListener("click", mostrarEspacio);
	}

	window.onload = init;
}