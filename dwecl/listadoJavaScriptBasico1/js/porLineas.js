/*	
	Implementa PorLineas que visualice los números del 0 al 100 separados por comas.
	Cada múltiplo de 7 ha de comenzar en una línea nueva.

	Autor: Lucas Márquez Muñoz
	Versión: 1.0
 */

 {
	let cadena="0,";
	
	for(let i=1;i<101;i++) {
		cadena+=i+",";
		if(i%7==6){
			cadena+="\n";
		}
	}
	console.log(cadena);
}