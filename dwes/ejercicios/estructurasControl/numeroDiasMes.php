<!-- Código fuente del ejercicio -->

<?php

include '../../includes/header.php';
include '../../includes/body.php';

echo "<h2> 	Número de días de un mes y año dados </h2>";

$month = 2;
$year = 2000;
$calendar = CAL_GREGORIAN;

$numeroDias = cal_days_in_month ( $calendar , $month , $year );

echo "El mes "."$month"." del año "."$year"." tuvo "."$numeroDias"." días.";


?>

<a href="http://localhost/dwes/ejercicios/estructurasControl/ver.php?src=
<?php
    echo basename($_SERVER['PHP_SELF'],'dwes/ejercicios/')?>
    "><br/>ver código</a> 

<!-- Fin código fuente del ejercicio -->