<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Webpage 2</title>
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
  <link href="assets/css/web2.css" rel="stylesheet">

<!-- JS file/s -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="./JS/web2_jscript.js"></script>

<!-- PHP functionality -->
<?php
    include("PHP_Functionality/web2_PHP_funct.php");

    // fetch image data
    if(!empty($row["photo"])){
      
      $mimetype = $row["mimetype"];
      $photo = $row["photo"];

      // Construct the data URI
      $dataURI = 'data:' . $mimetype . ';base64,' . base64_encode($photo);
  }
?>

<style type="text/css">

    img{height: 228px;width: 227px;}

</style>

</head>

<body>

<div class="firstMainCont">     <!------ FIRST MAIN CONTAINER ---->

          <div class="form_cont">   <!------ FIRST-A ( MAIN CONTAINER ) ---->

        
                  <br/>
                <b> <p style="margin-left: 25px;">EMPLOYEE BASIC INFO:</p></b> 
                <img src = "<?php echo $dataURI; ?>" id="image1"/>
                <br/>
                <br/>
                <div class="info_basic">     <!------ FIRST-B ( MAIN CONTAINER ) ---->

                        <div class="one_left">

                              <p class="textmargin calctxt">Employee Number:</p>
                              <input type="text" name="emp_num" id="emp_num" class="calcButton" style="margin-left: 7px;" value="<?php echo $row['emp_num']; ?>" disabled/>
                              <br/>
                              <p class="textmargin calctxt">Department:</p>
                              <input type="text" name="Department" id="Department" class="calcButton" style="margin-left: 52px;"value="<?php echo $row['dept']; ?>" disabled/>
                              <br/>
                              <p class="textmargin calctxt">First Name:</p>
                              <input type="text" name="First_Name" id="First Name" class="calcButton" style="margin-left: 61px;" value="<?php echo $row['F_name']; ?>"  disabled/>
                              <br/>
                              <p class="textmargin calctxt">Middle Name:</p>
                              <input type="text" name="Middle_Name" id="Middle_Name" class="calcButton" style="margin-left: 42px;" value="<?php echo $row['M_name']; ?>"  disabled/>
                              <br/>
                              <p class="textmargin calctxt">Surname:</p>
                              <input type="text" name="Surname" id="Surname" class="calcButton" style="margin-left: 73px;" value="<?php echo $row['L_name']; ?>"  disabled/>

                        </div>

                        <div class="one_right">

                              <p class="textmargin calctxt">Civil Status:</p>
                              <input type="text" name="Civil_Status" id="Civil_Status" class="calcButton" style="margin-left: 132px;" value="<?php echo $row['civil_status']; ?>" disabled/>
                              <br/>
                              <p class="textmargin calctxt">Designation:</p>
                              <input type="text" name="Designation" id="Designation" class="calcButton" style="margin-left: 124px;" value="<?php echo $row['designation']; ?>" disabled/>
                              <br/>
                              <p class="textmargin calctxt">Qualified Dependents Status:</p>
                              <input type="text" name="QD_Status" id="QD_Status" class="calcButton" style="margin-left: 7px;" value="<?php echo $row['Q_D_status']; ?>" disabled/>
                              <br/>
                              <p class="textmargin calctxt">Paydate:</p>
                              <input type="text" name="Paydate" id="Paydate" class="calcButton" style="margin-left: 151px;"  value="<?php echo $row['paydate']; ?>" disabled/>
                              <br/>
                              <p class="textmargin calctxt">Employee Status:</p>
                              <input type="text" name="Employee_Status" id="Employee_Status" class="calcButton" style="margin-left: 91px;"  value="<?php echo $row['emp_status']; ?>" disabled/>

                        </div>
                 </div>      <!------ FIRST-B ( MAIN CONTAINER ) END ---->

                 <div class="info_basic2">     <!------ FIRST-C ( MAIN CONTAINER ) ---->

                        <div class="two_left">
                         
                              <b><p>BASIC INCOME:</p></b> 
                              
                              <p class="textmargin calctxt margtxt">Rate / Hour:</p>
                              <input type="text" name="BI_rate" id="BI_rate" class="calcButton" style="margin-left: 79px;" onkeypress="return keypresshandler(event)"/>
                              <br/>
                              <p class="textmargin calctxt margtxt">No. of Hours / Cut Off:</p>
                              <input type="text" name="BI_Nhours" id="BI_Nhours" class="calcButton" style="margin-left: 7px;" onkeypress="return keypresshandler(event)"/>
                              <br/>
                              <p class="textmargin calctxt margtxt">Income / Cut Off:</p>
                              <input type="text" name="BI_Income" id="BI_Income" class="calcButton" style="margin-left: 44px;" disabled/>
                              
                        </div>

                        <div class="two_right">

                              <b><p>REGULAR DEDUCTIONS:</p></b> 
                                                    
                              <p class="textmargin calctxt margtxt">SSS Contribution:</p>
                              <input type="text" name="SSS_contri" id="SSS_contri" class="calcButton" style="margin-left: 63px;" disabled/>
                              <br/>
                              <p class="textmargin calctxt margtxt">PhilHealth Contribution:</p>
                              <input type="text" name="Phil_contri" id="Phil_contri" class="calcButton" style="margin-left: 16px;" disabled/>
                              <br/>
                              <p class="textmargin calctxt margtxt">Pagibig Contribution:</p>
                              <input type="text" name="Pagibig_contri" id="Pagibig_contri" class="calcButton" style="margin-left: 37px;" value="100.00" disabled/>
                              <br/>
                              <p class="textmargin calctxt margtxt">Income Tax Contribution:</p>
                              <input type="text" name="ITax_contri" id="ITax_contri" class="calcButton" style="margin-left: 7px;" disabled/>
                         
                        </div>

                </div>                         <!------ FIRST-C ( MAIN CONTAINER ) END ---->

          <div class="info_basic3">     <!------ FIRST-D ( MAIN CONTAINER ) ---->

                  <div class="three_left">
                   
                        <b><p>HONORARIUM INCOME:</p></b> 
                        
                        <p class="textmargin calctxt margtxt">Rate / Hour:</p>
                        <input type="text" name="HI_rate" id="HI_rate" class="calcButton" style="margin-left: 79px;" onkeypress="return keypresshandler(event)"/>
                        <br/>
                        <p class="textmargin calctxt margtxt">No. of Hours / Cut Off:</p>
                        <input type="text" name="HI_Nhours" id="HI_Nhours" class="calcButton" style="margin-left: 7px;" onkeypress="return keypresshandler(event)"/>
                        <br/>
                        <p class="textmargin calctxt margtxt">Income / Cut Off:</p>
                        <input type="text" name="HI_Income" id="HI_Income" class="calcButton" style="margin-left: 44px;" disabled/>
                        
                        <br/>
                        <br/>
                        <br/>
            
                    <div class="four_left">
             
                          <b><p>OTHER INCOME:</p></b> 

                          <p class="textmargin calctxt margtxt">Rate / Hour:</p>
                          <input type="text" name="OI_rate" id="OI_rate" class="calcButton" style="margin-left: 79px;" onkeypress="return keypresshandler(event)"/>
                          <br/>
                          <p class="textmargin calctxt margtxt">No. of Hours / Cut Off:</p>
                          <input type="text" name="OI_Nhours" id="OI_Nhours" class="calcButton" style="margin-left: 7px;" onkeypress="return keypresshandler(event)"/>
                          <br/>
                          <p class="textmargin calctxt margtxt">Income / Cut Off:</p>
                          <input type="text" name="OI_Income" id="OI_Income" class="calcButton" style="margin-left: 44px;" disabled/>
                          
                        <!--------wew  --->

                        <div class="five_left">
             
                              <b><p>SUMMARY INCOME:</p></b> 

                              <p class="textmargin calctxt margtxt">GROSS INCOME:</p>
                              <input type="text" name="GROSS_INCOME" id="GROSS_INCOME" class="calcButton" style="margin-left: 47px;" disabled/>
                              <br/>
                              <p class="textmargin calctxt margtxt">NET INCOME:</p>
                              <input type="text" name="NET_INCOME" id="NET_INCOME" class="calcButton" style="margin-left: 67px;" disabled/>
                            
                        </div>

                    </div>
                  </div>

                  <div class="three_right">

                        <b><p>OTHER DEDUCTIONS:</p></b> 
                                              
                        <p class="textmargin calctxt margtxt">SSS Loan:</p>
                        <input type="text" name="SSS_Loan" id="SSS_Loan" class="calcButton" style="margin-left: 107px;" onkeypress="return keypresshandler(event)"/>
                        <br/>
                        <p class="textmargin calctxt margtxt">Pagibig Loan:</p>
                        <input type="text" name="Pagibig_Loan" id="Pagibig_Loan" class="calcButton" style="margin-left: 81px;" onkeypress="return keypresshandler(event)"/>
                        <br/>
                        <p class="textmargin calctxt margtxt">Faculty Savings Deposit:</p>
                        <input type="text" name="FS_deposit" id="FS_deposit" class="calcButton" style="margin-left: 7px;" onkeypress="return keypresshandler(event)"/>
                        <br/>
                        <p class="textmargin calctxt margtxt">Faculty Savings Loan:</p>
                        <input type="text" name="FS_loan" id="FS_loan" class="calcButton" style="margin-left: 27px;" onkeypress="return keypresshandler(event)"/>
                        <br/>
                        <p class="textmargin calctxt margtxt">Salary Loan:</p>
                        <input type="text" name="Salary_Loan" id="Salary_Loan" class="calcButton" style="margin-left: 90px;" onkeypress="return keypresshandler(event)"/>
                        <br/>
                        <p class="textmargin calctxt margtxt">Other Loans:</p>
                        <input type="text" name="Other_Loans" id="Other_Loans" class="calcButton" style="margin-left: 84px;" onkeypress="return keypresshandler(event)"/>

                              <div class="five_right">

                                    <b><p>DEDUCTION SUMMARY:</p></b> 
                                                    
                                    <br/>
                                    <p class="textmargin calctxt margtxt">Total Deductions:</p>
            
                                    <input type="text" name="Total_Deductions" id="Total_Deductions" class="calcButton" style="margin-left: 7px;" disabled/>

                                          <br>
                                          <br>
                                          <br>
                                          <button class="button Calw3 DS_button" style="background-color: rgb(78, 78, 252);width: 190px;margin-left: 30px;"
                                                id="calculate_gross_income">CALCULATE GROSS INCOME</button>

                                          <button class="button Calw3 DS_button" style="background-color: rgb(78, 78, 252);width: 190px;margin-left: 10px;" id="calculate_net_income">CALCULATE NET INCOME</button>
                                          <br/>
                  
                                          <!-- <button class="button Calw3 DS_button DS_marg_top" style="background-color: rgb(110, 137, 255);width: 160px;margin-left: 45px;">PRINT PREVIEW PAYSLIP</button>
                                          <button class="button Calw3 DS_button DS_marg_top" style="background-color: rgb(110, 137, 255);width: 160px;margin-left: 40px;">PRINT PAYSLIP</button>
                                          <br/> -->
                  
                                          <!-- <button class="button Calw3 DS_button DS_marg_top1" style="background-color: rgb(68, 67, 67);width: 190px;width: 120px;margin-left: 25px;">CLOSE</button> -->
                                          <br>
                                          <button class="button Calw3 DS_button DS_marg_top1" style="background-color: rgb(161, 161, 157);width: 190px;width: 120px; margin-left: 85px;" id="clear_btn">CLEAR</button>
                                          <button class="button Calw3 DS_button DS_marg_top1" style="background-color: rgb(0, 192, 58);width: 190px;width: 120px; margin-left: 40px;" id="new_button">NEW +</button>

                              </div>
                        </div>
                   
                  </div>

          </div>                         <!------ FIRST-D ( MAIN CONTAINER ) END ---->

    <div class="info_basic5">     <!------ FIRST-E ( MAIN CONTAINER ) ---->

    </div>                         <!------ FIRST-E ( MAIN CONTAINER ) END ---->

      
      </div>        <!------ FIRST-A ( MAIN CONTAINER ) END ---->

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
