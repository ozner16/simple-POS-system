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
    
            
            //fetch data
            // $query_select = "SELECT * from emp_basic_info WHERE emp_num = '$emp_num';";
            // $query_database = mysqli_query($conn,$query_select);
            // $row = mysqli_fetch_array($query_database);
            // echo`<script> window.location.href = './update_employee.php?id=' + $receivedText </script>`;
           
            if(isset($_POST['update_btn']))
            { 
                      
            
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
            


                  // UPDATE RECORD
                  // Get file details
                  $image_name = $_FILES["file"]["name"];
                  $file_type = $_FILES["file"]["type"];
                  $file_Tmp_name = $_FILES["file"]["tmp_name"];

                  // Read file data
                  if(!empty($file_Tmp_name)){
                        $file_data = file_get_contents($file_Tmp_name);
                  }

                  $parameterized_query = $conn->prepare("UPDATE emp_basic_info SET dept= ?, F_name= ?, M_name= ?, L_name= ?, civil_status= ? , designation= ?, 
                   Q_D_status= ?, paydate= ?, emp_status= ?, suffix= ?, birthdate= ?, gender= ?, nationality= ?, 
                   contact_num= ?, email= ?, other_socmedia= ?, socmedia_id= ?, address_line1= ?,
                   address_line2= ?, city_municipality= ?, state_province= ?, country= ?, zip_code = ?, image_name= ?, mimetype= ?, photo= ? WHERE emp_num= ?;");
                 
                  
                  if(isset($file_data)){

                        $parameterized_query->bind_param("sssssssssssssissssssssissss", $dept, $F_name, $M_name, $L_name, $civil_status, $designation, $Q_D_status, $paydate, $emp_status, $suffix, $birthdate, $gender, $nationality,
                        $contact_num, $email, $other_socmedia, $socmedia_id, $address_line1, $address_line2, $city_municipality, $state_province, $country, 
                        $zip_code, $image_name, $file_type, $file_data ,$receivedText);

                        if($parameterized_query->execute()){
                              echo "<script> alert('Record updated successfully!') </script>";
                              echo "<script> window.location.href='./Employee_Listview.php'; </script>";    
                              // echo "succesfully update!";
                        }
                        else{
                              echo "<script> alert('Error updating record!') </script>";
                        }
                  }
                  else{
                        $current_photo = $row2['photo'];

                        $parameterized_query->bind_param("sssssssssssssissssssssissss", $dept, $F_name, $M_name, $L_name, $civil_status, $designation, $Q_D_status, $paydate, $emp_status, $suffix, $birthdate, $gender, $nationality,
                        $contact_num, $email, $other_socmedia, $socmedia_id, $address_line1, $address_line2, $city_municipality, $state_province, $country, 
                        $zip_code, $image_name, $file_type, $current_photo ,$receivedText);

                        if($parameterized_query->execute()){
                              echo "<script> alert('Record updated successfully!') </script>";
                              echo "<script> window.location.href='./Employee_Listview.php'; </script>";    
                              // echo "succesfully update!";
                        }
                        else{
                              echo "<script> alert('Error updating record!') </script>";
                        }
                       
                  }
                 
            } 
            
            if(isset($_POST['delete_btn']))
            {
                  $query_delete = "DELETE FROM emp_basic_info WHERE emp_num='$receivedText';";
                  $query_result = $conn->query($query_delete);

                  if($query_result){
                        echo "<script> alert('Record successfully deleted!') </script>";
                        echo "<script> window.location.href='./Employee_Listview.php'; </script>";    
                  }
                  else{
                        echo "<script> alert('Error deleting record!') </script>";
                  }
            }
            
      
?>