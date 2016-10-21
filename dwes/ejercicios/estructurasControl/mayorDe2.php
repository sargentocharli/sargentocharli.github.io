<!-- Código fuente del ejercicio -->

<?php

include '../../includes/header.php';

include '../../includes/body.php';

echo "<h2> 	Mayor de dos números </h2>";

$num1 = 1;
$num2 = 3;

if($num1 > $num2){
	echo "$num1 es mayor que $num2";
}

if($num1 < $num2){
	echo "$num2 es mayor que $num1";
}

else
	echo "$num1 y $num2 son iguales";




?>

<a href="http://localhost/dwes/ejercicios/estructurasControl/ver.php?src=
<?php
    echo basename($_SERVER['PHP_SELF'],'dwes/ejercicios/')?>
    "><br/>ver código</a> 

<!-- Fin código fuente del ejercicio -->