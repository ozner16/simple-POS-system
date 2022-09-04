//restricting input characters

function keypresshandler(event)
{
     var charCode = event.keyCode;

     //Non-numeric character range
     if (charCode > 31 && (charCode < 48 || charCode > 57))
     {

        if(charCode == 46)
        {
          
            

            return true;

        }

        else
        {
            return false;

        }
        

     }
    
}


//button functions
$(document).ready(function(){


    //CALCULATE GROSS INCOME
    $("#calculate_gross_income").click(function(){


            //BASIC INCOME
            if(document.getElementById("BI_rate").value == "" || document.getElementById("BI_Nhours").value == "" )
            {


                    document.getElementById("BI_Income").value = "";

            }
            
            else
            {

                    var num1 = document.getElementById("BI_rate").value;
                    var num2 = document.getElementById("BI_Nhours").value;
                    var result = parseFloat(num1) * parseFloat(num2);

                    var result_float = parseFloat(result).toFixed(2);

                    var basic_income_res = document.getElementById("BI_Income").value = result_float;


                    if(isNaN(basic_income_res))
                    {

                        document.getElementById("BI_Income").value = "";

                    }

                

            }

            
            //HONORARIUM INCOME 
            if(document.getElementById("HI_rate").value == "" || document.getElementById("HI_Nhours").value == "" )
            {


                document.getElementById("HI_Income").value = "";

            }
        
            else
            {

                var num1 = document.getElementById("HI_rate").value;
                var num2 = document.getElementById("HI_Nhours").value;
                var result = parseFloat(num1) * parseFloat(num2);

                var result_float = parseFloat(result).toFixed(2);

                var honorarium_income_res = document.getElementById("HI_Income").value = result_float;


                if(isNaN(honorarium_income_res))
                {

                    document.getElementById("HI_Income").value = "";

                }


            }

    
            //OTHER INCOME
            if(document.getElementById("OI_rate").value == "" || document.getElementById("OI_Nhours").value == "" )
            {


                document.getElementById("OI_Income").value = "";

            }
        
            else
            {

                var num1 = document.getElementById("OI_rate").value;
                var num2 = document.getElementById("OI_Nhours").value;
                var result = parseFloat(num1) * parseFloat(num2);

                var result_float = parseFloat(result).toFixed(2);

                var other_income_res = document.getElementById("OI_Income").value = result_float;


                if(isNaN(other_income_res))
                {

                    document.getElementById("OI_Income").value = "";

                }



                
                

            }    
    
        

            //GROSS INCOME
            var basic_income_res = document.getElementById("BI_Income").value;
            var honorarium_income_res = document.getElementById("HI_Income").value;
            var other_income_res = document.getElementById("OI_Income").value;

            var gross_income = parseFloat(basic_income_res) + parseFloat(honorarium_income_res) + parseFloat(other_income_res);
            var gross_income_float = parseFloat(gross_income).toFixed(2);

            var gross_income_res = document.getElementById("GROSS_INCOME").value = gross_income_float;


            if(isNaN(gross_income_res))
            {

                document.getElementById("GROSS_INCOME").value = "";


            }    

    
            //SSS CONTRIBUTION
            var gross_income = document.getElementById("GROSS_INCOME").value;
            var gross_income_float = parseFloat(gross_income).toFixed(2);


            
                if(isNaN(gross_income_float))
                {

                    document.getElementById("SSS_contri").value = "";

                }

                else if(gross_income_float < 2250 )
                {

                    var value_res = 80;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;

                }

                else if(gross_income_float >= 2250 && gross_income_float <= 2749.99)
                {

                    var value_res = 100;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 2750 && gross_income_float <= 3249.99)
                {

                    var value_res = 120;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 3250 && gross_income_float <= 3749.99)
                {

                    var value_res = 140;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 3750 && gross_income_float <= 4249.99)
                {

                    var value_res = 160;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 4250 && gross_income_float <= 4749.99)
                {

                    var value_res = 180;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 4750 && gross_income_float <= 5249.99)
                {

                    var value_res = 200;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 5250 && gross_income_float <= 5749.99)
                {

                    var value_res = 220;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 5750 && gross_income_float <= 6249.99)
                {

                    var value_res = 240;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 6250 && gross_income_float <= 6749.99)
                {

                    var value_res = 260;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }
                
                else if(gross_income_float >= 6750 && gross_income_float <= 7249.99)
                {

                    var value_res = 280;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 7250 && gross_income_float <= 7749.99)
                {

                    var value_res = 300;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 7750 && gross_income_float <= 8249.99)
                {

                    var value_res = 320;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 8250 && gross_income_float <= 8749.99)
                {

                    var value_res = 340;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 8750 && gross_income_float <= 9249.99)
                {

                    var value_res = 360;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 9250 && gross_income_float <= 9749.99)
                {

                    var value_res = 380;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 9750 && gross_income_float <= 10249.99)
                {

                    var value_res = 400;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 10250 && gross_income_float <= 10749.99)
                {

                    var value_res = 420;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 10750 && gross_income_float <= 11249.99)
                {

                    var value_res = 440;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 11250 && gross_income_float <= 11749.99)
                {

                    var value_res = 460;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 11750 && gross_income_float <= 12249.99)
                {

                    var value_res = 480;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 12250 && gross_income_float <= 12749.99)
                {

                    var value_res = 500;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 12750 && gross_income_float <= 13249.99)
                {

                    var value_res = 520;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 13250 && gross_income_float <= 13749.99)
                {

                    var value_res = 540;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 13750 && gross_income_float <= 14249.99)
                {

                    var value_res = 560;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 14250 && gross_income_float <= 14749.99)
                {

                    var value_res = 580;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 14750 && gross_income_float <= 15249.99)
                {

                    var value_res = 600;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 15250 && gross_income_float <= 15749.99)
                {

                    var value_res = 620;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 15750 && gross_income_float <= 16249.99)
                {

                    var value_res = 640;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 16250 && gross_income_float <= 16749.99)
                {

                    var value_res = 660;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 16750 && gross_income_float <= 17249.99)
                {

                    var value_res = 680;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 17250 && gross_income_float <= 17749.99)
                {

                    var value_res = 700;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 17750 && gross_income_float <= 18249.99)
                {

                    var value_res = 720;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 18250 && gross_income_float <= 18749.99)
                {

                    var value_res = 740;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 18750 && gross_income_float <= 19249.99)
                {

                    var value_res = 760;
                    var value_res_float = parseFloat(value_res).toFixed(2);
                
                    document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 19250 && gross_income_float <= 19749.99)
                {

                        var value_res = 780;
                        var value_res_float = parseFloat(value_res).toFixed(2);
                    
                        document.getElementById("SSS_contri").value = value_res_float;


                }

                else if(gross_income_float >= 19750)
                {
                        var value_res = 800;
                        var value_res_float = parseFloat(value_res).toFixed(2);
                    
                        document.getElementById("SSS_contri").value = value_res_float;

                }


    //PHILHEALTH CONTRIBUTION
    var gross_income = document.getElementById("GROSS_INCOME").value;
    var gross_income_float = parseFloat(gross_income).toFixed(2);


            if(isNaN(gross_income_float))
            {

                document.getElementById("Phil_contri").value = "";

            }

            else if(gross_income_float <= 8999.99 )
            {

                var value_res = 100;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;

            }


            else if(gross_income_float >= 9000 && gross_income_float <= 9999.99)
            {

                var value_res = 112.50;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }


            else if(gross_income_float >= 10000 && gross_income_float <= 10999.99)
            {

                var value_res = 125.00;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }


            else if(gross_income_float >= 11000 && gross_income_float <= 11999.99)
            {

                var value_res = 137.50;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }


            else if(gross_income_float >= 12000 && gross_income_float <= 12999.99)
            {

                var value_res = 150.00;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }

            else if(gross_income_float >= 13000 && gross_income_float <= 13999.99)
            {

                var value_res = 162.50;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }


            else if(gross_income_float >= 14000 && gross_income_float <= 14999.99)
            {

                var value_res = 175.00;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }


            else if(gross_income_float >= 15000 && gross_income_float <= 15999.99)
            {

                var value_res = 187.50;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }


            else if(gross_income_float >= 16000 && gross_income_float <= 16999.99)
            {

                var value_res = 200.00;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }


            else if(gross_income_float >= 17000 && gross_income_float <= 17999.99)
            {

                var value_res = 212.50;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }


            else if(gross_income_float >= 18000 && gross_income_float <= 18999.99)
            {

                var value_res = 225.00;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }


            else if(gross_income_float >= 19000 && gross_income_float <= 19999.99)
            {

                var value_res = 237.50;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }

            else if(gross_income_float >= 20000 && gross_income_float <= 20999.99)
            {

                var value_res = 250.00;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }


            else if(gross_income_float >= 21000 && gross_income_float <= 21999.99)
            {

                var value_res = 262.50;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }


            else if(gross_income_float >= 22000 && gross_income_float <= 22999.99)
            {

                var value_res = 275.00;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }


            else if(gross_income_float >= 23000 && gross_income_float <= 23999.99)
            {

                var value_res = 287.50;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }


            else if(gross_income_float >= 24000 && gross_income_float <= 24999.99)
            {

                var value_res = 300.00;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }


            else if(gross_income_float >= 25000 && gross_income_float <= 25999.99)
            {

                var value_res = 312.50;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }


            else if(gross_income_float >= 26000 && gross_income_float <= 26999.99)
            {

                var value_res = 325.00;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }


            else if(gross_income_float >= 27000 && gross_income_float <= 27999.99)
            {

                var value_res = 337.50;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }

            else if(gross_income_float >= 28000 && gross_income_float <= 28999.99)
            {

                var value_res = 350.00;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }


            else if(gross_income_float >= 29000 && gross_income_float <= 29999.99)
            {

                var value_res = 362.50;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }


            else if(gross_income_float >= 30000 && gross_income_float <= 30999.99)
            {

                var value_res = 375.00;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }


            else if(gross_income_float >= 31000 && gross_income_float <= 31999.99)
            {

                var value_res = 387.50;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }


            else if(gross_income_float >= 32000 && gross_income_float <= 32999.99)
            {

                var value_res = 400.00;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }

            else if(gross_income_float >= 33000 && gross_income_float <= 33999.99)
            {

                var value_res = 412.50;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }

            else if(gross_income_float >= 34000 && gross_income_float <= 34999.99)
            {

                var value_res = 425.00;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }

            else if(gross_income_float >= 35000)
            {

                var value_res = 437.50;
                var value_res_float = parseFloat(value_res).toFixed(2);
               
                document.getElementById("Phil_contri").value = value_res_float;


            }



    //INCOME TAX CONTRIBUTION
    var gross_income = document.getElementById("GROSS_INCOME").value;
    var gross_income_float = parseFloat(gross_income).toFixed(2);


            if(isNaN(gross_income_float))
            {

                document.getElementById("ITax_contri").value = "";

            }


            else if(gross_income_float <= 9999 )
            {


                var tax_percentage =  gross_income_float*(.05);

              
                var value_res_float = parseFloat(tax_percentage).toFixed(2);
            
                document.getElementById("ITax_contri").value = value_res_float;

            }


            else if(gross_income_float >= 10000 && gross_income_float <= 29999 )
            {


                var tax_percentage =  gross_income_float*(.10);

              
                var value_res_float = parseFloat(tax_percentage).toFixed(2);
            
                document.getElementById("ITax_contri").value = value_res_float;

            }


            else if(gross_income_float >= 30000 && gross_income_float <= 69999 )
            {


                var tax_percentage =  gross_income_float*(.15);

              
                var value_res_float = parseFloat(tax_percentage).toFixed(2);
            
                document.getElementById("ITax_contri").value = value_res_float;

            }


            else if(gross_income_float >= 70000 && gross_income_float <= 139999 )
            {


                var tax_percentage =  gross_income_float*(.20);

              
                var value_res_float = parseFloat(tax_percentage).toFixed(2);
            
                document.getElementById("ITax_contri").value = value_res_float;

            }


            else if(gross_income_float >= 140000 && gross_income_float <= 249999 )
            {


                var tax_percentage =  gross_income_float*(.25);

              
                var value_res_float = parseFloat(tax_percentage).toFixed(2);
            
                document.getElementById("ITax_contri").value = value_res_float;

            }


            else if(gross_income_float >= 250000 && gross_income_float <= 499999 )
            {


                var tax_percentage =  gross_income_float*(.30);

              
                var value_res_float = parseFloat(tax_percentage).toFixed(2);
            
                document.getElementById("ITax_contri").value = value_res_float;

            }


            else if(gross_income_float >= 500000)
            {


                var tax_percentage =  gross_income_float*(.32);

              
                var value_res_float = parseFloat(tax_percentage).toFixed(2);
            
                document.getElementById("ITax_contri").value = value_res_float;

            }








    });
    
    

    //CALCULATE NET INCOME
    $("#calculate_net_income").click(function(){

            
            //TOTAL DEDUCTIONS
            var sss_contri = parseFloat(document.getElementById("SSS_contri").value);
            var philhealth_contri = parseFloat(document.getElementById("Phil_contri").value);
            var pagibig_contri = parseFloat(document.getElementById("Pagibig_contri").value);
            var income_tax_contri = parseFloat(document.getElementById("ITax_contri").value);

            var sss_Loan = parseFloat(document.getElementById("SSS_Loan").value);
            var pagibig_Loan = parseFloat(document.getElementById("Pagibig_Loan").value);
            var faculty_savings_deposit = parseFloat(document.getElementById("FS_deposit").value);
            var faculty_savings_loan = parseFloat(document.getElementById("FS_loan").value);
            var salary_loan = parseFloat(document.getElementById("Salary_Loan").value);
            var other_loans = parseFloat(document.getElementById("Other_Loans").value);



        //reset

            if(document.getElementById("SSS_Loan").value == "")
            {
                
                    document.getElementById("SSS_Loan").value = 0;

            //new
                    var sss_contri = parseFloat(document.getElementById("SSS_contri").value);
                    var philhealth_contri = parseFloat(document.getElementById("Phil_contri").value);
                    var pagibig_contri = parseFloat(document.getElementById("Pagibig_contri").value);
                    var income_tax_contri = parseFloat(document.getElementById("ITax_contri").value);
            
                    var sss_Loan = parseFloat(document.getElementById("SSS_Loan").value);
                    var pagibig_Loan = parseFloat(document.getElementById("Pagibig_Loan").value);
                    var faculty_savings_deposit = parseFloat(document.getElementById("FS_deposit").value);
                    var faculty_savings_loan = parseFloat(document.getElementById("FS_loan").value);
                    var salary_loan = parseFloat(document.getElementById("Salary_Loan").value);
                    var other_loans = parseFloat(document.getElementById("Other_Loans").value);


                    var sum_deductions = sss_contri + philhealth_contri + pagibig_contri + income_tax_contri +
                    sss_Loan + pagibig_Loan + faculty_savings_deposit + faculty_savings_loan + salary_loan + other_loans;
                    
                    var sum_deductions_float = parseFloat(sum_deductions).toFixed(2);


                    document.getElementById("Total_Deductions").value = sum_deductions_float;


            //new
            
            
            }


                        if(document.getElementById("Pagibig_Loan").value == "")
                        {
                                    
                                document.getElementById("Pagibig_Loan").value = 0;


                                var sss_contri = parseFloat(document.getElementById("SSS_contri").value);
                                var philhealth_contri = parseFloat(document.getElementById("Phil_contri").value);
                                var pagibig_contri = parseFloat(document.getElementById("Pagibig_contri").value);
                                var income_tax_contri = parseFloat(document.getElementById("ITax_contri").value);
                        
                                var sss_Loan = parseFloat(document.getElementById("SSS_Loan").value);
                                var pagibig_Loan = parseFloat(document.getElementById("Pagibig_Loan").value);
                                var faculty_savings_deposit = parseFloat(document.getElementById("FS_deposit").value);
                                var faculty_savings_loan = parseFloat(document.getElementById("FS_loan").value);
                                var salary_loan = parseFloat(document.getElementById("Salary_Loan").value);
                                var other_loans = parseFloat(document.getElementById("Other_Loans").value);
                    
                    
                                var sum_deductions = sss_contri + philhealth_contri + pagibig_contri + income_tax_contri +
                                sss_Loan + pagibig_Loan + faculty_savings_deposit + faculty_savings_loan + salary_loan + other_loans;
                            
                                var sum_deductions_float = parseFloat(sum_deductions).toFixed(2);
                    
                    
                                document.getElementById("Total_Deductions").value = sum_deductions_float;
                    


                        }




            if(document.getElementById("FS_deposit").value == "")
            {
                
                    document.getElementById("FS_deposit").value = 0;


                    var sss_contri = parseFloat(document.getElementById("SSS_contri").value);
                    var philhealth_contri = parseFloat(document.getElementById("Phil_contri").value);
                    var pagibig_contri = parseFloat(document.getElementById("Pagibig_contri").value);
                    var income_tax_contri = parseFloat(document.getElementById("ITax_contri").value);
            
                    var sss_Loan = parseFloat(document.getElementById("SSS_Loan").value);
                    var pagibig_Loan = parseFloat(document.getElementById("Pagibig_Loan").value);
                    var faculty_savings_deposit = parseFloat(document.getElementById("FS_deposit").value);
                    var faculty_savings_loan = parseFloat(document.getElementById("FS_loan").value);
                    var salary_loan = parseFloat(document.getElementById("Salary_Loan").value);
                    var other_loans = parseFloat(document.getElementById("Other_Loans").value);


                    var sum_deductions = sss_contri + philhealth_contri + pagibig_contri + income_tax_contri +
                    sss_Loan + pagibig_Loan + faculty_savings_deposit + faculty_savings_loan + salary_loan + other_loans;
                    
                    var sum_deductions_float = parseFloat(sum_deductions).toFixed(2);


                    document.getElementById("Total_Deductions").value = sum_deductions_float;



            }


                        if(document.getElementById("FS_loan").value == "")
                        {
                                    
                                document.getElementById("FS_loan").value = 0;


                                var sss_contri = parseFloat(document.getElementById("SSS_contri").value);
                                var philhealth_contri = parseFloat(document.getElementById("Phil_contri").value);
                                var pagibig_contri = parseFloat(document.getElementById("Pagibig_contri").value);
                                var income_tax_contri = parseFloat(document.getElementById("ITax_contri").value);
                        
                                var sss_Loan = parseFloat(document.getElementById("SSS_Loan").value);
                                var pagibig_Loan = parseFloat(document.getElementById("Pagibig_Loan").value);
                                var faculty_savings_deposit = parseFloat(document.getElementById("FS_deposit").value);
                                var faculty_savings_loan = parseFloat(document.getElementById("FS_loan").value);
                                var salary_loan = parseFloat(document.getElementById("Salary_Loan").value);
                                var other_loans = parseFloat(document.getElementById("Other_Loans").value);
                    
                    
                                var sum_deductions = sss_contri + philhealth_contri + pagibig_contri + income_tax_contri +
                                sss_Loan + pagibig_Loan + faculty_savings_deposit + faculty_savings_loan + salary_loan + other_loans;
                            
                                var sum_deductions_float = parseFloat(sum_deductions).toFixed(2);
                    
                    
                                document.getElementById("Total_Deductions").value = sum_deductions_float;
                    


                        }



            if(document.getElementById("Salary_Loan").value == "")
            {
                
                    document.getElementById("Salary_Loan").value = 0;


                    var sss_contri = parseFloat(document.getElementById("SSS_contri").value);
                    var philhealth_contri = parseFloat(document.getElementById("Phil_contri").value);
                    var pagibig_contri = parseFloat(document.getElementById("Pagibig_contri").value);
                    var income_tax_contri = parseFloat(document.getElementById("ITax_contri").value);
            
                    var sss_Loan = parseFloat(document.getElementById("SSS_Loan").value);
                    var pagibig_Loan = parseFloat(document.getElementById("Pagibig_Loan").value);
                    var faculty_savings_deposit = parseFloat(document.getElementById("FS_deposit").value);
                    var faculty_savings_loan = parseFloat(document.getElementById("FS_loan").value);
                    var salary_loan = parseFloat(document.getElementById("Salary_Loan").value);
                    var other_loans = parseFloat(document.getElementById("Other_Loans").value);


                    var sum_deductions = sss_contri + philhealth_contri + pagibig_contri + income_tax_contri +
                    sss_Loan + pagibig_Loan + faculty_savings_deposit + faculty_savings_loan + salary_loan + other_loans;
                    
                    var sum_deductions_float = parseFloat(sum_deductions).toFixed(2);


                    document.getElementById("Total_Deductions").value = sum_deductions_float;



            }



                        if(document.getElementById("Other_Loans").value == "")
                        {
                                    
                                    document.getElementById("Other_Loans").value = 0;



                                    var sss_contri = parseFloat(document.getElementById("SSS_contri").value);
                                    var philhealth_contri = parseFloat(document.getElementById("Phil_contri").value);
                                    var pagibig_contri = parseFloat(document.getElementById("Pagibig_contri").value);
                                    var income_tax_contri = parseFloat(document.getElementById("ITax_contri").value);
                            
                                    var sss_Loan = parseFloat(document.getElementById("SSS_Loan").value);
                                    var pagibig_Loan = parseFloat(document.getElementById("Pagibig_Loan").value);
                                    var faculty_savings_deposit = parseFloat(document.getElementById("FS_deposit").value);
                                    var faculty_savings_loan = parseFloat(document.getElementById("FS_loan").value);
                                    var salary_loan = parseFloat(document.getElementById("Salary_Loan").value);
                                    var other_loans = parseFloat(document.getElementById("Other_Loans").value);
                        
                        
                                    var sum_deductions = sss_contri + philhealth_contri + pagibig_contri + income_tax_contri +
                                    sss_Loan + pagibig_Loan + faculty_savings_deposit + faculty_savings_loan + salary_loan + other_loans;
                                
                                    var sum_deductions_float = parseFloat(sum_deductions).toFixed(2);
                        
                        
                                    document.getElementById("Total_Deductions").value = sum_deductions_float;
                        

                        }
                        

                    var sum_deductions = sss_contri + philhealth_contri + pagibig_contri + income_tax_contri +
                    sss_Loan + pagibig_Loan + faculty_savings_deposit + faculty_savings_loan + salary_loan + other_loans;
                        
                    var sum_deductions_float = parseFloat(sum_deductions).toFixed(2);
                    document.getElementById("Total_Deductions").value = sum_deductions_float;

                        if(isNaN(sum_deductions_float))
                        {

                            document.getElementById("Total_Deductions").value = "";

                        }


    //NET INCOME
    var gross_income = parseFloat(document.getElementById("GROSS_INCOME").value);
    var total_deductions = parseFloat(document.getElementById("Total_Deductions").value);
    var net_income = gross_income - total_deductions;
    var net_income_float = parseFloat(net_income).toFixed(2);

    document.getElementById("NET_INCOME").value = net_income_float;

    

         if(isNaN(net_income_float))
         {

                 document.getElementById("NET_INCOME").value = "";

         }



    
      


    }); 


    //NEW BUTTON
    $("#new_button").click(function(){

       
            //employee basic info
            document.getElementById("emp_num").value = "";
            document.getElementById("Department").value = "";
            document.getElementById("First Name").value = "";
            document.getElementById("Middle_Name").value = "";
            document.getElementById("Surname").value = "";
            document.getElementById("Civil_Status").value = "";
            document.getElementById("Designation").value = "";
            document.getElementById("QD_Status").value = "";
            document.getElementById("Paydate").value = "";
            document.getElementById("Employee_Status").value = "";

            //basic income
            document.getElementById("BI_rate").value = "";
            document.getElementById("BI_Nhours").value = "";
            document.getElementById("BI_Income").value = "";

            //honorarium income
            document.getElementById("HI_rate").value = "";
            document.getElementById("HI_Nhours").value = "";
            document.getElementById("HI_Income").value = "";

            //other income
            document.getElementById("OI_rate").value = "";
            document.getElementById("OI_Nhours").value = "";
            document.getElementById("OI_Income").value = "";
            
            //summary income
            document.getElementById("GROSS_INCOME").value = "";
            document.getElementById("NET_INCOME").value = "";

            //regular deductions
            document.getElementById("SSS_contri").value = "";
            document.getElementById("Phil_contri").value = "";
            document.getElementById("ITax_contri").value = "";

            //other deductions
            document.getElementById("SSS_Loan").value = "";
            document.getElementById("Pagibig_Loan").value = "";
            document.getElementById("FS_deposit").value = "";  
            document.getElementById("FS_loan").value = "";
            document.getElementById("Salary_Loan").value = "";
            document.getElementById("Other_Loans").value = "";   
            
            //deduction summary
            document.getElementById("Total_Deductions").value = "";    


    }); 
    
    



// END OF $(document).ready(function() ---
  });
