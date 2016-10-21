<!-- Código fuente del ejercicio -->

<?php

include '../../includes/header.php';

include '../../includes/body.php';

$resultado = 0;
for($i=1, $contador=0;$contador<3;$i++) {
	if($i%2 == 0) {
		$resultado += $i;
		$contador++;
	}	
}

echo $resultado;

?>

<a href="http://localhost/dwes/ejercicios/estructurasControl/ver.php?src=
<?php
    echo basename($_SERVER['PHP_SELF'],'dwes/ejercicios/')?>
    "><br/>ver código</a> 

<!-- Fin código fuente del ejercicio -->