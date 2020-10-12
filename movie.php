<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Movies</title>
	<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
	<link rel="stylesheet" type="text/css" href="style/all.css">
	<script type="text/javascript" src="js/notify.min.js"></script>
</head>
<body>


	<div class="header">
		<a href="/Movie" class="logo">
			<img src="images/logo.png">
		</a>
		<div class="nav">
			<ul>
				<a href="./index.html" id="moviesButton"> My movies </a>
				<a href="./store.html" id="storeButton"> Store </a>
				<a href="./wishlist.html" id="wishButton"> Wishlist </a>
				<a href="./bought.html" id="boughtButton"> Bought </a>
			</ul>
		</div>
		<a class="profile"></a>
	</div>

<section class="movie-trailer">
	<h3 id="movieName">Новинки</h3>
	<h3 id="wishlistButton">Add to wishlist</h3>
	<iframe id="trailerFrame" width="100%" height="700px" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;" allowfullscreen></iframe>
	
</section>

<script type="text/javascript" src="js/movie.js"></script>
</body>
</html>