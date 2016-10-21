<!-- Código fuente del ejercicio -->

<?php

include '../../includes/header.php';

include '../../includes/body.php';

$meses = array("enero","febrero","marzo","abrirl","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre");
$longitudArray = count($meses);

for ($i=0;$i<$longitudArray;$i++) {
echo $meses[$i]."<br>";
}


?>

<a href="http://localhost/dwes/ejercicios/arrays/ver.php?src=
<?php
    echo basename($_SERVER['PHP_SELF'],'dwes/ejercicios/')?>
    "><br/>ver código</a> 

<!-- Fin código fuente del ejercicio -->