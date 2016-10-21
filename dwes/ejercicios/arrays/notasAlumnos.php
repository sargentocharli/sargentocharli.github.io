<!-- Código fuente del ejercicio -->

<?php

include '../../includes/header.php';

include '../../includes/body.php';

$notas = array(
	"Miguel Ángel López Moyano" => array(
									"1ª Evaluación" => 8,
									"2ª Evaluación" => 8,
									"Evaluación final" => 9),

	"Lucas Márquez Muñoz" => array(
									"1ª Evaluación" => 7,
									"2ª Evaluación" => 8,
									"Evaluación final" => 8)
	);
	

foreach($notas as $clave => $valor) {
	echo "<br>".$clave."<br>";
	foreach($valor as $clave2 => $valor2) {
		echo $clave2."\t".$valor2."<br>";
	}
}



?>

<a href="http://localhost/dwes/ejercicios/arrays/ver.php?src=
<?php
    echo basename($_SERVER['PHP_SELF'],'dwes/ejercicios/')?>
    "><br/>ver código</a> 

<!-- Fin código fuente del ejercicio -->