<!doctype html>
<html>
<head>
</head>

<body>
    <?php 

        $fname = $_GET['fname'];
        $email = $_GET['email'];
		$phone = $_GET['phone'];
		$response = $_GET['response'];

		$servername = "127.0.0.1";  
		$username = "root";
		$password = "";
		$dbname = "feedbacks";

		$conn = new mysqli($servername, $username, $password, $dbname);
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		}
		ini_set('display_errors', '1'); ini_set('display_startup_errors', '1'); error_reporting(E_ALL);

		$sqli = "select * from feedbacks";
        $index = 0;
		$result = $conn->query($sqli);   
		if ($result->num_rows > 0) {
			while($row = $result->fetch_assoc()) {
                $index++;
            }

            $index++;
            echo $index;
        }else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		} 

		$sql = "insert into feedbacks (email, id, message, name, phone) values ('$email','$index','$response','$fname','$phone');";
				if ($conn->query($sql) == TRUE) {
					echo "New record created successfully";
				} else {
					echo "Error: " . $sql . "<br>" . $conn->error;
				}

		$conn->close();
	?>
</body>
</html>
