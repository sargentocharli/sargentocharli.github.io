<!-- Código fuente del ejercicio -->

<?php

include '../../includes/header.php';

include '../../includes/body.php';

for($i=1;$i<11;$i++){
	echo "<strong>Tabla del ".$i."</strong><br>";
	
	for($j=1; $j<11; $j++){
		echo $i." x ".$j." = ".$i*$j."</br>";		
		
	}
}



?>

<a href="http://localhost/dwes/ejercicios/estructurasControl/ver.php?src=
<?php
    echo basename($_SERVER['PHP_SELF'],'dwes/ejercicios/')?>
    "><br/>ver código</a> 

<!-- Fin código fuente del ejercicio -->