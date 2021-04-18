<?php
	
	/* Attempt MySQL server connection. Assuming you are running MySQL
	server with default setting (user 'root' with no password) */
	$link = mysqli_connect("localhost", "student", "password", "feedbacks2");
	
	// Check connection
	if($link === false){
		die("ERROR: Could not connect. " . mysqli_connect_error());
	}
	
	// Escape user inputs for security
	$email = mysqli_real_escape_string($link, $_POST['email']);
	
	// Check if email already exists in the database
	$sql = "SELECT * FROM EMAIL WHERE EMAIL = '$email'";
	$result = mysqli_query($link, $sql);
	
	if (mysqli_num_rows($result) > 0) {
		$arr = array('success' => 1, 'message' => "Email already exists. Thank you!");
	}
	else {
		// Attempt insert query execution
		$sql = "INSERT INTO EMAIL (EMAIL) VALUES ('$email')";

		if(mysqli_query($link, $sql)){
			$arr = array('success' => 1, 'message' => "Email added successfully.");
		} else{
			$arr = array('success' => 0, 'message' => "Could not execute SQL command.");
		}
	}
	
	// Close connection
	mysqli_close($link);
	
	// Send response to javascript
	echo json_encode($arr);

?>
