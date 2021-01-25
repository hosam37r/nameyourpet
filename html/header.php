<?php
    session_start();
?>
<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Name Your Pet!</title>
    <link rel="stylesheet" href="CSS/ResetStyle.css">
    <link rel="stylesheet" href="CSS/MainStyle.css">
    

</head>

<body>
    <section>
    <h1>Name Your Pet</h1>
    <h3>User Sign In</h3>
    <?php
        if(isset($_SESSION["employeeId"])) {
            echo "<form action='includes/logout.inc.php'><button class='login-out'>Log Out</button></form>";
        }
        else {
            echo "<button onclick='displayLoginButton()' class='login-out'>Login</button>";
        }
    ?>
    

    <div id="id01" class="modal">

        <form class="modal-content animate" action="includes/login.inc.php" method="post">

            <div class="container">
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required>

                <label for="pwd"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="pwd" required>

                <button type="submit" name="submit">Login</button>
                <?php 
                    if(isset($_GET["error"])) {
                        if($_GET["error"] ==    "emptyinput") {
                            echo "<p>Fill in all fields</p>";
                        }
                    else if($_GET["error"] == "wronglogin") {
                        echo "<p>Incorrect Username and/or password</p>";
                    }   
                }
                ?>
            </div>

            <div class="container" style="background-color:#f1f1f1">
              <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
              <span class="newHire">First time here? <a href="SignUpPage.php">Click Here</a></span>
            </div>
        </form>
    </div>
    <script>
        function displayLoginButton() {
            document.getElementById("id01").style.display="block";
        }
        // Get the modal
        var modal = document.getElementById('id01');

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    </script>
    
    <nav>
        <ul>
            <li><a href="Index.php">Home</a></li>
            <li><a href="">Find Your Pet Name!</a></li>
            <li><a href="">Important Info</a></li>
            <li><a href="">Trending Pet Names</a></li>
            <li><a href="">About Us</a></li>
        </ul>
    </nav>

    </section>
    
    <div class="wrapper">