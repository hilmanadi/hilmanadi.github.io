<?php
include 'connect.php';
$_POST = json_decode(file_get_contents('php://input'),true);
$tag = $_POST['tag'];
$id = $_POST['id'];

function rq($d,$x){
	$arr = array();
	$res = pg_query($d,$x);
	while($row=pg_fetch_assoc($res)){
		array_push($arr,$row);
	}
	return $arr;
}

if($dbconn){
	if($tag=='detail'){
		$q = "select * from log2a1 where id='".$id."'";
		$x = rq($dbconn,$q);
		echo(json_encode($x));
	}else if($tag=='delete'){
		$q = "delete from log2a1 where id='".$id."'";
		$x = pg_query($dbconn,$q);
		if($x){
			echo('Done');
		}else{
			echo('Fail');
		}
	}else if($tag=='update'){
		$nmbrg = $_POST['nmbrg'];
		$kdbrg = $_POST['kdbrg'];
		$spesbrg = $_POST['spesbrg'];
		$lksbrg = $_POST['lksbrg'];

		$q = "update log2a1 set nabr='".$nmbrg."',kdbr='".$kdbrg."',spes='".$spesbrg."',loka='".$lksbrg."' where id='".$id."'";
		$x = pg_query($dbconn,$q);
		if($x){
			echo('Done');
		}else{
			echo('Fail');
		}
	}else if($tag=='insert'){
		$nmbrg = $_POST['nmbrg'];
		$kdbrg = $_POST['kdbrg'];
		$spesbrg = $_POST['spesbrg'];
		$lksbrg = $_POST['lksbrg'];

		$q = "insert into log2a1(nabr,kdbr,spes,loka) values ('".$nmbrg."','".$kdbrg."','".$spesbrg."','".$lksbrg."')";
		$x = pg_query($dbconn,$q);
		if($x){
			echo('Done');
		}else{
			echo('Fail');
		}
	}
}else{
	print('No Connection to Database Im Sorry :((');
}