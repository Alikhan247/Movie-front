$.ajax({
		method: "GET",
		url: 'http://localhost:8762/wishlist/'+1,
	  	beforeSend: function(request) {
	    	request.setRequestHeader("Authorization", localStorage.getItem("token"));
		},
	}).done(function(data){//anonymus function, async task
		// data = JSON.parse(data.toString());
		console.log(data)
		showMovies(data);
	}).always(function(){

});


	function showMovies(data){
		var element = "";
		 for (var j = 0; j < data.movies.length; j++) {
		 	element += "" +
		 		'<a href="movie.php?id='+data.movies[j].id+'" class="card" style="background: url(\''+data.movies[j].banner+'\'); background-size: cover; background-position: center;">'+
		 			'<img src="">'+
		 			'<div class="text">'+
		 				'<h3 class="name">'+
		 					data.movies[j].name+
		 				'</h3>'+
		 			'</div>'+
		 		"</a>";
		 }

		 cardsBlock.innerHTML = element;
	}