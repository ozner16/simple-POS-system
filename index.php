<!DOCTYPE html>
<html>
<head>
<title>Login</title>

<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

<!-- Template Main CSS File -->
<link href="assets/css/login_page.css" rel="stylesheet">


<!-- JS file/s -->
<script src="JS/login_page.js"></script>

</head>

<body>

<div class="cont1"> 		<!-- #1 MAIN CONTAINER -->

<p class="store_name">R&Z CLOTHING STORE</p>

<form method="POST" action="PHP_Functionality/login_page_funct.php" autocomplete="off">
	<section id="login" style="margin-top: 25px;">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">        	    
					<h1>Log in your account</h1>
					<form role="form" action="javascript:;" method="post" id="login-form" autocomplete="off">
						<div class="form-group">
							<label for="username" class="sr-only">Username</label>
							<input type="text" name="username" id="username" class="form-control" placeholder="Username">
						</div>
						<div class="form-group">
							<label for="key" class="sr-only">Password</label>
							<input type="password" name="key" id="key" class="form-control" placeholder="Password">
						</div>
						<div class="checkbox">
							<span class="character-checkbox" onclick="showPassword()"></span>
							<span class="label">Show password</span>
						</div>
						<input type="submit" id="btn-login" name="btn-login" class="btn btn-custom btn-lg btn-block" value="Log in">
					</form>
					<a href="javascript:;" class="forget" data-toggle="modal" data-target=".forget-modal">Forgot your password?</a>
					<hr/>            	   
				</div> <!-- /.col-xs-12 -->
			</div> <!-- /.row -->
		</div> <!-- /.container -->
	</section>
</form>	
	
</div>		<!-- #1 MAIN CONTAINER END -->

</body>

</html>