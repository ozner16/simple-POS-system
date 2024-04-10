<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>User Account Information</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet">
  <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/venobox/venobox.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/user_acct_info.css" rel="stylesheet">

<!-- JS file/s -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<!-- PHP functionality -->
<?php
    include("PHP_Functionality/user_acct_info_func.php");

    //fetching the image from the database
    if(!empty($row["photo"])){
      
      $mimetype = $row["mimetype"];
      $photo = $row["photo"];

      // Construct the data URI
      $dataURI = 'data:' . $mimetype . ';base64,' . base64_encode($photo);
  }

?>
<style type="text/css">

    img{
      height: 228px;
      width: 227px;
    }
    
    .firstMainCont form #userType, .firstMainCont form #userStatus{
        padding: 5px 20px;
    }
    .firstMainCont form #userType{
      margin-left: 30px;
    }
    .firstMainCont form #userStatus{
      margin-left: 15px;
    }
</style>

</head>

<body>

  <div class="word_title">      <!------ NEW EMPLOYEE WORD CONT ---->

    <b> <p style="margin-bottom: 0px;font-size: 30px;">USER ACCOUNT INFORMATION</p></b> 
    
</div>      <!------ NEW EMPLOYEE WORD CONT END ---->

<div class="firstMainCont">     <!------ FIRST MAIN CONTAINER ---->
    <div class="main_border">   <!------ MAIN BORDER ---->
      
          <div class="form_cont">   <!------ FIRST-A ( MAIN CONTAINER ) ---->

          <form method="POST" action="<?php echo `'./user_acct_info.php?id=' + $receivedText`?>" autocomplete="off" enctype="multipart/form-data">

                <img src = "<?php echo $dataURI; ?>" id="image1"/>

              <div class="textboxes_cont">
                
                  <p class="calctxt" style="margin-left: 30px;">First Name</p>
                  <p class="calctxt" style="margin-left: 106px;">Middle Name</p>
                  <p class="calctxt" style="margin-left: 93px;">Last Name</p>
                  <p class="calctxt" style="margin-left: 106px;">Suffix</p>
                  <p class="calctxt" style="margin-left: 143px;">Department</p>
                  <br>

                  <input type="text" name="First_Name" id="First_Name" value="<?php echo $row['F_name']; ?>" class="textboxes" style=" margin-left: 30px;" disabled/>
                  <input type="text" name="Middle_Name" id="Middle_Name" class="textboxes"  value="<?php echo $row['M_name']; ?>" disabled />
                  <input type="text" name="Last_Name" id="Last_Name" class="textboxes"  value="<?php echo $row['L_name']; ?>" disabled/>
                  <input type="text" name="suffix" id="suffix" class="textboxes" value="<?php echo $row['suffix']; ?>" disabled/>
                  <input type="text" name="department" id="department" class="textboxes" value="<?php echo $row['dept']; ?>" disabled/>
                  <br>
                  <br>

                  <p class="calctxt" style="margin-left: 30px;">Designation</p>
                  <p class="calctxt" style="margin-left: 161px;">Username</p>
                  <p class="calctxt" style="margin-left: 171px;">Password</p>
                  <br>

                  <input type="text" name="designation" id="designation" class="textboxes1" style=" margin-left: 30px;" value="<?php echo $row['designation']; ?>" disabled/>
                  <input type="text" name="username" id="username" class="textboxes1" value="<?php echo $row['username']; ?>" disabled/>
                  <input type="text" name="password" id="password" class="textboxes1" value="<?php echo $row['user_password']; ?>" />
                  <br>
                  <br>

                  <!-- <p class="calctxt" style="margin-left: 30px;">Confirm Password</p> -->
                  <p class="calctxt" style="margin-left: 30px;">User Type</p>
                  <p class="calctxt" style="margin-left: 100px;">User Status</p>
                  <p class="calctxt" style="margin-left: 90px;">Employee Number</p>
                  <br>


                  <!-- Fetch data from 'user_account_tbl' and 'emp_basic_info' table -->

                  <?php   
                
                      // dropdown from user_type column
                      //not equal
                      $query_user_type = "SELECT * FROM user_account_tbl WHERE user_type != '$row[user_type]'";
                      $query_user_type_result = $conn->query($query_user_type);

                      //equal
                      $query_user_type_equal = "SELECT * FROM user_account_tbl WHERE user_type = '$row[user_type]'";
                      $query_user_type_result_equal = $conn->query($query_user_type_equal);
                      $row_fetch_uqual = $query_user_type_result_equal->fetch_assoc();

                      echo "<select name='userType' id='userType'>";
                          echo "<option value='$row_fetch_uqual[user_id]'>$row_fetch_uqual[user_type]</option>";
                          if($query_user_type_result->num_rows > 0){
                              while($row_user_type_array = $query_user_type_result->fetch_assoc()){
                                echo "<option value='$row_user_type_array[user_id]'>$row_user_type_array[user_type] </option>";
                              }
                          }            
                      echo "</select>";
                    

                    // dropdown from user_status column
                    //not equal data
                    $query = "SELECT * FROM user_status WHERE user_status_name != $row[user_status_id];";
                    $query_result_user_status = $conn->query($query);     
                    
                    //equal data
                    $query_equal = "SELECT user_status_name FROM user_status WHERE user_status_name = $row[user_status_id];";
                    $query_result_user_status_equal = $conn->query($query_equal); 
                    $row_equal_fetch_data = $query_result_user_status_equal->fetch_assoc();
                  
                    echo "<select name='userStatus' id='userStatus'>";
                        echo "<option value='$row[user_status_id]'>$row_equal_fetch_data[user_status_name]</option>";
                        if($query_result_user_status->num_rows){
                            while($row1 = $query_result_user_status->fetch_assoc()){
                                echo "<option value='$row1[user_status_id]'> $row1[user_status_name] </option>";
                            }
                        }
                    echo "</select>";
                  ?>
                  
                  <input type="text" name="emp_number" id="emp_number" class="textboxes2" value="<?php echo $receivedText ?>" disabled/>
                  
              </div>
                <br/>
                <br/>
                <br/>
                <br/>

              <div class="buttons">     <!------ FIRST-E ( MAIN CONTAINER ) ---->  

                    <button class="button Calw3 DS_button" style="background-color:rgb(143, 153, 153);width: 120px;" name="cancel_btn" id="cancel_btn">CANCEL</button>
                    <button class="button Calw3 DS_button" style="background-color:rgb(255, 85, 85);width: 120px; margin-left: 10px;" name="delete_btn" >DELETE</button>
                    <button class="button Calw3 DS_button" style="background-color:rgb(92, 92, 255);width: 120px; margin-left: 10px; margin-right: 8px;" name="update_btn" >UPDATE</button>

              </div>     <!------ FIRST-E ( MAIN CONTAINER ) END ---->  

          </form>

    </div>  <!------ MAIN BORDER END ---->
</div>    <!------ FIRST MAIN CONTAINER END ----->

  <div id="preloader"></div>
  <a href="#" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
  <script src="assets/vendor/counterup/counterup.min.js"></script>
  <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/venobox/venobox.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>


