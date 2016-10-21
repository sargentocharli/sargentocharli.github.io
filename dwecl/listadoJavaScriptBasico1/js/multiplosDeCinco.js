/*	
	Implementa MultiplosDeCinco que pida 7 números e indique si alguno es múltiplo de 5.

	Autor: Lucas Márquez Muñoz
	Versión: 1.0
 */
{ 
	let esMultiplo = function(numero) {
		if(numero%5==0) {
			return true;
		}
		return false;
	}

	for(let i=0;i<7;i++) {
		do{
			var numero = prompt("Introduzca un número");

			if(isNaN(numero) || numero.length==0) {
				console.log("Error. No has introducido un número");
			}
			

		} while(isNaN(numero) || numero.length==0);
		
		if(esMultiplo(numero)) {
		console.log(numero+" es múltiplo de 5");
		}
		else {
			console.log(numero+" no es múltiplo de 5");
		}				
	}
}
