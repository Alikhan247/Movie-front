$.ajax({
		method: "GET",
		url: 'http://localhost:8762/order/list',
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
		 for (var j = 0; j < data.length; j++) {
		 	if (data[j].movies[0] != null) {
			 	element += "" +
			 		'<a href="movie.php?id='+data[j].movies[0].id+'" id="buyButton" data-id="'+data[j].id+'" class="card" style="background: url(\''+data[j].movies[0].banner+'\'); background-size: cover; background-position: center;">'+
			 			
			 			'<div class="text">'+
			 				'<h3 class="name">'+
			 					data[j].name+
			 				'</h3>'+
			 			'</div>'+
			 		"</a>";
			 }
		 }

		 cardsBlock.innerHTML = element;
		}