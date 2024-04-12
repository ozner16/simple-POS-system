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
  
$(document).ready(function(){


  
    //Checking textboxes

    //checkbox1
    $("#checkbox1").click(function(){

        var item_price = 100;
        var item_name = document.getElementById('txt1').innerHTML + '\n';
    
        
        if($(this).prop("checked") == true)
        {


                    // PRICE TEXTBOX
                        
                    if(document.getElementById('PriceW1').value == "")
                    {
                    
                        document.getElementById('PriceW1').value = item_price;
                                            
                    }
                    
                    else
                    {
                    
                            var int_price = parseInt(document.getElementById('PriceW1').value);
                            document.getElementById('PriceW1').value = int_price + item_price;
                    
                                            
                    }
                    
                    
                    // ORDER SUMMARY TEXTAREA 
                    
                    if(document.getElementById('Order_summary').value == "")
                    {
                    
                            document.getElementById('Order_summary').value = item_name;
                                            
                    }
                    
                    else
                    {
                    
                            var add_text = document.getElementById('Order_summary').value;
                            document.getElementById('Order_summary').value = add_text + item_name;
                            
                    
                    }




        }

        else 
        {
          
                    // PRICE TEXTBOX

                    if(document.getElementById('PriceW1').value <= item_price)
                    {

                        document.getElementById('PriceW1').value = "";
                     
                        

                    }

                    else
                    {
                        var int_price = parseInt(document.getElementById('PriceW1').value);
                        document.getElementById('PriceW1').value = int_price - item_price;


                    }


                    // ORDER SUMMARY TEXTAREA 




                        var word = document.getElementById('Order_summary').value;

                        var splitt = word.split("\n");


                      if((splitt.length - 1) == 1)
                      {

                              document.getElementById('Order_summary').value= "";


                      }

                      else if((splitt.length - 1) > 1)
                      {
                          
                          

                            //delete text in text area

                              var word = document.getElementById('Order_summary').value;

                              var splitt = word.split("\n");
                  
                              
                              document.getElementById('Order_summary').value = "";
                                  
                              for(var a = 0 ; a<= splitt.length - 2; a++)
                              {
                                      
                                      var new_line = '\n';

                                      if(splitt[a] == document.getElementById('txt1').innerHTML)
                                      {
                                      

                                          if(splitt[splitt.length - 2] == document.getElementById('txt1').innerHTML)
                                          {

                                              splitt.splice(a, 1);

                                              new_line = "";
                                          }
                                          else
                                          {

                                              splitt.splice(a, 1);


                                          }
                                          

                                      }



                                      var order_summ= document.getElementById('Order_summary').value;
                                      document.getElementById('Order_summary').value = order_summ + splitt[a] + new_line;

                  
                              }


                      }
            


        }
        });



    //checkbox2
    $("#checkbox2").click(function(){

        var item_price = 150;
        var item_name = document.getElementById('txt2').innerHTML + '\n';
    
        
        if($(this).prop("checked") == true)
        {


                    // PRICE TEXTBOX
                        
                    if(document.getElementById('PriceW1').value == "")
                    {
                    
                        document.getElementById('PriceW1').value = item_price;
                                            
                    }
                    
                    else
                    {
                    
                            var int_price = parseInt(document.getElementById('PriceW1').value);
                            document.getElementById('PriceW1').value = int_price + item_price;
                    
                                            
                    }
                    
                    
                    // ORDER SUMMARY TEXTAREA 
                    
                    if(document.getElementById('Order_summary').value == "")
                    {
                    
                            document.getElementById('Order_summary').value = item_name;
                                            
                    }
                    
                    else
                    {
                    
                            var add_text = document.getElementById('Order_summary').value;
                            document.getElementById('Order_summary').value = add_text + item_name;
                            
                    
                    }




        }

        else 
        {
          
                    // PRICE TEXTBOX

                    if(document.getElementById('PriceW1').value <= item_price)
                    {

                        document.getElementById('PriceW1').value = "";
                     
                        

                    }

                    else
                    {
                        var int_price = parseInt(document.getElementById('PriceW1').value);
                        document.getElementById('PriceW1').value = int_price - item_price;


                    }


                    // ORDER SUMMARY TEXTAREA 




                        var word = document.getElementById('Order_summary').value;

                        var splitt = word.split("\n");


                      if((splitt.length - 1) == 1)
                      {

                              document.getElementById('Order_summary').value= "";


                      }

                      else if((splitt.length - 1) > 1)
                      {
                          
                          

                            //delete text in text area

                              var word = document.getElementById('Order_summary').value;

                              var splitt = word.split("\n");
                  
                              
                              document.getElementById('Order_summary').value = "";
                                  
                              for(var a = 0 ; a<= splitt.length - 2; a++)
                              {
                                      
                                      var new_line = '\n';

                                      if(splitt[a] == document.getElementById('txt2').innerHTML)
                                      {
                                      

                                          if(splitt[splitt.length - 2] == document.getElementById('txt2').innerHTML)
                                          {

                                              splitt.splice(a, 1);

                                              new_line = "";
                                          }
                                          else
                                          {

                                              splitt.splice(a, 1);


                                          }
                                          

                                      }



                                      var order_summ= document.getElementById('Order_summary').value;
                                      document.getElementById('Order_summary').value = order_summ + splitt[a] + new_line;

                  
                              }


                      }
            


        }
        });


    //checkbox3
    $("#checkbox3").click(function(){

        var item_price = 200;
        var item_name = document.getElementById('txt3').innerHTML + '\n';
    
        
        if($(this).prop("checked") == true)
        {


                    // PRICE TEXTBOX
                        
                    if(document.getElementById('PriceW1').value == "")
                    {
                    
                        document.getElementById('PriceW1').value = item_price;
                                            
                    }
                    
                    else
                    {
                    
                            var int_price = parseInt(document.getElementById('PriceW1').value);
                            document.getElementById('PriceW1').value = int_price + item_price;
                    
                                            
                    }
                    
                    
                    // ORDER SUMMARY TEXTAREA 
                    
                    if(document.getElementById('Order_summary').value == "")
                    {
                    
                            document.getElementById('Order_summary').value = item_name;
                                            
                    }
                    
                    else
                    {
                    
                            var add_text = document.getElementById('Order_summary').value;
                            document.getElementById('Order_summary').value = add_text + item_name;
                            
                    
                    }




        }

        else 
        {
          
                    // PRICE TEXTBOX

                    if(document.getElementById('PriceW1').value <= item_price)
                    {

                        document.getElementById('PriceW1').value = "";
                     
                        

                    }

                    else
                    {
                        var int_price = parseInt(document.getElementById('PriceW1').value);
                        document.getElementById('PriceW1').value = int_price - item_price;


                    }


                    // ORDER SUMMARY TEXTAREA 




                        var word = document.getElementById('Order_summary').value;

                        var splitt = word.split("\n");


                      if((splitt.length - 1) == 1)
                      {

                              document.getElementById('Order_summary').value= "";


                      }

                      else if((splitt.length - 1) > 1)
                      {
                          
                          

                            //delete text in text area

                              var word = document.getElementById('Order_summary').value;

                              var splitt = word.split("\n");
                  
                              
                              document.getElementById('Order_summary').value = "";
                                  
                              for(var a = 0 ; a<= splitt.length - 2; a++)
                              {
                                      
                                      var new_line = '\n';

                                      if(splitt[a] == document.getElementById('txt3').innerHTML)
                                      {
                                      

                                          if(splitt[splitt.length - 2] == document.getElementById('txt3').innerHTML)
                                          {

                                              splitt.splice(a, 1);

                                              new_line = "";
                                          }
                                          else
                                          {

                                              splitt.splice(a, 1);


                                          }
                                          

                                      }



                                      var order_summ= document.getElementById('Order_summary').value;
                                      document.getElementById('Order_summary').value = order_summ + splitt[a] + new_line;

                  
                              }


                      }
            


        }
        });
        
        
    //checkbox4
    $("#checkbox4").click(function(){

        var item_price = 250;
        var item_name = document.getElementById('txt4').innerHTML + '\n';
    
        
        if($(this).prop("checked") == true)
        {


                    // PRICE TEXTBOX
                        
                    if(document.getElementById('PriceW1').value == "")
                    {
                    
                        document.getElementById('PriceW1').value = item_price;
                                            
                    }
                    
                    else
                    {
                    
                            var int_price = parseInt(document.getElementById('PriceW1').value);
                            document.getElementById('PriceW1').value = int_price + item_price;
                    
                                            
                    }
                    
                    
                    // ORDER SUMMARY TEXTAREA 
                    
                    if(document.getElementById('Order_summary').value == "")
                    {
                    
                            document.getElementById('Order_summary').value = item_name;
                                            
                    }
                    
                    else
                    {
                    
                            var add_text = document.getElementById('Order_summary').value;
                            document.getElementById('Order_summary').value = add_text + item_name;
                            
                    
                    }




        }

        else 
        {
          
                    // PRICE TEXTBOX

                    if(document.getElementById('PriceW1').value <= item_price)
                    {

                        document.getElementById('PriceW1').value = "";
                     
                        

                    }

                    else
                    {
                        var int_price = parseInt(document.getElementById('PriceW1').value);
                        document.getElementById('PriceW1').value = int_price - item_price;


                    }


                    // ORDER SUMMARY TEXTAREA 




                        var word = document.getElementById('Order_summary').value;

                        var splitt = word.split("\n");


                      if((splitt.length - 1) == 1)
                      {

                              document.getElementById('Order_summary').value= "";


                      }

                      else if((splitt.length - 1) > 1)
                      {
                          
                          

                            //delete text in text area

                              var word = document.getElementById('Order_summary').value;

                              var splitt = word.split("\n");
                  
                              
                              document.getElementById('Order_summary').value = "";
                                  
                              for(var a = 0 ; a<= splitt.length - 2; a++)
                              {
                                      
                                      var new_line = '\n';

                                      if(splitt[a] == document.getElementById('txt4').innerHTML)
                                      {
                                      

                                          if(splitt[splitt.length - 2] == document.getElementById('txt4').innerHTML)
                                          {

                                              splitt.splice(a, 1);

                                              new_line = "";
                                          }
                                          else
                                          {

                                              splitt.splice(a, 1);


                                          }
                                          

                                      }



                                      var order_summ= document.getElementById('Order_summary').value;
                                      document.getElementById('Order_summary').value = order_summ + splitt[a] + new_line;

                  
                              }


                      }
            


        }
        });
        
        
    //checkbox5
    $("#checkbox5").click(function(){

        var item_price = 185;
        var item_name = document.getElementById('txt5').innerHTML + '\n';
    
        
        if($(this).prop("checked") == true)
        {


                    // PRICE TEXTBOX
                        
                    if(document.getElementById('PriceW1').value == "")
                    {
                    
                        document.getElementById('PriceW1').value = item_price;
                                            
                    }
                    
                    else
                    {
                    
                            var int_price = parseInt(document.getElementById('PriceW1').value);
                            document.getElementById('PriceW1').value = int_price + item_price;
                    
                                            
                    }
                    
                    
                    // ORDER SUMMARY TEXTAREA 
                    
                    if(document.getElementById('Order_summary').value == "")
                    {
                    
                            document.getElementById('Order_summary').value = item_name;
                                            
                    }
                    
                    else
                    {
                    
                            var add_text = document.getElementById('Order_summary').value;
                            document.getElementById('Order_summary').value = add_text + item_name;
                            
                    
                    }




        }

        else 
        {
          
                    // PRICE TEXTBOX

                    if(document.getElementById('PriceW1').value <= item_price)
                    {

                        document.getElementById('PriceW1').value = "";
                     
                        

                    }

                    else
                    {
                        var int_price = parseInt(document.getElementById('PriceW1').value);
                        document.getElementById('PriceW1').value = int_price - item_price;


                    }


                    // ORDER SUMMARY TEXTAREA 




                        var word = document.getElementById('Order_summary').value;

                        var splitt = word.split("\n");


                      if((splitt.length - 1) == 1)
                      {

                              document.getElementById('Order_summary').value= "";


                      }

                      else if((splitt.length - 1) > 1)
                      {
                          
                          

                            //delete text in text area

                              var word = document.getElementById('Order_summary').value;

                              var splitt = word.split("\n");
                  
                              
                              document.getElementById('Order_summary').value = "";
                                  
                              for(var a = 0 ; a<= splitt.length - 2; a++)
                              {
                                      
                                      var new_line = '\n';

                                      if(splitt[a] == document.getElementById('txt5').innerHTML)
                                      {
                                      

                                          if(splitt[splitt.length - 2] == document.getElementById('txt5').innerHTML)
                                          {

                                              splitt.splice(a, 1);

                                              new_line = "";
                                          }
                                          else
                                          {

                                              splitt.splice(a, 1);


                                          }
                                          

                                      }



                                      var order_summ= document.getElementById('Order_summary').value;
                                      document.getElementById('Order_summary').value = order_summ + splitt[a] + new_line;

                  
                              }


                      }
            


        }
        });
        
        
    //checkbox6
    $("#checkbox6").click(function(){

        var item_price = 210;
        var item_name = document.getElementById('txt6').innerHTML + '\n';
    
        
        if($(this).prop("checked") == true)
        {


                    // PRICE TEXTBOX
                        
                    if(document.getElementById('PriceW1').value == "")
                    {
                    
                        document.getElementById('PriceW1').value = item_price;
                                            
                    }
                    
                    else
                    {
                    
                            var int_price = parseInt(document.getElementById('PriceW1').value);
                            document.getElementById('PriceW1').value = int_price + item_price;
                    
                                            
                    }
                    
                    
                    // ORDER SUMMARY TEXTAREA 
                    
                    if(document.getElementById('Order_summary').value == "")
                    {
                    
                            document.getElementById('Order_summary').value = item_name;
                                            
                    }
                    
                    else
                    {
                    
                            var add_text = document.getElementById('Order_summary').value;
                            document.getElementById('Order_summary').value = add_text + item_name;
                            
                    
                    }




        }

        else 
        {
          
                    // PRICE TEXTBOX

                    if(document.getElementById('PriceW1').value <= item_price)
                    {

                        document.getElementById('PriceW1').value = "";
                     
                        

                    }

                    else
                    {
                        var int_price = parseInt(document.getElementById('PriceW1').value);
                        document.getElementById('PriceW1').value = int_price - item_price;


                    }


                    // ORDER SUMMARY TEXTAREA 




                        var word = document.getElementById('Order_summary').value;

                        var splitt = word.split("\n");


                      if((splitt.length - 1) == 1)
                      {

                              document.getElementById('Order_summary').value= "";


                      }

                      else if((splitt.length - 1) > 1)
                      {
                          
                          

                            //delete text in text area

                              var word = document.getElementById('Order_summary').value;

                              var splitt = word.split("\n");
                  
                              
                              document.getElementById('Order_summary').value = "";
                                  
                              for(var a = 0 ; a<= splitt.length - 2; a++)
                              {
                                      
                                      var new_line = '\n';

                                      if(splitt[a] == document.getElementById('txt6').innerHTML)
                                      {
                                      

                                          if(splitt[splitt.length - 2] == document.getElementById('txt6').innerHTML)
                                          {

                                              splitt.splice(a, 1);

                                              new_line = "";
                                          }
                                          else
                                          {

                                              splitt.splice(a, 1);


                                          }
                                          

                                      }



                                      var order_summ= document.getElementById('Order_summary').value;
                                      document.getElementById('Order_summary').value = order_summ + splitt[a] + new_line;

                  
                              }


                      }
            


        }
        });   
        
        
    //checkbox7
    $("#checkbox7").click(function(){

        var item_price = 190;
        var item_name = document.getElementById('txt7').innerHTML + '\n';
    
        
        if($(this).prop("checked") == true)
        {


                    // PRICE TEXTBOX
                        
                    if(document.getElementById('PriceW1').value == "")
                    {
                    
                        document.getElementById('PriceW1').value = item_price;
                                            
                    }
                    
                    else
                    {
                    
                            var int_price = parseInt(document.getElementById('PriceW1').value);
                            document.getElementById('PriceW1').value = int_price + item_price;
                    
                                            
                    }
                    
                    
                    // ORDER SUMMARY TEXTAREA 
                    
                    if(document.getElementById('Order_summary').value == "")
                    {
                    
                            document.getElementById('Order_summary').value = item_name;
                                            
                    }
                    
                    else
                    {
                    
                            var add_text = document.getElementById('Order_summary').value;
                            document.getElementById('Order_summary').value = add_text + item_name;
                            
                    
                    }




        }

        else 
        {
          
                    // PRICE TEXTBOX

                    if(document.getElementById('PriceW1').value <= item_price)
                    {

                        document.getElementById('PriceW1').value = "";
                     
                        

                    }

                    else
                    {
                        var int_price = parseInt(document.getElementById('PriceW1').value);
                        document.getElementById('PriceW1').value = int_price - item_price;


                    }


                    // ORDER SUMMARY TEXTAREA 




                        var word = document.getElementById('Order_summary').value;

                        var splitt = word.split("\n");


                      if((splitt.length - 1) == 1)
                      {

                              document.getElementById('Order_summary').value= "";


                      }

                      else if((splitt.length - 1) > 1)
                      {
                          
                          

                            //delete text in text area

                              var word = document.getElementById('Order_summary').value;

                              var splitt = word.split("\n");
                  
                              
                              document.getElementById('Order_summary').value = "";
                                  
                              for(var a = 0 ; a<= splitt.length - 2; a++)
                              {
                                      
                                      var new_line = '\n';

                                      if(splitt[a] == document.getElementById('txt7').innerHTML)
                                      {
                                      

                                          if(splitt[splitt.length - 2] == document.getElementById('txt7').innerHTML)
                                          {

                                              splitt.splice(a, 1);

                                              new_line = "";
                                          }
                                          else
                                          {

                                              splitt.splice(a, 1);


                                          }
                                          

                                      }



                                      var order_summ= document.getElementById('Order_summary').value;
                                      document.getElementById('Order_summary').value = order_summ + splitt[a] + new_line;

                  
                              }


                      }
            


        }
        });  
        
        

     //checkbox8
     $("#checkbox8").click(function(){

        var item_price = 245;
        var item_name = document.getElementById('txt8').innerHTML + '\n';
    
        
        if($(this).prop("checked") == true)
        {


                    // PRICE TEXTBOX
                        
                    if(document.getElementById('PriceW1').value == "")
                    {
                    
                        document.getElementById('PriceW1').value = item_price;
                                            
                    }
                    
                    else
                    {
                    
                            var int_price = parseInt(document.getElementById('PriceW1').value);
                            document.getElementById('PriceW1').value = int_price + item_price;
                    
                                            
                    }
                    
                    
                    // ORDER SUMMARY TEXTAREA 
                    
                    if(document.getElementById('Order_summary').value == "")
                    {
                    
                            document.getElementById('Order_summary').value = item_name;
                                            
                    }
                    
                    else
                    {
                    
                            var add_text = document.getElementById('Order_summary').value;
                            document.getElementById('Order_summary').value = add_text + item_name;
                            
                    
                    }




        }

        else 
        {
          
                    // PRICE TEXTBOX

                    if(document.getElementById('PriceW1').value <= item_price)
                    {

                        document.getElementById('PriceW1').value = "";
                     
                        

                    }

                    else
                    {
                        var int_price = parseInt(document.getElementById('PriceW1').value);
                        document.getElementById('PriceW1').value = int_price - item_price;


                    }


                    // ORDER SUMMARY TEXTAREA 




                        var word = document.getElementById('Order_summary').value;

                        var splitt = word.split("\n");


                      if((splitt.length - 1) == 1)
                      {

                              document.getElementById('Order_summary').value= "";


                      }

                      else if((splitt.length - 1) > 1)
                      {
                          
                          

                            //delete text in text area

                              var word = document.getElementById('Order_summary').value;

                              var splitt = word.split("\n");
                  
                              
                              document.getElementById('Order_summary').value = "";
                                  
                              for(var a = 0 ; a<= splitt.length - 2; a++)
                              {
                                      
                                      var new_line = '\n';

                                      if(splitt[a] == document.getElementById('txt8').innerHTML)
                                      {
                                      

                                          if(splitt[splitt.length - 2] == document.getElementById('txt8').innerHTML)
                                          {

                                              splitt.splice(a, 1);

                                              new_line = "";
                                          }
                                          else
                                          {

                                              splitt.splice(a, 1);


                                          }
                                          

                                      }



                                      var order_summ= document.getElementById('Order_summary').value;
                                      document.getElementById('Order_summary').value = order_summ + splitt[a] + new_line;

                  
                              }


                      }
            


        }
        }); 
        
        
    //checkbox9
    $("#checkbox9").click(function(){

        var item_price = 290;
        var item_name = document.getElementById('txt9').innerHTML + '\n';
    
        
        if($(this).prop("checked") == true)
        {


                    // PRICE TEXTBOX
                        
                    if(document.getElementById('PriceW1').value == "")
                    {
                    
                        document.getElementById('PriceW1').value = item_price;
                                            
                    }
                    
                    else
                    {
                    
                            var int_price = parseInt(document.getElementById('PriceW1').value);
                            document.getElementById('PriceW1').value = int_price + item_price;
                    
                                            
                    }
                    
                    
                    // ORDER SUMMARY TEXTAREA 
                    
                    if(document.getElementById('Order_summary').value == "")
                    {
                    
                            document.getElementById('Order_summary').value = item_name;
                                            
                    }
                    
                    else
                    {
                    
                            var add_text = document.getElementById('Order_summary').value;
                            document.getElementById('Order_summary').value = add_text + item_name;
                            
                    
                    }




        }

        else 
        {
          
                    // PRICE TEXTBOX

                    if(document.getElementById('PriceW1').value <= item_price)
                    {

                        document.getElementById('PriceW1').value = "";
                     
                        

                    }

                    else
                    {
                        var int_price = parseInt(document.getElementById('PriceW1').value);
                        document.getElementById('PriceW1').value = int_price - item_price;


                    }


                    // ORDER SUMMARY TEXTAREA 




                        var word = document.getElementById('Order_summary').value;

                        var splitt = word.split("\n");


                      if((splitt.length - 1) == 1)
                      {

                              document.getElementById('Order_summary').value= "";


                      }

                      else if((splitt.length - 1) > 1)
                      {
                          
                          

                            //delete text in text area

                              var word = document.getElementById('Order_summary').value;

                              var splitt = word.split("\n");
                  
                              
                              document.getElementById('Order_summary').value = "";
                                  
                              for(var a = 0 ; a<= splitt.length - 2; a++)
                              {
                                      
                                      var new_line = '\n';

                                      if(splitt[a] == document.getElementById('txt9').innerHTML)
                                      {
                                      

                                          if(splitt[splitt.length - 2] == document.getElementById('txt9').innerHTML)
                                          {

                                              splitt.splice(a, 1);

                                              new_line = "";
                                          }
                                          else
                                          {

                                              splitt.splice(a, 1);


                                          }
                                          

                                      }



                                      var order_summ= document.getElementById('Order_summary').value;
                                      document.getElementById('Order_summary').value = order_summ + splitt[a] + new_line;

                  
                              }


                      }
            


        }
        });  
        
        
    //checkbox10
    $("#checkbox10").click(function(){

        var item_price = 230;
        var item_name = document.getElementById('txt10').innerHTML + '\n';
    
        
        if($(this).prop("checked") == true)
        {


                    // PRICE TEXTBOX
                        
                    if(document.getElementById('PriceW1').value == "")
                    {
                    
                        document.getElementById('PriceW1').value = item_price;
                                            
                    }
                    
                    else
                    {
                    
                            var int_price = parseInt(document.getElementById('PriceW1').value);
                            document.getElementById('PriceW1').value = int_price + item_price;
                    
                                            
                    }
                    
                    
                    // ORDER SUMMARY TEXTAREA 
                    
                    if(document.getElementById('Order_summary').value == "")
                    {
                    
                            document.getElementById('Order_summary').value = item_name;
                                            
                    }
                    
                    else
                    {
                    
                            var add_text = document.getElementById('Order_summary').value;
                            document.getElementById('Order_summary').value = add_text + item_name;
                            
                    
                    }




        }

        else 
        {
          
                    // PRICE TEXTBOX

                    if(document.getElementById('PriceW1').value <= item_price)
                    {

                        document.getElementById('PriceW1').value = "";
                     
                        

                    }

                    else
                    {
                        var int_price = parseInt(document.getElementById('PriceW1').value);
                        document.getElementById('PriceW1').value = int_price - item_price;


                    }


                    // ORDER SUMMARY TEXTAREA 




                        var word = document.getElementById('Order_summary').value;

                        var splitt = word.split("\n");


                      if((splitt.length - 1) == 1)
                      {

                              document.getElementById('Order_summary').value= "";


                      }

                      else if((splitt.length - 1) > 1)
                      {
                          
                          

                            //delete text in text area

                              var word = document.getElementById('Order_summary').value;

                              var splitt = word.split("\n");
                  
                              
                              document.getElementById('Order_summary').value = "";
                                  
                              for(var a = 0 ; a<= splitt.length - 2; a++)
                              {
                                      
                                      var new_line = '\n';

                                      if(splitt[a] == document.getElementById('txt10').innerHTML)
                                      {
                                      

                                          if(splitt[splitt.length - 2] == document.getElementById('txt10').innerHTML)
                                          {

                                              splitt.splice(a, 1);

                                              new_line = "";
                                          }
                                          else
                                          {

                                              splitt.splice(a, 1);


                                          }
                                          

                                      }



                                      var order_summ= document.getElementById('Order_summary').value;
                                      document.getElementById('Order_summary').value = order_summ + splitt[a] + new_line;

                  
                              }


                      }
            


        }
        }); 
        

    //checkbox11
    $("#checkbox11").click(function(){

        var item_price = 165;
        var item_name = document.getElementById('txt11').innerHTML + '\n';
    
        
        if($(this).prop("checked") == true)
        {


                    // PRICE TEXTBOX
                        
                    if(document.getElementById('PriceW1').value == "")
                    {
                    
                        document.getElementById('PriceW1').value = item_price;
                                            
                    }
                    
                    else
                    {
                    
                            var int_price = parseInt(document.getElementById('PriceW1').value);
                            document.getElementById('PriceW1').value = int_price + item_price;
                    
                                            
                    }
                    
                    
                    // ORDER SUMMARY TEXTAREA 
                    
                    if(document.getElementById('Order_summary').value == "")
                    {
                    
                            document.getElementById('Order_summary').value = item_name;
                                            
                    }
                    
                    else
                    {
                    
                            var add_text = document.getElementById('Order_summary').value;
                            document.getElementById('Order_summary').value = add_text + item_name;
                            
                    
                    }




        }

        else 
        {
          
                    // PRICE TEXTBOX

                    if(document.getElementById('PriceW1').value <= item_price)
                    {

                        document.getElementById('PriceW1').value = "";
                     
                        

                    }

                    else
                    {
                        var int_price = parseInt(document.getElementById('PriceW1').value);
                        document.getElementById('PriceW1').value = int_price - item_price;


                    }


                    // ORDER SUMMARY TEXTAREA 




                        var word = document.getElementById('Order_summary').value;

                        var splitt = word.split("\n");


                      if((splitt.length - 1) == 1)
                      {

                              document.getElementById('Order_summary').value= "";


                      }

                      else if((splitt.length - 1) > 1)
                      {
                          
                          

                            //delete text in text area

                              var word = document.getElementById('Order_summary').value;

                              var splitt = word.split("\n");
                  
                              
                              document.getElementById('Order_summary').value = "";
                                  
                              for(var a = 0 ; a<= splitt.length - 2; a++)
                              {
                                      
                                      var new_line = '\n';

                                      if(splitt[a] == document.getElementById('txt11').innerHTML)
                                      {
                                      

                                          if(splitt[splitt.length - 2] == document.getElementById('txt11').innerHTML)
                                          {

                                              splitt.splice(a, 1);

                                              new_line = "";
                                          }
                                          else
                                          {

                                              splitt.splice(a, 1);


                                          }
                                          

                                      }



                                      var order_summ= document.getElementById('Order_summary').value;
                                      document.getElementById('Order_summary').value = order_summ + splitt[a] + new_line;

                  
                              }


                      }
            


        }
        });    
        
        
    //checkbox12
    $("#checkbox12").click(function(){

        var item_price = 320;
        var item_name = document.getElementById('txt12').innerHTML + '\n';
    
        
        if($(this).prop("checked") == true)
        {


                    // PRICE TEXTBOX
                        
                    if(document.getElementById('PriceW1').value == "")
                    {
                    
                        document.getElementById('PriceW1').value = item_price;
                                            
                    }
                    
                    else
                    {
                    
                            var int_price = parseInt(document.getElementById('PriceW1').value);
                            document.getElementById('PriceW1').value = int_price + item_price;
                    
                                            
                    }
                    
                    
                    // ORDER SUMMARY TEXTAREA 
                    
                    if(document.getElementById('Order_summary').value == "")
                    {
                    
                            document.getElementById('Order_summary').value = item_name;
                                            
                    }
                    
                    else
                    {
                    
                            var add_text = document.getElementById('Order_summary').value;
                            document.getElementById('Order_summary').value = add_text + item_name;
                            
                    
                    }




        }

        else 
        {
          
                    // PRICE TEXTBOX

                    if(document.getElementById('PriceW1').value <= item_price)
                    {

                        document.getElementById('PriceW1').value = "";
                     
                        

                    }

                    else
                    {
                        var int_price = parseInt(document.getElementById('PriceW1').value);
                        document.getElementById('PriceW1').value = int_price - item_price;


                    }


                    // ORDER SUMMARY TEXTAREA 




                        var word = document.getElementById('Order_summary').value;

                        var splitt = word.split("\n");


                      if((splitt.length - 1) == 1)
                      {

                              document.getElementById('Order_summary').value= "";


                      }

                      else if((splitt.length - 1) > 1)
                      {
                          
                          

                            //delete text in text area

                              var word = document.getElementById('Order_summary').value;

                              var splitt = word.split("\n");
                  
                              
                              document.getElementById('Order_summary').value = "";
                                  
                              for(var a = 0 ; a<= splitt.length - 2; a++)
                              {
                                      
                                      var new_line = '\n';

                                      if(splitt[a] == document.getElementById('txt12').innerHTML)
                                      {
                                      

                                          if(splitt[splitt.length - 2] == document.getElementById('txt12').innerHTML)
                                          {

                                              splitt.splice(a, 1);

                                              new_line = "";
                                          }
                                          else
                                          {

                                              splitt.splice(a, 1);


                                          }
                                          

                                      }



                                      var order_summ= document.getElementById('Order_summary').value;
                                      document.getElementById('Order_summary').value = order_summ + splitt[a] + new_line;

                  
                              }


                      }
            


        }
        });          
           

       

// MALE PACKAGE LIST RADIO BUTTONS

    //FIT FASHION PACKAGE RADIO BUTTON
    $("#Fit_Fashion_Rbutton").click(function(){

       
        if($(this).prop("checked") == true)
        {


                //Checking Checkboxes
                document.getElementById('Navy_Cotton_Cap_CBox').checked = true;
                document.getElementById('Fit_Black_Shirt_CBox').checked = true;
                document.getElementById('Fit_Jeans_CBox').checked = true;
                document.getElementById('Tanner_Sneaker_CBox').checked = true;




                //Functions


                    var already_exist = false;

                            var word = document.getElementById('Order_summary').value;

                            var splitt = word.split("\n");
                
                                
                            for(var a = 0 ; a<= splitt.length - 2; a++)
                            {
                                    

                                    if(splitt[a] == document.getElementById('Fit_Fashion_text').innerHTML)
                                    {
                                    
                                        already_exist = true;
                                        

                                    }


                
                            }


                if(already_exist == true)
                {

                    document.getElementById('PriceW1').value;
                    document.getElementById('Order_summary').value;



                }

                else
                {
                    

                            var item_price = 600;
                            var item_name = document.getElementById('Fit_Fashion_text').innerHTML + '\n';
                        
                            // PRICE TEXTBOX
                        
                            if(document.getElementById('PriceW1').value == "")
                            {
        
                                document.getElementById('PriceW1').value = item_price;
                                
                            }
        
                            else
                            {
        
                                var int_price = parseInt(document.getElementById('PriceW1').value);
                                document.getElementById('PriceW1').value = int_price + item_price;
        
                                
                            }


                            // ORDER SUMMARY TEXTAREA 

                            if(document.getElementById('Order_summary').value == "")
                            {

                                document.getElementById('Order_summary').value = item_name;
                            
                            }

                            else
                            {

                                var add_text = document.getElementById('Order_summary').value;
                                document.getElementById('Order_summary').value = add_text + item_name;


                            }





                }            
              


        }


        });    


    //LOOSE CLOTHING PACKAGE RADIO BUTTON        
    $("#Loose_Clothing_Rbutton").click(function(){

 
        if($(this).prop("checked") == true)
        {

                        //Checking Checkboxes
                        document.getElementById('Leather_Watch_Cbox').checked = true;
                        document.getElementById('Loose_White_Shirt_CBox').checked = true;
                        document.getElementById('Loose_Taper_Jeans_CBox').checked = true;
                        document.getElementById('White_Sneaker_CBox').checked = true;


                    var already_exist = false;

                            var word = document.getElementById('Order_summary').value;

                            var splitt = word.split("\n");
                
                                
                            for(var a = 0 ; a<= splitt.length - 2; a++)
                            {
                                    

                                    if(splitt[a] == document.getElementById('Loose_Clothing_text').innerHTML)
                                    {
                                    
                                        already_exist = true;
                                        

                                    }


                
                            }


                if(already_exist == true)
                {

                    document.getElementById('PriceW1').value;
                    document.getElementById('Order_summary').value;



                }

                else
                {


                            var item_price = 900;
                            var item_name = document.getElementById('Loose_Clothing_text').innerHTML + '\n';
                        
                            // PRICE TEXTBOX
                        
                            if(document.getElementById('PriceW1').value == "")
                            {
        
                                document.getElementById('PriceW1').value = item_price;
                                
                            }
        
                            else
                            {
        
                                var int_price = parseInt(document.getElementById('PriceW1').value);
                                document.getElementById('PriceW1').value = int_price + item_price;
        
                                
                            }


                            // ORDER SUMMARY TEXTAREA 

                            if(document.getElementById('Order_summary').value == "")
                            {

                                document.getElementById('Order_summary').value = item_name;
                            
                            }

                            else
                            {

                                var add_text = document.getElementById('Order_summary').value;
                                document.getElementById('Order_summary').value = add_text + item_name;


                            }





                }
              


        }


        }); 



    //CALCULATE BUTTON
    $("#calculate_button").click(function(){

            //Discount textbox
            var price = document.getElementById('PriceW1').value;
            var quantity = document.getElementById('QuanW1').value;
            var p_q_product = parseInt(price)*parseInt(quantity)*.25;
            var product_float = parseFloat(p_q_product).toFixed(2);

            document.getElementById('DiscountAW1').value = product_float;



            //Discounted textbox
            var p_q_discounted = parseInt(price)*parseInt(quantity);
            var discount_tbox = parseInt(document.getElementById('DiscountAW1').value);
            var product_discounted = p_q_discounted - discount_tbox;
            var product_float_discounted = parseFloat(product_discounted).toFixed(2);

            document.getElementById('DiscountedW1').value = product_float_discounted;

            if(isNaN(product_float_discounted) || isNaN(product_float))
            {
                document.getElementById('DiscountAW1').value = "";
                document.getElementById('DiscountedW1').value = "";

            }
    
    

    
    }); 


    //CHANGE BUTTON
    $("#change_button").click(function(){

        
            //total quantity textbox
            var quantity = document.getElementById('QuanW1').value;
            document.getElementById('TQuantityW1').value = quantity;
        
        
            //total bills textbox
            var discounted = document.getElementById('DiscountedW1').value;
            document.getElementById('TotalBillsW1').value = discounted;
        
        
            //change textbox
            var cash_given = parseFloat(document.getElementById('CGivenW1').value);
            var discounted_amount = parseFloat(document.getElementById('DiscountedW1').value);
            var sub_change = cash_given - discounted_amount;
            var float_change = parseFloat(sub_change).toFixed(2);
            document.getElementById('ChangeW1').value = float_change;
        
            if(isNaN(float_change))
            {
                document.getElementById('ChangeW1').value = "";
        
            }
        
 


    }); 
    
    
    //NEW BUTTON
    $("#new_button").click(function(){

       

            //side selection radio button
            document.getElementById('Jeans').checked = false;
            document.getElementById('Shirts').checked = false;


            //unchecking checkboxes
            document.getElementById('checkbox1').checked = false;
            document.getElementById('checkbox2').checked = false;
            document.getElementById('checkbox3').checked = false;
            document.getElementById('checkbox4').checked = false;
            document.getElementById('checkbox5').checked = false;
            document.getElementById('checkbox6').checked = false;
            document.getElementById('checkbox7').checked = false;
            document.getElementById('checkbox8').checked = false;
            document.getElementById('checkbox9').checked = false;
            document.getElementById('checkbox10').checked = false;
            document.getElementById('checkbox11').checked = false;
            document.getElementById('checkbox12').checked = false;


            //order details
            document.getElementById('PriceW1').value = "";
            document.getElementById('QuanW1').value = "";
            document.getElementById('DiscountAW1').value = "";
            document.getElementById('DiscountedW1').value = "";
            document.getElementById('CGivenW1').value = "";
            document.getElementById('ChangeW1').value = "";
            document.getElementById('Order_summary').value = "";



        //Package


            //package radio buttons
            document.getElementById('MALE').checked = false;
            document.getElementById('FEMALE').checked = false;
            document.getElementById('Fit_Fashion_Rbutton').checked = false;
            document.getElementById('Loose_Clothing_Rbutton').checked = false;

            //package radio checkboxes
            document.getElementById('Navy_Cotton_Cap_CBox').checked = false;
            document.getElementById('Fit_Black_Shirt_CBox').checked = false;
            document.getElementById('Fit_Jeans_CBox').checked = false;
            document.getElementById('Tanner_Sneaker_CBox').checked = false;

            document.getElementById('Leather_Watch_Cbox').checked = false;
            document.getElementById('Loose_White_Shirt_CBox').checked = false;
            document.getElementById('Loose_Taper_Jeans_CBox').checked = false;
            document.getElementById('White_Sneaker_CBox').checked = false;


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
