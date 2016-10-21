<!-- Código fuente del ejercicio -->

<?php

include '../../includes/header.php';
include '../../includes/body.php';

echo "<h2> 	Cabecera diferente según estación del año </h2>";

$annoActual = date('Y');

$inicioPrimavera = new DateTime($annoActual.'-03-21');
$inicioVerano = new DateTime($annoActual.'-06-21');
$inicioOtono = new DateTime($annoActual.'-09-21');
$inicioInvierno = new DateTime($annoActual.'-12-21');
$fechaActual = new DateTime();



if($fechaActual >= $inicioPrimavera && $fechaActual < $inicioVerano) { // 80 es el 21 de marzo
	echo "<img src=../../../primavera.jpg></img>";
}
	elseif ($fechaActual >= $inicioVerano && $fechaActual < $inicioOtono) { // 172 es el 21 de junio
		echo "<img src=../../../otoño.jpg></img>";
	}
	elseif ($fechaActual >= $inicioOtono && $fechaActual < $inicioInvierno) { // 265 es el 21 de septiembre
		echo "<img src=../../../otoño.jpg></img>";
	}
	
else
	echo "<img src=../../../invierno.bmp></img>";


	

?>
<br>
<br>
<a href="http://localhost/dwes/ejercicios/estructurasControl/ver.php?src=
<?php
    echo basename($_SERVER['PHP_SELF'],'dwes/ejercicios/')?>
    ">ver código</a> 

<!-- Fin código fuente del ejercicio -->
