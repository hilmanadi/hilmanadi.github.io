
var getYear = () =>{
	const date1 = new Date();
	const date2 = new Date('10/11/1995');
	const diffTime = Math.abs(date2 - date1);
	const diffYear = Math.floor(diffTime / (1000 * 60 * 60 * 24)/11); 
	
	return diffYear
}

var getmenu = (x) => {
	if(x=="Introduction"){
		window.location.href='#introduction';
	}else if(x=='Profile'){
		window.location.href='#profile';
	}else if(x=='Experience'){
		window.location.href='#experience';
	}else if(x=='Achievement'){
		window.location.href='#achievement';
	}else if(x=='Projects'){
		window.location.href='#projects';
	}else if(x=='Skills'){
		window.location.href='#skills';
	}
}