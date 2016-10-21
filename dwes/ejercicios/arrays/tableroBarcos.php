<!-- Código fuente del ejercicio -->

<?php

include '../../includes/header.php';

include '../../includes/body.php';


$tablero= array(	
			"0"=>array("  "," A "," B "," C "," D "," E "," F "," G "," H "," I "," J ",),
			"1"=>array("1 "," x "," x "," x "," x "," x "," x "," x "," x "," x "," x ",),
			"2"=>array("2 "," x "," x "," x "," x "," x "," x "," x "," x "," x "," x ",),
			"3"=>array("3 "," x "," x "," x "," x "," x "," x "," x "," x "," x "," x ",),
			"4"=>array("4 "," x "," x "," x "," x "," x "," x "," x "," x "," x "," x ",),
			"5"=>array("5 "," x "," x "," x "," x "," x "," x "," x "," x "," x "," x ",),
			"6"=>array("6 "," x "," x "," x "," x "," x "," x "," x "," x "," x "," x ",),
			"7"=>array("7 "," x "," x "," x "," x "," x "," x "," x "," x "," x "," x ",),
			"8"=>array("8 "," x "," x "," x "," x "," x "," x "," x "," x "," x "," x ",),
			"9"=>array("9 "," x "," x "," x "," x "," x "," x "," x "," x "," x "," x ",),
			"10"=>array("10"," x "," x "," x "," x "," x "," x "," x "," x "," x "," x ",)
	);

foreach ($tablero as $valor => $contenido) {	
	echo "<br>";
	foreach ($contenido as $valor2 => $contenido2) {
		echo $contenido2;
		}		
	}	



?>

<a href="http://localhost/dwes/ejercicios/arrays/ver.php?src=
<?php
    echo basename($_SERVER['PHP_SELF'],'dwes/ejercicios/')?>
    "><br/>ver código</a> 

<!-- Fin código fuente del ejercicio -->