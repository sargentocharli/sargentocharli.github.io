{
	let casarural;
	let infoimagencasa;	
	let infolocalidadcasa;
	let infohabitacionescasa;
	let infopreciocasa;
	let infodescripcioncasa;

	let rellenarDatosCasa=function(imagen,localidad,habitaciones,precio,descripcion){
		infoimagencasa.innerHTML=imagen;		
		infolocalidadcasa.innerHTML=localidad;
		infohabitacionescasa.innerHTML=habitaciones;
		infopreciocasa.innerHTML=precio;
		infodescripcioncasa.innerHTML=descripcion;
	}

	let init=function(){
		infoimagencasa = document.getElementById("imagenCasa");			
		infolocalidadcasa = document.getElementById("localidadCasa");
		infohabitacionescasa = document.getElementById("habitacionesCasa");
		infopreciocasa = document.getElementById("precioCasa");
		infodescripcioncasa = document.getElementById("descripcionCasa");

		casarural=localStorage.getItem("casa");

		switch(casarural){
			case "casa1":
				rellenarDatosCasa("<img src=\"imagenes/1.jpg\" alt=\"Casa rural en Amarita, Álava\">",					
					"<br/>Al final de los pinos",
					"<br/>4 habitaciones",
					"40€/noche",
					"<br/><br/>En el tranquilo pueblo de Amarita, a tan solo 8 km de Vitoria-Gasteiz se encuentran las Casas Rurales de Amarita en Álava. Dos casitas de reciente construcción, para cuatro personas cada una, que se pueden alquilar de forma individual o conjunta. <br/><br/>Ambos alojamientos tienen un dormitorio principal y un sofá cama. Si viajáis con bebe, podéis solicitar una cuna sin ningún cargo extra. Un precioso jardín con porche, barbacoa, mobiliario de jardín, leña gratuita y wi-fi son algunas de las cualidades de este  alojamiento. Sin duda lo que más nos ha gustado es la zona infantil que hay reservada para los pekes. Dispone de cama elástica y arenero donde se lo pasarán genial. Además las casas rurales de Amarita tienen un pequeño huerto para los clientes y algunas ovejas, que a los niños les encantará. <br/><br/>Desde la puerta de la casa parten varias rutas de senderismo y  para bicis. Algunas de ellas recomendadas y seguras para los niños. Los propietarios pueden ayudaros en la elección de la ruta así como en el alquiler de las bicicletas (5€ al día) <br/><br/>Las Casas rurales de Amarita son perfectas para viajar con niños.");
				break;
			case "casa2":
				rellenarDatosCasa("<img src=\"imagenes/2.JPG\" alt=\"Casa rural en el valle de Ordesa, Huesca\">",
					"<br/>En medio del prado, s/n",
					"<br/>3 habitaciones",
					"25€/noche",
					"<br/><br/>Casas Rurales Ordesa están situadas en la comarca del Sobrarbe, en la provincia de Huesca y en pleno Pirineo Aragonés, a las puertas del Parque Nacional de Ordesa y Monte Perdido. <br/><br/>Cercanas a la villa medieval de Ainsa, Parque Natural Posets-Maladeta, Parque Nacional del Pirineo Frances, Pistas de sky Piau-Engaly (Francia), Sierra y Cañones de Guara y excelente ubicación para visitar todos lo valles del Parque Nacional de Ordesa y Monte Perdido (Ordesa, Escuain, Añisclo y Pineta). <br/><br/>Casas Rurales Ordesa están situadas a las afueras de un pequeño pueblo de montaña llamado Belsierre, en un punto estratégico para visitar toda la zona y disfrutar de la naturaleza y la tranquilidad.");
				break;
			case "casa3":
				rellenarDatosCasa("<img src=\"imagenes/3.jpg\" alt=\"Casa rural en Udias, Cantabria\">",				
					"<br/>Sujetando el cartel azul",
					"<br/>3 habitaciones",
					"19€/noche",
					"<br/><br/>Casa rural tradicional con finca-jardín, situada en la encrucijada de reservas naturales, playas y centros históricos en Cantabria. <br/><br/>Su emplazamiento permite amplias y hermosas visuales al Valle de Udias, al Escudo de Cabuérniga y los Picos de Europa, así como su proximidad a bosques, reservas naturales, playas de gran belleza en Comillas y San Vicente de la Barquera,y buen estado de conservación, y núcleos históricos de renombre en Cantabria como Santillana del Mar; distando a 10 minutos en coche desde la Posada.<br/><br/>La privilegiada situación de la Posada Sel de Breno en Udias muy cercana a Comillas, la hacen de punto de partida ideal para todo tipo de actividades en Cantabria, tales como dias de playa, visitar las cuevas, museos y edificios de interes en Santillana Del Mar, visitar Bárcena Mayor, la villa marinera de San VIcente de La Barquera, o la Capital Santander , y el el Parque de La Naturaleza de Cabarceno, de obligada visita. ");
				break;
			case "casa4":
				rellenarDatosCasa("<img src=\"imagenes/4.jpg\" alt=\"Casa rural en Sant Gregori, Girona\">",					
					"<br/>Orilla izquierda",
					"<br/>3 habitaciones",
					"40€/noche",
					"<br/><br/>Casa rural situada en la entrada del Valle del Llémena en Sant Gregori (Girona) esperando recibir su visita para disfrutarla con alegría e ilusión. Casa rural para estancias de fin de semana, vacaciones en verano y alquileres de corta duración. Ideal para escapadas con niños, reuniones familiares o bien fiestas y celebraciones entre grupos de amigos.<br/><br/>La masía tiene todos los equipamientos para sentirte como en casa. Siempre se alquila la casa a un solo grupo de personas.<br/><br/>El número de inscripción en el Registro de Turismo de Catalunya es PG-000656.<br/><br/>Cal Sastre de Cartellà tiene 7 habitaciones dobles y dos supletorias a colocar en las habitaciones que más le interese, dos cunas, 4 baños, dos salas de estar, dos comedores, cocina bien equipada con chimenea, tostadora, horno, microondas, lavadora, lavavajillas, menaje de mesa y cocina, TV, DVD, canales vía satélite, juegos infantiles y de mayores. Sábanas con nórdicos y toallas. La masía dispone de calefacción central.<br/><br/>En el exterior jardín privado y vallado, mesa y sillas para comer al aire libre si os apetece, barbacoa, piscina, tumbonas, bicicletas (5), terraza, zona de aparcamiento, ping-pong, bádminton, basket, futbol, volleybol, dardos. Acceptamos animales de compañia.<br/><br/>La casa está vallada y la piscina está protegida para que los niños no se hagan daño. Además encontrareis 3 tronas, bañera para niños, 3 cunas de viaje, arenero, bicicletas pequeñas, juegos infantiles, TV y DVD.");
				break;
			case "casa5":
				rellenarDatosCasa("<img src=\"imagenes/5.jpg\" alt=\"Casa rural en Valle de Bueida, Asturias\">",					
					"<br/>Escondida detrás del árbol",
					"<br/>3 habitaciones",
					"27€/noche",
					"<br/><br/>En Valle de Bueida contamos con 6 casas de alquiler íntegro de alta calidad, situadas en una pequeña aldea asturiana rodeada de praderas y bosques en el Parque Natural de Ubiña La Mesa, reserva de la Biosfera, Concejo de Quirós.<br/><br/>Las casas son el resultado de la restauración de varias cuadras de más de 300 años de antigüedad respetando en todo momento la arquitectura y tipología de la zona y conservando en lo posible muros de piedra y carpintería de madera.<br/><br/>Están situadas en una gran pradera cercada de unos 5.000 metros a disposición de los clientes con juegos infantiles, barbacoas, porterías para los más peques, zona de párking, mobiliario de jardín, etc.<br/><br/>Zona de la Senda del Oso, senda verde que recorre 40km. en 3 concejos. Conocerá a nuestros osos pardos, Paca Tola; Molinera y Furaco. Es una senda fácil de hacer para toda la familia.");
				break;
			case "casa6":
				rellenarDatosCasa("<img src=\"imagenes/6.jpg\" alt=\"Casa rural en Ainsa-Sobrarbe, Huesca\">",					
					"<br/>Delante tuya",
					"<br/>3 habitaciones",
					"32€/noche",
					"<br/><br/>Descubrir el Pirineo y, sobretodo, la casi olvidada forma de vida rural nunca había sido tan fácil. <br/><br/>Tras una cuidada rehabilitación en piedra y madera de una casa señorial del siglo XVI, situada a la cola de un pantano y bajo las montañas del Pirineo Aragonés, Casas Pirineo es un museo vivo donde todavía se percibe la magia y el encanto del ayer con las comodidades de hoy.<br/><br/>Contamos con el privilegio de estar situados en Gerbe, un pueblo rústico y tranquilo de tan solo 7 habitantes en el que el tiempo parece haberse detenido. <br/><br/>La cercanía a Ainsa, centro de la comarca y al Parque Nacional de Ordesa serán claves para una estancia que combine la paz y el relax con la visita a los lugares más emblemáticos de la zona.<br/><br/>Casas Pirineo se divide en Casas y Apartamentos Rurales dentro de un complejo privado en un pintoresco pueblecito rodeado de naturaleza; con capacidad de 2 a 54 personas en 12 alojamientos diferentes, cada uno con su propio encanto. <br/><br/>Gran jardín, barbacoa, parking, Wi-Fi, parque infantil... Ideal para familias con niños, parejas o grupos de amigos.");
				break;
			case "casa7":
				rellenarDatosCasa("<img src=\"imagenes/7.jpg\" alt=\"Casa rural en Garganta de los Montes, Madrid\">",					
					"<br/>Detrás de la valla",
					"<br/>3 habitaciones",
					"28€/noche",
					"<br/><br/>Ubicado en el corazón de Garganta de los Montes, a 70 kilómetros de Madrid. <br/><br/>Capacidad máxima para 35 personas, nos aguarda una linda casa de piedra con 3 apartamentos, 6 casas contiguas, y 5 habitaciones dobles. <br/><br/>Hasta aquí llegan parejas de recién casados y familias enteras para disfrutar de una estadía placentera. <br/><br/>Precios en oferta desde 390 € por 6 personas.");
				break;
			case "casa8":
				rellenarDatosCasa("<img src=\"imagenes/8.jpg\" alt=\"Casa rural en Colmenar, Málaga\">",					
					"<br/>Delante tuya de nuevo",
					"<br/>3 habitaciones",
					"36€/noche",
					"<br/><br/>Mansión Piedras Blancas es una magnifica casa de campo,de reciente construcción,distribuida en dos plantas se caracteriza por su arquitectura y decoración que nos recuerda a las típicas casas de campo,aunque cuenta con todas las comodidades.<br/><br/>El exterior es muy amplio,la finca tiene 25.000 metros de los cuales 1.300 están asfaltados. Goza de unas impresionantes vistas, desde donde se puede divisar la Dorsal Bética, Parque Natural Montes de Málaga, Sierra del Torcal y Torre Zambra. <br/><br/>Soleada todo el día, esta aislada y vallada al igual que la piscina privada, que se encuentra junto a la casa.");
				break;
			case "casa9":
				rellenarDatosCasa("<img src=\"imagenes/9.jpg\" alt=\"Casa rural en Colmenar, Málaga\">",					
					"<br/>Lo único que no está blanco",
					"<br/>3 habitaciones",
					"19€/noche",
					"<br/><br/>Mansión Piedras Blancas es una magnifica casa de campo,de reciente construcción,distribuida en dos plantas se caracteriza por su arquitectura y decoración que nos recuerda a las típicas casas de campo,aunque cuenta con todas las comodidades.<br/><br/>El exterior es muy amplio,la finca tiene 25.000 metros de los cuales 1.300 están asfaltados. Goza de unas impresionantes vistas, desde donde se puede divisar la Dorsal Bética, Parque Natural Montes de Málaga, Sierra del Torcal y Torre Zambra. <br/><br/>Soleada todo el día, esta aislada y vallada al igual que la piscina privada, que se encuentra junto a la casa.");
				break;
		}	
	}

	window.onload=init;
}