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

      $query = "SELECT * FROM emp_basic_info INNER JOIN user_account_tbl 
      ON emp_basic_info.user_id = user_account_tbl.user_id WHERE emp_num = '$receivedText';";
      $query_result = $conn->query($query);
      $row = $query_result->fetch_assoc();

      if(isset($_POST['update_btn'])){


            if(!empty($_POST['password'])){
                 
                  $user_pass = $_POST['password'];
                  $user_status = $_POST['userStatus'];
                  
                  $query_update = "UPDATE emp_basic_info INNER JOIN user_account_tbl 
                  ON emp_basic_info.user_id = user_account_tbl.user_id SET user_account_tbl.user_password= '$user_pass', user_account_tbl.user_status_id= '$user_status'
                  WHERE emp_basic_info.emp_num = $receivedText;";

                  $query_update_result = $conn->query($query_update);
                  
                  if($query_update_result){
                        echo "<script> alert('Updated the record succesfully!') </script>";
                        echo "<script> window.location.href='./user_acct_page.php'; </script>"; 
                  }
                  else{
                        echo "There's an error updating the record!";
                  }
             
            }
            else{
                  echo "Enter a Password!";
            }
      }
      
      if(isset($_POST['back_btn'])){
            echo "<script> window.location.href='./user_acct_page.php'; </script>"; 
      }
      
      
      



































      //       //mysql query select from emp_basic_info
      //       $query_select2 = "SELECT * from emp_basic_info where emp_num = '1';";
      //       $query_database2 = mysqli_query($conn,$query_select2);
      //       $row2 = mysqli_fetch_array($query_database2);

      //       //mysql query select from user_account_tbl
      //       $query_select3 = "SELECT * from user_account_tbl where user_id = '1';";
      //       $query_database3 = mysqli_query($conn,$query_select3);
      //       $row3 = mysqli_fetch_array($query_database3);
            
      // //mysql query 
      // if(isset($_POST['emp_number']))
      // {
      //       $username = $_POST['username'];
      //       $password = $_POST['password'];
      //       // $con_password = $_POST['confirm_password'];
      //       $user_type = $_POST['user_type'];
      //       $user_status = $_POST['user_status'];
      //       $emp_num = $_POST['emp_number'];

      //       $query_update = "UPDATE user_account_tbl SET username= '$username', user_password= '$password',
      //       user_type='$user_type', user_status='$user_status' WHERE emp_num='$emp_num';";

      //       $query_insert = "INSERT INTO user_account_tbl(employee_id,username,user_password,user_type,user_status,emp_num) 
      //       values ('','$username','$password','$user_type','$user_status',$emp_num)";

      //       $query_delete = "DELETE FROM user_account_tbl WHERE emp_num='$emp_num';"; 
      //       $query_delete1 = "DELETE FROM emp_basic_info WHERE emp_num='$emp_num';"; 

      //       //finding employee number from user_account_tbl
      //       $query_select = "SELECT * from user_account_tbl WHERE emp_num = '$emp_num';";
      //       $query_database = mysqli_query($conn,$query_select);
      //       $row = mysqli_fetch_array($query_database);

      //       //finding employee number from emp_basic_info
      //       $query_select1 = "SELECT * from emp_basic_info WHERE emp_num = '$emp_num';";
      //       $query_database1 = mysqli_query($conn,$query_select1);
      //       $row1 = mysqli_fetch_array($query_database1);

      //       if(isset($_POST['update_btn']))
      //       {
      //             if($row > 0 )
      //             {
      //                   mysqli_query($conn,$query_update);
      //                   echo'<script>alert("Data is successfully updated.")</script>';
      //                   echo "<script> window.location.href='../user_acct_page.php'; </script>";
      //             }
      //             else
      //             {
      //                   if($_POST['emp_number'] == '')
      //                   {
      //                         echo'<script>alert("Employee Number must be filled.")</script>';
      //                         echo "<script> window.location.href='../user_acct_info.php'; </script>";
      //                   }
      //                   else
      //                   {
      //                         mysqli_query($conn,$query_insert);
      //                         echo'<script>alert("Data is successfully updated.")</script>';
      //                         echo "<script> window.location.href='../user_acct_page.php'; </script>";
      //                   }
      //             }
      //       }
      //       if(isset($_POST['delete_btn']))
      //       {
      //             if(($row > 0)&&($row1> 0) )
      //             {
      //                   mysqli_query($conn,$query_delete);
      //                   mysqli_query($conn,$query_delete1);
      //                   echo'<script>alert("Data is successfully deleted.")</script>';
      //                   echo "<script> window.location.href='../user_acct_page.php'; </script>";
      //             }
      //             else
      //             {
      //                   echo'<script>alert("Error ! No such Data Exists.")</script>';
      //                   echo "<script> window.location.href='../user_acct_info.php'; </script>";
      //             }
      //       }
      //       if(isset($_POST['cancel_btn']))
      //       {
      //             echo "<script> window.location.href='../user_acct_info.php'; </script>";
      //       }
      // } 
?>