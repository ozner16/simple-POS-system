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

      //login button click
      if(isset($_POST['btn-login']))
      {

            if(empty($_POST['username'])){
                  echo "<script>alert('Enter your Username!')</script>";
            }
            elseif(empty($_POST['key'])){
                  echo "<script>alert('Enter your Password!')</script>";
            }
            else{
                  $user = $_POST['username'];
                  $pass = $_POST['key'];

                  // comparing User username and password data to database
                  $query = "SELECT * FROM user_account_tbl WHERE username = '$user' AND user_password = '$pass';";
                  $query_result = $conn->query($query);
                  
                  if($query_result->num_rows > 0){
                        
                        $row = $query_result->fetch_assoc();

                        if($row['user_type'] == "Admin"){
                              echo "<script> window.location.href='./admin_page.php'; </script>";
                        }
                        elseif($row['user_type'] == "Cashier"){
                              echo "<script> window.location.href='./web3_2nd.php'; </script>";
                        }
                        elseif($row['user_type'] == "Accounting_Staff"){
                              echo "<script> window.location.href='./Employee_payroll_list.php'; </script>";
                        }
                  }
                  else{
                        echo "<script> alert(`Account doesn't exists!`) </script>";
                  }
                  
            }
        
      }
      
?>