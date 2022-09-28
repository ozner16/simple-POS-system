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
      if(isset($_POST['username']) && isset($_POST['key']))
      {

            $user = $_POST['username'];
            $pass = $_POST['key'];
            
            //finding user and pass in user_account_tbl
            $query_select = "SELECT * from user_account_tbl WHERE username = '$user' AND user_password= '$pass';";
            $query_database = mysqli_query($conn,$query_select);
            $row = mysqli_fetch_array($query_database);
            if(isset($_POST['btn-login']))
            {
                  if($row > 0 )
                  {
                        $user_type = $row['user_type'];
                        if($user_type == 'Admin')
                        {
                              echo "<script> window.location.href='../admin_page.php'; </script>";
                        }
                        elseif($user_type == 'Cashier1')
                        {
                              echo "<script> window.location.href='../web1.php'; </script>";
                        }
                        elseif($user_type == 'Cashier2')
                        {
                              echo "<script> window.location.href='../web3_2nd.php'; </script>";
                        }
                        elseif($user_type == 'Accounting_Staff')
                        {
                              echo "<script> window.location.href='../Employee_payroll_list.php'; </script>";
                        }
                  }
                  else
                  {
                        echo'<script>alert("Error ! No such Data Exists.")</script>';
                        echo "<script> window.location.href='../index.php'; </script>";
                  }
            }
      } 
?>