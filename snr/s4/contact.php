<?php
/*
Free Bootstrap Themes : https://www.Zerotheme.com
*/

$text = "<span style='color:red; font-size: 35px; line-height: 40px; magin: 10px;'>Error! Please try again.</span>";

if(isset($_POST['submitcontact']))
{
	$name=$_POST['name'];
	$email=$_POST['email'];
	$message=$_POST['message'];

	$to = "youremail@gmail.com";
	$subject = "Zerotheme - Testing Contact Form";
	$message = " Name: " . $name ."\r\n Email: " . $email . "\r\n Message:\r\n" . $message;
	 
	$from = "Zerotheme dot com";
	$headers = "From:" . $from . "\r\n";
	$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n"; 
	 
	if(@mail($to,$subject,$message,$headers))
	{
	  $text = "<span style='color:blue; font-size: 35px; line-height: 40px; margin: 10px;'>Your Message was sent successfully !</span>";
	}
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Free Bootstrap Themes by Zerotheme dot com - Free Responsive Html5 Templates">
    <meta name="author" content="https://www.Zerotheme.com">
	
    <title>MyAfrica | Free Bootstrap Themes by Zerotheme.com</title>
	
    <!-- Bootstrap Core CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css"  type="text/css">
	
	<!-- Custom CSS -->
    <link rel="stylesheet" href="css/style.css">
	
	<!-- Owl Carousel Assets -->
    <link href="owl-carousel/owl.carousel.css" rel="stylesheet">
    <link href="owl-carousel/owl.theme.css" rel="stylesheet">
	
	<!-- Custom Fonts -->
    <link rel="stylesheet" href="font-awesome-4.4.0/css/font-awesome.min.css"  type="text/css">
	
	<!-- jQuery and Modernizr-->
	<script src="js/jquery-2.1.1.js"></script>
	
	<!-- Core JavaScript Files -->  	 
    <script src="js/bootstrap.min.js"></script>
	
	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="js/html5shiv.js"></script>
        <script src="js/respond.min.js"></script>
    <![endif]-->
</head>

<body class="single-page">
<header>
	<!--Top-->
	<nav id="top">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<strong>MyAfrica - Welcome to Us!</strong>
				</div>
				<div class="col-md-6">
					<ul class="list-inline top-link link">
						<li><a href="index.html"><i class="fa fa-home"></i> Home</a></li>
						<li><a href="contact.html"><i class="fa fa-comments"></i> Contact</a></li>
						<li><a href="#"><i class="fa fa-question-circle"></i> FAQ</a></li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</header>
	
	<!--Navigation-->
    <nav id="menu" class="navbar">
		<div class="navbar-header">
			<button type="button" class="btn btn-navbar navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"><i class="fa fa-bars"></i></button>
			<a class="navbar-brand" href="#">
				<div class="logo"><span>MYAFRICA</span></div>
			</a>
		</div>
		<div class="collapse navbar-collapse navbar-ex1-collapse">
			<ul class="nav navbar-nav">
				<li><a href="index.html">Home</a></li>
				<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Account <i class="fa fa-arrow-circle-o-down"></i></a>
					<div class="dropdown-menu">
						<div class="dropdown-inner">
							<ul class="list-unstyled">
								<li><a href="#">Login</a></li>
								<li><a href="#">Register</a></li>
							</ul>
						</div>
					</div>
				</li>
				<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Videos <i class="fa fa-arrow-circle-o-down"></i></a>
					<div class="dropdown-menu">
						<div class="dropdown-inner">
							<ul class="list-unstyled">
								<li><a href="archive.html">Text 201</a></li>
								<li><a href="archive.html">Text 202</a></li>
								<li><a href="archive.html">Text 203</a></li>
								<li><a href="archive.html">Text 204</a></li>
								<li><a href="archive.html">Text 205</a></li>
							</ul>
						</div> 
					</div>
				</li>
				<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Category <i class="fa fa-arrow-circle-o-down"></i></a>
					<div class="dropdown-menu" style="margin-left: -203.625px;">
						<div class="dropdown-inner">
							<ul class="list-unstyled">
								<li><a href="archive.html">Text 301</a></li>
								<li><a href="archive.html">Text 302</a></li>
								<li><a href="archive.html">Text 303</a></li>
								<li><a href="archive.html">Text 304</a></li>
								<li><a href="archive.html">Text 305</a></li>
							</ul>
							<ul class="list-unstyled">
								<li><a href="archive.html">Text 306</a></li>
								<li><a href="archive.html">Text 307</a></li>
								<li><a href="archive.html">Text 308</a></li>
								<li><a href="archive.html">Text 309</a></li>
								<li><a href="archive.html">Text 310</a></li>
							</ul>
							<ul class="list-unstyled">
								<li><a href="archive.html">Text 311</a></li>
								<li><a href="archive.html">Text 312</a></li>
								<li><a href="archive.html#">Text 313</a></li>
								<li><a href="archive.html#">Text 314</a></li>
								<li><a href="archive.html">Text 315</a></li>
							</ul>
						</div>
					</div>
				</li>
				<li><a href="#"><i class="fa fa-cubes"></i> Blocks</a></li>
				<li><a href="contact.html"><i class="fa fa-envelope"></i> Contact</a></li>
			</ul>
			<div class="col-sm-3 col-md-3 navbar-right">
				<form class="navbar-form" role="search">
					<div class="input-group">
						<input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term">
						<div class="input-group-btn">
							<button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</nav>
	<!-- Header -->
	
	<!-- /////////////////////////////////////////Content -->
	<div id="page-content" class="single-page container">
		<div class="gutter-7px">
			<div id="main-content" class="col-md-8 fix-right">
				<article>
					<center><div class="box-header">
						<h1 class="center">Contact</h1>
					</div></center>
					<!--Warning-->
					<center><?php echo $text;?></center>
					<!---->
					<div class="box-content">
						<div id="contact_form">
							<form name="form1" id="ff" method="post" action="contact.php">
								<label>
								<span>Enter your name:</span>
								<input type="text"  name="name" id="name" required>
								</label>
								<label>
								<span>Enter your email:</span>
								<input type="email"  name="email" id="email" required>
								</label>
								<label>
								<span>Your message here:</span>
								<textarea name="message" id="message"></textarea>
								</label>
								<center><input class="sendButton" type="submit" name="submitcontact" value="Submit"></center>
							</form>
						</div>
					</div>
				</article>
			</div>
			<div id="sidebar" class="col-md-4 fix-left">
				<!---- Start Widget ---->
				<div class="widget wid-follow">
					<div class="heading"><h4>Follow Us</h4></div>
					<div class="content">
						<ul class="list-inline">
							<li>
								<a href="facebook.com/">
									<div class="box-facebook">
										<span class="fa fa-facebook fa-2x icon"></span>
										<span>1250</span>
										<span>Fans</span>
									</div>
								</a>
							</li>
							<li>
								<a href="facebook.com/">
									<div class="box-twitter">
										<span class="fa fa-twitter fa-2x icon"></span>
										<span>1250</span>
										<span>Fans</span>
									</div>
								</a>
							</li>
							<li>
								<a href="facebook.com/">
									<div class="box-google">
										<span class="fa fa-google-plus fa-2x icon"></span>
										<span>1250</span>
										<span>Fans</span>
									</div>
								</a>
							</li>
						</ul>
						<img src="images/banner.jpg" />
					</div>
				</div>
				<!---- Start Widget ---->
				<div class="widget wid-post">
					<div class="heading"><h4>Category</h4></div>
					<div class="content">
						<div class="post wrap-vid">
							<div class="zoom-container">
								<div class="zoom-caption">
									<a href="single.html"></a>
								</div>
								<img src="images/1.jpg" />
							</div>
							<div class="wrapper">
								<h5 class="vid-name"><a href="#">Video's Name</a></h5>
								<div class="info">
									<h6>By <a href="#">Kelvin</a></h6>
									<span><i class="fa fa-calendar"></i>25/3/2015</span> 
									<span><i class="fa fa-heart"></i>1,200</span>
								</div>
							</div>
						</div>
						<div class="post wrap-vid">
							<div class="zoom-container">
								<div class="zoom-caption">
									<a href="single.html"></a>
								</div>
								<img src="images/2.jpg" />
							</div>
							<div class="wrapper">
								<h5 class="vid-name"><a href="#">Video's Name</a></h5>
								<div class="info">
									<h6>By <a href="#">Kelvin</a></h6>
									<span><i class="fa fa-calendar"></i>25/3/2015</span> 
									<span><i class="fa fa-heart"></i>1,200</span>
								</div>
							</div>
						</div>
						<div class="post wrap-vid">
							<div class="zoom-container">
								<div class="zoom-caption">
									<a href="single.html"></a>
								</div>
								<img src="images/3.jpg" />
							</div>
							<div class="wrapper">
								<h5 class="vid-name"><a href="#">Video's Name</a></h5>
								<div class="info">
									<h6>By <a href="#">Kelvin</a></h6>
									<span><i class="fa fa-calendar"></i>25/3/2015</span> 
									<span><i class="fa fa-heart"></i>1,200</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!---- Start Widget ---->
				<div class="widget ">
					<div class="heading"><h4>Top News</h4></div>
					<div class="content">
						<div class="wrap-vid">
							<div class="zoom-container">
								<div class="zoom-caption">
									<a href="single.html"></a>
								</div>
								<img src="images/1.jpg" />
							</div>
							<h3 class="vid-name"><a href="#">Video's Name</a></h3>
							<div class="info">
								<h5>By <a href="#">Kelvin</a></h5>
								<span><i class="fa fa-calendar"></i>25/3/2015</span> 
								<span><i class="fa fa-heart"></i>1,200</span>
							</div>
						</div>
						<div class="wrap-vid">
							<div class="zoom-container">
								<div class="zoom-caption">
									<a href="single.html"></a>
								</div>
								<img src="images/2.jpg" />
							</div>
							<h3 class="vid-name"><a href="#">Video's Name</a></h3>
							<div class="info">
								<h5>By <a href="#">Kelvin</a></h5>
								<span><i class="fa fa-calendar"></i>25/3/2015</span> 
								<span><i class="fa fa-heart"></i>1,200</span>
							</div>
						</div>
						<div class="wrap-vid">
							<div class="zoom-container">
								<div class="zoom-caption">
									<a href="single.html"></a>
								</div>
								<img src="images/3.jpg" />
							</div>
							<h3 class="vid-name"><a href="#">Video's Name</a></h3>
							<div class="info">
								<h5>By <a href="#">Kelvin</a></h5>
								<span><i class="fa fa-calendar"></i>25/3/2015</span> 
								<span><i class="fa fa-heart"></i>1,200</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<footer>
		<div class="wrap-footer">
			<div class="container">
				<div class="row">
					<div class="col-md-4 col-footer footer-1">
						<div class="footer-heading"><h1><span style="color: #fff;">MYFRICA</span></h1></div>
						<div class="content">
							<p>Never missed any post published in our site. Subscribe to our daly newsletter now.</p>
							<strong>Email address:</strong>
							<form action="#" method="post">
								<input type="text" name="your-name" value="" size="40" placeholder="Your Email" />
								<input type="submit" value="SUBSCRIBE" class="btn btn-3" />
							</form>
						</div>
					</div>
					<div class="col-md-4 col-footer footer-2">
						<div class="footer-heading"><h4>Tags</h4></div>
						<div class="content">
							<a href="#">animals</a>
							<a href="#">cooking</a>
							<a href="#">countries</a>
							<a href="#">city</a>
							<a href="#">children</a>
							<a href="#">home</a>
							<a href="#">likes</a>
							<a href="#">photo</a>
							<a href="#">link</a>
							<a href="#">law</a>
							<a href="#">shopping</a>
							<a href="#">skate</a>
							<a href="#">scholl</a>
							<a href="#">video</a>
							<a href="#">travel</a>
							<a href="#">images</a>
							<a href="#">love</a>
							<a href="#">lists</a>
							<a href="#">makeup</a>
							<a href="#">media</a>
							<a href="#">password</a>
							<a href="#">pagination</a>
							<a href="#">wildlife</a>
						</div>
					</div>
					<div class="col-md-4 col-footer footer-3">
						<div class="footer-heading"><h4>Link List</h4></div>
						<div class="content">
							<ul>
								<li><a href="#">MOST VISITED COUNTRIES</a></li>
								<li><a href="#">5 PLACES THAT MAKE A GREAT HOLIDAY</a></li>
								<li><a href="#">PEBBLE TIME STEEL IS ON TRACK TO SHIP IN JULY</a></li>
								<li><a href="#">STARTUP COMPANY???S CO-FOUNDER TALKS ON HIS NEW PRODUCT</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="copy-right">
			<p>Copyright 2016 - Designed by <a href="https://www.Zerotheme.com" target="_blank">Zerotheme</a></p>
		</div>
	</footer>
	<!-- Footer -->
	
</body>
</html>
