<!DOCTYPE html>
<html>
<head>
<title>Users List</title>

<!-- JS file/s -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<style>

th {background-color: #3ba9f1;}
tr{cursor: pointer;}

body{
  overflow: hidden;
  padding: 20px;
}

</style>

</head>
<body>

<h2 style="margin-left: 10px;">Users List</h2>
<br>
<table class="table table-bordered table-hover">
<thead>
    <tr>
      <th>Employee Number</th>
      <th>Employee Name</th>
      <th>Username</th>
      <th>User Type</th>
      <th>User Status</th>
      <th>Department</th>
      <th>Designation</th>  
    </tr>
  </thead>
  <tbody>
    
  <?php
    //connection
    include("PHP_Functionality/connection.php");

      //emp_basic_info;
      $query_select = "SELECT emp_num, F_name, M_name, L_name, dept, designation, suffix from emp_basic_info;";
      $result = mysqli_query($conn,$query_select);
      $resultCheck = mysqli_num_rows($result);

      //user_account_tbl
      $query_select1 = "SELECT username, user_type, user_status from user_account_tbl;";
      $result1 = mysqli_query($conn,$query_select1);
      $resultCheck1 = mysqli_num_rows($result1);

      if(($resultCheck > 0)  && ($resultCheck1 > 0) )
      {
            while(($row = mysqli_fetch_assoc($result)) && ($row1 = mysqli_fetch_assoc($result1)))
            {
                echo " <tr>  <td>$row[emp_num]</td>  <td>$row[F_name] $row[M_name] $row[L_name] $row[suffix]</td>  <td>$row1[username]</td>  <td>$row1[user_type]</td> <td>$row1[user_status]</td> <td>$row[dept]</td> 
                <td>$row[designation]</td>  <tr> ";

            }

      }

?>

</tbody>

</table>
</body>
</html>
<script>
$(document).ready(function(){

  $('table tr').on('click', 'td', function () {
   window.location.href = "./user_acct_info.php";
})

//end of $(document).ready(function(){ ---
});
</script>
