<?php>
    include_once 'header.php';
/*
        $ = isset( $_POST[''] ) ? $_POST[''] : "";
        $ = isset( $_POST[''] ) ? $_POST[''] : "";
        $ = isset( $_POST[''] ) ? $_POST[''] : "";
        $ = isset( $_POST[''] ) ? $_POST[''] : "";
        
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        }
        else{ 
			  //echo "connected to the db sucessfully";
		  }
        
        $sql="SELECT * FROM ";
        $result = $conn->query($sql);
    
            print("<h1>" "</h1>");
            if ( $result->num_rows > 0 ) {
            while($row = $result->fetch_assoc()) {
            
                echo "<div class=''>";
    
                echo "</strong><p>" . "</p>" . $row[''] . " " . $row['']; 
                echo "</strong><p>". "</p>" . $row[''];
                echo "</strong><p>" . "</p>" . $row[''];
                echo "</strong><p>" . "</p>" . $row['']; 

                echo "</div>";
                }
            }
        else{
            echo "error";
        }
        $conn->close();
*/
?>
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UT-8">
    <title>Cat Quiz!</title>
    <link rel="stylesheet" href="MainStyle.css">
    <link rel="stylesheet" href="ResetStyle.css">
<style>
    *{
    margin: 15px;
    padding: 0;
    box-sizing: border-box;
    }
    
    label {
        color: blue;
    }
    
    label {
        color: blue;
    }
        
    button {
        padding: 10px;
        font-size: 1.1em;
        border-radius: 10px;
        border-style: none;
        background-color: cornflowerblue;
     }
        
    #result {
        background-color: aliceblue;
        padding: 5px;
        max-width: 50%;
        border-color: navy;
        border-style: solid;
        font-size: 1.1em;
        display: none;
    }
        
    #feedback1, #feedback2, #feedback3, #feedback4 {
        font-style: italic;
        margin: 5px;
    }
    
</style>

<script>
        function checkAns(){
    
            var given1 = document.getElementById('ans1').value;
            var given2 = document.getElementById('ans2').value;
            
            var comment1 = document.getElementById('feedback1');
            var comment2 = document.getElementById('feedback2');
            var comment3 = document.getElementById('feedback3');
            var comment4 = document.getElementById('feedback4');
            
            var target = document.getElementById('result');
            target.innerHTML = "Your result is: " ";
            target.style.display = 'block';
        }
        
    </script>
     
</head>

<body>

    <div class="nav">
    <h1>Cat Quiz!</h1>
        <nav>
            <ul>
            <li><a> href="Index.php">Home</a></li>
            <li><a> href="header.php">Find Your Pet Name!</a></li>
            <li><a> href="">Important Info</a></li>
            <li><a> href="TrendPetNames.php">Trending Pet Names</a></li>
            <li><a> href="contactUs.php">Contact Us</a></li>
            </ul> 
        </nav>
        
    </div>
    
    <br>
    <br>
    <br>
    <table>
    <!-- Question 1 -->
    <label>Question 1</label>
    <br>
    <input type="radio" name="js" id="isTrue" />
    <label style="color:black;"></label>
    <input type="radio" name="js" id="isFalse" />
    <label style="color:black;"></label>
    <span id="feedback1"></span>
    <p></p>
    
    <!-- Question 2 -->
    <label>Question 2</label>
    <br>
    <input type="checkbox" name="js" id="isTrue" value="true" />
    <label style="color:black;">Yes</label>
    <input type="checkbox" name="js" id="isFalse" value="false" />
    <label style="color:black;">No</label>
    <span id="feedback2"></span>
    <p></p>
    
    <!-- Question 3 -->
    <label>Question 3</label>
    <select name="" id="ans1">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
    </select>
    <span id="feedback3"></span>
    <p></p>
    
    <!-- Question 4 -->
   <label>Question 4</label>
        <form method="post" action="">
        <label for=""></label>
        <select name="" id="ans2">
            <option value="" ></option> 
            <option value="" ></option> 
            <option value="" ></option> 
            <option value="" ></option>
        </select>
        <span id="feedback4"></span>
        <p></p>
        </form> 
            
    <div id="container">
    <!-- Check Result button -->
    <button onclick=checkAns()>Evaluate Quiz</button>
    <p id="result">Your result is: </p>         
    </div>
    </table>
    
</body>
</html>
