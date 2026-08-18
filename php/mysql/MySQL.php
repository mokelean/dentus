<?php

/**
 * @author 
 * @copyright 2010
 */

	class MySQL {
		
		private $link;
		private $error;
		private $result;
						
		function MySQL( $host, $user, $pass, $db ){
					
			@ $this->link = mysql_connect( $host, $user, $pass, true );
			if( !$this->link ){
				$this->error = mysql_error();
				return $this->error;
			} 
			
			$dbOK = mysql_select_db($db, $this->link);
			if( !$dbOK ){
				$this->error = mysql_error($this->link);
				return $this->error;
			}
			
			@mysql_query("SET NAMES 'utf8'");
		}
		
		function getError(){
			return $this->error;
		}
		
		function query($query){
			$this->result = mysql_query($query, $this->link);
			if( $this->result === true ){
				return $this->result;
				
			} else if( $this->result ){
				//este es el caso del select
				while( $row = mysql_fetch_object($this->result) ){
					$total_rows[] = $row;
				}
				$this->result = $total_rows;
				return $this->result;
				
			} else {
				
				$this->error = mysql_error( $this->link );
				return false;
			}
		}
		
		function __destruct(){
			mysql_close($this->link);
		}
		
		function getJSON( $query ){
			$result = $this->query( $query );
			
			$response = new stdClass();
			if( $result ){
				$response->response = $result;
			} else {
				$response->error = $this->getError();
				
			}
			//si tengo PHP 5 o + integra JSON directamente, sino tengo que usar la clase JSON.php
			return json_encode($response);
		}
		
	}

?>