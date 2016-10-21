/*	
	Implementa MediaPositivos que calcule la media de una serie de números positivos,
	introducidos por teclado. Dejará de leer cuando el usuario introduzca el 0.

	Autor: Lucas Márquez Muñoz
	Versión: 1.0
 */

{
	let numeroIntroducido=1;
	let media=0;
	let contador=0;
	while(numeroIntroducido!=0) {
	do {
		numeroIntroducido = prompt("Introduzca un número positivo ");

		if(isNaN(numeroIntroducido) || numeroIntroducido.length===0 || numeroIntroducido<0) {
			console.log("Error. No has introducido un número positivo");
		}
	} while(isNaN(numeroIntroducido) || numeroIntroducido.length===0 || numeroIntroducido<0);		
	
	
		media+=parseInt(numeroIntroducido);
		contador++;
	}
	console.log("La media es: "+media/(contador-1));
}