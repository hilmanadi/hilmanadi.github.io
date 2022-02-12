<?php
	include 'config.php';
	$connstr = "host=$hst port=$prt dbname=$dname user=$usr password=$pswd";
	$dbconn = pg_connect($connstr);

