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

      // Retrieve the id from the URL parameters
      $receivedText = urldecode($_GET['id']);

      //mysql query 
      $query_select = "SELECT * from emp_basic_info where emp_num = '$receivedText';";
      $query_database = mysqli_query($conn,$query_select);
      $row = mysqli_fetch_array($query_database);
?>