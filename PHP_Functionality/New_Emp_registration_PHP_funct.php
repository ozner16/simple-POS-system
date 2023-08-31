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

            //upload pic
            $img_name = basename($_FILES["img"]["name"]);
            $tar_dir = "uploads/";
            $target_file = $tar_dir . $img_name;
            $uploadNow = 1;

            $query_insert = "INSERT INTO emp_basic_info(emp_num,dept,F_name,M_name,L_name,civil_status,designation,Q_D_status,paydate,emp_status,suffix,birthdate,gender,nationality,contact_num,email,other_socmedia,socmedia_id,address_line1,address_line2,city_municipality,state_province,country,zip_code,pic_path,image_name) 
            values ('$emp_num','$dept','$F_name','$M_name','$L_name','$civil_status','$designation','$Q_D_status','$paydate','$emp_status','$suffix','$birthdate','$gender','$nationality','$contact_num','$email','$other_socmedia','$socmedia_id','$address_line1','$address_line2','$city_municipality','$state_province','$country','$zip_code','$target_file','$img_name')";
        
            if(isset($_POST['save_btn']))
            {
                  if(mysqli_query($conn,$query_insert))
                  {
                        //upload pic
                        if(file_exists($target_file))
                        {
                            //echo'<script>alert("Sorry, File you are trying to upload already exists.")</script>';
                            $uploadNow = 0;
                        }
                        else
                        {
                            $uploadNow = 1;
                        }
                        if($uploadNow == 1)
                        {
                            $conn = new mysqli('localhost','root','','web_development');
                            if($conn->connect_error){die("Connection Failed: " . $conn->connect_error );}
                            
                              $result = $conn->query($query_insert);       
                               
                            if(move_uploaded_file($_FILES["img"]["tmp_name"], $target_file ))
                            {
                              //echo'<script>alert("Your Files has been uploaded.")</script>';
                            }
                            else
                            {
                              echo'<script>alert("Sorry, there was an error uploading your picture.")</script>';                    
                            }                  
                        }
                        echo'<script>alert("Data is successfully inserted to the database.")</script>';
                        echo "<script> window.location.href='../New_Emp_registration.php'; </script>";                       
                  }
                  else
                  {                                 
                        echo'<script>alert("Error ! No data inserted to the database.")</script>';
                        echo "<script> window.location.href='../New_Emp_registration.php'; </script>";
                  }
            }
            if(isset($_POST['cancel_btn']))
            {
                  echo "<script> window.location.href='../New_Emp_registration.php'; </script>";
            }
      } 
?>