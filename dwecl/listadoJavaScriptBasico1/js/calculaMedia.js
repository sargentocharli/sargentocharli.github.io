/*	
	Implementa CalculaMedia que pida números hasta que se introduzca uno negativo.
	Entonces, que muestre la media.

	Autor: Lucas Márquez Muñoz
	Versión: 1.0
 */

{
	let numero=1;
	let media=0;
	for(var i=0;numero>=0;i++){		
		do {
			numero=parseInt(prompt("Introduzca un número"));
			if(isNaN(numero) || numero.length==0) {
				console.log("Introduzca un número, por favor")
			}
		} while(numero.length==0 || isNaN(numero));
		if(numero>=0) {
			media+=numero;
		}
	}
	console.log("La media es: "+media/(i-1));
}