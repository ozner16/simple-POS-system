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

     
                //CLICKABLE IMAGES
                $("#slot1").click(function(){

                        var item_name = document.getElementById('txt1').innerHTML;
                        var price = 170;
                                
                        document.getElementById('ItemNameW3').value = item_name;
                        document.getElementById('PriceW3').value = price;


                });

                $("#slot2").click(function(){

                        var item_name = document.getElementById('txt2').innerHTML;
                        var price = 155;
                                
                        document.getElementById('ItemNameW3').value = item_name;
                        document.getElementById('PriceW3').value = price;


                });
                
                $("#slot3").click(function(){

                        var item_name = document.getElementById('txt3').innerHTML;
                        var price = 270;
                                
                        document.getElementById('ItemNameW3').value = item_name;
                        document.getElementById('PriceW3').value = price;


                });

                $("#slot4").click(function(){

                        var item_name = document.getElementById('txt4').innerHTML;
                        var price = 250;
                                
                        document.getElementById('ItemNameW3').value = item_name;
                        document.getElementById('PriceW3').value = price;


                });
                
                $("#slot5").click(function(){

                        var item_name = document.getElementById('txt5').innerHTML;
                        var price = 190;
                                
                        document.getElementById('ItemNameW3').value = item_name;
                        document.getElementById('PriceW3').value = price;


                }); 

                $("#slot6").click(function(){

                        var item_name = document.getElementById('txt6').innerHTML;
                        var price = 230;
                                
                        document.getElementById('ItemNameW3').value = item_name;
                        document.getElementById('PriceW3').value = price;


                });
                
                $("#slot7").click(function(){

                        var item_name = document.getElementById('txt7').innerHTML;
                        var price = 310;
                                
                        document.getElementById('ItemNameW3').value = item_name;
                        document.getElementById('PriceW3').value = price;


                }); 

                $("#slot8").click(function(){

                        var item_name = document.getElementById('txt8').innerHTML;
                        var price = 235;
                                
                        document.getElementById('ItemNameW3').value = item_name;
                        document.getElementById('PriceW3').value = price;


                }); 

                $("#slot9").click(function(){

                        var item_name = document.getElementById('txt9').innerHTML;
                        var price = 220;
                                
                        document.getElementById('ItemNameW3').value = item_name;
                        document.getElementById('PriceW3').value = price;


                }); 

                $("#slot10").click(function(){

                        var item_name = document.getElementById('txt10').innerHTML;
                        var price = 350;
                                
                        document.getElementById('ItemNameW3').value = item_name;
                        document.getElementById('PriceW3').value = price;


                }); 

                $("#slot11").click(function(){

                        var item_name = document.getElementById('txt11').innerHTML;
                        var price = 280;
                                
                        document.getElementById('ItemNameW3').value = item_name;
                        document.getElementById('PriceW3').value = price;


                }); 

                $("#slot12").click(function(){

                        var item_name = document.getElementById('txt12').innerHTML;
                        var price = 395;
                                
                        document.getElementById('ItemNameW3').value = item_name;
                        document.getElementById('PriceW3').value = price;


                }); 


        
//ORDER DISCOUNT OPTIONS RADIO BUTTONS


    //SENIOR CITIZEN RADIO BUTTON
    $("#Senior_Citizen_Rbutton").click(function(){


                if($(this).prop("checked") == true)
                {


                        if(document.getElementById('ItemNameW3').value == "" || document.getElementById('QuanW3').value == "" ||
                        document.getElementById('PriceW3').value == "" )
                        {

                                $("#Senior_Citizen_Rbutton").prop("checked", false);

                        }

                        else
                        {

                                var price = parseFloat(document.getElementById('PriceW3').value);
                                var quantity = parseFloat(document.getElementById('QuanW3').value);
                
                                //discount amount       
                                var discount_amount = parseFloat((price * quantity)*.30).toFixed(2);        
                                document.getElementById('DiscountAW3').value = discount_amount;
                
                                //discounted amount
                                var discount_amount1 = parseFloat(document.getElementById('DiscountAW3').value);
                                var discounted_amount = parseFloat((price * quantity) - discount_amount1).toFixed(2);
                                document.getElementById('DiscountedW3').value = discounted_amount;
                
                                if(isNaN(discount_amount) || isNaN(discounted_amount))
                                {
                
                                document.getElementById('DiscountAW3').value = "";
                                document.getElementById('DiscountedW3').value = "";
                
                                }                        




                        }                
                


                }




    }); 


    //WITH DISC. CARD RADIO BUTTON
    $("#with_discount_card_Rbutton").click(function(){


        if($(this).prop("checked") == true)
        {

                if(document.getElementById('ItemNameW3').value == "" || document.getElementById('QuanW3').value == "" ||
                document.getElementById('PriceW3').value == "" )
                {

                        $("#with_discount_card_Rbutton").prop("checked", false);

                }

                else
                {


                        var price = parseFloat(document.getElementById('PriceW3').value);
                        var quantity = parseFloat(document.getElementById('QuanW3').value);
        
                        //discount amount       
                        var discount_amount = parseFloat((price * quantity)*.20).toFixed(2);        
                        document.getElementById('DiscountAW3').value = discount_amount;
        
                        //discounted amount
                        var discount_amount1 = parseFloat(document.getElementById('DiscountAW3').value);
                        var discounted_amount = parseFloat((price * quantity) - discount_amount1).toFixed(2);
                        document.getElementById('DiscountedW3').value = discounted_amount;
        
                        if(isNaN(discount_amount) || isNaN(discounted_amount))
                        {
        
                        document.getElementById('DiscountAW3').value = "";
                        document.getElementById('DiscountedW3').value = "";
        
                        }





                }
              


        }


    }); 
    
    
    //EMPLOYEE DISCOUNT RADIO BUTTON
    $("#Employee_Discount").click(function(){

        
        if($(this).prop("checked") == true)
        {

                if(document.getElementById('ItemNameW3').value == "" || document.getElementById('QuanW3').value == "" ||
                document.getElementById('PriceW3').value == "" )
                {

                        $("#Employee_Discount").prop("checked", false);

                }
                
                else
                {


                        var price = parseFloat(document.getElementById('PriceW3').value);
                        var quantity = parseFloat(document.getElementById('QuanW3').value);
        
                        //discount amount       
                        var discount_amount = parseFloat((price * quantity)*.10).toFixed(2);        
                        document.getElementById('DiscountAW3').value = discount_amount;
        
                        //discounted amount
                        var discount_amount1 = parseFloat(document.getElementById('DiscountAW3').value);
                        var discounted_amount = parseFloat((price * quantity) - discount_amount1).toFixed(2);
                        document.getElementById('DiscountedW3').value = discounted_amount;
        
                        if(isNaN(discount_amount) || isNaN(discounted_amount))
                        {
        
                        document.getElementById('DiscountAW3').value = "";
                        document.getElementById('DiscountedW3').value = "";
        
                        }                



                }
              


        }


    }); 


    //NO DISCOUNT RADIO BUTTON
    $("#No_Discount").click(function(){

       
        if($(this).prop("checked") == true)
        {

                if(document.getElementById('ItemNameW3').value == "" || document.getElementById('QuanW3').value == "" ||
                document.getElementById('PriceW3').value == "" )
                {

                        $("#No_Discount").prop("checked", false);

                }

                else
                {

                        var price = parseFloat(document.getElementById('PriceW3').value);
                        var quantity = parseFloat(document.getElementById('QuanW3').value);
        
                        //discount amount       
                        var discount_amount = parseFloat((price * quantity)*.0).toFixed(2);        
                        document.getElementById('DiscountAW3').value = discount_amount;
        
                        //discounted amount
                        var discount_amount1 = parseFloat(document.getElementById('DiscountAW3').value);
                        var discounted_amount = parseFloat((price * quantity) - discount_amount1).toFixed(2);
                        document.getElementById('DiscountedW3').value = discounted_amount;
        
                        if(isNaN(discount_amount) || isNaN(discounted_amount))
                        {
        
                        document.getElementById('DiscountAW3').value = "";
                        document.getElementById('DiscountedW3').value = "";
        
                        }



                }
              


        }



    }); 


    //CHANGE BUTTON
    $("#calculate_change").click(function(){

       
        //total quantity
        var quantity = document.getElementById('QuanW3').value;
        document.getElementById('TotalQW3').value = quantity;



        //total discount given
        var discount_amount = document.getElementById('DiscountAW3').value;
        document.getElementById('TDGivenW3').value = discount_amount;



        //total discounted amount
        var discounted_amount = document.getElementById('DiscountedW3').value;
        document.getElementById('TDiscountedAW3').value = discounted_amount;


        //change textbox
        var cash_given = parseFloat(document.getElementById('CGivenW3').value);
        var discounted_amount1 = parseFloat(document.getElementById('DiscountedW3').value);
        var change = parseFloat(cash_given - discounted_amount1).toFixed(2);
        document.getElementById('ChangeW3').value = change;

        if(isNaN(change))
        {

                document.getElementById('ChangeW3').value ="";


        }


    }); 


    //NEW BUTTON
    $("#new_button").click(function(){

        //order discount options radio button
        let order_discount_options = document.getElementsByName('DiscountOption');
        order_discount_options[0].checked = false;
        order_discount_options[1].checked = false;
        order_discount_options[2].checked = false;
        order_discount_options[3].checked = false;
    
        // clearing all textboxes
        let input_textBoxes = document.querySelectorAll('input[type=text]');

        input_textBoxes.forEach(element => {
                element.value = "";
        });
    
    }); 



//CATEGORIES RADIO BUTTONS - CHANGE IMAGE

    //Jeans
    $("#Jeans").click(function(){

        document.getElementById('slot1').src = "assets/img/Jeans/Baggy Taper.png";
        document.getElementById('txt1').innerHTML = "Baggy Taper";

        document.getElementById('slot2').src = "assets/img/Jeans/Denim Cropped Jeans.png";
        document.getElementById('txt2').innerHTML = "Denim Cropped Jeans";

        document.getElementById('slot3').src = "assets/img/Jeans/Fit Selvedge Jeans.png";
        document.getElementById('txt3').innerHTML = "Fit Selvedge Jeans";

        document.getElementById('slot4').src = "assets/img/Jeans/Original Fit Jeans.png";
        document.getElementById('txt4').innerHTML = "Original Fit Jeans";

        document.getElementById('slot5').src = "assets/img/Jeans/Original Jeans.png";
        document.getElementById('txt5').innerHTML = "Original Jeans";

        document.getElementById('slot6').src = "assets/img/Jeans/Shrink-To-Fit Jeans.png";
        document.getElementById('txt6').innerHTML = "Shrink-To-Fit Jeans";

        document.getElementById('slot7').src = "assets/img/Jeans/Skinny Fit.png";
        document.getElementById('txt7').innerHTML = "Skinny Fit";
        
        document.getElementById('slot8').src = "assets/img/Jeans/Slim Fit.png";
        document.getElementById('txt8').innerHTML = "Slim Fit";

        document.getElementById('slot9').src = "assets/img/Jeans/Slim Taper Fit.png";
        document.getElementById('txt9').innerHTML = "Slim Taper Fit";

        document.getElementById('slot10').src = "assets/img/Jeans/Stay Loose Denim.png";
        document.getElementById('txt10').innerHTML = "Stay Loose Denim";

        document.getElementById('slot11').src = "assets/img/Jeans/Stay Loose Jeans.png";
        document.getElementById('txt11').innerHTML = "Stay Loose Jeans";

        document.getElementById('slot12').src = "assets/img/Jeans/Taper Jeans.png";
        document.getElementById('txt12').innerHTML = "Taper Jeans";   

}); 

//Shirts
$("#Shirts").click(function(){

        document.getElementById('slot1').src = "assets/img/Shirts/Classic Camper.png";
        document.getElementById('txt1').innerHTML = "Classic Camper";

        document.getElementById('slot2').src = "assets/img/Shirts/Sunset One Pocket Shirt.png";
        document.getElementById('txt2').innerHTML = "Sunset One Pocket Shirt";

        document.getElementById('slot3').src = "assets/img/Shirts/Rugby Polo Shirt.png";
        document.getElementById('txt3').innerHTML = "Rugby Polo Shirt";

        document.getElementById('slot4').src = "assets/img/Shirts/Cubano Shirt.png";
        document.getElementById('txt4').innerHTML = "Cubano Shirt";

        document.getElementById('slot5').src = "assets/img/Shirts/Classic Camp Shirt.png";
        document.getElementById('txt5').innerHTML = "Classic Camp Shirt";

        document.getElementById('slot6').src = "assets/img/Shirts/Classic One Pocket Shirt.png";
        document.getElementById('txt6').innerHTML = "Classic One Pocket Shirt";

        document.getElementById('slot7').src = "assets/img/Shirts/Oversized Safari Shirt.png";
        document.getElementById('txt7').innerHTML = "Oversized Safari Shirt";
        
        document.getElementById('slot8').src = "assets/img/Shirts/Classic Camper Shirt.png";
        document.getElementById('txt8').innerHTML = "Classic Camper Shirt";

        document.getElementById('slot9').src = "assets/img/Shirts/Pieced Oversized Shirt.png";
        document.getElementById('txt9').innerHTML = "Pieced Oversized Shirt";

        document.getElementById('slot10').src = "assets/img/Shirts/Classic Western Shirt.png";
        document.getElementById('txt10').innerHTML = "Classic Western Shirt";

        document.getElementById('slot11').src = "assets/img/Shirts/Classic Logo Shirt.png";
        document.getElementById('txt11').innerHTML = "Classic Logo Shirt";

        document.getElementById('slot12').src = "assets/img/Shirts/Pieced Pacific Shirt.png";
        document.getElementById('txt12').innerHTML = "Pieced Pacific Shirt";      

}); 


// calculator numpads value

let input_textBox = document.querySelectorAll("input[type=text]");

$(input_textBox).click(function(e){
     
     let quantity = document.getElementById('QuanW3');
     let cash_given = document.getElementById('CGivenW3');

     if(e.target === quantity){
        numPads(quantity, 1);
        numPads(quantity, 2);
        numPads(quantity, 3);
        numPads(quantity, 4);
        numPads(quantity, 5);
        numPads(quantity, 6);
        numPads(quantity, 7);
        numPads(quantity, 8);
        numPads(quantity, 9);
        numPads(quantity, 0);
     }
     else if(e.target === cash_given){
        numPads(cash_given, 1);
        numPads(cash_given, 2);
        numPads(cash_given, 3);
        numPads(cash_given, 4);
        numPads(cash_given, 5);
        numPads(cash_given, 6);
        numPads(cash_given, 7);
        numPads(cash_given, 8);
        numPads(cash_given, 9);
        numPads(cash_given, 0);
     }

     function numPads(curr_textBox, value){
        document.getElementById(value).onclick = function(){
                curr_textBox.value += value;
        }
     }
});









// calculator ENTER button
$("#enter_btn").click(function(){
     
        let quantity = document.getElementById('QuanW3');
        console.log(quantity);

        if(quantity.onfocus){
                alert('wawawa');
        }
    
});

































// END OF $(document).ready(function() ---
});