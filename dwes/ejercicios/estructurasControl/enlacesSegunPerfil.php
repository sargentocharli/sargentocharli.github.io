<!-- Código fuente del ejercicio -->

<?php

include '../../includes/header.php';
include '../../includes/body.php';

echo "<h2> 	Enlaces según perfil </h2>";

$perfil = "administrador";

if (strcmp($perfil, "administrador") == 0) {
	echo"<ul>
			<li>Enlace de administrador 1</li>
			<li>Enlace de administrador 2</li>
			<li>Enlace de administrador 3</li>
		</ul>";
	}
	elseif (strcmp($perfil, "usuario") == 0) {
		echo"<ul>
				<li>Enlace de usuario 1</li>
				<li>Enlace de usuario 2</li>
				<li>Enlace de usuario 3</li>
			</ul>";
	}
else {
	echo"<ul>
			<li>Enlace de invitado 1</li>
			<li>Enlace de invitado 2</li>
			<li>Enlace de invitado 3</li>
		</ul>";
}
	
?>

<a href="http://localhost/dwes/ejercicios/estructurasControl/ver.php?src=
<?php
    echo basename($_SERVER['PHP_SELF'],'dwes/ejercicios/')?>
    "><br/>ver código</a> 

<!-- Fin código fuente del ejercicio -->