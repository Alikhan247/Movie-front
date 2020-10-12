$.ajax({
		method: "GET",
		url: 'http://localhost:8083/recommendation'
	}).done(function(data){//anonymus function, async task
		// data = JSON.parse(data.toString());
		console.log(data)
		showRecMovies(data);
	}).always(function(){

});


$.ajax({
		method: "GET",
		url: 'http://localhost:8081/movie/list'
	}).done(function(data){//anonymus function, async task
		// data = JSON.parse(data.toString());
		console.log(data)
		showMovies(data);
	}).always(function(){

});


	function showRecMovies(data){
		var element = "";
		 for (var j = 0; j < data.length; j++) {
		 	element += "" +
		 		'<a href="movie.php?id='+data[j].id+'" class="card" style="background: url(\''+data[j].banner+'\'); background-size: cover; background-position: center;">'+
		 			'<img src="">'+
		 			'<div class="text">'+
		 				'<h3 class="name">'+
		 					data[j].name+
		 				'</h3>'+
		 			'</div>'+
		 		"</a>";
		 }

		 cardsBlockRecommended.innerHTML = element;
	}

	function showMovies(data){
		var element = "";
		 for (var j = 0; j < data.length; j++) {
		 	element += "" +
		 		'<a href="movie.php?id='+data[j].id+'" class="card" style="background: url(\''+data[j].banner+'\'); background-size: cover; background-position: center;">'+
		 			'<img src="">'+
		 			'<div class="text">'+
		 				'<h3 class="name">'+
		 					data[j].name+
		 				'</h3>'+
		 			'</div>'+
		 		"</a>";
		 }

		 cardsBlock.innerHTML = element;
	}