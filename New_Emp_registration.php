<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Employee Registration</title>
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
  <link href="assets/css/New_Emp_registration.css" rel="stylesheet">


<!-- JS file/s -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<!-- PHP functionality -->
<?php
    include("PHP_Functionality/New_Emp_registration_PHP_funct.php");
?>

  <style type="text/css">
      img{height: 228px;width: 227px;}
  </style>

</head>

<body>

  <div class="word_title">      <!------ NEW EMPLOYEE WORD CONT ---->

    <b> <p style="margin-bottom: 0px;font-size: 40px;">NEW EMPLOYEE</p></b> 
    
</div>      <!------ NEW EMPLOYEE WORD CONT END ---->
<div class="firstMainCont">     <!------ FIRST MAIN CONTAINER ---->

      
    <div class="main_border">   <!------ MAIN BORDER ---->
      

          <div class="form_cont">   <!------ FIRST-A ( MAIN CONTAINER ) ---->

          <form method="POST" action="./New_Emp_registration.php" autocomplete="off" enctype="multipart/form-data">

                <br/>
                <b> <p style="margin-left: 25px;">PERSONAL INFO</p></b> 

                <div id="img_div" class="img-responsive"></div>
                <input type="file" name="img" id="img" style="margin-left: 375px;font-size:13px;margin-top:1px;"/>
                
                <br/>
                <br/>
                <br/>

                <div class="form_cont_one">   <!------ FIRST-B ( MAIN CONTAINER ) ---->

                 

                      <p class="textmargin calctxt" style="margin-left: 100px;">First Name</p>
                      <p class="textmargin calctxt" style="margin-left: 140px;">Middle Name</p>
                      <p class="textmargin calctxt" style="margin-left: 121px;">Last Name</p>
                      <p class="textmargin calctxt" style="margin-left: 138px;">Suffix</p>
                      <br/>

                      <input type="text" name="First_Name" id="First_Name" class="calcButton" style="margin-left: 100px;" />
                      <input type="text" name="Middle_Name" id="Middle_Name" class="calcButton" style="margin-left: 10px;" />
                      <input type="text" name="Last_Name" id="Last_Name" class="calcButton" style="margin-left: 10px;" />
                      <input type="text" name="Suffix" id="Suffix" class="calcButton" style="margin-left: 10px; width: 100px;"/>
                      <br/>
                      <br/>

                      <p class="textmargin calctxt" style="margin-left: 100px;">Date of Birth</p>
                      <p class="textmargin calctxt" style="margin-left: 112px;">Gender</p>
                      <p class="textmargin calctxt" style="margin-left: 120px;">Nationality</p>
                      <p class="textmargin calctxt" style="margin-left: 96px;">Civil Status</p>
                      <br/>

                      <input type="date" name="Date_of_Birth" id="Date_of_Birth" class="calcButton" style="margin-left: 100px; width: 187px;"/>

                        <select name="gender" id="gender" class="calcButton" style="margin-left: 10px;">

                          <option value="">  -- Select one --  </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>        

                        </select>

                        <select name="nationality" id="nationality" class="calcButton" style="margin-left: 10px;">
                          
                          <option value="">  -- Select one --  </option>
                          <option value="Filipino">Filipino</option>
                          <option value="British">British</option>     
                          <option value="Japanese">Japanese</option>  
                          <option value="Korean">Korean</option>   

                        </select>

                        <select name="civil_status" id="civil_status" class="calcButton" style="margin-left: 10px;">
                          
                          <option value="">  -- Select one --  </option>
                          <option value="Single">Single</option>
                          <option value="Married">Married</option>     
                          <option value="Divorced">Divorced</option>  
                          <option value="Widowed">Widowed</option>   

                        </select>

                      <hr style="width: 730px;margin-left: 100px;" class="hr_inside"> <!------ HORIZONTAL LINE ( INSIDE ) ---->   <!------ HORIZONTAL LINE ( INSIDE ) END ---->

                      <p class="textmargin calctxt" style="margin-left: 100px;">Department</p>
                      <p class="textmargin calctxt" style="margin-left: 286px;">Designation</p>
                      <p class="textmargin calctxt" style="margin-left: 87px;">Qualified Dep. Status</p>
                     
                      <br/>

                      <input type="text" name="Department" id="Department" class="calcButton" style="margin-left: 100px;width: 353px;" />
                      <input type="text" name="Designation" id="Designation" class="calcButton" style="margin-left: 10px;width: 160px;"/>
                      
                      <select name="Qualified_Dep_Status" id="Qualified_Dep_Status" class="calcButton" style="margin-left: 10px;width: 160px;">
                          
                        <option value="">  -- Select one --  </option>
                        <option value="ME">ME</option>

                      </select>

                      <br/>
                      <br/>
                      
                      <p class="textmargin calctxt" style="margin-left: 100px;">Employee Status</p>
                      <p class="textmargin calctxt" style="margin-left: 115px;">Paydate</p>
                      <!-- <p class="textmargin calctxt" style="margin-left: 140px;">Employee Number</p> -->
                   
                      <br/>

                      <input type="text" name="Employee_Status" id="Employee_Status" class="calcButton" style="margin-left: 100px;width: 220px;"/>
                      <input type="date" name="Paydate" id="Paydate" class="calcButton" style="margin-left: 10px; width: 187px;"/>
                      <!-- <input type="text" name="Employee_Number" id="Employee_Number" class="calcButton" style="margin-left: 10px;width: 266px;" required/> -->
                   
                </div>

                <hr class="hr_outside" style="margin-top: 30px;">  <!------ HORIZONTAL LINE ( OUTSIDE ) ---->   <!------ HORIZONTAL LINE ( OUTSIDE ) END ---->

                <div class="form_cont_two">   <!------ FIRST-C ( MAIN CONTAINER ) ---->  


                        <b> <p style="margin-left: 25px;">CONTACT INFO</p></b>
                        <br/>

                          <p class="textmargin calctxt" style="margin-left: 100px;">Contact No.</p>
                          <p class="textmargin calctxt" style="margin-left: 239px;">Email</p>
                        
                          <br/>

                          <input type="text" name="Contact_Num" id="Contact_Num" class="calcButton" style="margin-left: 100px; width: 310px;"/>
                          <input type="text" name="Email" id="Email" class="calcButton" style="margin-left: 10px; width: 379px;"/>                    
                          <br/>
                          <br/>

                          <p class="textmargin calctxt" style="margin-left: 100px;">Other (Social Media)</p>
                          <p class="textmargin calctxt" style="margin-left: 181px;">Social Media Account ID/No.</p>

                          <br/>

                          <select name="Other_Social_Media" id="Other_Social_Media" class="calcButton outline" style="margin-left: 100px;width: 310px;">
                              
                            <option value="">  -- Select one --  </option>
                            <option value="Facebook">Facebook</option>
                            <option value="Twitter">Twitter</option>     
                            <option value="Instagram">Instagram</option>  
                            
                          </select>

                          <input type="text" name="SM_account_num" id="SM_account_num" class="calcButton" style="margin-left: 10px; width: 379px;"/>                    
                          <br/>
                          <br/>

                </div>  <!------ FIRST-C ( MAIN CONTAINER ) END ---->

                <hr class="hr_outside" style="margin-top: 30px;">  <!------ HORIZONTAL LINE ( OUTSIDE ) ---->   <!------ HORIZONTAL LINE ( OUTSIDE ) END ---->

                    <div class="form_cont_three">   <!------ FIRST-D ( MAIN CONTAINER ) ---->  

                            <b> <p style="margin-left: 25px;">ADDRESS</p></b>
                            <br/>
                            
                            <p class="textmargin calctxt" style="margin-left: 100px;">Address Line 1</p>
                            <br/>

                            <input type="text" name="Address_Line_1" id="Address_Line_1" class="calcButton" style="margin-left: 100px; width: 702px;"/>
                            <br/>
                            <br/>
                            
                            <p class="textmargin calctxt" style="margin-left: 100px;">Address Line 2</p>
                            <br/>

                            <input type="text" name="Address_Line_2" id="Address_Line_2" class="calcButton" style="margin-left: 100px; width: 702px;"/>
                            <br/>
                            <br/>
                            
                            <p class="textmargin calctxt" style="margin-left: 100px;">City/Municipality</p>
                            <p class="textmargin calctxt" style="margin-left: 239px;">State/Province</p>
                            <br/>

                            <input type="text" name="City_Municipality" id="City_Municipality" class="calcButton" style="margin-left: 100px; width: 343px;"/>
                            <input type="text" name="State_Province" id="State_Province" class="calcButton" style="margin-left: 10px; width: 346px;"/>                    
                            <br/>
                            <br/>
                            
                            <p class="textmargin calctxt" style="margin-left: 100px;">Country</p>
                            <p class="textmargin calctxt" style="margin-left: 300px;">Zip Code</p>
                            <br/>

                            <input type="text" name="Country" id="Country" class="calcButton" style="margin-left: 100px; width: 343px;"/>
                            <input type="text" name="Zip_Code" id="Zip_Code" class="calcButton" style="margin-left: 10px; width: 150px;" />      
                            <br>  
                            <br>
                              

                    </div>    <!------ FIRST-D ( MAIN CONTAINER ) END ---->  

              </div>        <!------ FIRST-A ( MAIN CONTAINER ) END ---->

              <div class="save_cancel" style="margin-top: 30px;">     <!------ FIRST-E ( MAIN CONTAINER ) ---->  
                   
                    <input type="submit" name="save_btn" value="SAVE" class="button Calw3 DS_button" style="background-color:rgb(92, 92, 255);width: 120px; margin-left: 10px; margin-right: 8px;" />

              </div>     <!------ FIRST-E ( MAIN CONTAINER ) END ---->  

        </form>
        <button class="button Calw3 DS_button" style="background-color:rgb(255, 85, 85);width: 120px; margin-top: 30px; float: right; margin-right: 5px;" name="cancel_btn" id="cancel_btn" >CLEAR</button>
        <button class="button Calw3 DS_button" style="background-color:rgb(158, 158, 158);width: 120px; margin-top: 30px; float: right; margin-right: 15px;" name="back_btn" id="back_btn">BACK</button>
        
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

<script type="application/javascript">
$(document).ready(function(){

    //adding picture to the pic div after click
    var _URL = window.URL || window.webkitURL;
    $('#img').on('change', function(){
        var file = this.files[0];
        var img = new Image();
        var sizeKB = file.size / 1024;
        img.onload = function(){
            $('#img_div').append(img);
        }
        img.src = _URL.createObjectURL(file);

    });

    $('#img').on('click', function(){

        $('#img_div').html(''); 
         
    });


document.getElementById("cancel_btn").onclick = function(){
      
      // Select all input elements using querySelectorAll
      let inputs = document.querySelectorAll('input[type="text"]');
      let img = document.querySelector("#img_div img");
      
      // Loop through each input element and clear its value
      inputs.forEach(function(input) {
          input.value = ""; // Set the value to an empty string
      });
      
      img.remove();
     

  }
  document.getElementById("back_btn").onclick = function(){
      window.location.href = './Employee_Listview.php';
  }

});
</script>

