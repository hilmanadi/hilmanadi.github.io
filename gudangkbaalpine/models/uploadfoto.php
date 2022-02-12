<?php
include 'connect.php';

function rq($d,$x){
    $res = pg_query($d,$x);
}

$image = $_POST['image1'];
$type = $_POST['type'];
$flimg=$_POST["nama"];
$id = $_POST["id"];
$drr = dirname(__FILE__);
if($type=='png'){
	$img = str_replace('data:image/png;base64,', '', $image);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	$im = imagecreatefromstring($data);
	$width = imagesx($im);
    $height = imagesy($im);
    $newwidth = 600;
    $newheight = 800;
    $thumb = imagecreatetruecolor($newwidth, $newheight);
    imagecopyresized($thumb, $im, 0, 0, 0, 0, $newwidth, $newheight, $width, $height);
    if(imagepng($thumb,$drr.'\\tempimg\\'.$flimg.".png")){
        $flku = $flimg.".png";
        $q = "update log2a1 set foto='".$flku."' where id='".$id."'";
        rq($dbconn,$q);
    	print('Done');	
    }
    else{
    	print('Fail');
    }
}else{
	$img = str_replace('data:image/jpeg;base64,', '', $image);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	$im = imagecreatefromstring($data);
	$width = imagesx($im);
    $height = imagesy($im);
    $newwidth = 600;
    $newheight = 800;
    $thumb = imagecreatetruecolor($newwidth, $newheight);
    imagecopyresized($thumb, $im, 0, 0, 0, 0, $newwidth, $newheight, $width, $height);
    if(imagejpeg($thumb,$drr.'\\tempimg\\'.$flimg.".jpg")){
        $flku = $flimg.".jpg";
        $q = "update log2a1 set foto='".$flku."' where id='".$id."'";
        rq($dbconn,$q);
    	print('Done');
    }else{
    	print('Fail');
    }
}

?>