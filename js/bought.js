$.ajax({
		method: "GET",
		url: 'http://localhost:8762/order/list'
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
		 		'<a id="buyButton" data-id="'+data[j].id+'" class="card" style="background: url(\''+data[j].banner+'\'); background-size: cover; background-position: center;">'+
		 			
		 			'<div class="text">'+
		 				'<h3 class="name">'+
		 					data[j].name+
		 				'</h3>'+
		 			'</div>'+
		 			'<div class="buyButton" >'+
		 				'Buy'+
		 			'</div>'+
		 		"</a>";
		 }

		 cardsBlock.innerHTML = element;
		}