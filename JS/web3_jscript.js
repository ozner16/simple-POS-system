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



//button fucntions

$(document).ready(function(){

    //CALCULATE BUTTON
    $("#calculate_button").click(function(){

        
        //DISCOUNT AMOUNT
        var quantity = parseFloat(document.getElementById("QuanW3").value);
        var price = parseFloat(document.getElementById("PriceW3").value);
        var discount_amount = (quantity * price) * .25 ;
        var discount_amount_float = parseFloat(discount_amount).toFixed(2);
     
        document.getElementById("DiscountAW3").value = discount_amount_float;
     
        
     
             if(isNaN(discount_amount_float))
             {
     
                     document.getElementById("DiscountAW3").value = "";
     
             }

        

        //DISCOUNTED AMOUNT
        var quantity = parseFloat(document.getElementById("QuanW3").value);
        var price = parseFloat(document.getElementById("PriceW3").value);
        var discount_amount = parseFloat(document.getElementById("DiscountAW3").value);
     
        var discounted_amount = (quantity * price) - discount_amount;
        var discounted_amount_float = parseFloat(discounted_amount).toFixed(2);
     
        document.getElementById("DiscountedW3").value = discounted_amount_float;
     
        
     
             if(isNaN(discounted_amount_float))
             {
     
                     document.getElementById("DiscountedW3").value = "";
     
             }



        //TOTAL QUANTITY
        var quantity = parseInt(document.getElementById("QuanW3").value);
        var discounted_amount = parseFloat(document.getElementById('DiscountedW3').value);
       
     
        document.getElementById("TotalQW3").value = quantity;
     
        
     
             if(isNaN(quantity))
             {
                     var default_zero = 0;
                     var default_zero_float = parseFloat(default_zero).toFixed(2);
     
                     document.getElementById("TotalQW3").value = default_zero;
     
             }



        //TOTAL DISCOUNT GIVEN
        var discount_amount = parseFloat(document.getElementById("DiscountAW3").value);
        var discount_amount_float = parseFloat(discount_amount).toFixed(2);
       
     
        document.getElementById("TDGivenW3").value = discount_amount_float;
     
        
     
             if(isNaN(discount_amount_float))
             {
     
                     var default_zero = 0;
                     var default_zero_float = parseFloat(default_zero).toFixed(2);
     
                     document.getElementById("TDGivenW3").value = default_zero_float;
     
             }



        //TOTAL DISCOUNTED AMOUNT
        var discounted_amount = parseFloat(document.getElementById("DiscountedW3").value);
        var discounted_amount_float = parseFloat(discounted_amount).toFixed(2);
       
     
        document.getElementById("TDiscountedAW3").value = discounted_amount_float;
     
        
     
             if(isNaN(discounted_amount_float))
             {
     
                     var default_zero = 0;
                     var default_zero_float = parseFloat(default_zero).toFixed(2);
     
                     document.getElementById("TDiscountedAW3").value = default_zero_float;
     
             }

       
    
        



    });


    //CHANGE BUTTON
    $("#change_button").click(function(){

        //CHANGE - TEXTBOX
        var cash_given = parseFloat(document.getElementById("CGivenW3").value);
        var discounted_amount = parseFloat(document.getElementById("DiscountedW3").value);
        var change = cash_given - discounted_amount;
        var change_float = parseFloat(change).toFixed(2);
        
        document.getElementById("ChangeW3").value = change_float;
        
        
                if(isNaN(change_float))
                {
        
                        document.getElementById("ChangeW3").value = "";
        
                }



    });



    //NEW BUTTON
    $("#new_button").click(function(){


                var default_zero = 0;
                var default_zero_float = parseFloat(default_zero).toFixed(2);
        
        
                //order details
                document.getElementById("ItemNameW3").value = "";
                document.getElementById("QuanW3").value = "";
                document.getElementById("PriceW3").value = "";
                document.getElementById("DiscountAW3").value = "";
                document.getElementById("DiscountedW3").value = "";
                document.getElementById("CGivenW3").value = "";
                document.getElementById("ChangeW3").value = "";
        
                document.getElementById("TotalQW3").value = "";
                document.getElementById("TDGivenW3").value = "";
                document.getElementById("TDiscountedAW3").value = "";        
   

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












// END OF $(document).ready(function() ---
});

 



 


