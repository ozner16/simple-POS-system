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

?>