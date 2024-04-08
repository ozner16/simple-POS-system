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
   

            if(isset($_POST['save_btn']))
            {

                  if(!empty($_POST['First_Name']) && !empty($_POST['Middle_Name']) && !empty($_POST['Last_Name'])){
                        // $emp_num = $_POST['Employee_Number'];
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

                        

                              // Get file details
                              $image_name = $_FILES["img"]["name"];
                              $file_type = $_FILES["img"]["type"];
                              $file_Tmp_name = $_FILES["img"]["tmp_name"];

                              // Read file data
                              if(!empty($file_Tmp_name)){
                                    $file_data = file_get_contents($file_Tmp_name);
                              }

                        
                              // Include/Connect to MySQL database and use the connection/mysqli object("$conn")
                              
                              // Prepare SQL statement with a parameterized query
                              $parameterized_query = $conn->prepare("INSERT INTO emp_basic_info(dept, F_name, M_name, L_name, civil_status, designation, Q_D_status, paydate, emp_status, suffix,
                              birthdate, gender, nationality, contact_num, email, other_socmedia, socmedia_id, address_line1, address_line2, city_municipality,
                              state_province, country, zip_code, image_name, mimetype, photo) 
                              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                              $parameterized_query->bind_param("sssssssssssssississsssisss",$dept, $F_name, $M_name, $L_name, $civil_status, $designation, $Q_D_status, $paydate, $emp_status, $suffix,
                              $birthdate, $gender, $nationality, $contact_num, $email, $other_socmedia, $socmedia_id, $address_line1, $address_line2, $city_municipality,
                              $state_province, $country, $zip_code, $image_name, $file_type, $file_data);
                        
                        
                              // Execute the prepared statement
                              if($parameterized_query->execute()){
                                    echo "<script> alert('New Employee data record added!')</script>";
                                    echo "<script> window.location.href='./Employee_Listview.php'; </script>";
                              }
                              else{
                                    echo "Error: " . $parameterized_query->error;
                              }
                        
                        
                              $parameterized_query->close();
                              //  $conn->close();
                  }
                  else{
                        echo "<script> alert('You must Insert the Full Name!')</script>";
                  }

                 

            }
          
      
?>