<!doctype html>
<html>
<head>
</head>
<!--$servername = "127.0.0.1";-->
<body>
    <?php 

        $email = $_GET['email'];

        $servername = "127.0.0.1";  
		$username = "root";
		$password = "";
		$dbname = "nameyourpet";

		$conn = new mysqli($servername, $username, $password, $dbname);
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		}


		$sqli = "select * from email";
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

		$sql = "insert into email (email_id, email) values (100,'$email');";
				if ($conn->query($sql) == TRUE) {
					echo "New record created successfully";
				} else {
					echo "Error: " . $sql . "<br>" . $conn->error;
				}

		$conn->close();
	?>
</body>
</html>
