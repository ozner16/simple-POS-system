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

      //mysql query select from emp_basic_info
      $query_select2 = "SELECT * from emp_basic_info where emp_num = '$receivedText';";
      $query_database2 = mysqli_query($conn,$query_select2);
      $row2 = mysqli_fetch_array($query_database2);
      //mysql query      
      if(isset($_POST['Employee_Number']))
      {
            $emp_num = $_POST['Employee_Number'];
            $dept = $_POST['Department'];
            $F_name = $_POST['First_Name'];
            $M_name = $_POST['Middle_Name'];
            $L_name = $_POST['Last_Name'];
            $civil_status = $_POST['civil_status'];
            $designation = $_POST['Designation'];
            $Q_D_status = $_POST['Qualified_Dep_Status'];
            $paydate = $_POST['Paydate'];
            $emp_status = $_POST['Employee_Status'];
            $suffix = $_POST['Suffix'];
            $birthdate = $_POST['Date_of_Birth'];
            $gender = $_POST['gender'];
            $nationality = $_POST['nationality'];
            $contact_num = $_POST['Contact_Num'];
            $email = $_POST['Email'];
            $other_socmedia = $_POST['Other_Social_Media'];
            $socmedia_id = $_POST['SM_account_num'];
            $address_line1 = $_POST['Address_Line_1'];
            $address_line2 = $_POST['Address_Line_2'];
            $city_municipality = $_POST['City_Municipality'];
            $state_province = $_POST['State_Province'];
            $country = $_POST['Country'];
            $zip_code = $_POST['Zip_Code'];
           
            $query_update = "UPDATE emp_basic_info SET dept= '$dept', F_name='$F_name', M_name='$M_name', L_name='$L_name', civil_status= '$civil_status', designation= '$designation', 
            Q_D_status= '$Q_D_status', paydate='$paydate', emp_status='$emp_status', suffix= '$suffix', birthdate= '$birthdate', gender= '$gender', nationality= '$nationality', 
            contact_num= '$contact_num', email= '$email', other_socmedia= '$other_socmedia', socmedia_id= '$socmedia_id', address_line1= '$address_line1',
            address_line2= '$address_line2', city_municipality= '$city_municipality', state_province= '$state_province', country= '$country', zip_code = '$zip_code' WHERE emp_num='$emp_num';";

            $query_delete = "DELETE FROM emp_basic_info WHERE emp_num='$emp_num';";

            //finding employee number
            $query_select = "SELECT * from emp_basic_info WHERE emp_num = '$emp_num';";
            $query_database = mysqli_query($conn,$query_select);
            $row = mysqli_fetch_array($query_database);
           
            if(isset($_POST['update_btn']))
            {
                 
                  if($row > 0 )
                  {
                        mysqli_query($conn,$query_update);
                        echo'<script>alert("Data is successfully updated.")</script>';
                        echo "<script> window.location.href='../update_employee.php'; </script>";
                  }
                  else
                  {
                        echo'<script>alert("Error ! No such Data Exists.")</script>';
                        echo "<script> window.location.href='../update_employee.php'; </script>";
                  }
            }
            if(isset($_POST['delete_btn']))
            {
                  if($row > 0 )
                  {
                        mysqli_query($conn,$query_delete);
                        echo'<script>alert("Data is successfully deleted.")</script>';
                        echo "<script> window.location.href='../update_employee.php'; </script>";
                  }
                  else
                  {
                        echo'<script>alert("Error ! No such Data Exists.")</script>';
                        echo "<script> window.location.href='../update_employee.php'; </script>";
                  }
            }
            if(isset($_POST['cancel_btn']))
            {
                  echo "<script> window.location.href='../update_employee.php'; </script>";
            }            
      } 
?>