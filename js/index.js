var check = () =>{
  $('.sidenav').sidenav('open');
}

var back = () =>{
	$('.sidenav').sidenav('close');
}

var profile = () => {
	window.location.href = '#profile';
}

var exp = () => {
	window.location.href = '#experience';
}

var ach = () => {
	window.location.href = '#achievement';
}

var pro = () => {
	window.location.href = '#projects';
}

$(document).ready(function(){
$('.sidenav').sidenav({
	draggable:true
});

$('#burgerbutton').click(function(){
	check();
});

$('#so-back').click(function(){
	back();
});

$('#so-prof').click(function(){
	prof();
});

$('#so-exp').click(function(){
	exp();
});

$('#so-ach').click(function(){
	ach();
});

$('#so-pro').click(function(){
	pro();
});

window.location.href('#welcome');
});