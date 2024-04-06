<!DOCTYPE html>
<html>
<head>
   <title>Employees List</title>

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

        <!-- Template Main CSS File -->
        <link href="assets/css/web1.css" rel="stylesheet">
</head>
<body>


    <h2 style="margin-left: 10px;">Employees List</h2>
    <button class="button Calw3 OD_button" style="background-color:rgb(92, 92, 255); float:right;font-size:15px" name='new_emp_btn' id='new_emp_btn'>New Employee</button>
    <table class="table table-bordered table-hover" id="tbl">
    <thead>
        <tr>
          <th>Employee Number</th>
          <th>Employee Name</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          <th>Nationality</th>
          <th>Civil Status</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Employee Status</th>
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
                    echo " <tr>  <td>$row[emp_num]</td>  <td>$row[F_name] $row[M_name] $row[L_name]</td>  <td>$row[gender]</td>      
                    <td>$row[birthdate]</td>  <td>$row[nationality]</td>  <td>$row[civil_status]</td>  <td>$row[dept]</td>  <td>$row[designation]</td>  <td>$row[emp_status]</td>   <tr> ";

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

       let table =  document.getElementById('tbl');

       table.addEventListener("click", function(e){
            let id = e.target.parentElement.children[0].innerText;
           
            // Encode the text to make it URL-safe
            let encodedText = encodeURI(id);
            // Navigate to the other page with the text as a parameter
            window.location.href = "./update_employee.php?id=" + encodedText;

       });

       $("#new_emp_btn").click(function() {
           window.location.href = "./New_Emp_registration.php";
       });
    
</script>

