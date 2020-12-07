
var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("id");
console.log(c);

$.ajax({
		method: "GET",
		url: 'http://localhost:8762/movie/'+c
	}).done(function(data){//anonymus function, async task
		// data = JSON.parse(data.toString());
		console.log(data)
		showMovies(data);
	}).always(function(){

});


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

		 movieName.innerHTML = data.name;
		 trailerFrame.src = data.movie + "?autoplay=1"

	}

	wishlistButton.addEventListener("click", function(){
		$.ajax({
			method: "PUT",
			url: 'http://localhost:8762/wishlist/add/'+1+'/'+c //testUser
		}).done(function(data){//anonymus function, async task
			// data = JSON.parse(data.toString());
			console.log(data)
		}).always(function(){
			$.notify("Added to wishlist", "success");
		});
	});