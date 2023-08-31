<!DOCTYPE html>
<html>
<head>
<title>Employees Payroll List</title>

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


<h2>Employees Payroll List</h2>
<br>
<table class="table table-bordered table-hover">
<thead>
    <tr>
      <th>Employee Number</th>
      <th>Employee Name</th>
      <th>Civil Status</th>
      <th>Department</th>
      <th>Designation</th>
      <th>Employee Status</th>
      <th>Qualified Dependent Status</th>
    </tr>
  </thead>
  <tbody>
    
  <?php
    //connection
    include("PHP_Functionality/connection.php");


      $query_select = "SELECT * from emp_basic_info;";
      $result = mysqli_query($conn,$query_select);
      $resultCheck = mysqli_num_rows($result);
    
      if($resultCheck > 0 )
      {
            while($row = mysqli_fetch_assoc($result))
            {
                echo " <tr>  <td>$row[emp_num]</td>  <td>$row[F_name] $row[M_name] $row[L_name]</td>  <td>$row[civil_status]</td>      
                <td>$row[dept]</td>  <td>$row[designation]</td>  <td>$row[emp_status]</td>  <td>$row[Q_D_status]</td> <tr> ";

            }
 
      }

      else
      {
        echo "0 results";

      }

?>

</tbody>

</table>

</body>
</html>

<script>
$(document).ready(function(){

  $('table tr').on('click', 'td', function () {
   window.location.href = "./web2.php";
})

//end of $(document).ready(function(){ ---
});
</script>