/*	
	Implementa MuestraDelUnoAlN que pida un número entero y que muestre la
	secuencia del 1 al número indicado. En caso de no poder generarse la secuencia
	(menor que 1), que lo indique

	Autor: Lucas Márquez Muñoz
	Versión: 1.0
 */

{
	let numero = prompt("Introduzca un número entero.");

	let comprobarDatos = function (numero){
		let flagError=false;

		if(numero<1) {
			return true;
		}

		if(isNaN(numero)) {
			return true;
		}
			return false;		
	}

	let error=comprobarDatos(numero);

	if(!error) {
		for(let i=1;i<=numero;i++)
			console.log(i);
	}

	else {
		console.log("Se han introducido datos erróneos.");
	}
}
