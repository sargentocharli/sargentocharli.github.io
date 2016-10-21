/*	
	Implementa ComprobacionFecha que solicite el día, el mes y el año e indique si la
	fecha es correcta. Si lo fuera, ha de mostrar el día después

	Autor: Lucas Márquez Muñoz
	Versión: 1.0
 */

{
	let dia = parseInt(prompt("Introduzca el día: "));
	let mes= parseInt(prompt("Introduzca el mes: "));
	let anno = parseInt(prompt("Introduzca el año: "));

	let comprobarDatos = function (dia,mes,anno){
		let flagError=false;

		if(dia<=0 || dia>31) {
			return true;
		}

		if(mes<=0 || mes>12) {
			return true;
		}

		if(anno<0) {
			return true;
		}
		return false;
	}

	let error=comprobarDatos(dia,mes,anno);
	
	if(!error) {
		let fecha = new Date(anno, mes-1, dia, 0, 0, 0, 0);
		fecha.setDate(fecha.getDate() + 1);
		console.log("El día siguiente de la fecha introducida es: "+fecha);
	}

	else {
		console.log("Se han introducido datos erróneos.");	
	}
}