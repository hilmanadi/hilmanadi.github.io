<?php
include 'connect.php';
$_POST = json_decode(file_get_contents('php://input'),true);
$tag = $_POST['tag'];
$srch = $_POST['srch'];

function rq($d,$x){
	$arr = array();
	$res = pg_query($d,$x);
	while($row=pg_fetch_assoc($res)){
		array_push($arr,$row);
	}
	return $arr;
}

$q = "select * from log2a1 order by id desc limit 50";

if($dbconn){
	if($tag=='alldt'){
		$x = rq($dbconn,$q);
		echo(json_encode($x));
	}else{
		if($srch==''){
			$x = rq($dbconn,$q);
			echo(json_encode($x));
		}
		else{
			$q2 = "select * from log2a1 where upper(kdbr) like upper('%".$srch."%') or upper(nabr) like upper('%".$srch."%') or upper(spes) like upper('%".$srch."%') or upper(loka) like upper('%".$srch."%')";
			$x = rq($dbconn,$q2);
			echo(json_encode($x));
		}
	}
}else{
	print('No Connection to Database Im Sorry :((');
}