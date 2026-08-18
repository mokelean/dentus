<?php

	require '../config/config.php';
	require_once('mysql/MySQL.php');

	$db = new MySQL( 
		$CONFIG[CONFIG_MODE]["database"]["host"],
		$CONFIG[CONFIG_MODE]["database"]["user"],
		$CONFIG[CONFIG_MODE]["database"]["pass"],
		$CONFIG[CONFIG_MODE]["database"]["name"]
	);

	$table = $CONFIG[CONFIG_MODE]["database"]["table"];
	
	$accion = $_POST['action'];
	
	$client_ip = $_SERVER['REMOTE_ADDR'];
	$boundary = md5(time().rand(1,100));
	$datetime = date("d-M-Y H:i:s");
	//$datetime = date('Y-m-d H:i:s');
	
	// @mysql_query("SET NAMES 'utf8'");
	
	$CONFIG_MAILS = $CONFIG["LIVE"]["emails"];
	
	/////////////////////////////////////////// Acciones Formulario de Contacto ////////////////////////////////////////////
	if($accion == "contacto" || $accion == "contacto_landing")
	{
		$nombre  	= $_POST['nombre'];
		$email   	= $_POST['email'];
		$telefono 	= $_POST['telefono'];
		$especialidad 	= $_POST['especialidad'];
		$mensaje   = $_POST['mensaje'];

		$contenido = "<b>Nombre:</b> {$nombre}<br>
	                  <b>Email:</b> {$email}<br>
	                  <b>Teléfono:</b> {$telefono}<br><br>

	                  <b>Especialidad:</b> {$especialidad}<br><br>";

	    switch($accion)
	    {
	    	case 'contacto': 
	    		$tipo = "";
				$asunto = "Solicitud de turno desde la web {$tipo}| Dentus";
	    		break;

	    	case 'contacto_landing': 
	    		$tipo = "";
				$asunto = "Consulta desde la web {$tipo}| Dentus";
	    		if($mensaje) $contenido .= "<b>Mensaje:</b><br> ".nl2br($mensaje);
	    		break;
	    }


	    $r = new stdClass();
		/*$create = $db->query("CREATE TABLE IF NOT EXISTS `{$table}` (
							  `id` int(11) NOT NULL AUTO_INCREMENT,
							  `email` varchar(140) NOT NULL,
							  `fecha` datetime NOT NULL,
							  PRIMARY KEY (`id`)
							) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;");

		
		if($db->getError()) {
			$r->msg = "error";
			echo json_encode($r);
			return;
		}*/


		// antes que nada compruebo si ya está participando
		$yaexiste = $db->query("SELECT * FROM {$table} WHERE email='$email'");
		if($yaexiste[0]->email) {
			// $r = new stdClass();
			// $r->msg = "already_exists";

			// echo json_encode($r);
			// return;
		}



		// guardar en base		
		$insert = $db->query( "INSERT INTO {$table} SET nombre='{$nombre}',
														email='{$email}',
														telefono='{$telefono}',
														especialidad='{$especialidad}',
														mensaje='{$mensaje}',
														fecha=now();" );

															
		/*if($db->getError()) { echo "error"; } 
		else {

			$r = new stdClass();
			$r->msg = "ok";
			
			echo json_encode($r);
		}*/


		sendEmail($email, $CONFIG_MAILS[$accion]["to"], $CONFIG_MAILS[$accion]["cc"], $CONFIG_MAILS[$accion]["bcc"], $asunto, $contenido);

		echo "ok";
	}

	function sendEmail($from, $to, $cc, $bcc, $subject, $body) {

		$sheader="From:".$to."\nReply-To:".$from."\n";
		if($cc!='') $sheader.="CC:".$cc."\n";
		if($bcc!='') $sheader.="BCC:".$bcc."\n";
		$sheader.="X-Mailer:PHP/".phpversion()."\n";
		$sheader.="Mime-Version: 1.0\n";
		$sheader.="Content-Type: text/html; charset=UTF-8";

		$send = mail($to, $subject, $body, $sheader); 
	}
?>