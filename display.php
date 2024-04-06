<?php
    // Connect to MySQL database
    include "./PHP_Functionality/connection.php";

    // Query the database for photos table
    $query = "SELECT filename, mimetype, photo FROM photos";
    $query_result = $conn->query($query);

    //check if we returned/fetched some data
    if($query_result->num_rows > 0){

        // if data exists, reassign each of them to "$row" variable/container
        while ($row = $query_result->fetch_assoc()) {
            $filename = $row["filename"];
            $mimetype = $row["mimetype"];
            $photo = $row["photo"];
        
            // Display the photo using its MIME type
            echo "<img src='data:$mimetype;base64," . base64_encode($photo) . "' alt='$filename'>";
        }
    }

   // Close database connection
    $mysqli->close();
?>