/*	
	Implementa OrdenaTres que pida tres números y los muestre ordenados de menor a
	mayor.

	Autor: Lucas Márquez Muñoz
	Versión: 1.0
 */

{
	let pideNumeros = function() {

	}
	let ordenaTres=function() {
		do {
			var num1=parseInt(prompt("Introduzca el primer número: "));
			if(isNaN(num1) || num1.length==0) {
				console.log("Introduzca un número, por favor");
			}
		} while (isNaN(num1) || num1.length==0);
		do {
			var num2=parseInt(prompt("Introduzca el segundo número: "));
			if(isNaN(num2) || num2.length==0) {
				console.log("Introduzca un número, por favor");
			}
		} while (isNaN(num2) || num2.length==0);
		do {
			var num3=parseInt(prompt("Introduzca el tercer número: "));
			if(isNaN(num3) || num3.length==0) {
				console.log("Introduzca un número, por favor");
			}
		} while (isNaN(num3) || num3.length==0);

		if(num1>num2 && num1>num3 && num2>num3){
			console.log("Los numeros de mayor a menor son: " + num1 + " " + num2 +" " + num3);
		}
		else if(num1>num2 && num1>num3 && num2<num3){
			console.log("Los numeros de mayor a menor son: " + num1 + " " + num3 +" " + num2);
		}
		else if(num2>num1 && num2>num3 && num1>num3){
			console.log("Los numeros de mayor a menor son: " + num2 + " " + num1 +" " + num3);
		}
		else if(num2>num1 && num2>num3 && num1<num3){
			console.log("Los numeros de mayor a menor son: " + num2 + " " + num3 +" " + num1);
		}
		else if(num3>num1 && num3>num2 && num1>num2){
			console.log("Los numeros de mayor a menor son: " + num3 + " " + num1 +" " + num2);
		}
		else if(num3>num1 && num3>num2 && num1<num2){
			console.log("Los numeros de mayor a menor son: " + num3 + " " + num2 +" " + num1);
		}
	}

	ordenaTres();
}
