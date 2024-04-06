<?php


//upload.php
// if($_FILES["file"]["name"] != '')
// {
//  $test = explode('.', $_FILES["file"]["name"]);
//  $ext = end($test);
//  $name = rand(100, 999) . '.' . $ext;
//  $location = './upload/' . $name;  
//  move_uploaded_file($_FILES["file"]["tmp_name"], $location);
//  echo '<img src="'.$location.'" height="200" width="228" class="img-thumbnail" />';
// }


    include "./PHP_Functionality/connection.php";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UPLOAD PHOTO</title>
</head>
<body>
    <form action="./photo_prak.php" method="POST" enctype="multipart/form-data">

        <p>Select image to upload: </p>
        <input type="file" name="photo" id="photo">
        <br><br>
        <input type="submit" name="submit" value="Submit">


    </form>
</body>
</html>

<?php

    // Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["photo"]) && !empty($_FILES["photo"]["name"])){
    
    // Get file details
    $file_name = $_FILES["photo"]["name"];
    $file_type = $_FILES["photo"]["type"];
    $file_Tmp_name = $_FILES["photo"]["tmp_name"];

    // Read file data
    $file_data = file_get_contents($file_Tmp_name);
   

    // Include/Connect to MySQL database and use the connection/mysqli object("$conn")
    
    // Prepare SQL statement with a parameterized query
    $parameterized_query = $conn->prepare("INSERT INTO photos(filename, mimetype, photo) VALUES (?, ?, ?)");
    $parameterized_query->bind_param("sss", $file_name, $file_type, $file_data);


    // Execute the prepared statement
    if($parameterized_query->execute()){
        echo "Photo uploaded successfully.";
    }
    else{
        echo "Error: " . $parameterized_query->error;
    }

   
   $parameterized_query->close();
   $conn->close();

}
else{
    echo "No photo uploaded.";
}

?>