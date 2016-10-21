<!-- Código fuente del ejercicio -->

<?php

include '../includes/header.php';
include '../includes/body.php';

$nombre = "Lucas";
$apellido1 = "Márquez";
$apellido2 = "Muñoz";
$curso = "2º DAW";
$email = "ladamadelfuegohelado@gmail.com";
$twitter = "@sargentocharli";
$link_address = "https://twitter.com/sargentocharli";

echo "<img src='../../yo.jpg'></img><br>";
echo "Nombre y apellidos: $nombre "."$apellido1 "."$apellido2<br/>";
echo "Curso: $curso<br/>";
echo "Correo electrónico: $email<br/>";
echo "Twitter: <a href='$link_address'>@sargentocharli</a><br/>";

?>

<a href="http://localhost/dwes/ejercicios/ver.php?src=
<?php
    echo basename($_SERVER['PHP_SELF'],'dwes/ejercicios/')?>
    ">ver código</a> 

<!-- Fin código fuente del ejercicio -->
	