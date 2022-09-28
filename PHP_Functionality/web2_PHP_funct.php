<?php 
      //connection
      $servername="localhost";
      $userN="root";
      $passW="";
      $databaseName="web_development";
      $conn = mysqli_connect($servername,$userN,$passW,$databaseName);
      if(!$conn)
      {
         die("Connection Failed!" . mysqli_connect_error()); 
      }
      //mysql query 
      $query_select = "SELECT * from emp_basic_info where emp_num = '1';";
      $query_database = mysqli_query($conn,$query_select);
      $row = mysqli_fetch_array($query_database);
?>