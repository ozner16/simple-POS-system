<!DOCTYPE html>
<html>
<head>
<title>Admin Page</title>

<!-- JS file/s -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


<style>
body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 6px 6px 32px;
  text-decoration: none;
  font-size: 18px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 200px; /* Same as the width of the sidenav */
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

a{
  cursor: pointer;
}
</style>


</head>
<body>

<div class="sidenav">
  <h4 style="color:white; margin-left:20px;font-size:20px;">R&Z CLOTHING STORE</h4>
  <a id="home">Home</a>
  <a id="employee">Employee</a>
  <a id="payroll">Payroll</a>
  <a id="PoS_A">Point of Sale A</a>
  <a id="PoS_B">Point of Sale B</a>
  <a id="user_acct">User Account</a>
  <a id="logout" href="http://localhost/Web%20Development%20_Original/">Logout</a>
</div>

<div class="main" style="height: 800px; width:101%">

    <iframe id="frame"  width="100%" height="100%" src="http://localhost/Web%20Development%20_Original/homepage.php" frameborder="0" scrolling="auto" allowfullscreen>
    </iframe>
</div>
   
</body>
</html>

<script>
$(document).ready(function(){

  $("#home").click(function() {
		document.getElementById('frame').src = "http://localhost/Web%20Development%20_Original/homepage.php";
	});

  $("#employee").click(function() {
		document.getElementById('frame').src = "http://localhost/Web%20Development%20_Original/Employee_Listview.php";
	});

  $("#payroll").click(function() {
		document.getElementById('frame').src = "http://localhost/Web%20Development%20_Original/Employee_payroll_list.php";
	});

  $("#PoS_A").click(function() {
		document.getElementById('frame').src = "http://localhost/Web%20Development%20_Original/web1.php";
	});

  $("#PoS_B").click(function() {
		document.getElementById('frame').src = "http://localhost/Web%20Development%20_Original/web3_2nd.php";
	});

  $("#user_acct").click(function() {
		document.getElementById('frame').src = "http://localhost/Web%20Development%20_Original/user_acct_page.php";
	});

 










//end of $(document).ready(function(){ ---
});
</script>

