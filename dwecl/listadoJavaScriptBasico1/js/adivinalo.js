/*	
	Implementa el juego “Adivínalo”. Consiste en que el usuario ha de adivinar un número
	entre el 1 y el 100. Mostrará un mensaje:
	a. Para indicar si has acertado (en una nueva ventana)
	b. Para indicar si la solución es mayor o es menor

	Autor: Lucas Márquez Muñoz
	Versión: 1.0
 */

{
	function generarAleatorio(){
		return Math.round(Math.random() * 100);
	}

	function continuar(){
		do{
			var respuesta=prompt("¿Desea continuar? (s/n)");

			if(isNaN(respuesta)){
				respuesta=respuesta.toLowerCase();

				if(respuesta!='s' && respuesta!='n')
            		console.log("Por favor, responda con \"s / n\"" );
			}
			else {
				console.log("Por favor, responda con \"s / n\"" );
			}
		}while(respuesta!='s' && respuesta!='n');

		if (respuesta==='s') {
            return true;
		}
        return false;
	}

	let partida = function() {		
		let aleatorio=generarAleatorio();
		console.log(aleatorio);
		
		do {
			var numero = prompt("Introduzca un número");
			console.log(numero);
			if(!isNaN(numero) && numero%1==0 && numero>0 && numero<101) {
				

				if(numero==aleatorio) {
					console.log("¡Has acertado el número, enhorabuena!");
					return;
				}
				if(numero>aleatorio) {
						console.log("El número es más pequeño.");
				}
				else {
					console.log("El número es más grande.");
				}
			}
			else {
			console.log("Por favor, introduzca un número entero entre 1 y 100.");
			}
		}while(numero!==aleatorio);
	}

	do {
	partida();	
	} while(continuar());
}
