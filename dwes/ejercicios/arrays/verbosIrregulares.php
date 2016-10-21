<!-- Código fuente del ejercicio -->

<?php

include '../../includes/header.php';

include '../../includes/body.php';

$verbos = array(
				"Correr" => array(
								"infinitivo" => "run",
								"participio" => "ran",
								"gerundio" => "run"),

				"Golpear" => array(
								"infinitivo" => "hit",
								"participio" => "hit",
								"gerundio" => "hit"),

				"Ir" => array(
								"infinitivo" => "go",
								"participio" => "went",
								"gerundio" => "gone")
	);

foreach($verbos as $clave => $valor) {
	echo "<br>".$clave."<br>";
	foreach ($valor as $clave2 => $valor2) {
		echo $clave2."\t".$valor2."<br>";
	}
}


?>

<a href="http://localhost/dwes/ejercicios/arrays/ver.php?src=
<?php
    echo basename($_SERVER['PHP_SELF'],'dwes/ejercicios/')?>
    "><br/>ver código</a> 

<!-- Fin código fuente del ejercicio -->