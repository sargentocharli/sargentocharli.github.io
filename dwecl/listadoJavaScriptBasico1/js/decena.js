/* 
	Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique:
	a. Cuántas cifras tiene (7 cifras)
	b. Lo muestre del revés

	Autor: Lucas Márquez Muñoz
	Versión: 1.0
*/

{
	let invertirCadena = function(cadena) {
	  let longitudCadena = cadena.length;
	  let cadenaInvertida = "";
	 
	  while (longitudCadena>=0) {
	    cadenaInvertida += cadena.charAt(longitudCadena);
	    longitudCadena--;
	  }
	  return cadenaInvertida;
	}

	do {
		var num = prompt("Introduzca un número entre 0 y 10");
		if(isNaN(num) || num.length==0 || num<0 || num>10) {
			console.log("Introduzca un número entre 0 y 10, por favor")
		}
	} while (isNaN(num) || num.length==0 || num<0 || num>10)
	
	var numero = num.split(".");	

	if(numero.length-1==0) {
		console.log(numero+" no tiene decimales");
	}
	else {
		var digitos = numero[1].length;
		console.log("El numero "+numero+" tiene "+ digitos +" decimales");
		console.log("El número al revés es "+invertirCadena(numero.toString()));
	}
}