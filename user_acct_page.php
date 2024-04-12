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
        /* overflow: hidden; */
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
      <th>User Type</th>
      <th>User Status</th>
      <th>Department</th>
      <th>Designation</th>  
    </tr>
  </thead>
  <tbody id="tbl-data">
    
  <?php
    //connection
    include("PHP_Functionality/connection.php");

      $query = "SELECT * FROM emp_basic_info INNER JOIN  user_account_tbl 
      ON emp_basic_info.user_id = user_account_tbl.user_id 
      INNER JOIN user_status ON user_account_tbl.user_status_id = user_status.user_status_id WHERE user_account_tbl.user_type != 'NONE' ORDER BY emp_basic_info.emp_num ASC;";
      $query_result = $conn->query($query);
      
      if($query_result->num_rows > 0){
          while($row = $query_result->fetch_assoc()){
                echo "<tr> 
                        <td>$row[emp_num]</td>
                        <td>$row[F_name] $row[M_name] $row[L_name] $row[suffix]</td>
                        <td>$row[user_type]</td>
                        <td>$row[user_status_name]</td>
                        <td>$row[dept]</td>
                        <td>$row[designation]</td>
                      <tr>";
          }
      }

?>

</tbody>

</table>
</body>
</html>
<script>
$(document).ready(function(){

let table =  document.getElementById('tbl-data');

       table.addEventListener("click", function(e){
            let id = e.target.parentElement.children[0].innerText;
           
            // Encode the text to make it URL-safe
            let encodedText = encodeURI(id);
            // Navigate to the other page with the text as a parameter
            window.location.href = "./user_acct_info.php?id=" + encodedText;

       });

});
</script>
