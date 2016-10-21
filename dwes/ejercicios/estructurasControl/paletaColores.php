<!-- Código fuente del ejercicio -->

<?php

include '../../includes/header.php';

include '../../includes/body.php';

for($r=1;$r<=255;$r=$r+20) {
	for($g=1;$g<=255;$g=$g+20) {
		for($b=1;$b<=255;$b=$b+20) {
			echo'<div style="background-color:rgb('.$r.','.$g.','.$b.')'.'; width:250px"><img width="100" height="100"></div>';
		}
	}
}



?>

<a href="http://localhost/dwes/ejercicios/estructurasControl/ver.php?src=
<?php
    echo basename($_SERVER['PHP_SELF'],'dwes/ejercicios/')?>
    "><br/>ver código</a> 

<!-- Fin código fuente del ejercicio -->