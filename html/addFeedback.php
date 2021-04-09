<?php

/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "student", "password", "feedbacks2");

// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

// Escape user inputs for security
$name = mysqli_real_escape_string($link, $_REQUEST['name']);
$email = mysqli_real_escape_string($link, $_REQUEST['email']);
$response = mysqli_real_escape_string($link, $_REQUEST['response']);
$phone = mysqli_real_escape_string($link, $_REQUEST['phone']);

// Attempt insert query execution
$sql = "INSERT INTO feedbacks (name, email,message,phone) VALUES ('$name', '$email','$response','$phone')";
if(mysqli_query($link, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}

// Close connection
mysqli_close($link);
header("Location: index.php");
?>
