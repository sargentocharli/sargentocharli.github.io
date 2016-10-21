<!-- Código fuente del ejercicio -->

<?php

include '../../includes/header.php';

include '../../includes/body.php';

$pais = array(
				"España" => array("Madrid", "Europa", "<img src='images/espanya.png'>"),
				"Japón" => array("Tokio", "Asia", "<img src='images/japon.png'>"),
				"Brasil" => array("Brasilia", "América del Sur", "<img src='images/brasil.png'>")
				
	);
$numeroPaises = count($pais);
foreach($pais as $clave => $valor) {
	echo "<br>".$clave.": ";
	for($i=0;$i<$numeroPaises;$i++) {
		echo "\t".$valor[$i]."\t";
	}
	
	}
	
	//$numeroPaises = count($valor);

	


?>

<a href="http://localhost/dwes/ejercicios/arrays/ver.php?src=
<?php
    echo basename($_SERVER['PHP_SELF'],'dwes/ejercicios/')?>
    "><br/>ver código</a> 

<!-- Fin código fuente del ejercicio -->