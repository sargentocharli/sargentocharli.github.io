/*	
	Implementa CerosYUnos que lea una secuencia de ceros y unos. Mostrará el número
	de ceros de la secuencia. Dejará de leer cuando el usuario introduzca el número 2.

	Autor: Lucas Márquez Muñoz
	Versión: 1.0
 */

{
	let numero;
	let contador=0;

	do{
		numero=parseInt(prompt("Introduzca 0 o 1 (2 para salir) "));
		if(numero<0 || numero>2 || isNaN(numero) || numero.length==0) {
			console.log("Solo puede introducir 0, 1 o 2.");
		}

		else {				
			if(numero==0){
				contador++;
			}
		}
	} while(numero!=2);
	console.log("Se han introducido "+contador+" ceros");
}