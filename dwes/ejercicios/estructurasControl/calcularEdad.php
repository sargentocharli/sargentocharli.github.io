<!-- Código fuente del ejercicio -->

<?php

include '../../includes/header.php';

include '../../includes/body.php';

echo "<h2> 	Calcular edad según fecha de nacimiento	 </h2>";

$fecha = time() - strtotime('1987-3-10');

$edad = floor((($fecha / 3600) / 24) / 365);

echo '<p>Tienes '.$edad.' años</p>';


?>

<a href="http://localhost/dwes/ejercicios/estructurasControl/ver.php?src=
<?php
    echo basename($_SERVER['PHP_SELF'],'dwes/ejercicios/')?>
    "><br/>ver código</a> 

<!-- Fin código fuente del ejercicio -->